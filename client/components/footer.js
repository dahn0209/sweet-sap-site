import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>189-11 Northern Blvd, Flushing, NY 11358</p>
        <p>TEL: (718)-225-1000</p>
        <ul className="socials">
          <li>
            <a
              href="https://www.facebook.com/TheSweetSap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/thesweetsap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy;2023 by Sweet Sap Inc.</p>
      </div>
    </footer>
  )
}

export default Footer
