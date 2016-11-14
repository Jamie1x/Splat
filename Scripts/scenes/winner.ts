/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Winner extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playBtn : objects.Button;
        private _menuBtn: objects.Button;
        private _bg: createjs.Bitmap;
        private _winner: createjs.Bitmap;
        private _scoreLbl: createjs.Text;
        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
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
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        }

        private _menuButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}