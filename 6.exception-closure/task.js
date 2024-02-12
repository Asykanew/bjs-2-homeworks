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
   } 
   catch(e) {
    console.log(`
      error name   : ${ e.name }
      error message: ${ e.message }
    `);
    return 'ERROR';
  }
}