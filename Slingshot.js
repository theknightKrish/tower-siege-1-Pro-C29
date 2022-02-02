class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 6
        }
        this.pointB = this.pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    attach(body){
        this.body.bodyA = body;
    }

    fly(){
        this.body.bodyA = null;
    }
    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB= this.pointB;
            stroke(255);
            push();

            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                //line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            }
            else{
                strokeWeight(3);
                //line(pointA.x + 25,pointA.y, pointB.x -10, pointB.y);

            }
            pop();
        }


    }
}