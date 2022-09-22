package com.graduation.api.filters;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.graduation.api.dtos.MessageResponse;
import com.graduation.api.utils.JwtProperties;
import com.graduation.api.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AuthFilter extends OncePerRequestFilter {
    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = getToken(request.getHeader(JwtProperties.AUTHORIZATION));

        if(token != null && jwtUtils.validateJwtToken(token)){
            String email = jwtUtils.getUsername(token);
            UserDetails userDetails = userDetailsService.loadUserByUsername(email);
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, null, userDetails.getAuthorities());
            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authentication);
//            prepareErrorResponse(response);
        }

        filterChain.doFilter(request, response);
    }

    private String getToken(String authorizationHeaderValue) {

        if (StringUtils.hasText(authorizationHeaderValue) && authorizationHeaderValue.startsWith(JwtProperties.TOKEN_PREFIX)) {
            return authorizationHeaderValue.substring(7);
        }
        return null;
    }

    private void prepareErrorResponse(HttpServletResponse response) throws IOException {
        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        objectMapper.writeValue(response.getWriter(), new MessageResponse("error", "something went wrong"));
    }
}
