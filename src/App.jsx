import './App.css'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'

function App(){
  const handleSignUpSubmit = data => {
    console.log('Sign Up data',data)
  }

  const handleUpdateUpSubmit = data => {
    console.log('Update Profile data',data);

  }

  return (
    <>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm formTitle={"Sign Up"} submitBtnText={'Sign Up'} handleSubmit={handleSignUpSubmit}></ReuseableForm>
      <ReuseableForm formTitle={"Profile Update"} submitBtnText='Update' handleSubmit={handleUpdateUpSubmit}></ReuseableForm>
    </>
  )
}

export default App
