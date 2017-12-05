function Search() {
    this.sequentialSearch = function (item) {
        for (var i = 0; i < array.length; i++) {
            if (item === array[i]) {
                return i;
            }
        }
        return -1;
    };

    this.binarySearch = function () {
        this.quickSort();

        var low = 0,
            high = array.length - 1,
            mid, element;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            element = array[mid];
            if (element < item) {
                low = mid + 1;
            } else if (element > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}