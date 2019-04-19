import React, {useContext} from 'react';

import SliderContext from '../../context/sliderContext';

const ShowSliderValue = () => {
    const value = useContext(SliderContext)
    return (
        <div className="sliderDisplay">
            {value}
        </div>
    );
};

export default ShowSliderValue;