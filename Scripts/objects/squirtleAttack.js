var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Spearow
      object used in the game
     *
     * @export
     * @class Spearow
     
     * @extends {createjs.Bitmap}
     */
    var SquirtleAttack = (function (_super) {
        __extends(SquirtleAttack, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Spearow
         .
         *
         * @constructor
         * @param {string} imageString
         */
        function SquirtleAttack(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        Object.defineProperty(SquirtleAttack.prototype, "dy", {
            // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
            get: function () {
                return this._dy;
            },
            set: function (newDy) {
                this._dy = newDy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SquirtleAttack.prototype, "dx", {
            get: function () {
                return this._dx;
            },
            set: function (newDx) {
                this._dx = newDx;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        SquirtleAttack.prototype._reset = function () {
            this._dx = -Math.floor((Math.random() * 8) + 5); // horizontal speed
            this._dy = -Math.floor((Math.random() * 7) - 2); // vertical drift
            // get a random y location
            this.y = Math.floor((Math.random() * (480 - (this.width * 0.5))) + (this.width * 0.5));
            this.x = 640 + this.width;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        SquirtleAttack.prototype._checkBounds = function () {
            if (this.x <= (0 - this.width)) {
                this.image.src = "Assets/images/squirtleAttack.png";
                this._reset();
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        SquirtleAttack.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._reset();
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        SquirtleAttack.prototype.update = function () {
            this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
            this.position.x = this.x;
            this.position.y = this.y;
        };
        return SquirtleAttack;
    }(objects.GameObject));
    objects.SquirtleAttack = SquirtleAttack;
})(objects || (objects = {}));
//# sourceMappingURL=squirtleAttack.js.map