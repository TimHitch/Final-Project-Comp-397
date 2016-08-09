var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play2 = (function (_super) {
        __extends(Play2, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Play2() {
            _super.call(this);
        }
        Play2.prototype._changeSence = function () {
            this._scoreLabel.text = "Score: " + core.score;
        };
        Play2.prototype._updateScoreBoard = function () {
            for (var i = core.startingLives - 1; i > core.currentLives - 1; i--) {
                this._liveIcons[i].visible = false;
            }
        };
        /**
         *
         */
        Play2.prototype.Start = function () {
            // ocean object
            this._grass = new objects.Grass("background");
            this.addChild(this._grass);
            // island object
            this._bulba = new objects.Bulba("bulba");
            this.addChild(this._bulba);
            this._squirtle = new objects.Squirtle("squirtle");
            this.addChild(this._squirtle);
            this._charmander = new objects.Charmander("charmander");
            this.addChild(this._charmander);
            // player object
            this._player = new objects.Player("Ash");
            this.addChild(this._player);
            this._themeSound = createjs.Sound.play("pokemon");
            this._themeSound.loop = -1;
            // charged cloud array
            this._bulbaAttack = new Array();
            for (var i = 0; i < 3; i++) {
                this._bulbaAttack.push(new objects.BulbaAttack("bulbaAttack"));
                this.addChild(this._bulbaAttack[i]);
            }
            this._squirtleAttack = new Array();
            for (var i = 0; i < 3; i++) {
                this._squirtleAttack.push(new objects.SquirtleAttack("squirtleAttack"));
                this.addChild(this._squirtleAttack[i]);
            }
            this._charmanderAttack = new Array();
            for (var i = 0; i < 3; i++) {
                this._charmanderAttack.push(new objects.CharmanderAttack("charmanderAttack"));
                this.addChild(this._charmanderAttack[i]);
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
        Play2.prototype.Update = function () {
            var _this = this;
            this._grass.update();
            this._bulba.update();
            this._squirtle.update();
            this._charmander.update();
            this._player.update();
            this._collision.check(this._player, this._bulba);
            this._collision.check(this._player, this._squirtle);
            this._collision.check(this._player, this._charmander);
            this._bulbaAttack.forEach(function (spearowid) {
                spearowid.update();
                _this._collision.check(_this._player, spearowid);
                _this._bulbaAttack.forEach(function (anotherspearowid) {
                    if (anotherspearowid != spearowid &&
                        spearowid.isColliding === anotherspearowid.isColliding) {
                        _this._collision.check(spearowid, anotherspearowid);
                    }
                });
            });
            this._squirtleAttack.forEach(function (spearowid) {
                spearowid.update();
                _this._collision.check(_this._player, spearowid);
                _this._squirtleAttack.forEach(function (anotherspearowid) {
                    if (anotherspearowid != spearowid &&
                        spearowid.isColliding === anotherspearowid.isColliding) {
                        _this._collision.check(spearowid, anotherspearowid);
                    }
                });
            });
            this._charmanderAttack.forEach(function (spearowid) {
                spearowid.update();
                _this._collision.check(_this._player, spearowid);
                _this._charmanderAttack.forEach(function (anotherspearowid) {
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
            if (core.score >= 1000) {
                createjs.Sound.stop();
                createjs.Sound.play("winner");
                core.scene = config.Scene.MENU3;
                core.changeScene();
            }
        };
        return Play2;
    }(objects.Scene));
    scenes.Play2 = Play2;
})(scenes || (scenes = {}));
//# sourceMappingURL=play2.js.map