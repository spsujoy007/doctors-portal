import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            img: fluoride,
            title: "Fluoride Treatment",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi odit magnam."
        },
        {
            id: 2,
            img: cavity,
            title: "Cavity Filling",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi odit magnam."
        },
        {
            id: 3,
            img: whitening,
            title: "Teeth Whitening",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi odit magnam."
        },
    ]
    return (
        <div>
            <div className='text-center my-20'>
                <h4 className='text-2xl text-secondary'>OUR SERVICES</h4>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;