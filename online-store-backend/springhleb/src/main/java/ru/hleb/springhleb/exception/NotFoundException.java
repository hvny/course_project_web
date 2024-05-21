package ru.hleb.springhleb.exception;

public abstract class NotFoundException extends RuntimeException {
    public NotFoundException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public NotFoundException(String msg) {
        super(msg);
    }
}
