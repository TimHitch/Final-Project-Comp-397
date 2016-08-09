/// <reference path="_reference.ts"/>


namespace core {

    // Variable Declarations

    // declare a reference to the Preloader
    export let assets:createjs.LoadQueue;
    // make a reference to the canvas element
    let canvas:HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage:createjs.Stage;

    // score, startingLives and currentLives variables
    export let score:number = 0;
    // export let highScore:number = 0;
    export let startingLives:number = 5;
    export let currentLives:number = startingLives;
    
    let startButton:objects.Button; // reference to our button class

    // declare scene variables
    let currentScene:objects.Scene;
    export let scene:number;

    let menu:scenes.Menu;
    let over:scenes.Over;
    let play:scenes.Play;
    let instructions:scenes.Instructions;
    let menu2:scenes.Menu2;
    let play2:scenes.Play2;
    let menu3:scenes.Menu3;
  //  let play3:scenes.Play3;


    // asset manifest for images and sounds
    let assetData:objects.Asset[] = [
        {id: "startButton", src: "Assets/images/startButton.png"},
        {id: "instructionsButton", src: "Assets/images/instructionsButton.png"},
        {id: "restartButton", src: "Assets/images/restartButton.png"},
        {id: "returnButton", src: "Assets/images/returnButton.png"},
        {id: "Pokeball", src: "Assets/images/pokeball.png"},
        {id: "greypokeball", src: "Assets/images/greypokeball.png"},
        {id: "Ash", src: "Assets/images/TrainerAsh.png"},
        {id: "spearow", src: "Assets/images/spearow.png"},
        {id: "background", src: "Assets/images/background.png"},
        {id: "live", src: "Assets/images/live.png"},
        {id: "baaaa", src: "Assets/audio/baaaa.wav"},
        {id: "bleep", src: "Assets/audio/bleep.wav"},
        {id: "pokemon", src: "Assets/audio/pokemon.mp3"},
        {id: "over", src: "Assets/audio/over.mp3"}
    ];

    /**
     * This method preloads assets for the game
     *
     * @method preload
     * @returns {void}
     */
    function preload():void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }


    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init():void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event

        // setup the default scene
        scene = config.Scene.MENU;
        changeScene();
    }

    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event:createjs.Event):void {

        // call the scenes's update
        currentScene.Update();

        stage.update(); // refreshes the stage
    }

    /**
     * Changes current scene
     *
     * @method changeScene
     * @returns {void}
     */
    export function changeScene():void {
        //Launch Various Scenes
        switch (scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
             // Show the MENU2 Scene
            case config.Scene.MENU2:
                stage.removeAllChildren();
                menu2 = new scenes.Menu2();
                currentScene = menu2;
                break;
            // Show the PLAY2 Scene
            case config.Scene.PLAY2:
                stage.removeAllChildren();
                play2 = new scenes.Play2();
                currentScene = play2;
                break;
            // Show the MENU3 Scene
            case config.Scene.MENU2:
                stage.removeAllChildren();
                menu3 = new scenes.Menu3();
                currentScene = menu3;
                break;
            // Shot the INSTRUCTIONS Scene
            case config.Scene.INSTRUCTIONS:
                stage.removeAllChildren();
                instructions = new scenes.Instructions();
                currentScene = instructions;
                break;
        }
    }


    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++