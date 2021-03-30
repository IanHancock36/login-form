import './index.css'
import React,{useState} from 'react' 

function App() {
  const [values,setValues] =useState({
    firstName: '',
    lastName : '', 
    email: '',
  })

  const [submitted, setSubmitted] =useState(false)

  const [valid,setValid] = useState(false)

  const handleFistNameInputChange =(event) => {
    event.persist()
    setValues((values)=> ({
      ...values, firstName:event.target.value
    }))
  }

    const handleLastNameInputChange = (event) => {
      event.persist() 
      setValues((values) => ({
        ...values, lastName: event.target.value 
      }))
    }
      const handleEmailInputChange =(event) => {
        event.persist()
        setValues((values)=> ({
          ...values, email:event.target.value
        }))
      }
    const handleSubmit = (event) =>{
      event.preventDefault();
      setSubmitted(true)
      if(values.firstName && values.lastName && values.email){
        setValid(true)
      }
      setSubmitted(true)
    }
    
  return (
    <div className='form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        {submitted && valid ?<div class = 'success-message'>Great! you are now registered Thank you!</div> : null}
      {/* {showSuccess &&  <div class = 'success-message'>Great! you are now registered Thank you!</div>} */}
        
        <input
        id='first-name'
        class='form-field'
        type='text'
        placeholder = 'First Name'
        name='firstName'
        value={values.firstName}
        onChange={handleFistNameInputChange}
        />
        {submitted && !values.firstName ?  <span id= 'first-name-error'>Please enter your First Name.</span> : null }
          
          <input
        id='last-name'
        class='form-field'
        type='text'
        placeholder = 'Last Name'
        name='lastName'
        values={values.lastName}
        onChange={handleLastNameInputChange}
        />
       {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> :null}
        
        <input
        id='email'
        class='form-field'
        type='text'
        placeholder = 'Email'
        name='email'
        values={values.email}
        onChange={handleEmailInputChange}
        />
      {submitted && !values.email ?  <span id= 'email-error'> Please enter an email address </span> :null}
    
      <button  class='form-field' type= 'submit' > Register </button>

      </form>
      
    
    </div>
  
  );
}

export default App;

// **** How could I make and handleInput change a higher order function and pass it in???? instead of doing 3 individual ones. **** hmmmm..... 
// notes
  // need 2 input fields user name and password
    // need a submit button
      // need an handleChange for the disabled button so when the paramters are met the login button will enable.
// State 
  // useState for values empty object 
    // plug values into inputs
// Inputs
  // need a handleChange for each one of the inputs (3) that listens to the change in the text field. 
    //handle change use event.persist ( )


// Succes or error messages 
 // Need to useState set to false and use a terinary operator
  // display the div or span when there is success or error. 


  // event.preventDefault stops the refresh from happening. 