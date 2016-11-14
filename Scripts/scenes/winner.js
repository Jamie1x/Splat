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
    var Winner = (function (_super) {
        __extends(Winner, _super);
        // Menu Class Contructor
        function Winner() {
            _super.call(this);
        }
        Winner.prototype.start = function () {
            //add background
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            //add game over text
            this._winner = new createjs.Bitmap(assets.getResult("Winner"));
            this._winner.regX = this._winner.getBounds().width / 2;
            this._winner.regY = this._winner.getBounds().height / 2;
            this._winner.x = config.Screen.CENTER_X;
            this._winner.y = config.Screen.CENTER_Y - 100;
            this.addChild(this._winner);
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
        Winner.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        Winner.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        };
        Winner.prototype._menuButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Winner;
    })(objects.Scene);
    scenes.Winner = Winner;
})(scenes || (scenes = {}));
//# sourceMappingURL=winner.js.map