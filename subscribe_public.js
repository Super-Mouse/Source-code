var Event = {
  handlers : {},
  on (eventName, callback){
    var currentEvent = this.handlers[eventName];
    if (!currentEvent) {
      currentEvent = [];
    }
    currentEvent.push(callback);
  },
  off (eventName, callback){
    var currentEvent = this.handlers[eventName];
    if (currentEvent) {
      if (!callback) { //没有传callback，表示解除所有该事件的绑定函数
        currentEvent.length = 0;
      } else{
        for (var i = 0; i < current.length; i++) {
          if (currentEvent[i] == callback) {
            currentEvent.splice(i, 1);
          }
        }
      }
    }
  },
  fire (eventName, data){
    var currentEvent = this.handlers[eventName],
        param = Array.prototype.slice(arguments, 1);
    if (currentEvent) {
      for (var i = 0; i < currentEvent.length; i++) {
        currentEvent(param);
      }
    }

  }
}
