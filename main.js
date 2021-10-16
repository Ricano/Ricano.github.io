let World = Matter.World;
let Body = Matter.Body;
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;
let Composites = Matter.Composites;
let Engine = Matter.Engine;
let Events = Matter.Events;
let Render = Matter.Render;
let Query = Matter.Query;
let Bounds = Matter.Bounds;
let Vector = Matter.Vector;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;




let walls;

let dimensions

let cup;

let numberBallsInsideMachine;

let loadButton
let numberBallInsideMachine = 4

let balls = []
let superBalls = []








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

function preload() {}





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

    loadButton = new Box(windowWidth / 2, dimensions.BALL.RADIUS * 2, dimensions.BALL.RADIUS * 2 * 1.618, dimensions.BALL.RADIUS * 2, {
        isStatic: true,
        label: "loadButton",
        render: {
            sprite: {
                texture: "./redButton.png"
            }
        }
    })

    transformButton = new Circle(cup.bottomBody.position.x, cup.bottomBody.position.y + dimensions.BALL.RADIUS * 2, dimensions.BALL.RADIUS * 2, {
        isStatic: true,
        label: "transformButton",
        render: {
            sprite: {
                texture: "./redButton.png"
            }
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
            let clickedBody = mouseConstraint.body;
            if (clickedBody.label === "loadButton") {

                for (let i = 0; i < 3; i++) {

                    var redBall = new Circle(-dimensions.BALL.RADIUS * 2 - i * dimensions.BALL.RADIUS, dimensions.BALL.RADIUS, dimensions.BALL.RADIUS, {
                        label: "redBall",
                        slope: 0,
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
                    })
                    balls.push(redBall);

                }
                for (let i = 0; i < 3; i++) {

                    var blueBall = new Circle(windowWidth + dimensions.BALL.RADIUS * 2 - i * dimensions.BALL.RADIUS, dimensions.BALL.RADIUS, dimensions.BALL.RADIUS, {
                        label: "blueBall",
                        slope: 0,
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
                    })
                    balls.push(blueBall);
                }


            }
            if (clickedBody.label === "transformButton" && transformButton.isActive) {


                setTimeout(() => {


                    var newB = new Circle(windowWidth / 2, transformButton.body.position.y + dimensions.BALL.RADIUS * 4, dimensions.BALL.RADIUS * 2, {
                        label: "superBall",
                        restitution: 0.6,
                        frictionStatic: 0.001,
                        frictionAir: 0.001,
                        friction: 0,
                        force: {
                            x: 0,
                            y: 0
                        }
                    })
                    let removed = 0
                    for (let i = 0; i < balls.length; i++) {
                        if (balls[i].inMachine) {

                            World.remove(world, balls[i].body);
                            balls.splice(i, 1);
                            if (++removed > 2)
                                break;
                        }
                    }
                    if (Math.random() < 0.5) {
                        newB.body.title = MODAL_INFO.project1.title
                        newB.body['image'] = MODAL_INFO.project1.image
                        newB.body['link'] = MODAL_INFO.project1.link
                        newB.body['description'] = MODAL_INFO.project1.description
                        newB.body['logos'] = MODAL_INFO.project1.logos
                        newB.body.render.fillStyle = MODAL_INFO.project1.color

                    } else {
                        newB.body['title'] = MODAL_INFO.project2.title
                        newB.body['image'] = MODAL_INFO.project2.image
                        newB.body['link'] = MODAL_INFO.project2.link
                        newB.body['description'] = MODAL_INFO.project2.description
                        newB.body['logos'] = MODAL_INFO.project2.logos
                        newB.body.render.fillStyle = MODAL_INFO.project2.color


                    }

                    superBalls.push(newB);
                }, 200)


            }
            if (clickedBody.label === "superBall") {
                

                let modal = document.getElementById("modal-content")
                let header = document.getElementsByClassName('modal-header')[0];
                let titleElement = document.getElementById("modal-title")
                let imageElement = document.getElementById("modal-image")
                let descriptionElement = document.getElementById("modal-description")
                let linkElement = document.getElementById("github-icon")
                let iconsElement = document.getElementById("modal-icons")

                titleElement.innerText = clickedBody.title;
                titleElement.style.backgroundColor = clickedBody.render.fillStyle;
                imageElement.src = clickedBody.image;
                descriptionElement.innerHTML = clickedBody.description;
                linkElement.href = clickedBody.link
                iconsElement.style.backgroundColor = clickedBody.render.fillStyle
                iconsElement.innerHTML="";
                clickedBody.logos.forEach(logo => {
                    iconsElement.innerHTML+= `<img class="modal-icon" src="${logo}"></img>`
                });

                    setTimeout(() => {

                        myModal.show()

                    }, 200)


                World.remove(world, mouseConstraint.body);
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
let titleString = document.getElementsByClassName('name')[0]

let gitHubIcon = document.getElementById("github-icon");

function draw() {

    let textShadow =
        "5px 3px rgb(" + (floor(Math.random() * 25)).toString() + "," +
        (floor(Math.random() * 205)).toString() + "," +
        (floor(Math.random() * 205) + 50).toString() + ")"

    if (Math.random() < 0.1)
        titleString.style.textShadow = textShadow

    Matter.Engine.update(engine, [delta = 16.666], [correction = 1])

    numberBallsInsideMachine = countBalls()
    transformButton.isActive = (numberBallsInsideMachine > 2)
    transformButton.body.render.fillStyle = transformButton.isActive ? COLORS.GREEN : COLORS.YELLOW



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