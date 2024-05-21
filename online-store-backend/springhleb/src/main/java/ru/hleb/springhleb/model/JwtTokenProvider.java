package ru.hleb.springhleb.model;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
@Component
public class JwtTokenProvider  {
    private static final String SECRET = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"; // Замените на свой секретный ключ
    private static final long EXPIRATION_TIME = 864000000; // 10 дней в миллисекундах

    public String generateAccessToken(String subject) {
        return doGenerateToken(subject, "access");
    }

    public String generateRefreshToken(String subject) {
        return doGenerateToken(subject, "refresh");
    }

    private String doGenerateToken(String subject, String type) {
        Claims claims = Jwts.claims();
        claims.put("type", type);
        claims.put("sub", subject);

        Date now = new Date();
        Date expiration = new Date(now.getTime() + EXPIRATION_TIME);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, SECRET)
                .compact();
    }

    public boolean validateToken(String token, String type) {
        Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
        String currentType = claims.get("type").toString();
        return (currentType.equals(type) && !claims.getExpiration().before(new Date()));
    }

    public String resolveToken(String token) {
        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody().getSubject();
    }


}
