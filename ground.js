class Ground{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    var options = {
      isStatic:true
    }

    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body)
  }

  show(){
    var p = this.body.position;
    push();
    rectMode(CENTER);
    fill("black");
    rect(p.x,p.y,this.w,this.h);
    pop();
  }
}





