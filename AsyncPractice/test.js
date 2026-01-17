console.log('🎉 It works!');

const fetchUser = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await res.json();
        console.log('User name:', user.name);
    } catch (err) {
        console.error('Error:', err);
    }
}

fetchUser();