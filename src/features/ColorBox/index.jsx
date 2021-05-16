import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox() {
    const [name, setName] = useState("Mạnh")
    const [count, setCount] = useState(0)
    return (
        <div>
            {name}
            <button onClick={() => {setName("Vi")}}>Rename1</button>
            <button onClick={() => {setName("Thế Anh")}}>Rename2</button>
            <div>
                {count}
                <button onClick={() => {setCount(2)}}> Tawng</button>
            </div>
        </div>
    );
}

export default ColorBox;