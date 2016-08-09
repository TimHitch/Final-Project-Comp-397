var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Pokeball object used in the game
     *
     * @export
     * @class Pokeball
     * @extends {createjs.Bitmap}
     */
    var Pokeball = (function (_super) {
        __extends(Pokeball, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Pokeball.
         *
         * @constructor
         * @param {string} imageString
         */
        function Pokeball(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Pokeball.prototype._reset = function () {
            this.y = Math.floor((Math.random() * (480 - (this.width * 1))) + (this.width * 0.5));
            // get a random x location
            this.x = 640 + this.width;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Pokeball.prototype._checkBounds = function () {
            if (this.x <= (0 - this.width)) {
                // TO-DO: change to asset load
                this.image.src = "Assets/images/pokeball.png";
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
        Pokeball.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._reset();
            this._dx = -5; // 5px per frame down
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Pokeball.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
            this.position.x = this.x;
            this.position.y = this.y;
        };
        return Pokeball;
    }(objects.GameObject));
    objects.Pokeball = Pokeball;
})(objects || (objects = {}));
//# sourceMappingURL=pokeball.js.map