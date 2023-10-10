import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBCard,
  MDBCardImage,

  MDBRow,
  MDBCol
  } from 'mdb-react-ui-kit';
 


const Pictures = () => {

  return (
    <div>
        
         <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-5'>
      <MDBCol>
        <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage 
            src='https://cdn.media.amplience.net/i/petsathome/hp-promo-ownbrand-dogfood-aug23/.webp?w=720&'
            alt='...'
            position='top'
          />
        
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.media.amplience.net/i/petsathome/hp-promo-new-in-tinkerbell_1/.webp?w=640&'
            alt='...'
            position='top'
          />
         
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.media.amplience.net/i/petsathome/so-promo-phase-save-30-cat-accessories/.webp?w=720&'
            alt='...'
            position='top'
          />
          
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.media.amplience.net/i/petsathome/hp-promo-vip-refresh_1/.webp?w=640&'
            alt='...'
            position='top'
          />
          
        </MDBCard>
      </MDBCol>
     
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src=' https://cdn.media.amplience.net/i/petsathome/hp-promo-new-in-harry-potter-fashion-p7/.webp?w=720&'
            alt='...'
            position='top'
          />
          
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.media.amplience.net/i/petsathome/hp-promo-fleaandworm-july23/.webp?w=880&'
            alt='...'
            position='top'
          />
          
        </MDBCard>
      </MDBCol>

    </MDBRow>





   
    <br/>








    </div>
  )
}

export default Pictures