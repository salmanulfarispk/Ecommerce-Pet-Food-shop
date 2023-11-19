import React from 'react'
import { MDBCardImage ,MDBRow,MDBCol,MDBCard } from 'mdb-react-ui-kit';


const Group = () => {
  return (
    <div>

<h2 className='mt-4 ms-3' style={{textAlign: 'center', color:'black' }}>
        <strong>In The Spotlight</strong>
      </h2>
<MDBCardImage  className='ms-5'
            // src='https://www.all4pets.in/wp-content/uploads/2021/07/001.png'
            src='https://www.all4pets.in/wp-content/uploads/2021/07/hot.jpeg'
            
            alt='...'
            width='93%'
          />
        


       
<MDBRow className='row-cols-1 row-cols-md-5 g-5  ms-5 me-5'>
      <MDBCol>
        <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
           
            src='https://www.petsy.online/cdn/shop/files/h-dog-offer2_184x184.png?v=1682335306'
          
            alt='...'
            position='top'
           
          />
         
         </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
           
            src='https://www.petsy.online/cdn/shop/files/h-dog-offer4_184x184.png?v=1682335306'
            alt='...'
            position='top'
          
          />
          
       </MDBCard>
      </MDBCol>



      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
       <MDBCardImage
       
         src='https://www.petsy.online/cdn/shop/files/h-cat-offer2_184x184.png?v=1682335305'
         alt='...'
         position='top'
       
       />
       
    </MDBCard>
   </MDBCol>



   <MDBCol>
   <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
       <MDBCardImage
        
         src='https://www.petsy.online/cdn/shop/files/h-dog-offer4_184x184.png?v=1682335306'
         alt='...'
         position='top'
       
       />
       </MDBCard>
    
   </MDBCol>


   <MDBCol>
   <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
       <MDBCardImage
         
         src='https://www.petsy.online/cdn/shop/files/h-cat-offer5_184x184.png?v=1682335756'
         alt='...'
         position='top'
       
       />
       
    </MDBCard>
   </MDBCol>
    
    </MDBRow>
   <br/><br/>
    </div>
  )
}

export default Group