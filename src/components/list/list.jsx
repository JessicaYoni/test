import React from 'react';
import { Item } from '../item/item'

export function List(props) {
    const { data, eventChange, progress } = props
    return (
        <ul>
            {
                data.map((itemList) => {
                    if (progress == 1 && !itemList.completed)
                        return <Item key={itemList.id} data={itemList} eventChange={eventChange} progress={progress} />
                    if (progress == 2 && itemList.completed)
                        return <Item key={itemList.id} data={itemList} eventChange={eventChange} progress={progress} />
                        if (progress == 3)
                        return <Item key={itemList.id} data={itemList} eventChange={eventChange} progress={progress} />                        
                    }
                )
            }
        </ul>
    )
}