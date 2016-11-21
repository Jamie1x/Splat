module objects {
    export class Player extends objects.GameObject {

        private _maxSpeedX: number = 5;
        private _velocity: objects.Vector2;
        private _accelerationX: number;
        private _friction: number = 0;
        private _speed: number = 0.2;

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
        }

        public update(): void {
            //friction
            this._friction = 0.5;

            // AccelerationX affects Velocity.x
            // MaxSpeed caps Velocity.x
            if (Math.abs(this._velocity.x) < this._maxSpeedX) {
                this._velocity.x += this._accelerationX;
            }

            this._velocity.x *= this._friction;
            this.position.x += this._velocity.x;

            super.update();
        }

        public getVelocity(): objects.Vector2 {
            return this._velocity;
        }

        public setVelocity(newVelocity: objects.Vector2) {
            this._velocity = newVelocity;
        }

        public moveLeft(): void {
            this._accelerationX += -this._speed;
        }

        public moveRight(): void {
            this._accelerationX += this._speed;
        }
        //increase speed and resets it
        public run(): void {
            this._maxSpeedX = 10;
            this._speed = 0.6;
        }
        public resetSpeed(): void {
            this._maxSpeedX = 5;
            this._speed = 0.2;

            if (Math.abs(this._velocity.x) > this._maxSpeedX) {
                this._velocity.x = this._maxSpeedX;
            }
        }

        public resetAccelerationX(): void {
            this._accelerationX = 0;
        }
    }
}