import React from "react";

const Review = ({ review }) => {
  const { img, name, review: userReview, address } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="card-actions flex mt-6">
          <div className="avatar mr-8">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
            <div>
                <h5 className="text-lg">{name}</h5>
                <p>{address}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
