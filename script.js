const form = document.querySelector('form')
//the usecase given below will give you empty 
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e) {
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid values for height ${height}.`
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid values for weight ${weight}.`
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>  `;
    }
  
       
   
});
