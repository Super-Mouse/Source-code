let Event = {
    handlers : {},
    on (eventName, callback){
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(callback);
    },
    off (eventName, callback){
        let currentEvent = this.handlers[eventName];
        if (currentEvent) {
            if (!callback) { //没有传callback，表示解除所有该事件的绑定函数
                currentEvent.length = 0;
            } else{
                for (let i = 0; i < currentEvent.length; i++) {
                    if (currentEvent[i] === callback) {
                        currentEvent.splice(i, 1);
                    }
                }
            }
        }
    },
    fire (eventName, data){
        let currentEvent = this.handlers[eventName],
            param = Array.prototype.slice(arguments, 1);
        if (currentEvent) {
            for (let i = 0; i < currentEvent.length; i++) {
                currentEvent[i](param);
            }
        }

    }
}
