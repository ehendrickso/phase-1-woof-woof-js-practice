//fetch pup info when pup button is clicked display pup info

fetch("localhost:3000/pups") 
.then((res) => res.json())
.then((data) => console.log(data))
