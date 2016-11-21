var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this._scrollTrigger = 350;
            this.start();
        }
        Play.prototype.start = function () {
            score = 1000;
            this._bg = new createjs.Bitmap(assets.getResult("GameBg"));
            this._scrollableObjContainer = new createjs.Container();
            this._player = new objects.Player("player");
            this._player.position.y = config.Screen.CENTER_Y;
            this._player.position.x = config.Screen.CENTER_X;
            this._scoreLbl = new createjs.Text("Score: " + score, "50px Times New Roman", "#FFFFFF");
            this._scoreLbl.y = 20;
            this.addChild(this._scoreLbl);
            this._enemies = [];
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(600, config.Screen.HEIGHT + 8)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(800, config.Screen.HEIGHT + 21)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(1000, config.Screen.HEIGHT + 83)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(1200, config.Screen.HEIGHT + 32)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(1400, config.Screen.HEIGHT + 23)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(1600, config.Screen.HEIGHT + 91)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(1800, config.Screen.HEIGHT + 97)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(2000, config.Screen.HEIGHT + 46)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(2200, config.Screen.HEIGHT + 77)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(2400, config.Screen.HEIGHT + 63)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(2600, config.Screen.HEIGHT + 4)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(2800, config.Screen.HEIGHT + 38)));
            this._enemies.push(new objects.Enemy("spikes", new objects.Vector2(3000, config.Screen.HEIGHT + 32)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(600, -8)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(800, -21)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(1000, -83)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(1200, -32)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(1400, -23)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(1600, -91)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(1800, -97)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(2000, -46)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(2200, -77)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(2400, -63)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(2600, -4)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(2800, -38)));
            this._enemies.push(new objects.EnemyTop("spikes", new objects.Vector2(3000, -32)));
            this._scrollableObjContainer.addChild(this._bg);
            this._scrollableObjContainer.addChild(this._player);
            this._scrollableObjContainer.addChild(this._scoreLbl);
            for (var _i = 0, _a = this._enemies; _i < _a.length; _i++) {
                var enemy = _a[_i];
                this._scrollableObjContainer.addChild(enemy);
            }
            this.addChild(this._scrollableObjContainer);
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            //score stops at finish line
            if (this._player.x <= 3071) {
                score--;
            }
            this._scoreLbl.text = "Score: " + score;
            //score follows player, then stops at end
            this._scoreLbl.x = this._player.x - 350;
            if (this._scoreLbl.x >= 3121) {
                this._scoreLbl.x = 3121;
            }
            //player loses when time runs out
            if (score <= 0) {
                scene = config.Scene.GAMEOVER;
                changeScene();
            }
            //collision detection
            this._player.update();
            for (var _i = 0, _a = this._enemies; _i < _a.length; _i++) {
                var enemy = _a[_i];
                enemy.update();
                collision.check(this._player, enemy);
            }
            if (this._player.x > 3900) {
                scene = config.Scene.WINNER;
                changeScene();
            }
            if (this.checkScroll()) {
                this._scrollBGForward(this._player.getVelocity().x);
            }
            if (controls.RIGHT) {
                this._player.moveRight();
            }
            if (controls.LEFT) {
                this._player.resetAccelerationX();
            }
            if (controls.RUN) {
                this._player.run();
            }
            if (!controls.RUN) {
                this._player.resetSpeed();
            }
        };
        Play.prototype._onKeyDown = function (event) {
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
        };
        Play.prototype._onKeyUp = function (event) {
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
        };
        Play.prototype._scrollBGForward = function (speed) {
            if (this._scrollableObjContainer.regX < 3871 - 815)
                this._scrollableObjContainer.regX += speed;
        };
        Play.prototype.checkScroll = function () {
            if (this._player.x >= this._scrollTrigger) {
                return true;
            }
            else {
                return false;
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map