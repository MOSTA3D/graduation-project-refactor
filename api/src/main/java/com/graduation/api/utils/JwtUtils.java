package com.graduation.api.utils;

import com.graduation.api.dtos.UserDetailsImpl;
import io.jsonwebtoken.*;
import io.jsonwebtoken.impl.crypto.DefaultJwtSignatureValidator;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtils {

    public String createToken(Authentication authentication){
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        return Jwts.builder().setSubject((userPrincipal.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + JwtProperties.EXPIRATION_TIME))
                .setIssuer("Me")
                .signWith(SignatureAlgorithm.HS512, JwtProperties.SECRET)
                .compact();
    }

    public String getUsername(String token){
        return Jwts.parser().setSigningKey(JwtProperties.SECRET).parseClaimsJws(token).getBody().getSubject();
    }
    public boolean validateJwtToken(String token) {
        try {
            Jwts.parser().setSigningKey(JwtProperties.SECRET).parseClaimsJws(token);
            return true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return false;
    }
}
