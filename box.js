class Box  {
    constructor(x,y,width,height)   {
        var options = {
            isStatic:true
        }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
     this.height = height;
     this.image = loadImage("box.png");
   
     World.add(world,this.body);
    }

    display()   {
       push();
        var pos2= this.body.position;
        translate(pos2.x,pos2.y);
    imageMode(CENTER);
        fill("red");
      image(this.image, this.body.position.x, this.body.position.y, this.height, this.width);
       pop(); 
    }
}