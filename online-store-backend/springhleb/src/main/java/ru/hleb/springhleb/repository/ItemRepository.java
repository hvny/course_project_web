package ru.hleb.springhleb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hleb.springhleb.entity.Item;


public interface ItemRepository extends JpaRepository<Item, Long> { }