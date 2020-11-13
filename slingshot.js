class Slingshot{
    constructor(body1,point2){
        var constraintOptions={
            stiffness:0.04,
            length:20,
            bodyA:body1,
            pointB:point2
        }
       this.sling= Constraint.create(constraintOptions)
       World.add(world,this.sling)
       
       }
       display(){
           if(this.sling.bodyA !=null){
           var posA=this.sling.bodyA.position
           var posB=this.sling.pointB
           push()
           stroke(48,22,8);
            line(posA.x,posA.y,posB.x,posB.y)
           pop()
       }
       }
       fly(){
           this.sling.bodyA=null

       }
       attach(body1){
        this.sling.bodyA=body1
       }
}