let loadPage = () => {
    fetch(`/phrase`)
    .then(res=> res.json())
    .then(data=>console.log(data))
    .catch(e=> console.log(e))
}