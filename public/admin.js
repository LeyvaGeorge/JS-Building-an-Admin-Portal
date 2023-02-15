
// Your Code Here
let response = await fetch('http://127.0.0.1:3000/listBooks', {
    method: "GET",
    headers: null,
    body: null
});

let books = await response json();
console.log(books);

let response = await fetch('http://127.0.0.1:3000/updateBook', {
    methode: "PATCH",
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        "id": 3,
        "title" : "Legends of Arathrae",
    }),
});

let updateBook = await response.json();
console.log(updateBook)