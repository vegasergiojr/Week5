//Don't forget to call these people. They exist. They just shy. 
const friends = [{name: "Sergio"}, {name: "Eddy"}, {name: "Norton"}, {name: "Kaden"}]

const friendsUL = document.getElementById("friendsUL")
const noJoinUL = document.getElementById("noJoinUL")
//The const variable is used to loop through an array. 
const newArr = friends.map(function(x){ //x is what is used to call upon the friend array. 
    const friendTemplate = `<li>${x.name}</li>`
    return friendTemplate

})

console.log(newArr)

//with join
friendsUL.innerHTML = newArr.join("")
//without join
noJoinUL.innerHTML = newArr

