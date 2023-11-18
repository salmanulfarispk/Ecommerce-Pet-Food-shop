import React, { useContext } from 'react'
import Nav from './Nav';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBRow,
    MDBCol,
      MDBContainer,
    
      MDBBtn
  } from 'mdb-react-ui-kit';
import { MyContext } from '../Context';
import {  useNavigate } from 'react-router-dom';
const Dogfoods = () => {

   const navigate=useNavigate()

    const {products}=useContext(MyContext)
    
    const Dogcategory=products.filter((item)=>
        item.type.toLowerCase()==="dog")
  return (
    <>
   
    <div><Nav/></div> 

    <MDBContainer fluid className="my-5">
      <MDBRow>
            { Dogcategory.map((item)=>(
              
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard className='bg-image rounded hover-zoom hover-overlay'
          >
         
            {/* <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}>
                <p className="text-white mb-0 small">x4</p>
              </div>
            </div> */}
            
            <MDBCardImage
              src={item.src}
              position="top"
              alt="photos"
              onClick={()=>{
                navigate(`/viewproduct/${item.id}`)
              }}
              />
          
            <MDBCardBody>
              <div className="d-flex justify-content-between">
            
                <p className="small text-danger">
                  <s>{item.price}</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">
                      {item.name}
                 </h5>
                <h5 className="text-dark mb-0">{item.price2}</h5>
              </div>
            </MDBCardBody>
            <MDBBtn className='bg-primary'onClick={()=>{
                navigate(`/viewproduct/${item.id}`)
           }}>
                View Details
            </MDBBtn>

          </MDBCard>
          </MDBCol>
            ))}
          </MDBRow>
         </MDBContainer>




    </>
  )
}

export default Dogfoods