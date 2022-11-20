import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="component">
      <h3>Your ladder to success</h3>
      <Carousel interval={2000} className="carousel">
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://www.betterplace.co.in/blog/wp-content/uploads/2020/02/Blog-articles-staffing-and-recruitment_1-1-1.jpg.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>One Stop Destination for all your Job searches!</h3>
          <p>Multitude no of jobs available from our website.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://media-exp1.licdn.com/dms/image/C4D12AQEZV-eiExdBCA/article-inline_image-shrink_1000_1488/0/1646760911734?e=1674086400&v=beta&t=AR2KpeDWKt_4Q2-Nv5dhY8ZilZGeBiprym1vgUDXN9s"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>MNCs and Start Up Jobs</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=2000"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Jobs just according to your needs</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home;