import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import Nav from '../components/Nav';
import {MDBContainer,MDBCard,MDBBtn,MDBCol,MDBCardImage,MDBRipple,MDBRow,MDBCardBody, } from 'mdb-react-ui-kit';

import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../Context';



const Viewproduct = () => {
  const navigate=useNavigate()
 
  const {products,cartt,setCart,Loggedin}=useContext(MyContext)

  const {id}=useParams()

  const maincard=products.filter((item)=>{         
    return item.id==id
  })                                                    

  //  console.log(maincard)

   const prdId=()=>{
    if (Loggedin == false){
        if(cartt.includes(maincard[0])){                     
          alert("The product is already added to cart")          
        }else{                                             
         setCart(()=>([...cartt,...maincard]))                           
          // alert("product succesfully added to your cart")   
        }
      }else {
            alert("Must login ")
            navigate('/login')
        }
   
      
   };
    

  return (
    <div>
    

   <div className='fixed-top fluid'><Nav/></div> 
       <br/><br/>
       <br/>
     
     <MDBContainer fluid >
      <MDBRow className="justify-content-center mb-0">
      { maincard.map((item)=>(

        <MDBCol md="12" xl="10">
       
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody >
              <MDBRow>

                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay w-500"
                  >
                    <MDBCardImage 
                      src={item.src}
                      fluid
                      className="w-100 "
                    />
                    {/* <a href="#!"> */}
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    {/* </a> */}
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5><strong>{item.name}</strong></h5>
                   <p>{item.description}</p>
                  <br/>
                 
                   

                  <div className="mt-1 mb-0 text-dark small">
                    {/* <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span> */}
                    <h4>Price:</h4> <h4 className="mb-1 me-1">{item.price2}</h4>
                    <br/>


                    <h6><strong>Quantity:
                    {/* <div className="form-outline me-1" style={{ width: '100px' }}> */}
                        <Form.Control type="number" defaultValue="1" className='w-25' />
                      {/* </div> */}
                      
                       </strong>
                    </h6>
                    
                    <MDBBtn color="primary" size="sm" className="mt-2 w-50" 
                      onClick={prdId} >
                      Add to Cart
                    </MDBBtn>
                   
                  

      
                  

                  </div>
                 
                  



                  
                  
                  {/* </div> */}
                 
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn outline color="primary" size="sm" className=" w-50"    onClick={()=>{
                         navigate('/cart')
                      }} >
                       BUY NOW
                    </MDBBtn>
                    
                  </div>
                </MDBCol>
             
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          

            </MDBCol>
        
        ))}
      </MDBRow>
      </MDBContainer>

     
    </div>
  )
}

export default Viewproduct