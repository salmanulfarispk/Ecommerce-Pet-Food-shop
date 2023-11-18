import React, { useContext } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import  { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBInputGroup,
    // MDBDropdown,
    // MDBDropdownToggle,
    // MDBDropdownMenu,
    // MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Search from '../Pages/Search';
import { MyContext } from '../Context';




const Nav = () => {

    const [showBasic, setShowBasic] = useState(false);
    const navigate=useNavigate()
    const [searchTerm,setsearchTerm]=useState('')
    const {username,setUsername,Loggedin,setLoggedin}=useContext(MyContext)
    
  
 
   
    const userlogout=()=>{
       setUsername("");        
       setLoggedin(!Loggedin)   
       }


  return (
    <div >
     

  
     
     <MDBNavbar   expand='lg' light bgColor='light'  style={{ height: '93px'}}>

      <MDBContainer fluid>
       
      <MDBNavbarBrand >
            <img
              src='https://cdn.powered-by-nitrosell.com/public_html/12/2853/themes/images/bwlogo_sml.png'
              height='50'
              alt='...'
              loading='lazy'
              onClick={()=>{
                navigate('/')
              }}
            />
          </MDBNavbarBrand>
        

       <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowBasic(!showBasic)}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        <MDBIcon icon='bars' className='text-black' />
      </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 me-5'>
            <MDBNavbarItem>
              <MDBNavbarLink
              onClick={()=>navigate('/')} >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

      
            <MDBNavbarItem>
              <MDBNavbarLink onClick={()=>navigate('/allproduct')}>All Products</MDBNavbarLink>
            </MDBNavbarItem>

          
          <MDBInputGroup className='mb-1  w-50' noBorder >
        <input className='form-control ms-3' type='search' placeholder='Search....' onChange={(e)=>{
               setsearchTerm(e.target.value)
        }}/>
      </MDBInputGroup>



          </MDBNavbarNav>


          {Loggedin != true ?   (      //(here loggedin already as true ,which means it shows login because there is no user there,when it changes to false its shows logpout and cart,because there is user)
            <> 
            <MDBBtn className='me-5 pe-5' color='info' onClick={userlogout}>Logout</MDBBtn> 
            
            <img className='me-5' src='https://img.icons8.com/?size=30&id=TdZUZUq3XNh6&format=gif'  width={'30px'} height={'30px'}   onClick={()=>{
              navigate('/cart')}}/>
               </>):   (           
               
               <>
               <MDBBtn className='me-5 ' onClick={()=>navigate('/login')}>Login</MDBBtn>   
               </>
               )}
           



            <MDBBtn className='bg-light me-5 text-dark' style={{boxShadow:'none'}}>
           <img className='bg-light' src='https://img.icons8.com/?size=80&id=rrtYnzKMTlUr&format=png ' width={'30px'} height={'30px'}
           
           />
            <strong>{username}</strong>
           </MDBBtn>
              
            
          
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <Search searchTerm={searchTerm}/>
        
    </div>
    
  )
}

export default Nav