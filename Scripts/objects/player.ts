module objects {
    export class Player extends objects.GameObject {

        private _maxSpeedX : number = 10;
        private _maxSpeedY : number = 10;
        private _velocity : objects.Vector2;
        private _accelerationX : number;
        private _accelerationY : number;
        private _friction : number = -1;
        private _isGrounded : boolean = false;

        constructor(imgString : string) {
            super(atlas, imgString);
            this.start();
        }

        public start() : void {
            this._velocity = new objects.Vector2(0,0);
            this.position = new objects.Vector2(30, 0);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._accelerationX = 0;
            this._accelerationY = 0;
        }

        public update() : void {
            //may take out friction
            this._friction = 0.5;
            
            // AccelerationX affects Velocity.x
            // Gravity affects Velocity.y
            // MaxSpeed caps Velocity.x
            if(Math.abs(this._velocity.x) < this._maxSpeedX) {
                this._velocity.x += this._accelerationX;
            }
            if(Math.abs(this._velocity.y) < this._maxSpeedY) {
                this._velocity.y += this._accelerationY;
            }

            this._velocity.x *= this._friction;
            this.position.x += this._velocity.x;

            this._velocity.y *= this._friction;
            this.position.y += this._velocity.y;

            //console.log("Position" + this.position + " Vel: " + this._velocity + " Acc: " + this._accelerationX);
            super.update();
        }

        public getVelocity() : objects.Vector2 {
            return this._velocity;
        }

        public setVelocity(newVelocity : objects.Vector2) {
            this._velocity = newVelocity;
        }

        public getIsGrounded() : boolean {
            return this._isGrounded;
        }

        public setIsGrounded(b : boolean) : void {
            this._isGrounded = b;
        }

        public moveUp() : void {
            this._accelerationY += -0.05;
        }

        public moveDown() : void {
            this._accelerationY += 0.05;
        }

        public moveLeft() : void {
            this._accelerationX += -0.05;
        }

        public moveRight() : void {
            this._accelerationX += 0.05;
        }

        public resetAcceleration() : void {
            this._accelerationX = 0;
        }
    }
}