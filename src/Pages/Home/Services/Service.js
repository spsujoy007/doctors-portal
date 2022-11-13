import React from "react";

const Service = ({ service }) => {
  const { img, description, title } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto pt-8">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
