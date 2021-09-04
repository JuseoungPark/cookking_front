package com.cookking.configs.components.loaders;

import com.cookking.repositories.ExampleRepository;
import com.cookking.models.example.Example;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by marathoner on 2021/07/16.
 */
@RequiredArgsConstructor
@Component
public class ExampleLoader implements CommandLineRunner {

    private final ExampleRepository exampleRepository;

    @Override
    public void run(String... args) throws Exception {
        loadExampleObjects();
    }

    private void loadExampleObjects() {
        if (exampleRepository.count() == 0) {
            exampleRepository.save(Example.builder().content("My First Content").build());
        }
    }
}
