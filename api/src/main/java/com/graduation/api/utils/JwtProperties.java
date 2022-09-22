package com.graduation.api.utils;

import io.jsonwebtoken.SignatureAlgorithm;

public class JwtProperties {
    public static final int EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String AUTHORIZATION = "Authorization";
    public static final SignatureAlgorithm HASH_ALGORITHM = SignatureAlgorithm.HS512;
    // ENVIRONMENT VARIABLE
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX = "Bearer ";

}
