let countTo = {
  from: 1,
  to: 10,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};


for (let num of countTo) {
  console.log(num);
}