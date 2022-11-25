import { Carousel } from "react-bootstrap"
import img1 from '../../images/1.jpeg'
import img2 from '../../images/2.jpeg'
import img3 from '../../images/3.jpeg'
import './mycss.css'
interface IMycarousel { }
export const Mycarousel: React.FC<IMycarousel> = (props) => {
  return <>
    <Carousel>
      <Carousel.Item>
        <img height='450px' width='100%'
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sony Headset</h3>
          <p> *It Comes with 14mm bass booster drives* </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height='450px' width='100%'
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Samsung smart Watch</h3>
          <p>It has bluetooth calling feature</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height='450px' width='100%'
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fastrack Wrist Watches</h3>
          <p>Fastrack watches comes with premium quality </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
}

