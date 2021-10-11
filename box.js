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
    constructor(x, y, w, h, o = {
        restitution: 1,
        frictionStatic: 0,
        friction: 0,
        frictionAir: 0,
        density: 1,
        isStatic: true
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
        rectMode(CENTER);
        ellipse(0, 0, this.w, this.h);
        pop();
    }
}



class Machine {

    constructor(x, y, size, separation) {
        this.machine = Composite.create({
            label: 'machine'
        });
        this.size = size;


        var xBox = Matter.Bodies.rectangle(x - separation, y, size * 2, size / 8, {
            isStatic: true,
            angle: 1

        })
        Composite.addBody(this.machine, xBox);


        var xBox2 = Matter.Bodies.rectangle(x + separation, y, size * 2, size / 8, {
            isStatic: true,
            angle: -1

        })
        Composite.addBody(this.machine, xBox2);




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
    constructor(thickness, options={render:{fillStyle:"#010108"}}) {

        this.bodies = []


        let roof = Matter.Bodies.rectangle(windowWidth / 2, 0, windowWidth, thickness, options)
        let floor = Matter.Bodies.rectangle(windowWidth / 2, windowHeight-thickness, windowWidth, thickness, options)
        let leftWall = Matter.Bodies.rectangle(0, windowHeight/2, thickness, windowHeight, options)
        let rightWall = Matter.Bodies.rectangle(windowWidth-thickness/2, windowHeight/2, thickness, windowHeight, options)
        roof.isStatic = true;
        floor.isStatic = true;
        leftWall.isStatic = true;
        rightWall.isStatic = true;

        this.bodies.push(roof, floor, leftWall, rightWall)

        Matter.World.add(engine.world, this.bodies);
    }
}