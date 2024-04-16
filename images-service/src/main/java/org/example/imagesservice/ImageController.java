package org.example.imagesservice;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;

@RestController
@RequestMapping("/images")
@CrossOrigin(origins = "http://localhost:3000")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        String imageId = imageService.uploadImage(file);
        return ResponseEntity.ok(imageId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImageById(@PathVariable String id) {
        Image image = imageService.getImageById(id);
        if (image != null) {
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(image.getMimeType()))
                    .body(image.getData());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteImageById(@PathVariable String id) {
        imageService.deleteImageById(id);
        return ResponseEntity.noContent().build();
    }
}
