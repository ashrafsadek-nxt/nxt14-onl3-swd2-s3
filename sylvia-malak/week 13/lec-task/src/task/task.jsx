import React , {useState} from "react"
import Page from "./page2";
import './task.css';
function Reg(){

    const [name , setName]=useState('');
    const [submit , setSubmit] = useState(false);

    const handleSubmit = (e) =>{ e.preventDefault () ;
        if (name.trim()) {
            setSubmit(true);
        }
    };


    return(
        <>
        {!submit ? (
            <>
                <input
                    type="text"
                    value={name}
                    placeholder="Enter your name.."
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </>
        ) : (
            <Page name={name}/>
        )}
        </>
    );
}
export default Reg;