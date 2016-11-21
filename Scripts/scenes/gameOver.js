/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        // Menu Class Contructor
        function GameOver() {
            _super.call(this);
        }
        GameOver.prototype.start = function () {
            //add background
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            this._clamp1 = new objects.EnemyTop("bloodySpikes", new objects.Vector2(config.Screen.CENTER_X, 0));
            this._clamp2 = new objects.Enemy("bloodySpikes", new objects.Vector2(config.Screen.CENTER_X, config.Screen.HEIGHT));
            this.addChild(this._clamp1);
            this.addChild(this._clamp2);
            //add game over text
            this._gameOver = new createjs.Bitmap(assets.getResult("GameOver"));
            this._gameOver.regX = this._gameOver.getBounds().width / 2;
            this._gameOver.regY = this._gameOver.getBounds().height / 2;
            this._gameOver.x = config.Screen.CENTER_X;
            this._gameOver.y = config.Screen.CENTER_Y - 100;
            this.addChild(this._gameOver);
            //add buttons
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._startButtonClick, this);
            this._menuBtn = new objects.Button("MenuBtn", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._menuBtn);
            this._menuBtn.on("click", this._menuButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        GameOver.prototype.update = function () {
            this._clamp1.update();
            this._clamp2.update();
        };
        // Fucntion for when button is pressed
        GameOver.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        };
        GameOver.prototype._menuButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.MENU;
            changeScene();
        };
        return GameOver;
    })(objects.Scene);
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameOver.js.map