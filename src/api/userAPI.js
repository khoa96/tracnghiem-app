import Request from './Request';

export const registerUser = ({ params }) => {
    console.log(params)
     Request.post({
         url: "/api/users",
         params
     })
}
export const getUsers= () => {
    Request.get({
        url: "/api/users",
        headers : {
            
        }
        
    })
}