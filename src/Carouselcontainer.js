import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carouselcontainer.css";
function Carouselcontainer() {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item className="imagesforcarousel">
        <img
          className="d-block w-100"
          src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701431010.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="imagesforcarousel">
        <img
          className="d-block w-100"
          src="https://video-images.vice.com/articles/5c0359a8ae10320006471a7b/lede/1543723543991-glennharvey_vice_2018_12_01_final.jpeg?crop=1xw:0.7109004739336493xh;center,center"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="imagesforcarousel">
        <img
          className="d-block w-100"
          src="https://vivy-anime.com/assets/img/story/img_intro_pc.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="imagesforcarousel">
        <img
          className="d-block w-100"
          src="https://wallup.net/wp-content/uploads/2019/09/632755-tormentum-dark-sorrow-adventure-fantasy-dark-indie-fighting-warrior-knight-castle-artwork-art.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="imagesforcarousel">
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/ff/6a/7a/ff6a7aec64246019f2b98a1d107e7477.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselcontainer;
