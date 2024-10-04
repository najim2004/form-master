import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-gray-300 p-5 space-y-4">
                <input ref={nameRef} type="text" name="name" id="" placeholder="Name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" placeholder="Email" />
                <br />
                <input ref={passwordRef} type="text" name="password" id="" placeholder="password" />
                <br />
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;