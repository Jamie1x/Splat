/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var spriteSheetLoader;
var atlas;
var currentScene;
var scene;
var collision;
// Preload Assets required
var assetData = [
    { id: "GameBg", src: "../../Assets/images/allScene.png" },
    { id: "BG", src: "../../Assets/images/bg.png" },
    { id: "atlas", src: "../../Assets/images/atlas.png" },
    { id: "theme", src: "../../Assets/audio/marioTheme.mp3" },
    { id: "Title", src: "../../Assets/images/title.png" },
    { id: "GameOver", src: "../../Assets/images/gameOver.png" },
    { id: "Instructions", src: "../../Assets/images/Instructions.png" },
    { id: "PlayBtn", src: "../../Assets/images/playBtn.png" },
    { id: "MenuBtn", src: "../../Assets/images/menuBtn.png" },
    { id: "InstructionsBtn", src: "../../Assets/images/instructionsBtn.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    collision = new managers.Collision();
    var atlasData = {
        "images": [
            assets.getResult("atlas")
        ],
        "frames": [
            [0, 350, 59, 30, 0, 0, 0],
            [46, 0, 46, 350, 0, 0, 0],
            [0, 0, 46, 350, 0, 0, 0]
        ],
        "animations": {
            "player": { "frames": [0] },
            "spikes": { "frames": [1] },
            "bloodySpikes": { "frames": [2] }
        },
    };
    atlas = new createjs.SpriteSheet(atlasData);
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            ;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Play();
            console.log("Starting PLAY scene");
            break;
        case config.Scene.GAMEOVER:
            stage.removeAllChildren();
            currentScene = new scenes.GameOver();
            console.log("Starting GAMEOVER scene");
            break;
        case config.Scene.INSTRUCTIONS:
            stage.removeAllChildren();
            currentScene = new scenes.Instructions();
            console.log("Starting INSTRUCTIONS scene");
            break;
        case config.Scene.WINNER:
            stage.removeAllChildren();
            currentScene = new scenes.Winner();
            console.log("Starting WINNER scene");
            break;
    }
}
//# sourceMappingURL=game.js.map