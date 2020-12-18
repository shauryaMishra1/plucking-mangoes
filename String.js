class String{
    constructor(body,anchor){
        var options={
            bodyA:body,pointB:anchor,stiffness:0.004,lengh:1
        }
    this.bodyA=body
     this.pointB=anchor
    this.string=Constraint.create(options)
    World.add(world,this.string)
    }
fly(){
    this.string.bodyA=null
}
    attach(body){
        this.string.bodyA=body
    }
display(){
    
    if(this.string.bodyA){
    var pointA=this.bodyA.position
    var pointB=this.pointB
   
     stroke(48,22,8) 
     
        strokeWeight(2)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        

    }
}
}