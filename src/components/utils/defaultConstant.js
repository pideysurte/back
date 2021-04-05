const defaultConstants = {
 urlrest: "https://innovfact.com",
 // urlrest: "http://localhost:3000"
 token : localStorage.getItem("token"),
 myHeaders : new Headers({
    'Content-Type': 'application/json',
    'Authorization':localStorage.getItem("token")
 }),

}
export default defaultConstants;