loadData = () => {
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(res => res.json())
.then(data => console.log(data))

}

// load data from users of json placeholder 
loadUsers = () => {

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data))

}