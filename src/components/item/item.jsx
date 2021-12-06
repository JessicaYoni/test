import React from 'react';
import './item.css'

export function Item(props) {
    const { data, eventChange, progress} = props;

    const handleEventClick = () => {
        eventChange(data.id);
      };

    return (
        <li className="lista">
            <input 
                className="item-style"
                type="checkbox" 
                checked={data.completed} 
                disabled={data.completed}
                onChange={handleEventClick} />
            {data.name}
        </li>
    )
}