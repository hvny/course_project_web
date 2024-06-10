package ru.hleb.springhleb.model;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenProvider  {
    private static final String SECRET = "0bdec60a95010276b8948bcc81399d8622eafef5d1d5913547950ce9d9223d0396bd6835afdd2106bcf5915ffc2d1496ec2315d5504e80ba6d2651c3c40cec3830624511e4e5598f47f0264f4145b08e505f60eb31c8c437e297fb6688af4ee376a1f495971b6da90d3e1d5d67f6b409b3349c527114f97eba638ad5799a180be7e2cad855a02ce73dcc620d0d2e0b902f3ff0b6bf4bbcf4ea63fb1660db51a568662d9e001df9fa1b10f5bfa9be940fd474fe5a89696cc980b64df2727d9920ab72f9139451307588b841166448ba0d42071201c39d88724503d9de8f947c3363b840d71f0f079f4e42f39d2db925e8c080ae38c9b790f1f1b15a62cae7c88f"; // Замените на свой секретный ключ
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
