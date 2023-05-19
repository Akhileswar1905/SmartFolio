import "./Required.css";

const Required = () => {
  return (
    <div className="req">
      <h1 className="heading">Please Enter The Required Details</h1>
      <div className="folio-imgs">
        <div className="img-normal">
          <h3 className="heading">Upload A Picture</h3>
          <img
            src="https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
            alt=""
          />
        </div>
        <div className="img-transparent">
          <h3 className="heading">Transparent Picture</h3>
          <img
            src="https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Required;
