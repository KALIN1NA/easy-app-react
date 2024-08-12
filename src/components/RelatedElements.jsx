import React, {useState} from 'react';

const RelatedElements = () => {
    const [value, setValue] = useState('text');
    return (
        <div>
            <h2>{value}</h2>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value) }
            />
        </div>
    );
};

export default RelatedElements;