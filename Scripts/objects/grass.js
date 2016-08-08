var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Backgrounds object used in the game
     *
     * @export
     * @class Backgrounds
     * @extends {createjs.Bitmap}
     */
    var Grass = (function (_super) {
        __extends(Grass, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Backgrounds.
         *
         * @constructor
         * @param {string} imageString
         */
        function Grass(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Grass.prototype._reset = function () {
            this.x = 0;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Grass.prototype._checkBounds = function () {
            if (this.x <= -1280) {
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
        Grass.prototype.start = function () {
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
        Grass.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Grass;
    }(createjs.Bitmap));
    objects.Grass = Grass;
})(objects || (objects = {}));
//# sourceMappingURL=grass.js.map