package ru.hleb.springhleb.service.impl;

import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import ru.hleb.springhleb.entity.Item;

import ru.hleb.springhleb.repository.ItemRepository;
import ru.hleb.springhleb.service.ItemService;

import java.util.Arrays;
import java.util.List;


@Service
@Primary
@AllArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    @PostConstruct
    public void loadDefaultItems() {
        Item[] items = {
                new Item("Выпечка", "Хачапури", 50.00, "test", "120г", "w"),
                new Item("Выпечка", "Ватрушка", 25.00, "test", "80г", "w"),
                new Item("Выпечка", "Пицца", 100.00, "test", "150г", "w"),
                new Item("Выпечка", "Сосиска в тесте", 40.00, "test", "100г", "w"),
                new Item("Выпечка", "Чебурек", 60.00, "test", "120г", "w"),
                new Item("Десерты", "Эклер", 65.00, "test", "80г", "w"),
                new Item("Десерты", "Пирожное 'Картошка'", 60.00, "test", "60г", "w"),
                new Item("Десерты", "Леденец", 30.00, "test", "20г", "w"),
                new Item("Напитки", "Молочный коктейль", 100.00, "test", "300мл", "w"),
                new Item("Напитки", "Лимонад", 80.00, "test", "500мл", "w"),
                new Item("Напитки", "Эспрессо", 100.00, "test", "75мл", "w"),
                new Item("Напитки", "Чай", 40.00, "test", "200мл", "w")
        };

        // Загружаем товары в таблицу
        itemRepository.saveAll(Arrays.asList(items));
    }
}
