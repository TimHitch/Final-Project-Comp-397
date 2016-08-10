var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu4 = (function (_super) {
        __extends(Menu4, _super);
        /**
         * Creates an instance of Instructions scene.
         *
         */
        function Menu4() {
            _super.call(this);
        }
        /**
         *
         */
        Menu4.prototype.Start = function () {
            var gameInstructions = [];
            var instructionsArray = [
                "      ",
                "          ",
                "You are now ",
                "            ",
                "A Pokemon Master!!",
                "             ",
                "Congratulations",
            ];
            this._grass = new objects.Grass("background");
            this.addChild(this._grass);
            for (var line = 0; line < instructionsArray.length; line++) {
                gameInstructions[line] = new createjs.Text(instructionsArray[line], "Broadway");
                gameInstructions[line].x = 10;
                gameInstructions[line].y = 20 + (2 * line);
                this.addChild(new objects.Label(instructionsArray[line], "50px", "Broadway", "#E03C18", 300, 40 * line + 40, true));
            }
            this._finalScoreLabel = new objects.Label("SCORE: " + core.score + " " + "You've Completed lvl 3 Congrats!!!", "30px", "Planjer", "#000000", 320, 40, true);
            this.addChild(this._finalScoreLabel);
            // Add Menu Label
            this.addChild(this._instructionsLabel);
            // add the start button
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Menu4.prototype.Update = function () {
            this._grass.update();
            // scene updates happen here...
        };
        return Menu4;
    }(objects.Scene));
    scenes.Menu4 = Menu4;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu4.js.map