function Subject() {
  this.observers = [];
}

Subject.prototype = {
  add(observer) {
    this.observers.push(observer);
  },
  notify() {
    let observers = this.observers;
    for (let i = 0; i < observers.length; i++) {
      observers[i].update();
    }
  },
};

function Observer(name) {
  this.name = name;
}
Observer.prototype = {
  update() {
    console.log("my name is" + this.name);
  },
};

let sub = new Subject();
let ob1 = new Observer("ob1");
let ob2 = new Observer("ob2");
sub.add(ob1);
sub.add(ob2);
sub.notify();
