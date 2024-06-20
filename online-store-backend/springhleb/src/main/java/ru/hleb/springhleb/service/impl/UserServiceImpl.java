package ru.hleb.springhleb.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import ru.hleb.springhleb.entity.Address;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.exception.AddressNotFoundException;
import ru.hleb.springhleb.exception.UserNotFoundException ;
import ru.hleb.springhleb.repository.AddressRepository;
import ru.hleb.springhleb.repository.UserRepository;
import ru.hleb.springhleb.service.UserService;

@Service
@Primary
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final AddressRepository addressRepository;
    //private JwtTokenProvider jwtTokenProvider;

    public User getUser(String phoneNumber) {
        return userRepository.findByPhoneNumber(phoneNumber);
    }

    public void addAddress(Long userId, Address address) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("Пользователь не найден"));
        address.setUser(user);
        addressRepository.save(address);
    }

    public void editAddress(Long addressId, Address updatedAddress) {
        Address address = addressRepository.findById(addressId).orElseThrow(() -> new AddressNotFoundException("Адрес не найден"));
        address.setCity(updatedAddress.getCity());
        address.setHouseNumber(updatedAddress.getHouseNumber());
        address.setEntry(updatedAddress.getEntry());
        address.setFloor(updatedAddress.getFloor());
        address.setApartment(updatedAddress.getApartment());
        addressRepository.save(address);
    }

    public void deleteAddress(Long addressId) {
        addressRepository.deleteById(addressId);
    }
}
