import React from "react";
import Carouselcontainer from "./Carouselcontainer";
import "./Home.css";
// import Pagination from "./Pagination";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
// import { Button } from "react-bootstrap";

function Home() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="home">
      <div className="home__container">
        <Carouselcontainer />
        <p className="autonamec">ArtStore</p>

        <div className="home__row">
          <Product
            id="23445930"
            title="drawings by Robert Rauschenberg"
            price={98.99}
            rating={5}
            image="https://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/2511-064608865938/ten-depictions-of-the-cosmos-by-modern-masters-900x450.jpg"
          />
          <Product
            id="23445930"
            title="Beeple popular nft art the digital art bitcoin"
            price={98.99}
            rating={5}
            image="https://i.redd.it/qwi6pw711f061.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="These pen-and-ink constellations"
            price={199.99}
            rating={3}
            image="https://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/2511-064629475683/ten-depictions-of-the-cosmos-by-modern-masters-900x450.jpg"
          />
          <Product
            id="49538094"
            title="This sculpture by the renowned American artist Alexander Calder"
            price={239.0}
            rating={4}
            image="https://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/2511-064594127654/ten-depictions-of-the-cosmos-by-modern-masters-900x450.png"
          />
          <Product
            id="3254354345"
            title="Art by beeple  the digital art   "
            price={598.99}
            rating={4}
            image="https://static01.nyt.com/images/2021/02/27/arts/24beeple-2/24beeple-2-mediumSquareAt3X.jpg"
          />
        </div>

        <div className="home__row9">
          <Product
            id="90829332"
            title="The European Space Agency similarly uses t"
            price={1094.98}
            rating={4}
            image="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Product
            id="23445930"
            title="girl digital art by sicarius "
            price={98.99}
            rating={5}
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ad3c0837-9917-45e1-9d68-881324e5f4c1/davbuyu-f16db344-05b4-4940-96ca-0936cbd04889.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FkM2MwODM3LTk5MTctNDVlMS05ZDY4LTg4MTMyNGU1ZjRjMVwvZGF2YnV5dS1mMTZkYjM0NC0wNWI0LTQ5NDAtOTZjYS0wOTM2Y2JkMDQ4ODkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._d9i0UZ1MIseguktHF8UvaETrca5sEfq28G-NDsJxQY"
          />
          <Product
            id="23445930"
            title="Apocalypse Digital Art"
            price={10.99}
            rating={5}
            image="https://images.template.net/wp-content/uploads/2016/10/22054233/Awesome-Naute-Fans-Digital-Art1.jpg?width=480"
          />
          <Product
            id="23445930"
            title="Digital Art Painting by Sung Choi "
            price={25.99}
            rating={5}
            image="https://images.template.net/wp-content/uploads/2016/10/22053818/Digital-Art-Painting-by-Sung-Choi.jpg?width=480"
          />
          <Product
            id="23445930"
            title="The flat artwork takes you to the Era of Dinosaurs. "
            price={68.99}
            rating={5}
            image="https://images.template.net/wp-content/uploads/2016/10/22053623/Beautiful-Nature-Digital-Art.jpg?width=480"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="The European Space Agency similarly uses the term astronaut for members of its Astronaut Corps."
            price={1094.98}
            rating={4}
            image="https://static01.nyt.com/images/2021/03/12/arts/12nft-buyer-1/merlin_184937952_4f3bc7e4-bcd1-4e3a-aa99-aeb528736b06-mobileMasterAt3x.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Oil painting by etsl artist "
            price={98.99}
            rating={5}
            image="https://s3.amazonaws.com/appforest_uf/f1537081150684x449561129324138200/il_fullxfull.894189680_f2t2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
