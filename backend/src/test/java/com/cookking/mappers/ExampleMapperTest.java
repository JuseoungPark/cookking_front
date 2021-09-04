package com.cookking.mappers;

import com.cookking.models.example.Example;
import com.cookking.models.example.ExampleDto;
import com.cookking.models.example.ExampleMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by marathoner on 2021/07/16.
 */
@ActiveProfiles(profiles = {"local"})
@SpringBootTest
class ExampleMapperTest {

    @Autowired
   private ExampleMapper exampleMapper;

    @Test
    void dtoToEntity() {
        ExampleDto dto = ExampleDto
                .builder()
                .content("Hello")
                .build();

        Example example = exampleMapper.toEntity(dto);

        assertEquals(dto.getContent(), example.getContent());
    }
}
