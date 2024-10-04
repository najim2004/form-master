import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name , handleNameChange]=useInputState('najim');
    const emailState=useInputState('najim@gamil.com');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-gray-300 p-5 space-y-4">
                <input  type="text" name="name" id="" placeholder="Name" />
                <br />
                <input {...emailState} type="email" name="email" id="" placeholder="Email" />
                <br />
                <input  type="text" name="password" id="" placeholder="password" />
                <br />
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;