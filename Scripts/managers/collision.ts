module managers {
    /**
     * Manages collision detection in the game
     *
     * @export
     * @class Collision
     */
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        /**
         * Check either two objects is colliding
         *
         * @param object1
         * @param object2
         */
        public check(object1:objects.GameObject, object2:objects.GameObject) {
            if (objects.Vector2.distance(object1.position, object2.position)
                <= (object1.halfHeight + object2.halfHeight)) {
                // if Spearow collides with another one
                if (object1.name === "spearow" && object2.name === "spearow") {
                    let tempDx = (<objects.Spearow> object1).dx;
                    let tempDy = (<objects.Spearow> object1).dy;
                    (<objects.Spearow> object1).dx = (<objects.Spearow> object2).dx;
                    (<objects.Spearow> object1).dy = (<objects.Spearow> object2).dy;
                    (<objects.Spearow> object2).dx = tempDx;
                    (<objects.Spearow> object2).dy = tempDy;
                    object1.update();
                    object2.update();
                    if (objects.Vector2.distance(object1.position, object2.position)
                        < (object1.halfHeight + object2.halfHeight)) {
                        if (object1.x > object2.x) object1.x += (object2.width - (object1.x - object2.x) + 1);
                        else object2.x += (object1.width - (object2.x - object1.x) + 1);
                    }
                    
                    // if first object is player
                } else if (object1.name === "Ash") {
                    if (!object2.isColliding) {
                        object2.isColliding = true;

                        // if Ash collides with cloud
                        if (object2.name === "spearow") {
                            core.currentLives -= 1;
                            createjs.Sound.play("baaaa");
                        }
                        if (object2.name === "bulbaAttack") {
                            core.currentLives -= 1;
                            createjs.Sound.play("baaaa");
                        }
                        if (object2.name === "squirtleAttack") {
                            core.currentLives -= 1;
                            createjs.Sound.play("baaaa");
                        }
                        if (object2.name === "charmanderAttack") {
                            core.currentLives -= 1;
                            createjs.Sound.play("baaaa");
                        }
                        if (object2.name === "teamrocket") {
                            core.currentLives -= 1;
                            createjs.Sound.play("baaaa");
                        }
                        if (object2.name === "coffing") {
                            core.currentLives -= 1;
                            createjs.Sound.play("baaaa");
                        }
                        if (object2.name === "snake") {
                            core.currentLives -= 1;
                            createjs.Sound.play("baaaa");
                        }

                        // if Ash collides with island
                        if (object2.name === "pokeball") {
                            // TO-DO: change to asset load
                            (<HTMLImageElement> object2.image).src = "Assets/images/greypokeball.png";
                            core.score += 100;
                            createjs.Sound.play("bleep");
                        }
                         if (object2.name === "bulba") {
                            // TO-DO: change to asset load
                            (<HTMLImageElement> object2.image).src = "Assets/images/greypokeball.png";
                            core.score += 100;
                            createjs.Sound.play("bleep");
                        }
                          if (object2.name === "squirtle") {
                            // TO-DO: change to asset load
                            (<HTMLImageElement> object2.image).src = "Assets/images/greypokeball.png";
                            core.score += 100;
                            createjs.Sound.play("bleep");
                        }
                         if (object2.name === "charmander") {
                            // TO-DO: change to asset load
                            (<HTMLImageElement> object2.image).src = "Assets/images/greypokeball.png";
                            core.score += 100;
                            createjs.Sound.play("bleep");
                        }
                                  if (object2.name === "rare") {
                            // TO-DO: change to asset load
                            (<HTMLImageElement> object2.image).src = "Assets/images/greypokeball.png";
                            core.score += 100;
                            createjs.Sound.play("bleep");
                        }
                                  if (object2.name === "rare2") {
                            // TO-DO: change to asset load
                            (<HTMLImageElement> object2.image).src = "Assets/images/greypokeball.png";
                            core.score += 100;
                            createjs.Sound.play("bleep");
                        }
                                  if (object2.name === "rare3") {
                            // TO-DO: change to asset load
                            (<HTMLImageElement> object2.image).src = "Assets/images/greypokeball.png";
                            core.score += 100;
                            createjs.Sound.play("bleep");
                        }





                    
                    }
                }
            } else if (object1.name === "Ash") {
                object2.isColliding = false;
            }
        }
    }
}