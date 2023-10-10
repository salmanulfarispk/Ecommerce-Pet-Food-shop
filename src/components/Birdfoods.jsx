import React, { useContext } from 'react'
import Nav from './Nav';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
   
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
import { MyContext } from '../Context';

const Birdfoods = () => {
  
    const {products}=useContext(MyContext)

    const birdprdcts=products.filter((item)=>
    item.type.toLowerCase()==="bird")
    

  return (
    <div>
       <div className='fixed-top fluid'><Nav/></div> 

<MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        
        {birdprdcts.map((item)=>(

        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            />
              <MDBCardImage
                src={item.src}
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
             
           
                <h5 className="ms-2">{item.name}</h5>
                
            
            <MDBCardBody className="pb-0">
            
            
            



              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
               
                <MDBBtn color="danger" className='ms-3 '>Available soon</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>




    </div>
  )
}

export default Birdfoods