//code same as enemy script.... but upside down

module objects {
    export class EnemyTop extends objects.GameObject {

        // public variables
        public name: string;
        public width: number;
        public height: number;
        public center: objects.Vector2;
        public _isClosing: boolean = false;

        constructor(imageString: string, defaultPosition: objects.Vector2) {
            super(atlas, imageString);
            this.x = defaultPosition.x;
            this.y = defaultPosition.y;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.rotation = 180;
        }

        public update(): void {
            if (this._isClosing) {
                this.setTransform(this.x, this.y += 20, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            } else {
                this.setTransform(this.x, this.y -= 3, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);                
            }

            if(this.y >= config.Screen.CENTER_Y / 2 - 25){
                this._isClosing = false;
            }
            if(this.y <= -100){
                this._isClosing = true;
            }
        }

        public setPosition(pos: objects.Vector2): void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition(): objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }
    }
}