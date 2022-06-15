import React, { useState } from 'react';
import { Row, Tag, Button } from 'antd';
import useSlider from '../hooks/UseSlider';
import { ReactComponent as SliderArrow } from '../icons/SliderArrow.svg';

const InsuranceSlider = (props) => {

    const [activeTabId, setActiveTabId] = useState('');
    const ref = React.useRef(null);

    useSlider(ref);

    const { content, handler } = props;

    return (
        <div className="insuranceSliderTabs__wrapper">

            <Button className="insuranceSliderTabs__button left">
                <SliderArrow />
            </Button>

            <div className="insuranceSliderTabs" ref={ref}>
                <Row>
                    {
                        content.map((c, i) => {
                            return <Tag className={`insuranceSliderTabs__item ${activeTabId === i ? `active` : ``}`}
                                onClick={() => {setActiveTabId(i);
                                                handler(c)}}>{c}</Tag>
                        })
                    }
               </Row>

            </div>

            <Button className="insuranceSliderTabs__button right">
                <SliderArrow />
            </Button>

        </div>
    )
}

export default InsuranceSlider;