import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap'

const Banner = () => {
  return (
    <div className="banner my-5">
        <Row>
        <Col>
        <div className="text-center" >
          <div className="title">
          <h3 className="container text-white">
            <span>New Collection</span>
            <strong>Winter'22/Spring'23</strong>
          </h3>
            <a href="https://www.youtube.com/watch?v=vBPgmASQ1A0&ab_channel=GEORGESHOBEIKA" target="blank" type="button" className="play-button"><FontAwesomeIcon icon={faPlayCircle} /></a>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  )
}


export default Banner;