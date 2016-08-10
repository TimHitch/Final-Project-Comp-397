module scenes {
    export class Menu4 extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _grass: objects.Grass;
        private _instructionsLabel: objects.Label;
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
                gameInstructions[line].x = 10
                gameInstructions[line].y = 20 + (2 * line);

                this.addChild(new objects.Label(
                    instructionsArray[line], "50px", "Broadway", "#E03C18",
                    300, 40 * line + 40, true));
            }
            this._finalScoreLabel = new objects.Label(
                "SCORE: " + core.score + " "+ "You've Completed lvl 3 Congrats!!!", "30px", "Planjer", "#000000",
                320, 40, true
            );
            this.addChild(this._finalScoreLabel);

       // Add Menu Label
            this.addChild(this._instructionsLabel);

            // add the start button
            

            
            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            this._grass.update();
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        
    }
}