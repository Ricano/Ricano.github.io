var World = Matter.World;
var Body = Matter.Body;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;
var Composites = Matter.Composites;
var Engine = Matter.Engine;
var Events = Matter.Events;
var Render = Matter.Render;
var Query = Matter.Query;
var Bounds = Matter.Bounds;
var Vector = Matter.Vector;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;


var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;


const COLORS = {
    "GREEN": "#38A544",
    "YELLOW": "#E8D957",
    "VIOLET": "#B8A1C7",
    "DARK-BLUE": "#314E8B",
    "BLUE": "#0077A5",
    "BLACK": "#262629",
    "RED": "#D8333A",
    "PINK": "#E4718A",
    "ORANGE": "#FA8A00"
}

//var margin = 10;
let walls;

let dimensions

let cup;

let numberBallsInsideMachine;

let loadButton, transformButton
let numberBallInsideMachine = 4

let leftPlat, rightPlat;
let platDim = {}



var newt, circle2, render, plat2, plat3, plat4, stick1, stick2, ball1, machine1, mouse, mouseConstraint
var balls = []

var domino = []
// const XS = {
//     NEWT: {
//         X: w / 2 - 5 * w / 50,
//         Y: 50,
//         NUMBER: 5,
//         SIZE: w / 50,
//         LENGHT: w / 8
//     },
//     PLAT1: {
//         X: w / 5,
//         Y: h / 4,
//         WIDTH: w / 2.5,
//         HEIGHT: h / 100,
//         OPTIONS: {
//             angle: 0.05,
//             isStatic: true
//         }
//     },
//     PLAT2: {
//         X: w - w / 5,
//         Y: h / 4,
//         WIDTH: w / 2.5,
//         HEIGHT: h / 100,
//         OPTIONS: {
//             angle: -0.05,
//             isStatic: true
//         }
//     },
//     STICK1: {
//         X: 260,
//         Y: 60,
//         WIDTH: 40,
//         HEIGHT: 6,
//         OPTIONS: {
//             restitution: 0.6,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 0.01,
//             density: 5
//         }
//     },

//     STICK2: {
//         X: 340,
//         Y: 120,
//         WIDTH: 6,
//         HEIGHT: 40,
//         OPTIONS: {
//             restitution: 0.6,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 1,
//             density: 1
//         }
//     },
//     STICK3: {
//         X: 340,
//         Y: 295,
//         WIDTH: 10,
//         HEIGHT: 40,
//         OPTIONS: {
//             restitution: 0.1,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 1,
//             density: 3,
//             isStatic: true

//         }
//     },
//     STICK4: {
//         X: 250,
//         Y: 294,
//         WIDTH: 10,
//         HEIGHT: 40,
//         OPTIONS: {
//             restitution: 0.1,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 0.5,
//             density: 1,
//             isStatic: false
//         }
//     },
//     STICK5: {
//         X: 320,
//         Y: 260,
//         WIDTH: 60,
//         HEIGHT: 6,
//         OPTIONS: {
//             restitution: 0.1,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 1,
//             density: 3
//         }
//     },
//     PLAT3: {
//         X: 130,
//         Y: 270,
//         WIDTH: 180,
//         HEIGHT: 10,
//         OPTIONS: {
//             restitution: 1,
//             frictionStatic: 0,
//             friction: 0.9,
//             frictionAir: 0,
//             density: 1,
//             isStatic: true,
//             angle: 0
//         }
//     },
//     PLAT4: {
//         X: 190,
//         Y: 200,
//         WIDTH: 250,
//         HEIGHT: 10,
//         OPTIONS: {
//             restitution: 1,
//             frictionStatic: 0,
//             friction: 1,
//             frictionAir: 0,
//             density: 1,
//             isStatic: true,
//             angle: -0.1
//         }
//     },
//     PLAT5: {
//         X: 12,
//         Y: 230,
//         WIDTH: 40,
//         HEIGHT: 10,
//         OPTIONS: {
//             restitution: 1,
//             frictionStatic: 0,
//             friction: 1,
//             frictionAir: 0,
//             density: 1,
//             isStatic: true,
//             angle: 0.8
//         }
//     },
//     PLAT6: {
//         X: 12,
//         Y: 310,
//         WIDTH: 40,
//         HEIGHT: 10,
//         OPTIONS: {
//             restitution: 1,
//             frictionStatic: 0.5,
//             friction: 1,
//             frictionAir: 0.5,
//             density: 1,
//             isStatic: true,
//             angle: 0.8
//         }
//     },
//     PLAT7: {
//         X: 300,
//         Y: 320,
//         WIDTH: 100,
//         HEIGHT: 10,
//         OPTIONS: {
//             restitution: 1,
//             frictionStatic: 0.5,
//             friction: 1,
//             frictionAir: 0.5,
//             density: 1,
//             isStatic: true,
//             angle: 0
//         }
//     },
//     PIECE: {
//         X: 60,
//         Y: 250,
//         WIDTH: 6,
//         HEIGHT: 30,
//         OPTIONS: {
//             density: 0.5,
//             restitution: 0.1,
//             frictionStatic: 0.5,
//             friction: 0.8,
//             frictionAir: 0.001,
//             density: 0.5,
//         }
//     },
//     BALL1: {
//         X: 292,
//         Y: 80,
//         RADIUS: 50,
//         OPTIONS: {
//             restitution: 0.6,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 0,
//             density: 1,
//             // label:"ball1"

