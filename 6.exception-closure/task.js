function parseCount(value) {
    let count = Number.parseFloat(value);
    if(count == NaN) {
       throw new Error('Невалидное значение');
    } else {
        return count;
    }
}

function validateCount(value) {
   try {
   return parseCount(value);
   } catch(error) {
    console.error(error);
   }
}