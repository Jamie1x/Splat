var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString, defaultPosition) {
            _super.call(this, atlas, imageString);
            this._isClosing = false;
            this.x = defaultPosition.x;
            this.y = defaultPosition.y;
        }
        Enemy.prototype.update = function () {
            if (this._isClosing) {
                this.setTransform(this.x, this.y -= 20, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            }
            else {
                this.setTransform(this.x, this.y += 3, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            }
            if (this.y <= config.Screen.CENTER_Y) {
                this._isClosing = false;
            }
            if (this.y >= config.Screen.HEIGHT - 40) {
                this._isClosing = true;
            }
        };
        Enemy.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map