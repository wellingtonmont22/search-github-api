import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/23054-search.json';

const Loader = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie width="400px" height="400px" options={defaultOptions} />
    
};

export default Loader;