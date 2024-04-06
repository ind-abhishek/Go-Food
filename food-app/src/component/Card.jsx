import React from "react";

const Card = () => {
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">bulk of the card's content.</p>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select className="m-2 h-100 bg-success rounded">
            <option key="half" value={"Half"}>
              Half
            </option>
            <option key="full" value={"Full"}>
              Full
            </option>
          </select>

          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
