function Queue() {
    var items = [];

    this.enqueue = function (ele) {
        items.push(ele);
    };

    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.clear = function () {
        items = [];
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
}

// PriorityQueue 优先级队列
function PriorityQueue() {

    var items = [];

    function QueueElement(ele, priority) {
        this.ele = ele;
        this.priority = priority;
    }
    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.clear = function () {
        items = [];
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
    this.enqueue = function (ele, priority) {
        var queueElement = new QueueElement(ele, priority);

        if (this.isEmpty()) {
            items.push(queueElement.ele);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement.ele);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement.ele);
            }
        }
    };
}

var priorityQueue = new PriorityQueue;
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();


// hotPotato 击鼓传花
function hotPotato(nameList, num) {
    var queue = new Queue();

    for (var i = 0; i < nameList.length; i++) {
        var ele = nameList[i];
        queue.enqueue(ele);
    }

    var eliminated = '';
    var size = queue.size();
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '在击鼓传花游戏中被淘汰。');
    }
    return queue.dequeue();
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var Winner = hotPotato(names, 7);
console.log('胜利者:' + Winner);