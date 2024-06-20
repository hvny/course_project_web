package ru.hleb.springhleb.service;

import org.springframework.stereotype.Service;
import ru.hleb.springhleb.entity.Address;
import ru.hleb.springhleb.entity.User;

@Service
public interface UserService {
    public User getUser(String phoneNumber);
    void addAddress(Long userId, Address address);
    void editAddress(Long addressId, Address updatedAddress);
    void deleteAddress(Long addressId);
}