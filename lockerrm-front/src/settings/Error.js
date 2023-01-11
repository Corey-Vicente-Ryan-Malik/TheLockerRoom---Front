import holup from '../images/holup.jpeg';
import React from 'react';

export default function Error() {
  return (
    <div className="ErrorPage" style={ErrorPage}>
      <img style={Image} src={holup} />

      <h1>404...That page doesn't exist big fella.</h1>
    </div>
  );
}

const ErrorPage = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '15px auto',
};
const Image = {
  height: '50%',
  width: '50%',
};
