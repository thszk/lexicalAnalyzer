const Stately = require('stately.js')

var door = Stately.machine({
  'OPEN': {
      'close':  /* => */ 'CLOSED'
  },
  'CLOSED': {
      'open':   /* => */ 'OPEN',
      'lock':   /* => */ 'LOCKED'
  },
  'LOCKED': {
      'unlock': /* => */ 'CLOSED',
      'break':  /* => */ 'BROKEN'
  },
  'BROKEN': {
      'fix': function () {
          this.fixed = (this.fixed === undefined ? 1 : ++this.fixed);
          return this.fixed < 3 ? this.OPEN : this.BROKEN;
      }
  }
});

//the initial state of the door is open (it's the first state object)
console.log(door.getMachineState() === 'OPEN');        // true;

//close and lock the door
door.close().lock();
console.log(door.getMachineState() === 'LOCKED');      // true;

//try to open it
door.open();
console.log(door.getMachineState() === 'OPEN');        // false;

//unlock, open, lock (is ignored because it fails), close, and lock
door.unlock().open().lock().close().lock();
console.log(door.getMachineState() === 'LOCKED');      // true;

//the door is still locked, break it
door.break();
console.log(door.getMachineState() === 'BROKEN');      // true;

//fix opens the door, close it, lock it, break it again
door.fix().close().lock().break();
console.log(door.getMachineState() === 'BROKEN');      // true;

//and again fix opens the door, close it, lock it, break it
door.fix().close().lock().break();
console.log(door.getMachineState() === 'BROKEN');      // true;

//fixing is limited, the door stays broken
door.fix();
console.log(door.getMachineState() === 'OPEN');        // false;
console.log(door.getMachineState() === 'BROKEN');      // true;