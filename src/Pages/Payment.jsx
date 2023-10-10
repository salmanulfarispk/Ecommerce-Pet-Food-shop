import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function Payment() {
  return (
    <MDBContainer className="py-5 ">
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">Payment details</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput label="Name" id="form1" type="text" />
                </MDBCol>

                {/* <MDBCol>
                  <MDBInput label="Last name" id="form2" type="text" />
                </MDBCol> */}
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Address"
                id="form3"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form4"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Phone"
                id="form5"
                type="number"
              />

              <hr className="my-4" />

              

              

              <h5 className="mb-4">Payment</h5>

              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Credit card"
                checked
              />

              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Debit card"
                wrapperClass="mb-4"
              />

             

              <MDBRow>
               
                <MDBCol>
                  <MDBInput
                    label="card number"
                    id="form7"
                    type="text"
                    wrapperClass="mb-4 w-50"
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="3">
                  <MDBInput
                    label="Exp"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4 "
                  />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput
                    label="CVV"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4  "
                  />
                </MDBCol>
              </MDBRow>

              <MDBBtn size="lg" block>
                Continue to Pay
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      
      </MDBRow>
    </MDBContainer>
  );
}