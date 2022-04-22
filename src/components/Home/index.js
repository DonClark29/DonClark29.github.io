import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/donclark-logo-red.svg'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'D', 'o', 'n', ' ', 'C', 'l', 'a', 'r', 'k', ',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useState(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={26}
            />
          </h1>
          <h2>Frontend Developer / Javascript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="my-work-zone">
          <p>My Work</p>

          <Link to="/skd-studios" className="image-over">
            <div className="image-cover"></div>
            <div className="image-cover"></div>
          </Link>

          <Link to="/skd-studios" className="view-work-button">
            VIEW CASE STUDY
          </Link>
        </div>

        {/* <Logo /> */}
      </div>
    </>
  )
}

export default Home
