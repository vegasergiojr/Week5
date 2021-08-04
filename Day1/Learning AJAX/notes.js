const display = document.getElementById("display")

//creating an asynchrous request object
// types of requests
// GET-Get the resource from the server
// POST-Create new content
//PATCH-Update existing content or part of the content
//PUT-Updating existing content
let request = new XMLHttpRequest()  
request.open('GET', 'http://jsonplaceholder.typicode.com/posts')
request.send()

//The load function is a callback function which will be called back later...
request.addEventListener('load', function(){
    //this prints out the string version in the console. Which is good for testing to see if you are getting what you requested. 
    console.log(this.responseText)
    //this turns the string into valid json format
    let posts = JSON.parse(this.responseText)
    //Now we are going to print out the JSON into HTML
    const postItems = posts.map(function(post){
        const postItem = `<li>${post.title}</li>`
        return postItem
    })
    display.innerHTML = postItems.join("")
    //Test to see if the JSON.parse has turned the string into valid JSON format
    //console.log(result)
})

//display.insertAdjacentText = display.join("")