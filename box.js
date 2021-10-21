class Box {
    constructor(x, y, w, h, o = {
        restitution: 0.3,
        frictionStatic: 0.001,
        frictionAir: 0.001,

    }) {
        this.body = Matter.Bodies.rectangle(x, y, w, h, o);
        Matter.World.add(world, this.body);
        this.w = w;
        this.h = h;
    }


    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(255, 0, 255);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
class Ground {
    constructor(x, y, w, h, a = 0, o = {
        restitution: 1,
        frictionStatic: 0,
        friction: 0,
        frictionAir: 0,
        density: 1,
        isStatic: true,
        angle: a
    }) {
        this.body = Matter.Bodies.rectangle(x, y, w, h, o);
        Matter.World.add(world, this.body);
        this.w = w;
        this.h = h;

    }
    removeFromWorld() {

        World.remove(world, this.body)
    }
    show() {
        if (world.bodies.indexOf(this.body) != -1) {

            const pos = this.body.position;
            const angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            noStroke();
            fill(255);
            rectMode(CENTER);
            rect(0, 0, this.w, this.h);
            pop();
        }
    }
}

class Circle {
    constructor(x, y, r, o = {
        restitution: 0.6,
        frictionStatic: 0.001,
        frictionAir: 0.001,
        friction: 0.05

    }) {
        this.body = Matter.Bodies.circle(x, y, r, o);
        Matter.World.add(world, this.body);
        this.r = r;
        this.inMachine = false;

        this.isOffScreen = ()=>{
            return (this.body.position.y > WINDOW_HEIGHT+100)
        }
        this.removeFromWorld = ()=>{
            Matter.Composite.remove(world, this.body) 
        }
    }
}



class Machine {

    constructor(x, y, size, scale, options) {
        this.machine = Composite.create({
            label: 'machine'
        });

        this.size = size;

        this.leftBody = Matter.Bodies.rectangle(x - size * 0.9, y, size, size / 4, {
            isStatic: true,
            angle: 1,
            render: {
                visible: false,
                //opacity:0.18,
                fillSTyle: "#0ff"
            }

        })
        this.rightBody = Matter.Bodies.rectangle(x + size * 0.9, y, size, size / 4, {
            isStatic: true,
            angle: -1,
            render: {
                visible: false,
                //opacity:0.18,
                fillSTyle: "#0ff"
            }

        })

        this.bottomBody = Matter.Bodies.rectangle(x, y + size * 0.7, size, size / 2, {
            isStatic: true,
            render: {
                visible: true,
                //opacity:0.18,
                sprite: {
                    yOffset: 0.111,
                    xScale: scale,
                    yScale: scale,
                    texture:redOffImage
                }
            }
        })


        Composite.addBody(this.machine, this.leftBody);
        Composite.addBody(this.machine, this.rightBody);
        Composite.addBody(this.machine, this.bottomBody);





        Matter.World.add(engine.world, this.machine);


    }
    //     show() {

    //         // for (const body of this.newtonsCradle.bodies) {
    //         //     const pos = body.position;
    //         //     const angle = body.angle;
    //         //     push();
    //         //     translate(pos.x, pos.y);
    //         //     rotate(angle);
    //         //     noStroke();
    //         //     image(img, -this.size,0, this.size*2, this.size*2);
    //         //     //fill(255, 0, 0);
    //         //     //ellipse(0, 0, this.size * 2);
    //         //     pop();
    //         // }
    //         // for (const constraint of this.newtonsCradle.constraints) {
    //         //     const pos = constraint.bodyB.position;
    //         //     const angle = constraint.bodyB.angle;
    //         //     push();
    //         //     rotate(angle);
    //         //     stroke(255,0,0)
    //         //     line(constraint.pointA.x,constraint.pointA.y, pos.x,pos.y);
    //         //     pop();
    //         // }
    //     }






}

class Walls {
    constructor(thickness, options = {
        render: {
            fillStyle: "#DCF3FF"
        }
    }) {

        this.bodies = []

        this.thickness = thickness;
        this.roof = Matter.Bodies.rectangle(WINDOW_WIDTH / 2, 0, WINDOW_WIDTH, thickness, options)
        this.floor = Matter.Bodies.rectangle(WINDOW_WIDTH / 2 - 6 * thickness, WINDOW_HEIGHT, WINDOW_WIDTH, thickness, options)
        this.leftWall = Matter.Bodies.rectangle(0, WINDOW_HEIGHT / 2 + 5 * thickness, thickness, WINDOW_HEIGHT, options)
        this.rightWall = Matter.Bodies.rectangle(WINDOW_WIDTH, WINDOW_HEIGHT / 2 + 5 * thickness, thickness, WINDOW_HEIGHT, options)
        this.roof.isStatic = true;
        this.floor.isStatic = true;
        this.leftWall.isStatic = true;
        this.rightWall.isStatic = true;
        this.leftPlatform = Matter.Bodies.rectangle(0, this.leftWall.bounds.min.y, WINDOW_WIDTH * 4 / 5, thickness / 2, {
            angle: 0.1,
            friction:0.007,
            render: {
                sprite:{
                },
                fillStyle: "#DCF3FF"
            }
        })
        this.leftPlatform.isStatic = true;

        this.rightPlatform = Matter.Bodies.rectangle(WINDOW_WIDTH, this.rightWall.bounds.min.y, WINDOW_WIDTH * 4 / 5, thickness / 2, {
            angle: -0.1,
            friction:0.007,

            render: {
                fillStyle: "#DCF3FF"
            }
        })
        this.rightPlatform.isStatic = true;


        this.bodies.push(this.roof, this.floor, this.leftWall, this.rightWall, this.leftPlatform, this.rightPlatform)

        Matter.World.add(engine.world, this.bodies);
    }
}