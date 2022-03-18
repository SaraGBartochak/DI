async function getUser() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data;
    } catch (e) {
      throw new Error (e);
    }
  }
getUser()

module.exports = {
    getUser
}