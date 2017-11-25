// 栈构造函数
function Stack() {
    var items = [];

    this.push = function (ele) {
        items.push(ele);
    };

    this.pop = function () {
        return items.pop();
    };

    this.peek = function () {
        return items[items.length - 1];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
        return items.length;
    };

    this.clear = function () {
        items = [];
    };

    this.print = function () {
        console.log(items.toString());
    };
}

// divideBy2
function divideBy2(decNum) {
    var remStack = new Stack(),
        rem,
        binaryString = '';

    while (decNum > 0) {
        rem = Math.floor(decNum % 2);
        remStack.push(rem);
        decNum = Math.floor(decNum / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

function print(num) {
    var test = divideBy2(num);
    console.log(test);
}
print(10);

// dividByBase
function baseConverter(decNum, base){
    var remStack = new Stack,
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    while (decNum > 0) {
        rem = Math.floor(decNum % base);
        remStack.push(rem);
        decNum = Math.floor(decNum / base);
    }

    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }
    console.log(baseString);
    return baseString;

}
baseConverter(100345, 2);
baseConverter(100345, 8);
baseConverter(100345, 16);