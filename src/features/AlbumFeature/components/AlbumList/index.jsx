import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import "./styles.scss";


AlbumList.propTypes = {
    listPlay : PropTypes.array.isRequired,   
};

function AlbumList({listPlay}) {
    return (
        <ul className="album-list">
            {listPlay.map(album => (
                <li key={album.id}>
                    <Album album = {album}/>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;