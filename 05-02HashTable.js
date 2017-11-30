function HashTable() {
    var table = [];

    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };

    this.get = function (key) {
        return table[loseloseHashCode(key)];;
    };

    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };
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
