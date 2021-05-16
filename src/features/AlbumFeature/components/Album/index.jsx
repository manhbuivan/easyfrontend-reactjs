import React from 'react';
import "./styles.scss";
Album.propTypes = {
    
};

function Album({album}) {
    return (
       <div className="album">
            <img src={album.thumbnailUrl} alt="" />
       <p className="name">
           {album.name}
       </p>
       </div>
    );
}

export default Album;