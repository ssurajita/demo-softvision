function arrayCreate(array, size) {

    function iter(parts) {
        return function (v) {
            var temp = parts.concat(v);
            if (parts.includes(v)) {
                return;
            }
            if (temp.length === size) {
                result.push(temp);
                return;
            }
            array.forEach(iter(temp));
        }
    }

    var result = [];
    array.forEach(iter([]));
    return result;
}

console.log(arrayCreate([1, 2, 3], 3).map(a => a.join('')));