import React from 'react';
import axios from 'axios';

function DeleteImage({ imageId, onImageDeleted }) {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8090/images/${imageId}`);
            console.log(`Image with ID ${imageId} deleted`);
            onImageDeleted(imageId); // Optionally, handle UI updates after deleting the image
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    return (
        <button onClick={handleDelete}>
            Delete Image
        </button>
    );
}

export default DeleteImage;
