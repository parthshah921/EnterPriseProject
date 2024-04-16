import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetImage({ imageId }) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Fetch the image URL
        axios.get(`http://127.0.0.1:8090/images/${imageId}`)
            .then(response => {
                setImageUrl(response.data.url);
            })
            .catch(error => console.error('Error fetching image:', error));
    }, [imageId]);

    return (
        <div>
            <h2>View Image</h2>
            {imageUrl ? (
                <img src={imageUrl} alt="Image" />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
}

export default GetImage;
