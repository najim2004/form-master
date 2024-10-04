
const ReuseableForm = ({ handleSubmit, formTitle, submitBtnText = 'Submit' }) => {
    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleLocalSubmit} className="bg-gray-300 p-5 space-y-4">
                <input type="text" name="name" id="" placeholder="Name" />
                <br />
                <input type="email" name="email" id="" placeholder="Email" />
                <br />
                <input type="text" name="password" id="" placeholder="password" />
                <br />
                <input className="btn" type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;