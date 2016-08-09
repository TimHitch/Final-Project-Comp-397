module scenes {
    export class Menu3 extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _grass: objects.Grass;
        private _instructionsLabel: objects.Label;
        private _startButton: objects.Button;
        private _returnButton: objects.Button;
        private _finalScoreLabel: objects.Label;
    
        /**
         * Creates an instance of Instructions scene.
         *
         */
        constructor() {
            super();
        }

        /**
         *
         */
        public Start(): void {


            let gameInstructions = [];
            let instructionsArray = [
                "",
                "Now that you have enough pokeballs its time to catch em all.",
                "Collect as many pokemon as you can but watch out for their attacks",
                "Avoid being hit by pokemon attacks by moving the mouse",
                "If you get hit to many times you will be knocked out",
                "As you dodge from the pokemon attacks capture as many pokemon", 
                "as you can to gain points to procced to the final lvl",
                
            ];
            this._grass = new objects.Grass("background");
            this.addChild(this._grass);
            for (var line = 0; line < instructionsArray.length; line++) {

                gameInstructions[line] = new createjs.Text(instructionsArray[line], "Broadway");
                gameInstructions[line].x = 10
                gameInstructions[line].y = 20 + (2 * line);

                this.addChild(new objects.Label(
                    instructionsArray[line], "22px", "Broadway", "#E03C18",
                    300, 40 * line + 40, true));
            }
            this._finalScoreLabel = new objects.Label(
                "SCORE: " + core.score + " "+ "You've Completed lvl 1 Congrats!!!", "30px", "Planjer", "#000000",
                320, 40, true
            );
            this.addChild(this._finalScoreLabel);

            // Add Menu Label
            this.addChild(this._instructionsLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton", 320, 340, true
            );
            this.addChild(this._startButton);

            this._returnButton = new objects.Button(
                "returnButton", 320, 440, true
            );
            this.addChild(this._returnButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._returnButton.on("click", this._returnButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            this._grass.update();
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.PLAY2;
            core.changeScene();
        }
        private _returnButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}