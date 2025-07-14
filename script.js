const form = document.querySelector('form')
//the usecase given below will give you empty 
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e) {
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const result = document.querySelector('#result').value

   if(height === '' || height <0|| isNaN(height)) {
       result.innerHTML = 'Please enter valid values for height.'
       
   }
});