import { useState } from "react";

const StateFullForm = () => {
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [pass,setPass] = useState(null);
    const [error,setError] = useState('');
    const handleSubmit = e=>{
        e.preventDefault();
        if(pass.length<6){
            setError('Password must be at least 6 characters or longer');
        }else{
            setError('');
        }
        console.log(error);
        console.log(name);
        console.log(email);
        console.log(pass);
        
    }
    const handleEmailChange = e=>{
        setEmail(e.target.value);
    }
    const handleNameChange = e=>{
        setName(e.target.value);
    }
    const handlePassChange = e=>{
        setPass(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-gray-300 p-5 space-y-4">
                <input onChange={handleNameChange} type="text" name="name" id="" required placeholder="Name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" required placeholder="Email" />
                <br />
                <input onChange={handlePassChange} type="password" name="pass" id="" required placeholder="Password" />
                <p className="text-red-500 font-semibold">{error}</p>
                
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFullForm;