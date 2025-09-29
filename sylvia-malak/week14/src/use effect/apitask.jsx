import { useState, useEffect } from 'react';
 
function DisplayData()
{
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        
        const controller = new AbortController();
        const signal = controller.signal;
        let mounted = true;
 
        setLoading(true);
        setError(null);
 
        (async () => {
            try{
                const respond = await fetch(`https://jsonplaceholder.typicode.com/users/`, { signal });
                if(!respond.ok) throw new Error(`Http ${respond.status}`);
                const data = await respond.json(); 
                if(mounted) setUser(data);
                setLoading(false);

            } catch (err) {
                if(mounted) setError(err.message);
                setLoading(false);
            }
        })();
 
        return () => {
            mounted = false 
            controller.abort() 
        };
    }, []);
 
    if(loading) return <div>loading...</div>
    if(error) return <div>{error}</div>
 
    return (
        <div>
            <h3>Users:</h3>
            <ul>
                {user.map((u) => (
                    <>
                        <li key={u.id}>{`name : ${u.name}`}</li>
                        <li key={u.id}>{`email :${u.email}`}</li>
                        <li key={u.id}>{`phone : ${u.phone}`}</li>
                        <br></br>
                    </>
                ))}
            </ul>
        </div>
    );
}
 
export default DisplayData;