setTimeout(()=>{

fetch("https://jsonplaceholder.typicode.com/posts",{

method:"POST",

body:JSON.stringify({
name:"Veera"
})

})
.then(response=>response.json())
.then(data=>console.log("Success"))
.catch(error=>console.log("Failed"));

},2000);