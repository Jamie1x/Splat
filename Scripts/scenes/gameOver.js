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
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        GameOver.prototype.update = function () {
        };
        GameOver.prototype._playBtnClick = function (event) {
            console.log("PRINT");
            scene = config.Scene.GAME;
            changeScene();
        };
        return GameOver;
    })(objects.Scene);
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameOver.js.map