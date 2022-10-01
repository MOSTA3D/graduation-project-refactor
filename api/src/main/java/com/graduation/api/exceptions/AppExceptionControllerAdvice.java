package com.graduation.api.exceptions;

import com.graduation.api.dtos.MessageResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class AppExceptionControllerAdvice extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {AppException.class})
    public ResponseEntity<MessageResponse> handleUserException(AppException e, WebRequest request){
        e.printStackTrace();
        String message = e.getLocalizedMessage();
        System.out.println("the message is " + e.getLocalizedMessage());
        return new ResponseEntity<>(new MessageResponse(message, "error"), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

