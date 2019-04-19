import React, {useState,useEffect} from 'react';

import SliderContext from '../../context/sliderContext';
import ShowSliderValue from '../ShowSliderValue';
import DBService from '../../Services/DBService';

const Slider = (props) => {
    const {min, max, step } = props
    const [value, setValue] = useState(Math.floor(min+max/2));
    useEffect(
        ()=>{
            return DBService.getRealtimeDocument('SliderValue','ExampleSlider', (value) => {
                value!==null && setValue(value.value);
        });
    },[]);
    const saveValue = async(value) => {
        const success = DBService.setDocumentWithId('SliderValue', {value}, 'ExampleSlider');
        success && setValue(value);
    }
    return (
        <div className="slider">
            <SliderContext.Provider value={value}>
                <ShowSliderValue />
                <input className="range" type="range" min={min} max={max} step={step} onChange={(e)=>saveValue(e.target.value)} value={value}/>
            </SliderContext.Provider>
        </div>
    );
};

export default Slider;