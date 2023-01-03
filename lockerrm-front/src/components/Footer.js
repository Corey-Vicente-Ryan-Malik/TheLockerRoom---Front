import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>

        <div></div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                The Locker Room !
              </h6>
              <p>
                Here at The Locker Room, we are dedicated to giving our users
                the best experience possible. We ensure our users the most
                accurate and up-to-date news, scores, and stats. We are
                committed to giving a safe and fun environment for everyone in
                The Locker Room !
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Get The Scoop</h6>
              <p>
                <a href="/schedules" className="text-reset">
                  Scores
                </a>
              </p>
              <p>
                <a href="/news" className="text-reset">
                  News
                </a>
              </p>
              <p>
                <a href="/schedules" className="text-reset">
                  Schedules
                </a>
              </p>
              <p>
                <a href="/teams" className="text-reset">
                  Teams
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/register" className="text-reset">
                  Register
                </a>
              </p>
              <p>
                <a href="/forum" className="text-reset">
                  Forums
                </a>
              </p>
              <p>
                <a href="/home" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  About
                </a>
              </p>
            </MDBCol>

            {/*<MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>*/}
            {/*    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>*/}
            {/*    <p>*/}
            {/*        <MDBIcon color='secondary' icon='home' className='me-2' />*/}
            {/*        New York, NY 10012, US*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <MDBIcon color='secondary' icon='envelope' className='me-3' />*/}
            {/*        info@example.com*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89*/}
            {/*    </p>*/}
            {/*</MDBCol>*/}
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        <a href="#top">Back to top</a>
      </div>
    </MDBFooter>
  );
}
