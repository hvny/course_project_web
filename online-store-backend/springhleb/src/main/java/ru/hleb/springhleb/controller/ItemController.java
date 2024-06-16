package ru.hleb.springhleb.controller;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.hleb.springhleb.entity.Item;
import ru.hleb.springhleb.service.ItemService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/items")
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;

   /* @GetMapping
    public ResponseEntity<?> getItems() {
        try {
            List<Item> items = itemService.getItems();
            return ResponseEntity.ok(items); // Возвращаем список товаров
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }*/
   @GetMapping
   public ResponseEntity<?> getItems(HttpServletRequest request) {
       String authorizationHeader = request.getHeader("Authorization");
       if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
           return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
       }
       String token = authorizationHeader.substring("Bearer ".length());
       try {
           Claims claims = Jwts.parser()
                   .setSigningKey("your-secret-key".getBytes())
                   .parseClaimsJws(token)
                   .getBody();
           List<Item> items = itemService.getItems();
           return ResponseEntity.ok(items); // Возвращаем список товаров
       } catch (Exception e) {
           return ResponseEntity.badRequest().body("Invalid or expired token");
       }
   }
}
