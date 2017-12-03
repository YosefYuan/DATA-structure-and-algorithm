function Dictionary() {
    var items = {};

    this.has = function (key) {
        return key in items;
    };

    this.set = function (key, value) {
        items[key] = value;
    };

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function () {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    // 以下同gather中的方法
    this.clear = function () {
        items = {};
    };

    this.size = function () {
        return Object.keys(items).length;
    };

    this.keys = function () {
        return Object.keys(items);
    };
    // 以上同gather中的方法

    this.getItems = function () {
        return items;
    }
}

// var dictionary = new Dictionary();
// dictionary.set('name1', 'name1@test.com');
// dictionary.set('name2', 'name2@test.com');
// dictionary.set('name3', 'name3@test.com');

// console.log(dictionary.has('name1'));
// console.log(dictionary.size());


// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('name2'));

// dictionary.remove('name1');

// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.getItems());


