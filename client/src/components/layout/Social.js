import React from 'react';
import '../../App.css';
export const Social = () => {
  return (
    <div
      style={{
        marginTop: '0px',
        padding: '3rem',
        position: 'relative',
        float: 'left',
        fontSize: '1.5rem',
        color: 'rgb(8, 128, 128)',
        fontWeight: '800'
      }}
    >
      <div className="col-lg-6 col-md-9 col-sm-12">
        <div id="con7">
          <h3 id="c1" style={{ fontSize: '150%', whiteSpace: 'nowrap' }}>
            Follow Us On Social media
          </h3>
          <a
            id="nav_next"
            href="https://www.facebook.com/"
            className="nav-link"
            target="_blanc"
          >
            <i className="fab fa-facebook-f"></i>{' '}
          </a>
          <a
            id="nav_next"
            href="https://twitter.com/?lang=en"
            className="nav-link"
            target="_blanc"
          >
            <i className="fab fa-twitter"></i>{' '}
          </a>
          <a
            id="nav_next"
            href="https://www.instagram.com/"
            className="nav-link"
            target="_blanc"
          >
            <i className="fab fa-instagram"></i>{' '}
          </a>
          <a
            id="nav_next"
            href="https://www.linkedin.com/login"
            className="nav-link"
          >
            <i className="fab fa-linkedin"></i>{' '}
          </a>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Social;