//         }
//     },
//     BALL2: {
//         X: 200,
//         Y: 260,
//         RADIUS: 10,
//         OPTIONS: {
//             restitution: 0.6,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 0,
//             density: 0.2

//         }
//     },
//     BALL3: {
//         X: 300,
//         Y: 260,
//         RADIUS: 10,
//         OPTIONS: {
//             restitution: 0.6,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 0,
//             density: 0.2

//         }
//     },
//     BALL4: {
//         X: 310,
//         Y: 260,
//         RADIUS: 10,
//         OPTIONS: {
//             restitution: 0.6,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 0,
//             density: 0.2

//         }
//     },
//     BALL5: {
//         X: 310,
//         Y: 280,
//         RADIUS: 10,
//         OPTIONS: {
//             restitution: 0.6,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 0,
//             density: 0.2

//         }
//     },
//     BALL6: {
//         X: 300,
//         Y: 280,
//         RADIUS: 10,
//         OPTIONS: {
//             restitution: 0.6,
//             frictionStatic: 0.001,
//             frictionAir: 0.001,
//             friction: 0,
//             density: 0.2

//         }
//     },
// }
const XS_DIM = {
    BALL: {
        RADIUS: 16,
    },
    WALL: {
        SIZE: 16
    },
    CUP: {
        'X': windowWidth * 0.5,
        'Y': windowHeight * 0.45,
        'SIZE': 80
    },
    LEFT_PLAT: {
        'SIZE': 100,
        'X': 0,
        'Y': 100,
        'ANGLE': 0.1
    },
    RIGHT_PLAT: {
        'SIZE': 100,
        'X': windowWidth,
        'Y': windowHeight * 0.2,
        'ANGLE': 0.1
    }
}
const S_DIM = {
    BALL: {
        RADIUS: 20,
    },
    WALL: {
        SIZE: 20
    },
    CUP: {
        'X': windowWidth * 0.5,
        'Y': windowHeight * 0.45,
        'SIZE': 100
    },
    LEFT_PLAT: {
        'X': 0,
        'Y': 150,
        'SIZE': 350,
        'ANGLE': 0.1
    },
    RIGHT_PLAT: {
        'SIZE': 350,
        'X': windowWidth,
        'Y': windowHeight * 0.15,
        'ANGLE': -0.1
    }
}
const M_DIM = {
    BALL: {
        RADIUS: 24,
    },
    WALL: {
        SIZE: 24
    },
    CUP: {
        'X': windowWidth * 0.5,
        'Y': windowHeight * 0.45,
        'SIZE': 120
    },
    LEFT_PLAT: {
        'X': 0,
        'Y': 200,
        'SIZE': 500,
        'ANGLE': 0.1
    },
    RIGHT_PLAT: {
        'SIZE': 500,
        'X': windowWidth,
        'Y': windowHeight * 0.15,
        'ANGLE': -0.1
    }
}
const L_DIM = {
    BALL: {
        RADIUS: 28,
    },
    WALL: {
        SIZE: 28
    },
    CUP: {
        'X': windowWidth * 0.5,
        'Y': windowHeight * 0.45,
        'SIZE': 140
    },
    LEFT_PLAT: {
        'X': windowWidth / 5,
        'Y': 225,
        'SIZE': 100,
        'ANGLE': 0.05
    },
    RIGHT_PLAT: {
        'X': windowWidth - windowWidth / 5,
        'Y': 225,
        'SIZE': 1000,
        'ANGLE': -0.05
    }
}
const XL_DIM = {
    BALL: {
        RADIUS: 32,
    },
    WALL: {
        SIZE: 32
    },
    CUP: {
        'X': windowWidth * 0.5,
        'Y': windowHeight * 0.45,
        'SIZE': 160
    },
    LEFT_PLAT: {
        'X': 0,
        'Y': 300,
        'SIZE': windowWidth * 4 / 5,
        'ANGLE': 0.05
    },
    RIGHT_PLAT: {
        'X': windowWidth,
        'Y': 300,
        'SIZE': windowWidth * 4 / 5,
        'ANGLE': -0.05
    }
}
var img;

