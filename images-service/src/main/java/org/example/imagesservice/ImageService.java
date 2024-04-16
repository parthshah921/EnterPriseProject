package org.example.imagesservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.IOException;
import java.util.UUID;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public String uploadImage(MultipartFile file) {
        Image image = new Image();
        image.setId(UUID.randomUUID().toString());
        image.setName(file.getOriginalFilename());
        image.setMimeType(file.getContentType());
        try {
            image.setData(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException("Failed to read file data", e);
        }

        imageRepository.save(image);
        return image.getId();
    }

    public Image getImageById(String id) {
        return imageRepository.findById(id).orElse(null);
    }

    public void deleteImageById(String id) {
        imageRepository.deleteById(id);
    }
}