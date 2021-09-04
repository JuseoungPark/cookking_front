package com.cookking.services.example;

import com.cookking.models.example.ExampleDto;

import java.util.List;

/**
 * Created by marathoner on 2021/07/16.
 */
public interface ExampleService {
    public ExampleDto findById(Long exampleId);
    public List<ExampleDto> findAll(Long exampleId);
    public void save(ExampleDto exampleDto);
    public void update(Long exampleId, ExampleDto exampleDto);
}
