var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play3 = (function (_super) {
        __extends(Play3, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Play3() {
            _super.call(this);
        }
        Play3.prototype._changeSence = function () {
            this._scoreLabel.text = "Score: " + core.score;
        };
        Play3.prototype._updateScoreBoard = function () {
            for (var i = core.startingLives - 1; i > core.currentLives - 1; i--) {
                this._liveIcons[i].visible = false;
            }
        };
        /**
         *
         */
        Play3.prototype.Start = function () {
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
            this._teamRocket = new Array();
            for (var i = 0; i < 3; i++) {
                this._teamRocket.push(new objects.TeamRocket("teamRocket"));
                this.addChild(this._teamRocket[i]);
            }
            this._coffing = new Array();
            for (var i = 0; i < 3; i++) {
                this._coffing.push(new objects.Coffing("coffing"));
                this.addChild(this._coffing[i]);
            }
            this._snake = new Array();
            for (var i = 0; i < 3; i++) {
                this._snake.push(new objects.Snake("snake"));
                this.addChild(this._snake[i]);
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
        Play3.prototype.Update = function () {
            var _this = this;
            this._grass.update();
            this._rare.update();
            this._rare2.update();
            this._rare3.update();
            this._player.update();
            this._collision.check(this._player, this._rare);
            this._collision.check(this._player, this._rare2);
            this._collision.check(this._player, this._rare3);
            this._teamRocket.forEach(function (spearowid) {
                spearowid.update();
                _this._collision.check(_this._player, spearowid);
                _this._teamRocket.forEach(function (anotherspearowid) {
                    if (anotherspearowid != spearowid &&
                        spearowid.isColliding === anotherspearowid.isColliding) {
                        _this._collision.check(spearowid, anotherspearowid);
                    }
                });
            });
            this._coffing.forEach(function (spearowid) {
                spearowid.update();
                _this._collision.check(_this._player, spearowid);
                _this._coffing.forEach(function (anotherspearowid) {
                    if (anotherspearowid != spearowid &&
                        spearowid.isColliding === anotherspearowid.isColliding) {
                        _this._collision.check(spearowid, anotherspearowid);
                    }
                });
            });
            this._snake.forEach(function (spearowid) {
                spearowid.update();
                _this._collision.check(_this._player, spearowid);
                _this._snake.forEach(function (anotherspearowid) {
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
            if (core.score >= 2400) {
                createjs.Sound.stop();
                createjs.Sound.play("winner");
                core.scene = config.Scene.MENU3;
                core.changeScene();
            }
        };
        return Play3;
    }(objects.Scene));
    scenes.Play3 = Play3;
})(scenes || (scenes = {}));
//# sourceMappingURL=play3.js.map