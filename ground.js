class Ground {
    constructor(x, y, h, world) {
        this.x = x
        this.y = y - h / 2
        this.h = h

        this.body = Bodies.rectangle(this.x, this.y, width, this.h, { isStatic: true });
        Composite.add(world, [this.body]);
    }


    display() {
        // Get the position and angle of the box
        const pos = this.body.position;
        const angle = this.body.angle;
        // const bodyWidth = this.body.bounds.max.x - this.body.bounds.min.x;

        // Draw the box using p5.js
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#765827");
        noStroke()
        rect(0, 0, width, this.h);
        pop();
    }
}