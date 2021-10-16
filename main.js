//Matter JS aliases

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

// Initialize necessary global variables

let walls,
    dimensions,
    cup,
    numberBallsInsideMachine,
    loadButton,
    myModal

let balls = []
let superBalls = []


// P5 preload function
function preload() {}

assignBodysDimensionsBasedOnScreenSize()

// P5 setup function
function setup() {

    //Create an engine and a world
    engine = Engine.create();
    world = engine.world

    //Setup canvas
    //   myCanvas = createCanvas(WINDOW_WIDTH - margin, WINDOW_HEIGHT - margin);
    noCanvas()


    createWorldElements()
   


    // Create and use the Matter js render
    createAndUseMatterRender()

    // Allow mouse interaction by creating the 
    // mouse constraint and adding it to the world

    createMouseConstraintAndAddToWorld()


    // assign the bootstrap modal to a variable
    myModal = new bootstrap.Modal(document.getElementById('project-modal'), {
        focus: true
    })

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    Events.on(mouseConstraint, "mousedown", () => {
        if (mouseConstraint.body) {
            let clickedBody = mouseConstraint.body;

            switch (clickedBody.label) {
                case "loadButton": {
                    loadSkills();
                    break;
                }
                case "transformButton": {
                    if (transformButton.isActive) {
                        createProject();
                    }
                    break;
                }
                case "superBall": {
                    loadModal(clickedBody);
                    break;
                }
            }
        }
    })

    // run the renderer
    Render.run(render);

    // Matter.Engine.run(engine)

}
let titleString = document.getElementsByClassName('name')[0]

let gitHubIcon = document.getElementById("github-icon");

function draw() {

    // update the Matter Engine with every cycle of P5
    Matter.Engine.update(engine, [delta = 16.666], [correction = 1])


    let textShadow =
        "5px 3px rgb(" + (floor(Math.random() * 25)).toString() + "," +
        (floor(Math.random() * 205)).toString() + "," +
        (floor(Math.random() * 205) + 50).toString() + ")"

    if (Math.random() < 0.1)
        titleString.style.textShadow = textShadow


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

// reload page if screen size changes 
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

function loadSkills() {
    for (let i = 0; i < 3; i++) {

        var redBall = new Circle(-dimensions.BALL.RADIUS * 2 - i * dimensions.BALL.RADIUS, dimensions.BALL.RADIUS, 
            dimensions.BALL.RADIUS* (Math.random() * 0.5 + 0.5),
             {
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

        var blueBall = new Circle(WINDOW_WIDTH + dimensions.BALL.RADIUS * 2 - i * dimensions.BALL.RADIUS,
            dimensions.BALL.RADIUS,
            dimensions.BALL.RADIUS *(Math.random() * 0.5 + 0.5), {
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

function createProject() {
    setTimeout(() => {


        var newB = new Circle(WINDOW_WIDTH / 2, transformButton.body.position.y + dimensions.BALL.RADIUS * 4, dimensions.BALL.RADIUS * 2, {
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

function loadModal(clickedBody) {

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
    iconsElement.innerHTML = "";
    clickedBody.logos.forEach(logo => {
        iconsElement.innerHTML += `<img class="modal-icon" src="${logo}"></img>`
    });

    setTimeout(() => {

        myModal.show()

    }, 200)


    World.remove(world, mouseConstraint.body);
}


function createMouseConstraintAndAddToWorld() {

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

}


function assignBodysDimensionsBasedOnScreenSize() {


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


}

function createAndUseMatterRender() {

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
            wireframes: false
        }
    });

}

function createWorldElements(){

    walls = new Walls(dimensions.WALL.SIZE)
    
    cup = new Machine(dimensions.CUP.X, dimensions.CUP.Y, dimensions.CUP.SIZE, {
        isStatic: true,
        render: {
            fillStyle: "#00FF00"
        }
    })
    
    loadButton = new Box(WINDOW_WIDTH / 2, dimensions.BALL.RADIUS * 2, dimensions.BALL.RADIUS * 2 * 1.618, dimensions.BALL.RADIUS * 2, {
        isStatic: true,
        label: "loadButton",
        render: {
            fillStyle: COLORS.GREEN
        }
    })
 

    transformButton = new Circle(cup.bottomBody.position.x, cup.bottomBody.position.y + dimensions.BALL.RADIUS * 2, dimensions.BALL.RADIUS * 2, {
        isStatic: true,
        label: "transformButton",
     
    })
    transformButton['isActive'] = false;
}