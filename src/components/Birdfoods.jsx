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
{/* 
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
 */}











{/* 

<section style="background-color: #eee;">
  <div class="container py-5">
    <h4 class="text-center mb-5"><strong>Product listing</strong></h4>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
            class="w-100" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$123</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(2).webp"
            class="w-100" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$239</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(3).webp"
            class="w-100" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$147</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded ripple-surface">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
            class="w-100" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$83</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
            class="w-100" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$106</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(6).webp"
            class="w-100" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$58</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
 */}


















    </div>
  )
}

export default Birdfoods