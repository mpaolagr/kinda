import React, { Component } from 'react';
import './Footer.css';
import { BsMessenger  } from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';


export class Footer extends Component {
 render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-auto">
              <span className="footer-text">© 2023 Jardín de Victoria S.R.L. | Todos los Derechos Reservados</span>
            </div>
            <div className="col-auto">
              <span className="social-icons">
                <FaFacebookSquare className="icon" />
                <FaInstagram className="icon" />
                <BsMessenger className="icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
