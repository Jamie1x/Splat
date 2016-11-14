module objects {
    export class Player extends objects.GameObject {

        private _maxSpeedX: number = 5;
        private _maxSpeedY: number = 5;
        private _velocity: objects.Vector2;
        private _accelerationX: number;
        private _accelerationY: number;
        private _friction: number = 0;
        private _speed: number = 0.05;
        public _isGrounded: boolean = false;
        //public _isRoofed: boolean = false;

        constructor(imgString: string) {
            super(atlas, imgString);
            this.start();
        }

        public start(): void {
            this._velocity = new objects.Vector2(0, 0);
            this.position = new objects.Vector2(30, 0);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._accelerationX = 0;
            this._accelerationY = 0;
        }

        public update(): void {
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
            super.update();
        }

        public getVelocity(): objects.Vector2 {
            return this._velocity;
        }

        public setVelocity(newVelocity: objects.Vector2) {
            this._velocity = newVelocity;
        }

        public moveUp(): void {
            /*if (!this._isRoofed) {
                console.log("up");
                
            }*/
            this._accelerationY += -this._speed;
        }

        public moveDown(): void {
            if (!this._isGrounded) {
                console.log("down");
                this._accelerationY += this._speed;
            }
        }

        public moveLeft(): void {
            this._accelerationX += -this._speed;
        }

        public moveRight(): void {
            this._accelerationX += this._speed;
        }

        public run(): void {
            this._maxSpeedX = 10;
            this._maxSpeedY = 10;
            this._speed = 0.5;
        }

        public resetSpeed(): void {
            this._maxSpeedX = 5;
            this._maxSpeedY = 5;
            this._speed = 0.05;
        }

        public resetAccelerationX(): void {
            this._accelerationX = 0;
        }

        public resetAccelerationY(): void {
            this._accelerationY = 0;
        }
    }
}