import React, { useContext } from 'react'
import { MDBInput,MDBBtn,MDBContainer,MDBCol,MDBRow,MDBCard,MDBCardBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';
import Nav from '../components/Nav';



const Login = () => {

  const navigate=useNavigate()
  const {user,setUsername,setLoggedin}=useContext(MyContext)
  // console.log(user);

   const getvalue=(event)=>{
    event.preventDefault();

    const getemail=event.target.typeEmail.value;
    const getpass=event.target.typePassword.value;

      // console.log(getemail);
      // console.log(getpass);

      const filteredUser=user.filter((item)=>{
        return item.email === getemail
      })

   if(filteredUser.length !== 0){
       
      if (filteredUser[0].password == getpass){
         setLoggedin((preValue)=>(preValue = !preValue));
          
         navigate('/') 
         setUsername(filteredUser[0].name)

      }else{
        alert("invalid details")
      }
    } else if (getemail === "admin@gmail.com" && getpass === "admin") {
      navigate("/adminhome");  //to admin home page
   


   }else{
    alert("user not available")
   }





   }
 

  return (
    <div className='bg-dark'>
      <Nav/>



<MDBContainer>

<MDBRow className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              {/* <Form> */}
              
              <p className="h4 text-center mb-4">Login</p>

  <form onSubmit={getvalue}>
     <MDBInput label='Email' id='typeEmail' type='email' /><br/>

        <MDBInput label='Password ..' id='typePassword' type='password' /><br/>

          <span  className='text-center text-primary'>forgot password?</span><br/><br/>
          <MDBBtn className='w-100'>Login</MDBBtn><br/><br/>


          <span>Not a member?<strong className='text-primary'onClick={()=>navigate('/register')} >Register</strong></span>
         

          </form> 
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    </div>
  )
}

export default Login