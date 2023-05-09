import "./Templates.css";
import Carousel from "react-bootstrap/Carousel";

function Slides(props) {
  const template = props.template;
  return (
    <Carousel>
      {template.img
        ? template.img.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="item">
                <img
                  className="d-block w-100 template"
                  src={image}
                  alt="slide"
                />
              </div>
            </Carousel.Item>
          ))
        : "Loading..."}
    </Carousel>
  );
}

export default Slides;
