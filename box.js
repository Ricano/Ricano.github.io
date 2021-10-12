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
        friction: 0

    }) {
        this.body = Matter.Bodies.circle(x, y, r, o);
        Matter.World.add(world, this.body);
        this.r = r;
    }


    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(255, 0, 255);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}



class Machine {

    constructor(x, y, size, options) {
        this.machine = Composite.create({
            label: 'machine'
        });

        this.size = size;

        this.leftBody = Matter.Bodies.rectangle(x - size * 0.9, y, size * 2, size / 4, {
            isStatic: true,
            angle: 1

        })
        this.rightBody = Matter.Bodies.rectangle(x + size * 0.9, y, size * 2, size / 4, {
            isStatic: true,
            angle: -1

        })

        this.bottomBody = Matter.Bodies.rectangle(x, y + size, size, size / 2, {
            isStatic: true
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
            fillStyle: "#F0F0F0"
        }
    }) {

        this.bodies = []


        let roof = Matter.Bodies.rectangle(windowWidth / 2, 0, windowWidth, thickness, options)
        let floor = Matter.Bodies.rectangle(windowWidth / 2 - 4 * thickness, windowHeight, windowWidth, thickness, options)
        let leftWall = Matter.Bodies.rectangle(0, windowHeight / 2 + 4 * thickness, thickness, windowHeight, options)
        let rightWall = Matter.Bodies.rectangle(windowWidth, windowHeight / 2 + 4 * thickness, thickness, windowHeight, options)
        roof.isStatic = true;
        floor.isStatic = true;
        leftWall.isStatic = true;
        rightWall.isStatic = true;
        let leftPlatform = Matter.Bodies.rectangle(0, leftWall.bounds.min.y, windowWidth*4/5, thickness/2, {angle:0.1, render: {
            fillStyle: "#F0F0F0"
        }})
        leftPlatform.isStatic = true;
       
        let rightPlatform = Matter.Bodies.rectangle(windowWidth, rightWall.bounds.min.y, windowWidth*4/5, thickness/2, {angle:-0.1, render: {
            fillStyle: "#F0F0F0"
        }})
        rightPlatform.isStatic = true;

        
        this.bodies.push(roof, floor, leftWall, rightWall, leftPlatform, rightPlatform)

        Matter.World.add(engine.world, this.bodies);
    }
}