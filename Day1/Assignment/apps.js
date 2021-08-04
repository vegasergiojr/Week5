// a08a251f

const display = document.getElementById("display")

let request = new XMLHttpRequest()
request.open('GET', 'https://www.omdbapi.com/?s=batman&apikey=a08a251f')
request.send()

request.addEventListener('load', function(){
    console.log(this.responseText)
    let posts = JSON.parse(this.responseText)
    const postItems = posts.Search.map(function(post){
        return postItem = `
        <div id="insideDisplay"> 
            <h3>${post.Title}</h3>
            <a><img class="batmanIcon" src="${post.Poster}"></a>
            <p>${post.Year}</p>
            <p>${post.Type}</p>
        </div>
        `
    })
    display.innerHTML = postItems.join("")
})


