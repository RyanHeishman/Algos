import React, { useState } from "react";
import './styles/tabs.css'

const items = [
{
    content: 'Tab 1 content is showing here',
    label: 'Tab 1'
},
{
    content: 'Tab 2 content is showing here',
    label: 'Tab 2'
},
{
    content: 'Tab 3 content is showing here',
    label: 'Tab 3'
}]

const Tabs = (props) => {

    const [activeIdx, setActiveIdx] = useState(0);

    const handleTabClick = (index) => {
        setActiveIdx(index);
    }

    return(
        <div>
            <div>
                {
                    items.map((item, index)=>(
                        <div key={index} className="boxMain">
                            <button onClick={() => handleTabClick(index)}>{item.label}</button>
                        </div>
                    ))
                }
            </div>
            <div>
                <p>{items[activeIdx].content}</p>
            </div>
        </div>
    )
}

export default Tabs;