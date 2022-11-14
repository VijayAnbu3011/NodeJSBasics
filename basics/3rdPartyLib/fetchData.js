 let axios=require('axios')

// fetch will not work in node so
// fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then(response => response.json())
//   .then(json => console.log(json))
// we use axios 3rd party lib
axios.get('https://jsonplaceholder.typicode.com/todos/')
.then(function(response){
    console.log(response.data);
})
.catch(function(error){
 console.log(error);
})