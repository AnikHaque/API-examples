postsData = () => {

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => displayPosts(data))
}

displayPosts = (posts) => {
    console.log(posts)

const allPost = document.getElementById('all-post');

for(const post of posts){
    allPost.classList.add('hello')
const heading = document.createElement('h3');
heading.classList.add('post')
heading.innerHTML = `

<h1>${post.id}</h1>
<p>${post.title}</p>
`
allPost.appendChild(heading)

}


}