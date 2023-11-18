import React from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

  

const Ads = () => {
  
  return (
   <>
  <br/>
<h2 className='mt-5 ' style={{ textAlign: 'center',color:'black' }}>
        <strong>Exclusive Brands</strong>
      </h2>
    <MDBRow className='row-cols-1 row-cols-md-4 g-4 mt-3 ms-3 me-3'>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.petsworld.network/v1/s/images/50267F3EED76467FE20A3A5B9846AE98/1920.webp'
            alt='...'
            position='top'
            height='550px'
          />
       
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.petsworld.network/v1/s/images/96334863977D7FEAEB5FA0D1766299E5/1920.webp'
            alt='...'
            position='top'
            height='550px'

          />
        
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.petsworld.network/v1/s/images/50267F3EED76467FE20A3A5B9846AE98/1920.webp'
            alt='...'
            position='top'
            height='550px'

          />
         
        </MDBCard>
      </MDBCol>
       <MDBCol>
       <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://www.all4pets.in/wp-content/uploads/2021/07/001.png'
            alt='...'
            position='top'
            height='550px'

          />
        
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br/>
    

</>





  )
}

export default Ads


