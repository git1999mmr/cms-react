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
          <a
            href="https://www.google.com/maps?q=1st+Ave,+Adyar,+Chennai,+Tamil+Nadu+600020&rlz=1C1GCEA_enIN998IN998&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjl9uDRmqn4AhX--jgGHTrCBccQ_AUoAXoECAEQAw"
            target="_blank"
            rel="noreferrer"
          >
            1st Ave, Adyar, Chennai, Tamil Nadu 600020
          </a>
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
