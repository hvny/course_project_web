package ru.hleb.springhleb.exception;

public class AddressNotFoundException extends NotFoundException {
    public AddressNotFoundException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public AddressNotFoundException(String msg) {
        super(msg);
    }
}
