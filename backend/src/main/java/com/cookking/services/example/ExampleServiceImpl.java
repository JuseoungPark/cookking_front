package com.cookking.services.example;

import com.cookking.models.example.ExampleMapper;
import com.cookking.models.example.Example;
import com.cookking.models.example.ExampleDto;
import com.cookking.repositories.ExampleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by marathoner on 2021/07/16.
 */
@RequiredArgsConstructor
@Service
public class ExampleServiceImpl implements ExampleService {

    private final ExampleRepository exampleRepository;
    private final ExampleMapper exampleMapper;

    @Override
    public ExampleDto findById(Long exampleId) {
        Example example = exampleRepository.getById(exampleId);
        return exampleMapper.toDto(example);
    }

    @Override
    public List<ExampleDto> findAll(Long exampleId) {
        return null;
    }

    @Override
    public void save(ExampleDto exampleDto) {
        Example example = exampleMapper.toEntity(exampleDto);
        exampleRepository.save(example);
    }

    @Override
    public void update(Long exampleId, ExampleDto exampleDto) {
        Example example = exampleRepository.getById(exampleId);
        example.setContent(exampleDto.getContent());
        exampleRepository.save(example);
    }
}
