const getCurrentDateTime = () => {

    const current = new Date();
    const currDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    const currTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    const dateTime = currDate + ' ' + currTime;
    return dateTime;
}


module.exports = {

    getCurrentDateTime : getCurrentDateTime
}