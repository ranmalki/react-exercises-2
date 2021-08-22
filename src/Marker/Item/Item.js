import React, { useState } from 'react';
const Item = ({text, value}) => {

    const [marker, setMarker] = useState('');
    return (
        <li className="Marker" dangerouslySetInnerHTML={{__html: text.replaceAll(value, `<span class="marker">${value}</span>`)}}>
        </li>
    );
};

export default Item;