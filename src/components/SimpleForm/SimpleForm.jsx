
const SimpleForm = () => {
    
    const handleSubmit = e=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-gray-300 p-5 space-y-4">
            <input type="text" name="name" id="" placeholder="Name" />
            <br />
            <input type="email" name="email" id=""  placeholder="Email"/>
            <br />
            <input type="text" name="phone" id=""  placeholder="Phone"/>
            <br />
            <input className="btn" type="submit" value="Submit" />
        </form>
        </div>
    );
};

export default SimpleForm;