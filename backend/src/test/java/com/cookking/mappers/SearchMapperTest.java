package com.cookking.mappers;

import com.cookking.mappers.search.SearchMapper;
import com.cookking.models.search.Search;
import com.cookking.models.search.SearchDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Created by marathoner on 2021/07/16.
 */

@ActiveProfiles(profiles = {"local"})
@SpringBootTest
class SearchMapperTest {

    @Autowired
    private SearchMapper searchMapper;

    @Test
    @DisplayName("리스트 맵퍼 동작 테스트")
    void dtoListToEntityList() {
        List<SearchDto> searchDtos = new ArrayList<>();

        searchDtos.add(SearchDto.builder().content("test").build());

        List<Search> searches = searchMapper.toEntityList(searchDtos);

        assertEquals(searchDtos.get(0).getContent(), searches.get(0).getContent());
    }

    @Test
    @DisplayName("맵퍼 동작 테스트")
    void dtoToEntity() {
        SearchDto searchDto = SearchDto.builder().content("test").build();
        Search search = searchMapper.toEntity(searchDto);

        assertEquals(search.getContent(), searchDto.getContent());
    }
}
