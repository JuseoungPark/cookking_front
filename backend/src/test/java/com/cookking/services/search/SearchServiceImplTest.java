package com.cookking.services.search;

import com.cookking.mappers.search.CreateSearchMapper;
import com.cookking.mappers.search.SearchMapper;
import com.cookking.models.search.CreateSearchDto;
import com.cookking.models.search.SearchDto;
import com.cookking.repositories.SearchRepository;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.logging.Logger;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by marathoner on 2021/08/28
 */
@Slf4j
@SpringBootTest
@ActiveProfiles(profiles = {"local"})
class SearchServiceImplTest {

    @Autowired
    private SearchService searchService;

    @Test
    void create() {
        CreateSearchDto createSearchDto = CreateSearchDto.builder().memberId(2L).content("test").build();
        CreateSearchDto result = searchService.create(createSearchDto);
        System.out.println(result);
        assertEquals(result.getContent(), createSearchDto.getContent());
    }

    @Test
    void findByMemberId() {
        SearchDto searchDto = searchService.findByMemberId(2L);
        assertNull(searchDto);
    }

    @Test
    void findAll() {
        List<SearchDto> searchDtos = searchService.findAll();
        assertNotNull(searchDtos);
        assertNotEquals(searchDtos.size(), 0);
    }
}
