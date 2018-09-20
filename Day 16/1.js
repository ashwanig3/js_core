function Rectangle(h,w) {
	this.h= h;
	this.w = w
}

Rectangle.prototype.area = function() {
	return this.h * this.w;
}


var rec1 =  new Rectangle(4,6);
rec1.area();

function Square(side) {
	this.h = this.w = side;
}

Square.prototype = Object.create(Rectangle.prototype);

var sq = new Square(4);
sq.area();