function preload() {
    img = loadImage('./exo2.png');
}





//check screen size to assign corresponding values to bodys
if (window.matchMedia("(max-width: 480px)").matches) {
    dimensions = XS_DIM
} else if (window.matchMedia("(max-width: 768px)").matches) {
    dimensions = S_DIM

} else if (window.matchMedia("(max-width: 1024px)").matches) {
    dimensions = M_DIM

} else if (window.matchMedia("(max-width: 1366px)").matches) {
    dimensions = L_DIM

} else {
    dimensions = XL_DIM
}



function setup() {
    engine = Engine.create();
    world = engine.world


    //   myCanvas = createCanvas(windowWidth - margin, windowHeight - margin);
    noCanvas()

    walls = new Walls(dimensions.WALL.SIZE)

    cup = new Machine(dimensions.CUP.X, dimensions.CUP.Y, dimensions.CUP.SIZE, {
        isStatic: true,
        render: {
            fillStyle: "#00FF00"
        }
    })

    loadButton = new Circle(windowWidth / 2, dimensions.BALL.RADIUS * 4, dimensions.BALL.RADIUS, {
        isStatic: true,
        label: "loadButton",
        render: {
            fillStyle: COLORS.GREEN
        }
    })

    transformButton = new Circle(cup.bottomBody.position.x, cup.bottomBody.position.y + dimensions.BALL.RADIUS * 2, dimensions.BALL.RADIUS * 2, {
        isStatic: true,
        label: "transformButton",
        render: {
            fillStyle: "#fff"
        }
    })
    transformButton['isActive'] = false;

    // leftPlat = new Ground(dimensions.LEFT_PLAT.X, dimensions.LEFT_PLAT.Y, dimensions.LEFT_PLAT.SIZE, dimensions.LEFT_PLAT.SIZE / 32, dimensions.LEFT_PLAT.ANGLE)
    // rightPlat = new Ground(dimensions.RIGHT_PLAT.X, dimensions.RIGHT_PLAT.Y, dimensions.RIGHT_PLAT.SIZE, dimensions.RIGHT_PLAT.SIZE / 32, dimensions.RIGHT_PLAT.ANGLE)


    // newt = new nCradle(XS.NEWT.X, XS.NEWT.Y, XS.NEWT.NUMBER, XS.NEWT.SIZE, XS.NEWT.LENGHT);


    // Body.translate(newt.newtonsCradle.bodies[0], {
    //     x: -1,
    //     y: -2*XS.NEWT.LENGHT
    // });

    //         for (let j = windowHeight*0.2; j < windowHeight-windowHeight*0.2; j=j+100) {

    // let prob= Math.random()
    // if(prob>0.587)
    //             machine1 = new Machine(windowWidth*Math.random(), j, windowWidth/20, windowWidth/20);
    //         }


    // circle2 = new Box(10, 10, 10, 20, {
    //     inertia: Infinity,
    //     restitution: 1.04,
    //     friction: 0,
    //     frictionAir: 0,
    //     slop: 1
    // })
    // Composite.add(world, circle2);



    // upper platform

    // plat1 = new Ground(XS.PLAT1.X, XS.PLAT1.Y, XS.PLAT1.WIDTH, XS.PLAT1.HEIGHT, XS.PLAT1.OPTIONS)
    // plat2 = new Ground(XS.PLAT2.X, XS.PLAT2.Y, XS.PLAT2.WIDTH, XS.PLAT2.HEIGHT, XS.PLAT2.OPTIONS)


    //  ball1 = new Circle(w / 4, h / 10, XS.BALL1.RADIUS, XS.BALL1.OPTIONS)

    // for (let i = 0; i < 6; i++) {
    //     let piece = new Box(XS.PIECE.X + i * XS.PIECE.HEIGHT * 2 / 3, XS.PIECE.Y, XS.PIECE.WIDTH, XS.PIECE.HEIGHT, XS.PIECE.OPTIONS)


    //     domino.push(piece)
    // }
    // Matter.World.add(world, Matter.Composites.pyramid(286, 274, 3, 3, 0, 0, (x, y) => {
    //     return Matter.Bodies.circle(x, y, XS.BALL1.RADIUS, {
    //         isStatic: '',
    //         density: 1
    //     })
    // }));

    //render
    //console.log(myCanvas)
    render = Render.create({
        element: document.body,
        // canvas:myCanvas.canvas,
        // context:myCanvas.drawingContext,
        engine: engine,
        options: {
            showPerformance: true,
            showStats: true,
            width: window.innerWidth,
            height: window.innerHeight,
            //  showVelocity: true,
            // showCollisions: true,
            hasBounds: true,
            wireframes: false,
            background: 'transparent'
        }
    });

    mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        focus: true
    })

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    Events.on(mouseConstraint, "mousedown", () => {
        if (mouseConstraint.body) {

            if (mouseConstraint.body.label === "loadButton") {
                for (let i = 0; i < 3; i++) {

                    var redBall = new Circle(-dimensions.BALL.RADIUS * 2 - i * dimensions.BALL.RADIUS, dimensions.BALL.RADIUS, dimensions.BALL.RADIUS, {

                        label: "redBall",
                        restitution: 0.6,
                        frictionStatic: 0.001,
                        frictionAir: 0.001,
                        friction: 0,
                        force: {
                            x: 0.01,
                            y: 0
                        },
                        render: {
                            fillStyle: COLORS.RED
                        },
                        mass: 1,
                        density: 1
                    })
                    balls.push(redBall);

                }
                for (let i = 0; i < 3; i++) {

                    var blueBall = new Circle(windowWidth + dimensions.BALL.RADIUS * 2 - i * dimensions.BALL.RADIUS, dimensions.BALL.RADIUS, dimensions.BALL.RADIUS, {
                        label: "blueBall",
                        restitution: 0.6,
                        frictionStatic: 0.001,
                        frictionAir: 0.001,
                        friction: 0,
                        force: {
                            x: -0.01,
                            y: 0
                        },
                        render: {
                            fillStyle: COLORS.BLUE
                        },
                        mass: 1,
                        density: 1
                    })
                    balls.push(blueBall);
                }


            }
            if (mouseConstraint.body.label === "transformButton" && transformButton.isActive) {

                var newB = new Circle(windowWidth / 2, transformButton.body.position.y + dimensions.BALL.RADIUS * 4, dimensions.BALL.RADIUS * 2, {
                    restitution: 0.6,
                    frictionStatic: 0.001,
                    frictionAir: 0.001,
                    friction: 0,
                    force: {
                        x: 0,
                        y: 0
                    },
                    render: {
                        fillStyle: COLORS.VIOLET
                    },
                    mass: 1,
                    density: 1
                })
                let removed = 0
                for (let i = 0; i < balls.length; i++) {
                    if (balls[i].inMachine) {

                        World.remove(world, balls[i].body);
                        balls.splice(i, 1);
                        if (++removed>1)
                            break;
                    }
                }




            }
        }
    })
    // Events.on(mouseConstraint, "mousedown", () => {
    //     if (mouseConstraint.body && mouseConstraint.body.label === "ball1")
    //         myModal.show()
    //     else {
    //         var newB = new Circle(mouse.position.x, mouse.position.y - 10, dimensions.BALL.RADIUS, {
    //             restitution: 0.6,
    //             frictionStatic: 0.001,
    //             frictionAir: 0.001,
    //             friction: 0,
    //             force: {
    //                 x: Math.random() * ((0.05) - (-0.05)) - 0.05,
    //                 y: -0.085
    //             },
    //             render: {
    //                 fillStyle: "#FF0000"
    //             },
    //             mass: 1,
    //             density: 1
    //         })
    //         balls.push(newB)
    //     }

    // })


    // run the renderer
    Render.run(render);

    // Matter.Engine.run(engine)

}

