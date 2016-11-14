module scenes {
    export class Play extends objects.Scene {

        private _bg: createjs.Bitmap;

        //private _ground: createjs.Bitmap;
        private _player: objects.Player;

        private _enemies: objects.Enemy[];
        private _scrollableObjContainer: createjs.Container;

        private _scrollTrigger: number = 350;

        constructor() {
            super();
            this.start();
        }

        public start(): void {
            this._bg = new createjs.Bitmap(assets.getResult("GameBg"));
            this._scrollableObjContainer = new createjs.Container();
            this._player = new objects.Player("player");
            this._player.position.y = config.Screen.CENTER_Y;
            this._player.position.x = config.Screen.CENTER_X;

            this._enemies = [];
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(500, config.Screen.HEIGHT - 40)));

            this._scrollableObjContainer.addChild(this._bg);
            this._scrollableObjContainer.addChild(this._player);
            //this._scrollableObjContainer.addChild(this._ground);
            for (let enemy of this._enemies) {
                this._scrollableObjContainer.addChild(enemy);
            }

            //createjs.Sound.play("theme",0,0,0,1000);

            //this._ground.y = 538;

            this.addChild(this._scrollableObjContainer);

            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;

            stage.addChild(this);
        }

        public update(): void {

            this._player.update();
            for(let enemy of this._enemies) {
                enemy.update();
            }

            if (this.checkScroll()) {
                this._scrollBGForward(this._player.getVelocity().x);
            }

            //for border
            //this._checkPlayerWithFloor();

            if (controls.UP) {
                this._player.moveUp();
            }
            if (controls.DOWN) {
                this._player.moveDown();
            }

            if (controls.LEFT) {
                this._player.moveLeft();
            }
            if (controls.RIGHT) {
                this._player.moveRight();
            }

            if (controls.RUN) {
                this._player.run();
            }

            if (!controls.RIGHT && !controls.LEFT) {
                this._player.resetAccelerationX();
            }
            if (!controls.UP && !controls.DOWN) {
                this._player.resetAccelerationY();
            }

            if (!controls.RUN) {
                this._player.resetSpeed();
            }
        }

        private _onKeyDown(event: KeyboardEvent): void {
            switch (event.keyCode) {
                case keys.W:
                    //console.log("W key pressed");
                    controls.UP = true;
                    break;
                case keys.S:
                    //console.log("S key pressed");
                    controls.DOWN = true;
                    break;
                case keys.A:
                    //console.log("A key pressed");
                    controls.LEFT = true;
                    break;
                case keys.D:
                    //console.log("D key pressed");
                    controls.RIGHT = true;
                    break;
                case keys.SPACE:
                    controls.RUN = true;
                    break;
            }
        }

        private _onKeyUp(event: KeyboardEvent): void {
            switch (event.keyCode) {
                case keys.W:
                    controls.UP = false;
                    break;
                case keys.S:
                    controls.DOWN = false;
                    break;
                case keys.A:
                    controls.LEFT = false;
                    break;
                case keys.D:
                    controls.RIGHT = false;
                    break;
                case keys.SPACE:
                    controls.RUN = false;
                    break;
            }
        }

        private _scrollBGForward(speed: number): void {
            if (this._scrollableObjContainer.regX < 3071 - 815)
                this._scrollableObjContainer.regX += speed;
        }

        //may use for border
        private _checkPlayerWithFloor(): void {
            //check floor
            if (this._player.y > config.Screen.HEIGHT - 10) {
                console.log("HIT GROUND");
                this._player._isGrounded = true;
                this._player.y = config.Screen.HEIGHT - 11;
                this._player.setVelocity(new objects.Vector2(0, 0));
                this._player.resetAccelerationY();
            }
            else {
                this._player._isGrounded = false;
            }

            //check ceiling
            /*if (this._player.y < 10) {
                console.log("HIT ROOF");
                this._player._isRoofed = true;
                this._player.y = 15;
                this._player.setVelocity(new objects.Vector2(0, 0));
                this._player.resetAccelerationY();
            }*/
        }

        private checkScroll(): boolean {
            if (this._player.x >= this._scrollTrigger) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}