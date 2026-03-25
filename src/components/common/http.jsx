export const apiUrl = "https://vasanth-backend.onrender.com/api";


export const adminToken = () =>{
    const data =JSON.parse( localStorage.getItem('adminInfo'))
   
    return data.token;
}