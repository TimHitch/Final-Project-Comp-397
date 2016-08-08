module scenes {
    export class Over extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _grass: objects.Grass;
        private _gameOverLabel: objects.Label;
        private _finalScoreLabel: objects.Label;
        private _restartButton: objects.Button;

        /**
         * Creates an instance of Menu.
         *
         */
        constructor() {
            super();
        }

        /**
         *
         */
        public Start(): void {
            this._grass = new objects.Grass("background");
            this.addChild(this._grass);
            // Add Menu Label
            this._gameOverLabel = new objects.Label(
                "GAME OVER", "40px", "Planjer", "#E03C18",
                320, 140, true
            );
            this.addChild(this._gameOverLabel);

            this._finalScoreLabel = new objects.Label(
                "FINAL SCORE: " + core.score, "40px", "Planjer", "#E03C18",
                320, 240, true
            );
            this.addChild(this._finalScoreLabel);

            // add the start button
            this._restartButton = new objects.Button(
                "restartButton", 320, 440, true
            );
            this.addChild(this._restartButton);

            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            this._grass.update();
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        private _restartButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.currentLives = core.startingLives;
            core.score = 0;
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}