var Event = {
  handlers : {},
  on (eventName, callback){
    this.handlers || this.handlers = {};
    var currentEvent = this.handlers[eventName];
    if (!currentEvent) {
      currentEvent.push(callback);
    }
  },
  off (eventName, callback){
    this.handlers || this.handlers = {};
    var currentEvent = this.handlers[eventName];
    if (currentEvent) {
      currentEvent = null;
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
