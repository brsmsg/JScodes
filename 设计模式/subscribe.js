const pubSub = {
  list: {},
  subscribe(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  publish(...args) {
    const key = args[0];
    const fns = this.list[key];
    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, args.slice(1));
    }
  },
};

pubSub.subscribe("name", (name) => {
  console.log("your name is " + name);
});
pubSub.subscribe("sex", (sex) => {
  console.log("your sex is " + sex);
});

pubSub.publish("name", "name1");
pubSub.publish("sex", "sex1");

// Event Emitter
function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.subscribe = function (type, callback) {
  if (!this.events[type]) {
    this.events[type] = [];
  }
  this.events[type].push(callback);
};

EventEmitter.prototype.publish = function (type, ...args) {
  if (this.events[type]) {
    const fns = this.events[type];
    for (let i = 0; i < fns.length; i++) {
      fns[i].call(this, ...args);
    }
  }
};

const e = new EventEmitter();

const handle1 = (...args) => console.log(args);
const handle2 = () => console.log(1234567890);

e.subscribe("click", handle1);
e.subscribe("dbClick", handle2);

e.publish("click", 5, 4, 3, 2, 1);
e.publish("click", 3, 2, 1);
e.publish("dbClick");
