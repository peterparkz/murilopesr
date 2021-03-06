import { Link } from 'gatsby'
import React from 'react'

import Logo from './pic.jpg'

const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="cover-author-image">
            <Link to="/">
              <img src={Logo} alt={siteMetadata.author} />
            </Link>
          </div>
          <div className="author-name">Murilo</div>
          <p>Cientista, UX Designer e apaixonado por jogos, escrevendo sobre meu mundinho e tentando passar um pouco de conhecimento para quem estiver disposto a aprender.</p>
        </div>
      </header>
      <footer>
        <section className="contact">
          <h3 className="contact-title">Contato</h3>
          <ul>
            {siteMetadata.social.twitter && (
              <li>
                <a
                  href={`https://twitter.com/peterparkz${siteMetadata.social.twitter}`}
                  target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.facebook && (
              <li>
                <a
                  href={`https://facebook.com/${siteMetadata.social.facebook}`}
                  target="_blank"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.email && (
              <li>
                <a href={`mailto:murilopesr@gmail.com`} target="_blank">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </section>
        <div className="copyright">
          <p>
            {new Date().getFullYear()} &copy; Murilo Roque
          </p>
        </div>
      </footer>
    </aside>
  </>
)

export default Sidebar
