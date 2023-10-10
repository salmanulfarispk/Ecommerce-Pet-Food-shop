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

   <h3 className='mt-5 ms-2'><strong>High Rated Brands/Stores</strong></h3>
    <MDBRow className='row-cols-1 row-cols-md-5 g-2 mt-4'>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://img.freepik.com/premium-psd/creative-pet-store-pet-food-store-social-media-template_19856-277.jpg?size=626&ext=jpg&ga=GA1.2.1874802293.1695474404&semt=ais'
            alt='...'
            position='top'
          />
       
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://img.freepik.com/premium-psd/pet-store-social-media-promotion-instagram-banner-post-design-template_205739-337.jpg?size=626&ext=jpg&ga=GA1.2.1874802293.1695474404&semt=ais'
            alt='...'
            position='top'
          />
        
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://img.freepik.com/premium-psd/pet-care-service-promotion-social-media-instagram-post-banner-template_159024-196.jpg?size=626&ext=jpg&ga=GA1.1.1874802293.1695474404&semt=sph'
            alt='...'
            position='top'
          />
         
        </MDBCard>
      </MDBCol>
       <MDBCol>
       <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://img.freepik.com/free-psd/squared-flyer-pet-adoption-with-dog_23-2148559316.jpg?size=626&ext=jpg&ga=GA1.1.1874802293.1695474404&semt=sph'
            alt='...'
            position='top'
          />
        
        </MDBCard>
      </MDBCol>
   
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://img.freepik.com/free-psd/dog-food-flyer-template_23-2148516355.jpg?size=626&ext=jpg&ga=GA1.1.1874802293.1695474404&semt=sph'
            alt='...'
            position='top'
          /> 
        </MDBCard>
      </MDBCol>






      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.shopify.com/s/files/1/1199/8502/files/Cat_Vet_Life_Wet.webp?v=1690299260'
            alt='...'
            position='top'
          /> 
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.shopify.com/s/files/1/1199/8502/files/Cat_Sheba_Wet.webp?v=1690299260'
            alt='...'
            position='top'
          /> 
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.shopify.com/s/files/1/1199/8502/files/Cat_Royal_Canin_Dry.webp?v=1690299260'
            alt='...'
            position='top'
          /> 
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.shopify.com/s/files/1/1199/8502/files/Cat_MAtisse_Dry.webp?v=1690299260'
            position='top'
          /> 
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            src='https://cdn.shopify.com/s/files/1/1199/8502/files/Cat_Whiskas_Dry.webp?v=1690299260'
            alt='...'
            position='top'
          /> 
        </MDBCard>
      </MDBCol>


  

    </MDBRow>
    <br/>
    <hr/>


</>





  )
}

export default Ads


