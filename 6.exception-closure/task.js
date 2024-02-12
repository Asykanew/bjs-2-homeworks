function parseCount(value) {
    let count = Number.parseFloat(value);
    if(count == NaN) {
       throw new Error('Невалидное значение');
    } else {
        return count;
    }
}