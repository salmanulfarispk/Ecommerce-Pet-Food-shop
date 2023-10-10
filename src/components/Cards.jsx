import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
  
      // MDBNavbar,
      // MDBContainer,
      // MDBNavbarBrand,
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

  

const Cards = () => {
     const navigate=useNavigate()
  return (
    <div>
        

        <h2 className=' mt-5 ms-3'><strong>Recommended products</strong></h2>

      <MDBRow className=' row-cols-1 row-cols-md-3 g-3 mt-3'>
      





      <MDBCol>
        
        <MDBCard   className='bg-image rounded hover-zoom hover-overlay'
        onClick={()=> navigate('/Dogsfood')}>
          <MDBCardImage
            src='https://www.marshallspetzone.com/img/cms/JAN%20UPDATE/jan%20update%202/1%20(14).jpg'
            alt='...'
            position='top'
            
          />
          <MDBCardBody>
            <MDBCardTitle>Dog foods</MDBCardTitle>
            <MDBCardText>
            Dog food is a specialized type of pet food specifically formulated to meet the nutritional needs of dogs.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        
      </MDBCol>






      <MDBCol>
       
        <MDBCard className='bg-image rounded hover-zoom hover-overlay'
         onClick={()=>{
             navigate('/catsfood')
         }}
        
        >
          <MDBCardImage
            src='https://www.marshallspetzone.com/img/cms/JAN%20UPDATE/jan%20update%202/1%20(13).jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Cat foods</MDBCardTitle>
            <MDBCardText>
            Cat food is a specialized type of pet food designed to meet the unique nutritional needs of domestic cats. 
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        
      </MDBCol>





      <MDBCol>
      <MDBCardTitle>Available Soon</MDBCardTitle>
        <MDBCard  className='bg-image rounded hover-zoom hover-overlay'>
        
          <MDBCardImage 
            src='https://images.pexels.com/photos/4266777/pexels-photo-4266777.jpeg?auto=compress&cs=tinysrgb&w=400' 
            alt='...'
            position='top'
            onClick={()=>{
              navigate('/fishfoods')
            }}
          />
           <MDBCardImage
            src='https://images.pexels.com/photos/322244/pexels-photo-322244.jpeg?auto=compress&cs=tinysrgb&w=400'
            position='top'
            onClick={()=>{
              navigate('/birdfoods')
            }}
          />
          <MDBCardBody>
         
          <MDBCardTitle>"Exciting News for Bird and Fish Owners!</MDBCardTitle>
            <MDBCardText>
            Our team of experts has been working diligently to create premium food options that cater to the unique dietary needs of birds and fish, ensuring they thrive.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol> 


      
    </MDBRow>
    <br/>
    <hr/>

   

    </div>
  )
}

export default Cards