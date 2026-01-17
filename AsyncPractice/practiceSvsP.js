const getUsersSequential = async() => {
    console.time('Sequential');
    try {
        const res1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const res2 = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const res3 = await fetch('https://jsonplaceholder.typicode.com/users/3');

        const data1 = await res1.json();
        const data2 = await res2.json();
        const data3 = await res3.json();

        console.log(data1.name);
        console.log(data2.name);
        console.log(data3.name);
    } catch(err) {
        console.error(err)
    }
    console.timeEnd('Sequential');
}
getUsersSequential();


const getUsersParallel = async() => {
        console.time('Parallel');
    try {
        const [res1, res2, res3] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://jsonplaceholder.typicode.com/users/2'),
            fetch('https://jsonplaceholder.typicode.com/users/3'),
        ])
        const [user1, user2, user3] = await Promise.all([
            res1.json(),
            res2.json(),
            res3.json()
        ])
        console.log('User 1:', user1.name);
        console.log('User 2:', user2.name);
        console.log('User 3:', user3.name);
    } catch (err) {
        console.error(err)
    }
    console.timeEnd('Parallel');
}
getUsersParallel()
