function LinkedList() {
    var Node = function (ele) {
        this.ele = ele;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function (ele) {

        var node = new Node(ele),
            current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        length++;
    };
    this.insert = function (position, ele) {
        // 检查越界值
        if (position >= 0 && position <= length) {
            var node = new Node(ele),
                current = head,
                previous,
                index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++; //更新列表的长度

            return true;
        } else {
            return false;
        }
    };
    this.removeAt = function (position) {
        // 检查越界值
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;

            // 移除第一项
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {

                    previous = current;
                    current = current.next;
                }

                // 将previous与current的下一项链接起来:跳过current，从而移除它
                previous.next = current.next;
            }
            length--;
            return current.ele;
        } else {
            return null;
        }
    };
    this.remove = function (ele) {
        var index = this.indexOf(ele);
        return this.removeAt(index);
    };
    this.indexOf = function (ele) {

        var current = head,
            // index = -1;  //原始 可能有误
            index = 0;

        while (current) {
            if (ele === current.ele) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function () {
        return length === 0;
    };
    this.size = function () {
        return length;
    };
    this.toString = function () {

        var current = head,
            string = '';

        while (current) {
            string += current.ele;
            current = current.next;
        }
        return string;
    };
    this.print = function () {};
    this.getHead = function () {
        return head;
    }
}

var list = new LinkedList();
list.append(15);