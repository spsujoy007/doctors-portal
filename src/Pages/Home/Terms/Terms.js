import React from "react";
import treatmentImg from '../../../assets/images/treatment.png'
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";

const Terms = () => {
  return (
    <div className="hero my-20 md:px-20">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <img
          src={treatmentImg}
          className="md:w-1/3 w-1/2 rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Terms;
