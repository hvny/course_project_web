
package ru.hleb.springhleb.service;

import org.springframework.stereotype.Service;
import ru.hleb.springhleb.entity.Item;

import java.util.List;
@Service
public interface ItemService {
    public List<Item> getItems();


}

