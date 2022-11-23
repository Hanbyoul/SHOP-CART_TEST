import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faUser,
  faHeart,
  faBagShopping,
  faDoorOpen,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const menuList = [
    "BEST",
    "WOMEN",
    "MEN",
    "INTERIOR",
    "KITCHEN",
    "ELECTONICS",
    "DIGITAL",
    "BEAUTY",
    "FOOD",
    "LEISURE",
    "KIDS",
    "CULTURE",
  ];
  const goToCart = () => {
    navigate("/cart");
  };

  const goToHome = () => {
    navigate("/products");
  };

  return (
    <div className="nav-section">
      <div className="nav-top">
        <div>
          <img
            className="home-img"
            width={100}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcEAAABwCAMAAABRhDu+AAAASFBMVEUAAAD///8FBQV7e3uGhob6+vqOjo4PDw/Hx8fKysp/f3+BgYEKCgre3t4sLCxtbW0+Pj51dXXo6OiSkpKqqqrQ0NDAwMBbW1vnwhsPAAABcklEQVR4nO3c0U4TURRA0RYQhVYFAf3/P7UxhNe5CSeDW9d6vrlnbnemaTJtD1e0HQAAAAAAAAAAAAAAAAAAgFnXY77PXdTD/cK8+7l5O7sc77T96+nHx+uHld2OY368+2RvbpYGzs3b2e3l4j9vrroselrZba7g13ef7M3p3y54s1Tw0/F4u7LbXMHBe1DBw3pB9qdgnYJ1CtYpWKdgnYJ1CtYpWKdgnYJ1CtYpWKdgnYJ1Co47v3wZcve8ME7Bcee559wr31RQcJyCdeeXuyneRf8HCtYpWKdgnYJ1CtYpWKdgnYJ1CtYpWKdgnYJ1CtYpWPcBBX/OPQEd9G3sfDtT8JWC6xQc9QEFf638Q8/eTtsvwl/KJ5k6BesUrFOwTsE6BesUrFOwTsE6BesUrFOwTsE6BesUrFOwTsE6BesUrFOwTsE6BesUrFOwTsE6BesUrFOwTsE6BesUrFOwTsE6BetmC16xt9eCW6v+FNze7TfwAhyMz50bNwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <div className="nav-user">
          <div>
            <FontAwesomeIcon icon={faUser} /> MY PAGE
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            MY LIKE
          </div>
          <div>
            <FontAwesomeIcon icon={faBagShopping} />
            SHOPPING BAG{" "}
          </div>
          <div>
            <FontAwesomeIcon icon={faDoorOpen} />
            LOGIN
          </div>
        </div>
      </div>
      <div className="sub-sections">
        <div className="sub-title">
          <h1 onClick={goToHome}>Home</h1>
          <h1 onClick={goToCart}>Cart</h1>
        </div>
        <div>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>

      <ul className="menu-list">
        {menuList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
