var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(imgString) {
            _super.call(this, atlas, imgString);
            this._maxSpeedX = 5;
            this._maxSpeedY = 5;
            this._friction = 0;
            this._speed = 0.05;
            this._isGrounded = false;
            this.start();
        }
        Player.prototype.start = function () {
            this._velocity = new objects.Vector2(0, 0);
            this.position = new objects.Vector2(30, 0);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._accelerationX = 0;
            this._accelerationY = 0;
        };
        Player.prototype.update = function () {
            //may take out friction
            this._friction = 0.5;
            // AccelerationX affects Velocity.x
            // Gravity affects Velocity.y
            // MaxSpeed caps Velocity.x
            if (Math.abs(this._velocity.x) < this._maxSpeedX) {
                this._velocity.x += this._accelerationX;
            }
            if (Math.abs(this._velocity.y) < this._maxSpeedY) {
                this._velocity.y += this._accelerationY;
            }
            this._velocity.x *= this._friction;
            this.position.x += this._velocity.x;
            this._velocity.y *= this._friction;
            this.position.y += this._velocity.y;
            //console.log("Position" + this.position + " Vel: " + this._velocity + " Acc: " + this._accelerationX);
            _super.prototype.update.call(this);
        };
        Player.prototype.getVelocity = function () {
            return this._velocity;
        };
        Player.prototype.setVelocity = function (newVelocity) {
            this._velocity = newVelocity;
        };
        Player.prototype.moveUp = function () {
            this._accelerationY += -this._speed;
        };
        Player.prototype.moveDown = function () {
            if (!this._isGrounded) {
                this._accelerationY += this._speed;
            }
        };
        Player.prototype.moveLeft = function () {
            this._accelerationX += -this._speed;
        };
        Player.prototype.moveRight = function () {
            this._accelerationX += this._speed;
        };
        Player.prototype.run = function () {
            this._maxSpeedX = 10;
            this._maxSpeedY = 10;
            this._speed = 0.5;
        };
        Player.prototype.resetSpeed = function () {
            this._maxSpeedX = 5;
            this._maxSpeedY = 5;
            this._speed = 0.05;
        };
        Player.prototype.resetAccelerationX = function () {
            this._accelerationX = 0;
        };
        Player.prototype.resetAccelerationY = function () {
            this._accelerationY = 0;
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map