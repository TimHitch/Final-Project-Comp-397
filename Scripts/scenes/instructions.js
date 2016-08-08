var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        /**
         * Creates an instance of Instructions scene.
         *
         */
        function Instructions() {
            _super.call(this);
        }
        /**
         *
         */
        Instructions.prototype.Start = function () {
            var gameInstructions = [];
            var instructionsArray = [
                "You are Ash on his first day of pokemon training.",
                "Ash mistakingly hit a spearow on the head with a pokeball.",
                "    The Spearow got mad and called his friends to attack you and pikahu.",
                "    As you run avoid being hit by the mad Spearows by moving the mouse",
                "If you get hit to many times you will be knocked out",
                "As you dodge from the Spearow attacks",
                "collect the pokeballs to gain points",
            ];
            this._grass = new objects.Grass("background");
            this.addChild(this._grass);
            for (var line = 0; line < instructionsArray.length; line++) {
                gameInstructions[line] = new createjs.Text(instructionsArray[line], "Broadway");
                gameInstructions[line].x = 10;
                gameInstructions[line].y = 20 + (2 * line);
                this.addChild(new objects.Label(instructionsArray[line], "22px", "Broadway", "#E03C18", 300, 40 * line + 40, true));
            }
            // Add Menu Label
            this.addChild(this._instructionsLabel);
            // add the start button
            this._startButton = new objects.Button("startButton", 320, 340, true);
            this.addChild(this._startButton);
            this._returnButton = new objects.Button("returnButton", 320, 440, true);
            this.addChild(this._returnButton);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._returnButton.on("click", this._returnButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Instructions.prototype.Update = function () {
            this._grass.update();
            // scene updates happen here...
        };
        // EVENT HANDLERS ++++++++++++++++
        Instructions.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        Instructions.prototype._returnButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map