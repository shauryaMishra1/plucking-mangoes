class Tree {
  constructor(x,y){

this.x=x
this.y=y
this.boxWidth=450
this.boxHeight=600
this.thickness=10

this.image=loadImage("tree.png");
this.bottombody=Bodies.rectangle (this.x,this.y,this.boxWidth,this.thickness,{isStatic:true})
this.leftbody=Bodies.rectangle (0,this.y-this.boxHeight/2,this.thickness,this.boxHeight,{isStatic:false})
this.rightbody=Bodies.rectangle (this.x+this.boxWidth/2,this.y-this.boxHeight/2,this.thickness,this.boxHeight,{isStatic:false})

World.add(world,this.bottombody)
World.add(world,this.leftbody) 
World.add(world,this.rightbody) }
display(){
  var pos=this.bottombody.position
  push()
  translate(pos.x,pos.y+10)
  imageMode(CENTER)
  
  image(this.image,0,-this.boxHeight/2,this.boxWidth,this.boxHeight)
  pop()
  

}
}