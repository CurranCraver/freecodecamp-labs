// Challenge 1
fetch('https://randomuser.me/api/')
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data)
    })

// Challenge 2
fetch('httts:/brokenURL.bruuh/api/')
    .then((res)=> res.json)
    .then((data) => {
        console.log("Data exists here:", data)
    })
    .catch((error)=> {
        console.error("Error:", error)
    })

// Challenge 3
fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((res)=> res.json())
    .then((data)=> {
        let storeDataName = data.forEach(data => data.title)
    })
    .catch((error)=> {

    })
// Challenge 4
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {res.json()})
    .then((data) => {
        let storeData = data.map(data => data.id / 2)
        return fetch('https://jsonplaceholder.typicode/posts?userId=1')
    })
    .then((res => res.json))
    .then((posts) => {
        console.log("Posts:", posts)
        posts.forEach(post => console.log(post.title));
    })
    .catch((error)=> {
        console.error("Error:", error);
    })
// Challenge 5
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        return users
        .map(user => user.name)
        .sort(a, b => a.localeCompare(b));
    })
    .then((sortedNames) => {
        console.log("Sorted Names:", sortedNames)
    })
    .catch((error)=> {
        console.error("Error:", error);
    })
// Challenge 6
fetch('https://jsonplaceholder.typice.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({title: 'New Post', body: 'Content', userId: 1})
}) 
    .then((res)=> {
        res.json()})
        .then((data) {
            console.log("Created post:", data)
        })
    .catch(error){
        console.error("Catch Error:", error)
    };
// Challenge 7
fetch('https://jsonplaceholder.typice.com/posts/1', {
    method: "PUT",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({title: "Updated Title"})})
    .then((res)=>  res.json())
    .then((data)=> console.log(data))
    .catch((err) => {
        console.error("Error:", err)
    })
// Challenge 8 
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: "DELETE"
})
.then((res)=>  res.json())
    .then((data)=> console.log(data))
    .catch((err) => {
        console.error("Error:", err)
    })
// Challenge 9
 async function getUser() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await res.json()
        console.log(data.name)
    } catch (err) {
        console.error(err);
    }
 }
 getUser()
// Challenge 10

async function getDog {
    try {
        const res =  await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.error(err);
    }
};
// Challenge 11

const getUsers = async() => {
    try {
        const res1 = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const res2 = await fetch('https://jsonplaceholder.typicode.com/users/2')
        const res3 = await fetch('https://jsonplaceholder.typicode.com/users/3')

        const user1 = await res1.json()
        const user2 = await res2.json()
        const user3 = await res3.json()

        console.log(user1.name)
        console.log(user2.name)
        console.log(user3.name)
    } catch (err) {
        console.error(err)
    }
}