function draw() {

    Matter.Engine.update(engine, [delta = 16.666], [correction = 1])

    numberBallsInsideMachine = countBalls()
    transformButton.isActive = (numberBallsInsideMachine > 2)


    console.log(numberBallsInsideMachine)

    // background(20,20,20);
    // balls.forEach(element => {
    //     element.show()
    // });
    // // console.log(newt.newtonsCradle.bodies[0].position)
    // // A rectangle
    // fill(200, 200, 200);
    // noStroke();
    // rectMode(CENTER)
    // rect(200, h / 2, rectW, rectH);
    // // uses global variables for width and height
    // circle2.show()

    // newt.show()
}










window.onresize = () => {
    location.reload();
}


function countBalls() {
    let leftBound = cup.leftBody.position.x
    let rightBound = cup.rightBody.position.x
    let upperBound = cup.rightBody.bounds.min.y
    let bottomBound = cup.bottomBody.position.y
    let numberOfBalls = 0;


    for (let i = 0; i < balls.length; i++) {
        if (balls[i].body.position.x > leftBound &&
            balls[i].body.position.x < rightBound &&
            balls[i].body.position.y > upperBound &&
            balls[i].body.position.y < bottomBound
        )
            balls[i].inMachine = true;
        else
            balls[i].inMachine = false;
    }

    for (let i = 0; i < balls.length; i++) {

        if (balls[i].inMachine)
            numberOfBalls++;

    }
    return numberOfBalls
}