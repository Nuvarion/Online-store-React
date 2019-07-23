import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer text-center font-small mt-4 blue">

            <div className="pt-3 pb-3">
                <a href="/" className="">
                    <i className="fab fa-facebook mr-3"></i>
                </a>
                <a href="/" className="">
                    <i className="fab fa-twitter mr-3"></i>
                </a>
                <a href="/" className="">
                    <i className="fab fa-youtube mr-3"></i>
                </a>
                <a href="/" className="">
                    <i className="fab fa-google-plus mr-3"></i>
                </a>
                <a href="/" className="">
                    <i className="fab fa-dribbble mr-3"></i>
                </a>
                <a href="/" className="">
                    <i className="fab fa-github mr-3"></i>
                </a>
            </div>
            <div className="footer-copyright py-2">
                Nuvarion
            </div>
      </footer>
    )
}

export default Footer;