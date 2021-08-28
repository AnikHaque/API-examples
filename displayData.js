
displayUsers = () => {
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => displayAll(data))
}

displayAll = (users) => {
const ul = document.getElementById('show')
    for(const user of users){

        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.name ;
        ul.appendChild(li);
    }
}