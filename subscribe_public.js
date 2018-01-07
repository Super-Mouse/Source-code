var Event = {
  handlers : {},
  on (eventName, callback){
    this.handlers || this.handlers = {};
    var currentEvent = this.handlers[eventName];
    if (!currentEvent) {
      currentEvent = [];
    }
    currentEvent.push(callback);
  },
  off (eventName, callback){
    this.handlers || this.handlers = {};
    var currentEvent = this.handlers[eventName];
    if (currentEvent) {
      for (var i = 0; i < current.length; i++) {
        if (currentEvent[i] == callback) {
          currentEvent.splice(i, 1);
        }
      }
    }
  },
  fire (eventName, data){
    this.handlers || this.handlers = {};
    var currentEvent = this.handlers[eventName],
        param = Array.prototype.slice(arguments, 1);
    if (currentEvent) {
      for (var i = 0; i < currentEvent.length; i++) {
        currentEvent(param);
      }
    }

  }
}
