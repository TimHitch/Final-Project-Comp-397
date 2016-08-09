var config;
(function (config) {
    /**
     * Enumeration-like class that contains appropriate scene value
     *
     * @export
     * @class Scene
     */
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.PLAY = 1;
        Scene.OVER = 2;
        Scene.INSTRUCTIONS = 3;
        Scene.MENU2 = 4;
        Scene.PLAY2 = 5;
        Scene.MENU3 = 6;
        Scene.PLAY3 = 7;
        return Scene;
    }());
    config.Scene = Scene;
})(config || (config = {}));
//# sourceMappingURL=scene.js.map