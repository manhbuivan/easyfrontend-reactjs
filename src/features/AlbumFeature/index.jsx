import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {

    const albumList = [
        {
            id : 1,
            name : "Thả Thính Là Phải Dính!",
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/1/4/c/914cea6dff1e9d5072c2cf32be64e299.jpg',
        },
        {
            id : 2,
            name : "Phải Chăng Em Đã Yêu?",
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/e/4/d/8e4d3988a33f77e7b5d5b3164b78af92.jpg',
        },
        {
            id : 3,
            name : "Yêu Thì Yêu!",
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/5/2/9/652992cda94f5ea61eb8b15a9f4044ac.jpg',
        },
        {
            id : 4,
            name : "Thành Phố Buồn",
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/5/2/9/652992cda94f5ea61eb8b15a9f4044ac.jpg',
        },
    ]

    return (
        <div>
            <h1>Có thể bạn sẽ thích</h1>
             <AlbumList listPlay = {albumList}/>
        </div>
    );
}

export default AlbumFeature;