import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
export const Contact = () => {
  return (
    <section className="contact" style={{ position: 'relative' }}>
      <div
        style={{
          borderRadius: '25px',
          border: '4px solid #0080a0',
          padding: '20px',
          width: '700px',
          height: '400px',
          marginTop: '10%',
          marginLeft: '5%',
          boxAlign: 'center',
          fontSize: '1.3rem',
          fontWeight: '400'
        }}
      >
        <h1 className="text-dark" style={{ fontWeight: '600' }}>
          <i className="fa fa-building" aria-hidden="true"></i> Contact Details
        </h1>
        <br />
        <h4 className="text-info #nav_next" style={{ fontWeight: '400' }}>
          E-mail : <Link to=""> rcms@gmail.com </Link>
        </h4>
        <br />
        <h4 className="text-info" style={{ fontWeight: '400' }}>
          Mobile : 9361612287
        </h4>
        <br />
        <h4 className="text-info" style={{ fontWeight: '400' }}>
          Address :
          <Link id="nav_next" to="">
            Millers Rd, Vasanth Nagar, Bengaluru, Karnataka 560051
          </Link>
        </h4>
        <br />
        <h4 style={{ fontWeight: '400' }}>
          <Link className="btn btn-primary" id="nav_next" to="/privacypolicy">
            Privacy Policy
          </Link>
        </h4>
        <br />
      </div>
    </section>
  );
};
