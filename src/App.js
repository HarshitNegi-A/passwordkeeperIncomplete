import { useState } from "react";
import AddPassword from "./AddPassword"
import PasswordList from "./PasswordList";

const App=()=>{
    const [data,setData] = useState([])
    const [thisP,setThisP]=useState(data)
    const saveDetails=(enteredData)=>{
        setThisP(enteredData);
        const newData=[...data,enteredData]
        setData(newData);
    }
    console.log(data);
    
   return(
    <div>
        <AddPassword onSaveDetails={saveDetails} passwords={data} particular={thisP} />
        {/* <PasswordList passwords={data} particular={thisP} /> */}
    </div>
   )
}

export default App;