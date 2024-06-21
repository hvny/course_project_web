package ru.hleb.springhleb.service.impl;

import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import ru.hleb.springhleb.entity.Item;

import ru.hleb.springhleb.exception.EntityNotFoundException;
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

    @Override
    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Товар не найден"));
    }

    @PostConstruct
    public void loadDefaultItems() {
        // Проверяем, что таблица товаров пустая
        if (itemRepository.count() == 0) {
            Item[] items = {
                    new Item("Выпечка", "Хачапури", 50.00, "Информация о составе продукта: testtest", "120г", "hachapuri.jpg"),
                    new Item("Выпечка", "Ватрушка", 25.00, "Информация о составе продукта: testtest", "80г", "vatrushka.jpg"),
                    new Item("Выпечка", "Пицца", 100.00, "Информация о составе продукта: testtest", "150г", "pizza.jpg"),
                    new Item("Выпечка", "Сосиска в тесте", 40.00, "Информация о составе продукта: testtest", "100г", "sosiska.jpg"),
                    new Item("Выпечка", "Чебурек", 60.00, "Информация о составе продукта: testtest", "120г", "cheburek.jpg"),
                    new Item("Десерты", "Эклер", 65.00, "Информация о составе продукта: testtest", "80г", "ekler.jpg"),
                    new Item("Десерты", "Пирожное 'Картошка'", 60.00, "Информация о составе продукта: testtest", "60г", "potato.jpg"),
                    new Item("Десерты", "Леденец", 30.00, "Информация о составе продукта: testtest", "20г", "ledenec.jpg"),
                    new Item("Напитки", "Молочный коктейль", 100.00, "Информация о составе продукта: testtest", "300мл", "milkshake.jpg"),
                    new Item("Напитки", "Лимонад", 80.00, "Информация о составе продукта: testtest", "500мл", "limonad.jpeg"),
                    new Item("Напитки", "Эспрессо", 100.00, "Информация о составе продукта: testtest", "75мл", "espresso.jpg"),
                    new Item("Напитки", "Чай", 40.00, "Информация о составе продукта: testtest", "200мл", "tea.jpg")
            };

            // Загружаем товары в таблицу
            itemRepository.saveAll(Arrays.asList(items));
        }
    }
}
