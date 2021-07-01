function Parent(){
  this.color = ['red', 'blue'];
}

Parent.prototype.getColor = function(){
  console.log(this.color);
}

function Child(){
}

Child.prototype = Object.create(Parent.prototype);

let p = new Parent();
p.color.push('123');
let c = new Child();
p.getColor();
c.getColor();