function parseCount(value) {
    let count = Number.parseFloat(value);
    if(isNaN(count)) {
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