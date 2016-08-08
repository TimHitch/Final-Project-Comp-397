/// <reference path="_reference.ts"/>
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    // score, startingLives and currentLives variables
    core.score = 0;
    // export let highScore:number = 0;
    core.startingLives = 5;
    core.currentLives = core.startingLives;
    var startButton; // reference to our button class
    // declare scene variables
    var currentScene;
    var menu;
    var over;
    var play;
    var instructions;
    // asset manifest for images and sounds
    var assetData = [
        { id: "startButton", src: "Assets/images/startButton.png" },
        { id: "instructionsButton", src: "Assets/images/instructionsButton.png" },
        { id: "restartButton", src: "Assets/images/restartButton.png" },
        { id: "returnButton", src: "Assets/images/returnButton.png" },
        { id: "Pokeball", src: "Assets/images/pokeball.png" },
        { id: "greypokeball", src: "Assets/images/greypokeball.png" },
        { id: "Ash", src: "Assets/images/TrainerAsh.png" },
        { id: "spearow", src: "Assets/images/spearow.png" },
        { id: "background", src: "Assets/images/background.png" },
        { id: "live", src: "Assets/images/live.png" },
        { id: "baaaa", src: "Assets/audio/baaaa.wav" },
        { id: "bleep", src: "Assets/audio/bleep.wav" },
        { id: "pokemon", src: "Assets/audio/pokemon.mp3" },
        { id: "over", src: "Assets/audio/over.mp3" }
    ];
    /**
     * This method preloads assets for the game
     *
     * @method preload
     * @returns {void}
     */
    function preload() {
        core.assets = new createjs.LoadQueue(); // instantiates the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init() {
        core.stage = new createjs.Stage(canvas); // instatiate the stage container
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
        // setup the default scene
        core.scene = config.Scene.MENU;
        changeScene();
    }
    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event) {
        // call the scenes's update
        currentScene.Update();
        core.stage.update(); // refreshes the stage
    }
    /**
     * Changes current scene
     *
     * @method changeScene
     * @returns {void}
     */
    function changeScene() {
        //Launch Various Scenes
        switch (core.scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
            // Shot the INSTRUCTIONS Scene
            case config.Scene.INSTRUCTIONS:
                core.stage.removeAllChildren();
                instructions = new scenes.Instructions();
                currentScene = instructions;
                break;
        }
    }
    core.changeScene = changeScene;
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=game.js.map