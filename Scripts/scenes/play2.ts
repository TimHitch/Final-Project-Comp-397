module scenes {
    export class Play2 extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _grass:objects.Grass;
        private _pokeball:objects.Pokeball;
        private _player:objects.Player;
        private _spearow:objects.Spearow[];
        private _collision:managers.Collision;
        private _scoreLabel:objects.Label;
        private _liveIcons:createjs.Bitmap[];
        private _themeSound:createjs.AbstractSoundInstance;

    
        

        /**
         * Creates an instance of Menu.
         *
         */
        constructor() {
            super();
        }
      private _changeSence() {
        this._scoreLabel.text = "Score: " + core.score;
    }


        private _updateScoreBoard() {
            for (let i = core.startingLives - 1; i > core.currentLives - 1; i--) {
             this._liveIcons[i].visible = false;
           }
        
          
       }

        /**
         *
         */
        public Start():void {
            // ocean object
            this._grass = new objects.Grass("background");
            this.addChild(this._grass);

            // island object
            this._pokeball = new objects.Pokeball("Pokeball");
            this.addChild(this._pokeball);

            // player object
            this._player = new objects.Player("Ash");
            this.addChild(this._player);
            this._themeSound = createjs.Sound.play("pokemon");
            this._themeSound.loop = -1;

            // charged cloud array
            this._spearow = new Array<objects.Spearow>();
            for (let i = 0; i < 3; i++) {
                this._spearow.push(new objects.Spearow("spearow"));
                this.addChild(this._spearow[i]);
            }

            // include a collision managers
            this._collision = new managers.Collision();

            // lives array
            this._liveIcons = new Array<createjs.Bitmap>();
            for (let i = 0; i < core.startingLives; i++) {
                this._liveIcons.push(new createjs.Bitmap(core.assets.getResult("live")));
                this._liveIcons[i].x = 10 + i * this._liveIcons[0].getBounds().width;
                this._liveIcons[i].y = 5;
                this.addChild(this._liveIcons[i]);
            }

            // add core label
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Planjer", "#E03C18", 450, 5, false);
            this._scoreLabel.textAlign = "center";
            this.addChild(this._scoreLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            this._grass.update();
            this._pokeball.update();
            this._player.update();
            this._collision.check(this._player, this._pokeball);
            

            this._spearow.forEach(spearowid => {
                spearowid.update();
                this._collision.check(this._player, spearowid);
                this._spearow.forEach(anotherspearowid => {
                    if (anotherspearowid != spearowid &&
                        spearowid.isColliding === anotherspearowid.isColliding) {
                        this._collision.check(spearowid, anotherspearowid);
                    }
                })
            });

            this._updateScoreBoard();

            if (core.currentLives < 1) {
                createjs.Sound.stop();
                createjs.Sound.play("over");
                core.scene = config.Scene.OVER;
                core.changeScene();
            }

            this._changeSence();
             if (core.score >= 500) {
                createjs.Sound.stop();
                createjs.Sound.play("");
                core.scene = config.Scene.MENU3;
                core.changeScene();
        }
    }
    
}
    }
