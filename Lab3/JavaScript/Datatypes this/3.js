// There’s a ladder object that allows you to go up and down:
let ladder = {
    step: 0,
    up() {
      this.step++;
        return this;
    },
    down() {
      this.step--;
        return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
        return this;
    }};
//   };
//   Now, if we need to make several calls in sequence, we can do it like this:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Modify the code of up, down, and showStep to make the calls chainable, like this:
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// #063d Added return this; to each function to make the calls chainable #063d