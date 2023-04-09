((min, max) => {
    let count = 0;
    
    for(let i = min; i < max; i++) {
      if(i % 3 === 0) {
        count++;
      }
    }
    
    alert(`Existem ${count} números divisíveis por 3 no intervalo de ${min} a ${max}.`);
  })(1, 1000);
  