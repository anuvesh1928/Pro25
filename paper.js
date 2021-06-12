class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.r=r;
    this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r=20)/2 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			imageMode(CENTER);
			image(this.image, 0,-this.r/2,)

			// ellipse(0,0,this.r);
			pop()
			
	}

}