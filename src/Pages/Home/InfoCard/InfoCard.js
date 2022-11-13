import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-auto'>
            <div className='flex bg-gradient-to-r from-primary to-secondary p-5 rounded-xl shadow-lg items-center text-white'>
                <img src={clock} className='mr-5' alt="" />
                <div>
                    <h4>Opening Hours</h4>
                <p>Always open</p>
                </div>
            </div>
            <div className='flex bg-gray-900 p-5 rounded-xl shadow-lg items-center text-white'>
                <img src={marker} alt="" className='mr-5' />
                <div>
                    <h4>Our location</h4>
                <p>Dhaka, Gazipur - Bangladesh</p>
                </div>
            </div>
            <div className='flex bg-gradient-to-r from-primary to-secondary p-5 rounded-xl shadow-lg items-center text-white'>
                <img src={phone} className='mr-5' alt="" />
                <div>
                    <h4>Contact us</h4>
                <p>+8801800000000</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;