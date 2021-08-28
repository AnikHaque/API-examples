
loadData=()=>{
  // json placeholder
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  // getting response from the link and converting in json
    .then(response => response.json())
  //   doing something with the json data 
    .then(json => console.log(json))
}

  