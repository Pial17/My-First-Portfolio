import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="services-container">
                {services_data.map((service, i) => (
                    <div 
                        key={i} 
                        className={`services-format ${expandedIndex === i ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(i)}
                    >
                        <div className="services-header">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                        </div>
                        <p>{service.s_desc}</p> {/* Make sure this is the correct key for your description */}
                        <div className="services-readmore">
                            {expandedIndex === i ? 'Show Less' : 'Read More'} 
                            <img src={arrow_icon} alt='' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
