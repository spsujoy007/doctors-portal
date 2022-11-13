import React from "react";
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";

const MakeAppointment = () => {
  return (
    <section className="my-28" style={{
        backgroundImage: `url(${appointment})`
    }}>
      <div className="hero py-10 md:py-0">
        <div className="hero-content flex-col md:flex-row ">
          <img
            src={doctor}
            className="-mt-28 lg:w-1/3 rounded-lg md:mr-12 mr-0 hidden md:block"
            alt=""
          />
          <div className="text-white">
            <h4 className="uppercase text-primary">Appointment</h4>
            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <ButtonPrimary>Appointment</ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
