var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu3 = (function (_super) {
        __extends(Menu3, _super);
        /**
         * Creates an instance of Instructions scene.
         *
         */
        function Menu3() {
            _super.call(this);
        }
        /**
         *
         */
        Menu3.prototype.Start = function () {
            var gameInstructions = [];
            var instructionsArray = [
                "                ",
                "                ",
                "You are one step away from becoming a Pokemon Master!.",
                "Team Rocket has broke into the local pokemon center.",
                "and is trying to steal the rare pokemon",
                "Avoid being hit by Team rocket and their pokemon by moving",
                "the mouse. If you get hit to many times you will be knocked out",
                "As you dodge Team Rockets attacks save as many pokemon",
                "as you can to gain points to become a Pokemon Master",
            ];
            this._grass = new objects.Grass("background");
            this.addChild(this._grass);
            for (var line = 0; line < instructionsArray.length; line++) {
                gameInstructions[line] = new createjs.Text(instructionsArray[line], "Broadway");
                gameInstructions[line].x = 10;
                gameInstructions[line].y = 20 + (2 * line);
                this.addChild(new objects.Label(instructionsArray[line], "22px", "Broadway", "#E03C18", 300, 40 * line + 40, true));
            }
            this._finalScoreLabel = new objects.Label("SCORE: " + core.score + " " + "You've Completed lvl 2 Congrats!!!", "30px", "Planjer", "#000000", 320, 40, true);
            this.addChild(this._finalScoreLabel);
            // Add Menu Label
            this.addChild(this._instructionsLabel);
            // add the start button
            this._startButton = new objects.Button("startButton", 320, 440, true);
            this.addChild(this._startButton);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Menu3.prototype.Update = function () {
            this._grass.update();
            // scene updates happen here...
        };
        // EVENT HANDLERS ++++++++++++++++
        Menu3.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.PLAY3;
            core.changeScene();
        };
        return Menu3;
    }(objects.Scene));
    scenes.Menu3 = Menu3;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu3.js.map