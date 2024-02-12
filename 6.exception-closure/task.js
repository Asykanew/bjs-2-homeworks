function parseCount(value) {
    if(isNaN(Number.parseFloat(value))) {
       throw new Error('Невалидное значение');
    } else {
        return Number.parseFloat(value);
    }
}

function validateCount(value) {
   try {
   return parseCount(value);
   } catch(error) {
    console.log(error);
   }
}