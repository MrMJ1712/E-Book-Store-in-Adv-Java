import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';

export function FooterBar() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: '#6e6d6d' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-black' href='http://localhost:3000/homepage '>
            E-bookStore.com
          </a>
        </div>
      </MDBFooter>
);
}