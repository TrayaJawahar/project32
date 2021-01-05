class Box extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("blackbox.jpg");
      this.visibility=255;
    }
  display(){
   // console.log(this.body.speed);
    if(this.body.speed < 3){
    super.display();
    }
  
    else {
      World.remove(world, this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
  
  score(){
    if (this.visiblity < 0 && this.visiblity > -1005){
      score=score+1;
    }
  }
 
  };
  