function HashTable() {
    var table = [];

    // var loseloseHashCode = function (key) {
    //     var hash = 0;
    //     for (var i = 0; i < key.length; i++) {
    //         hash += key.charCodeAt(i);
    //     }
    //     return hash % 37;
    // };

    // djb2HashCode函数
    var loseloseHashCode = function (key) {
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    }



    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;

        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    }

    this.put = function (key, value) {
        var position = loseloseHashCode(key);

        // console.log(position + ' - ' + key);
        // table[position] = value;

        if (table[position] == undefined) {
            table[position] = new ValuePair(key, value);
        } else {
            var index = ++position;
            while (table[index] != undefined) {
                index++;
            }
            table[index] = new ValuePair(key, value);
        }
    };

    this.get = function (key) {
        // return table[loseloseHashCode(key)];
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                return table[position].value;
            } else {
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    return table[index].value;
                }
            }
        }
        return undefined;
    };

    this.remove = function (key) {
        // return table[loseloseHashCode(key)];
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                table[index] = undefined;
            } else {
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    table[index] = undefined;
                }
            }
        }
        return undefined;
    };

    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };

    this.put = function (key, value) {
        var position = loseloseHashCode(key);

        if (table[position] == undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    };

    this.get = function (key) {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {

            // 遍历链表来寻找键/值
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
            }

            // 检查元素在链表第一个或最后一个节点的情况
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };

    this.remove = function (key) {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }

            // 检查是否为第一个或最后一个元素
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }

        return false;
    }
}

var hash = new HashTable();
hash.put('name1', 'name1@test.com');
hash.put('name2', 'name2@test.com');
hash.put('name3', 'name3@test.com');

console.log(hash.get('name1'));
console.log(hash.get('name2'));
console.log(hash.get('123'));

hash.remove('name2');
console.log(hash.get('name2'));