var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Play() {
            _super.call(this);
        }
        Play.prototype._changeSence = function () {
            this._scoreLabel.text = "Score: " + core.score;
        };
        Play.prototype._updateScoreBoard = function () {
            for (var i = core.startingLives - 1; i > core.currentLives - 1; i--) {
                this._liveIcons[i].visible = false;
            }
        };
        /**
         *
         */
        Play.prototype.Start = function () {
            // ocean object
            this._grass = new objects.Grass("background");
            this.addChild(this._grass);
            // island object
            this._pokeball = new objects.Pokeball("pokeball");
            this.addChild(this._pokeball);
            // player object
            this._player = new objects.Player("Ash");
            this.addChild(this._player);
            this._themeSound = createjs.Sound.play("pokemon");
            this._themeSound.loop = -1;
            // charged cloud array
            this._spearow = new Array();
            for (var i = 0; i < 3; i++) {
                this._spearow.push(new objects.Spearow("spearow"));
                this.addChild(this._spearow[i]);
            }
            // include a collision managers
            this._collision = new managers.Collision();
            // lives array
            this._liveIcons = new Array();
            for (var i = 0; i < core.startingLives; i++) {
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
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._grass.update();
            this._pokeball.update();
            this._player.update();
            this._collision.check(this._player, this._pokeball);
            this._spearow.forEach(function (spearowid) {
                spearowid.update();
                _this._collision.check(_this._player, spearowid);
                _this._spearow.forEach(function (anotherspearowid) {
                    if (anotherspearowid != spearowid &&
                        spearowid.isColliding === anotherspearowid.isColliding) {
                        _this._collision.check(spearowid, anotherspearowid);
                    }
                });
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
                createjs.Sound.play("winnner");
                core.scene = config.Scene.MENU2;
                core.changeScene();
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map