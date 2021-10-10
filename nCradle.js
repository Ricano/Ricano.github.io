
class nCradle {

    constructor(xx, yy, number, size, length) {
        this.newtonsCradle = Composite.create({
            label: 'Newtons Cradle'
        });
        this.size = size;
        for (let i = 0; i < number; i++) {
            var separation = 1.9;
            var circle1 = Bodies.circle(xx + i * (size * separation), yy + length, size, {
                restitution: 1,
                friction: 0,
                frictionStatic: 0,
                frictionAir: 0,
                slop: 1,
                density:1
            });
            var constraint1 = Matter.Constraint.create({
                pointA: {
                    x: xx + i * (size * separation),
                    y: yy
                },
                bodyB: circle1,
                stiffness:1
            });

            Composite.addBody(this.newtonsCradle, circle1);

            Composite.addConstraint(this.newtonsCradle, constraint1);
        }

               
        Composite.add(world, this.newtonsCradle);
        
    }
    show() {

        for (const body of this.newtonsCradle.bodies) {
            const pos = body.position;
            const angle = body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            noStroke();
            image(img, -this.size,0, this.size*2, this.size*2);
            //fill(255, 0, 0);
            //ellipse(0, 0, this.size * 2);
            pop();
        }
        for (const constraint of this.newtonsCradle.constraints) {
            const pos = constraint.bodyB.position;
            const angle = constraint.bodyB.angle;
            push();
            rotate(angle);
            stroke(255,0,0)
            line(constraint.pointA.x,constraint.pointA.y, pos.x,pos.y);
            pop();
        }
    }






}