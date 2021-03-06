module scenes {
    export class Play3 extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _grass:objects.Grass;
        private _pokeball:objects.Pokeball;
        private _rare:objects.Rare;
        private _rare2:objects.Rare2;
        private _rare3:objects.Rare3;
        private _teamRocket:objects.TeamRocket[];
        private _coffing:objects.Coffing[];
        private _snake:objects.Snake[];
        private _player:objects.Player;
    //    private _teamRocket:objects.Spearow[];
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
            this._rare = new objects.Rare("rare");
            this.addChild(this._rare);

            this._rare2 = new objects.Rare2("rare2");
            this.addChild(this._rare2);

            this._rare3 = new objects.Rare3("rare3");
            this.addChild(this._rare3);

            // player object
            this._player = new objects.Player("Ash");
            this.addChild(this._player);
            this._themeSound = createjs.Sound.play("pokemon");
            this._themeSound.loop = -1;

            // charged cloud array
            this._teamRocket = new Array<objects.TeamRocket>();
            for (let i = 0; i < 3; i++) {
                this._teamRocket.push(new objects.TeamRocket("teamRocket"));
                this.addChild(this._teamRocket[i]);
            }
            this._coffing = new Array<objects.Coffing>();
            for (let i = 0; i < 3; i++) {
                this._coffing.push(new objects.Coffing("coffing"));
                this.addChild(this._coffing[i]);
            }
            this._snake = new Array<objects.Snake>();
            for (let i = 0; i < 3; i++) {
                this._snake.push(new objects.Snake("snake"));
                this.addChild(this._snake[i]);
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
            this._rare.update();
            this._rare2.update();
            this._rare3.update();


            this._player.update();
            this._collision.check(this._player, this._rare);
            this._collision.check(this._player, this._rare2);
            this._collision.check(this._player, this._rare3);

            this._teamRocket.forEach(spearowid => {
                spearowid.update();
                this._collision.check(this._player, spearowid);
                this._teamRocket.forEach(anotherspearowid => {
                    if (anotherspearowid != spearowid &&
                        spearowid.isColliding === anotherspearowid.isColliding) {
                        this._collision.check(spearowid, anotherspearowid);
                    }
                })
            });
            this._coffing.forEach(spearowid => {
                spearowid.update();
                this._collision.check(this._player, spearowid);
                this._coffing.forEach(anotherspearowid => {
                    if (anotherspearowid != spearowid &&
                        spearowid.isColliding === anotherspearowid.isColliding) {
                        this._collision.check(spearowid, anotherspearowid);
                    }
                })
            });
             this._snake.forEach(spearowid => {
                spearowid.update();
                this._collision.check(this._player, spearowid);
                this._snake.forEach(anotherspearowid => {
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
             if (core.score >= 3000) {
                createjs.Sound.stop();
                createjs.Sound.play("winner");
                core.scene = config.Scene.MENU4;
                core.changeScene();
        }
    }
    
}
    }
