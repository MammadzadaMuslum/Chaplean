import React from "react";
import Menu from "./Menu";
import Search from "./Search";
import "../../Style/main.css";
import { Link } from "react-router-dom";
import MainCard from "./MainCard";

function Main() {
  const dataCards = [
    {
      id: 1,
      title: "Join our Community",
      text: "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      id: 2,
      title: "Join our Community",
      text: "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      id: 3,
      title: "Title",
      text: "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      id: 4,
      title: "Join our Community",
      text: "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      id: 5,
      title: "Title",
      text: "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      id: 6,
      title: "Join our Community",
      text: "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
  ];
  return (
    <div className="container">
      <Menu />
      <div className="main">
        <div className="main-top">
          <h1 className="top-main">Introduction</h1>
          <p>Welcome to the Chaplean documentation</p>
        </div>
        <section>
          <div className="main-center">
            <h2 className="center-text">What is Chaplean?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue.{" "}
            </p>
            <p>
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales. Quisque
              sagittis orci ut diam condimentum, vel euismod erat placerat.{" "}
            </p>
            <p>
              In iaculis arcu eros, eget tempus orci facilisis id. Praesent
              lorem orci, mattis non efficitur id, ultricies vel nibh. Sed
              volutpat lacus vitae gravida viverra.<Link>Fusce</Link>(hover:{" "}
              <Link>Fusce</Link>) vel tempor elit. Proin tempus, magna id
              scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere
              massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel,
              egestas ullamcorper dui.
            </p>
          </div>
          <div className="main-center">
            <h2 className="center-text">What is Chaplean?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue.{" "}
            </p>
            <p>
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales. Quisque
              sagittis orci ut diam condimentum, vel euismod erat placerat.{" "}
            </p>
            <p>
              In iaculis arcu eros, eget tempus orci facilisis id. Praesent
              lorem orci, mattis non efficitur id, ultricies vel nibh. Sed
              volutpat lacus vitae gravida viverra.<Link>Fusce</Link>(hover:{" "}
              <Link>Fusce</Link>) vel tempor elit. Proin tempus, magna id
              scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere
              massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel,
              egestas ullamcorper dui.
            </p>
          </div>
        </section>
        <div className="main-cards">
          {dataCards.map((card) => (
            <div className="main-card" key={card.id}>
              <MainCard {...card} />
            </div>
          ))}
        </div>
      </div>
      <Search />
    </div>
  );
}

export default Main;
