import { useState } from "react"

const AddPassword=(props)=>{
    let [count,setCount]=useState(0)
    const [title,setTitle]=useState("")
    const [password,setPassword]=useState("")

    const setTitleHandle=(e)=>{
        setTitle(e.target.value)
    }
    const setPasswordHandle=(e)=>{
        setPassword(e.target.value)
    }


    const handleFormSubmit=(e)=>{
        e.preventDefault();
        setCount(count=count+1)
        const obj={
            'title':title, 'password':password, 'id':Math.random()
        }
        props.onSaveDetails(obj)
        setTitle("")
        setPassword("")

    }
    const ul=document.querySelector('ul')
    const handleDeleteButton=(e)=>{
        setCount(count-1)
        const del=e.target.parentElement;
        ul.removeChild(del)
    }
    const handleEditButton=(e)=>{
        
        setTitle(title)
        setPassword(password)
        setCount(count-1)
        const del=e.target.parentElement;
        ul.removeChild(del)
    }
    const listPass=(props.passwords.map((password)=>{
        return (
            <li key={password.id}>
                {password.title+"  "+password.password}
                <button type="click" onClick={handleEditButton}>Edit</button>
                <button type="click" onClick={handleDeleteButton}>Delete</button>
            </li>
        )
    }))
    return(
        <>
        <h1 style={{textAlign:"center"}}>Password Keeper</h1>
        <p style={{textAlign:"center"}}>Total Passwords:{count}</p>
        <button type="click" >Search</button>
        <input type="text" /><br/><br/><br/><br/>
        <br />
        <form onSubmit={handleFormSubmit}>
            <label  htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={setTitleHandle}/> <br/>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" value={password} onChange={setPasswordHandle}/><br/>
            <button type="submit">Add</button>
        </form>
        <br />
        <br />
        <br />
        <p>All Passwords</p>
        <ul>
            {listPass}
        </ul>
        
        </>
    )
}

export default AddPassword;