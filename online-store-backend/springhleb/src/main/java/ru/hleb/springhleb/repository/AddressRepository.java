package ru.hleb.springhleb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hleb.springhleb.entity.Address;
import ru.hleb.springhleb.entity.User;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Long> {
    List<Address> findByUser(User user);
}