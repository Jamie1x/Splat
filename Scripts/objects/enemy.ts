module objects {
    export class Enemy extends objects.GameObject {

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string, defaultPosition : objects.Vector2) {
            super(atlas, imageString);
            this.position.x = defaultPosition.x;
            this.position.y = defaultPosition.y;
        }

        public update() : void {
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        public clamp() : void {
        }

        public open() : void {
        }
    }
}