const getLocation = () => {
    return new Promise((resolve,reject) => {
        navigator.geoLocation.getCurrentPosition(resolve, reject)
    })
}

getLocation()
    .then((position) => {
        console.log('Lat:', position.coords.latitude);
        console.log('Lon:', position.coords.longitude)
    })
    .catch((error) => {
        console.error('Error:', error.message)
    })