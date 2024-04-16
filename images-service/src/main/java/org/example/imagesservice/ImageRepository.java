package org.example.imagesservice;


import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.*;

public interface ImageRepository extends JpaRepository<Image, String> {
}
