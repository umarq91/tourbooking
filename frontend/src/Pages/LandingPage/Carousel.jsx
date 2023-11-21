import Carousel from 'react-bootstrap/Carousel';
import slide1 from "./data/slide.jpg"
import slide2 from "./data/saif.jpg"
import slide3 from "./data/trip.jpg"
import { Link } from 'react-router-dom';

function CustomCarousel() {
  return (
    <div className='relative max-h-[80vh] z-10'>
      <div className="absolute z-10  w-full text-center flex flex-col justify-center  items-center md:top-1/2 top-1/3">
        <h1 className=" font-bold text-4xl md:text-6xl lg:text-7xl text-white">
          Explore Pakistan
        </h1>
        <p className='text-white'> With The Pakistan's Best Tour Organizers </p>
        <Link to={'/places'} className="bg-orange-400 text-white py-2 px-3 md:px-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
         Explore Tours
        </Link>
      </div>

      <Carousel style={{ maxWidth: '100%', maxHeight: '100%' }}>
        <Carousel.Item>
          <img
            className="object-cover w-full h-full"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>K2 Mountains</h5>
            <p>Come With us To the k2 Mountains of Pakistan.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="object-cover  w-full h-full"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Jheel Saif ul Maluk Pakistan</h5>
            <p>Tours on the most beautiful Places of Pakistan</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="object-cover  w-full h-full"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
