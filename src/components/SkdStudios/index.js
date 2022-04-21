import { useState } from 'react'
import WorkImg1 from '../../assets/images/skd-device-view.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Sidebar from '../Sidebar'
import './index.scss'
import { Link } from 'react-router-dom'

const SkdStudios = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useState(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="case-study-page">
          <span className="container tags top-tags">
            <span className="top-tag-html">&lt;html&gt;</span>
            <br />
            <span className="body-tag">&lt;body&gt;</span>
          </span>

          <div className="skd-studios-page">
            <div className="container text-area">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    'S',
                    'K',
                    'D',
                    ' ',
                    'S',
                    't',
                    'u',
                    'd',
                    'i',
                    'o',
                    's',
                  ]}
                  idx={15}
                />
              </h1>
            </div>

            <div className="details-row container">
              <ul className="details-text">
                <li>
                  <p className="details-title">ROLE</p>
                  <p>UI Designer & Front-end Developer</p>
                </li>
                <li>
                  <p className="details-title">DATE</p>
                  <p>2021</p>
                </li>
                <li>
                  <p className="details-title">OVERVIEW</p>
                  <p>
                    Creating a branded website for California interior design
                    company
                  </p>
                </li>
              </ul>
            </div>
            <div className="container work-img-1">
              <img src={WorkImg1} alt="SKD studios device views" />
            </div>

            <div className="container work-text-area">
              <div className="text-wrap">
                <h2 className="title">CONCEPT</h2>
                <p className="text">
                  Since the university is near and the main target is students,
                  I tried to create a stylish atmosphere with a Western feel,
                  rather than the inorganic atmosphere of a typical hair salon.
                  For the key visual, I took a picture of the tools and hair
                  styling products that I usually use, and adjusted it to look
                  like a magazine while producing a feeling of commitment and
                  craftsmanship. The main color is a slightly darker floor in
                  the store, and is adjusted so that there is no difference in
                  atmosphere from the inside of the store.
                </p>
              </div>
            </div>

            <div className="big-image"></div>

            <div className="container work-text-area">
              <div className="text-wrap">
                <h2 className="title">DEVELOPMENT</h2>
                <p className="text">
                  Since the university is near and the main target is students,
                  I tried to create a stylish atmosphere with a Western feel,
                  rather than the inorganic atmosphere of a typical hair salon.
                  For the key visual, I took a picture of the tools and hair
                  styling products that I usually use, and adjusted it to look
                  like a magazine while producing a feeling of commitment and
                  craftsmanship. The main color is a slightly darker floor in
                  the store, and is adjusted so that there is no difference in
                  atmosphere from the inside of the store.
                </p>
              </div>
            </div>

            <div className="container cta">
              <p>HAVE AN IDEA?</p>
              <Link className="flat-button" to="/contact">
                LET'S CHAT
              </Link>
            </div>
          </div>

          <span className="container tags bottom-tags">
            <span className="body-tag">&lt;/body&gt;</span>
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default SkdStudios
