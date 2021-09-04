package com.cookking.repositories;

import com.cookking.models.example.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Created by marathoner on 2021/07/16.
 */
public interface ExampleRepository extends JpaRepository<Example, Long> {
}
