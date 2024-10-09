// import { useState } from "react"

// const PasswordList=(props)=>{
//     const [title,setTitle]=useState( document.getElementById("title").value)
//     const [password,setPassword]=useState( document.getElementById("value").value)
//     console.log(props)
//     const ul=document.querySelector('ul')
//     const handleDeleteButton=(e)=>{
//         const del=e.target.parentElement;
//         ul.removeChild(del)
//     }
//     const handleEditButton=(e)=>{
        
//         console.log(props.particular)
//         const del=e.target.parentElement;
//         ul.removeChild(del)
//     }
//     const listPass=(props.passwords.map((password)=>{
//         return (
//             <li key={password.id}>
//                 {password.title+"  "+password.password}
//                 <button type="click" onClick={handleEditButton}>Edit</button>
//                 <button type="click" onClick={handleDeleteButton}>Delete</button>
//             </li>
//         )
//     }))

//     return (
        
//     )
// }
// export default PasswordList;