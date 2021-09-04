package com.cookking.controllers.v1.search;

import com.cookking.models.search.CreateSearchDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestConstructor;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by marathoner on 2021/08/28
 */
@ActiveProfiles(profiles = {"local"})
@SpringBootTest
@TestConstructor(autowireMode = TestConstructor.AutowireMode.ALL)
@AutoConfigureMockMvc
class SearchControllerTest {

    private final String URL = "/api/v1/search/";

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;

    @Test
    @DisplayName("멤버 아이디로 조회")
    void getByMemberId() throws Exception {
        mockMvc.perform(get(URL + 2L).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("모든 검색 내역 조회")
    void getAll() throws Exception {
        mockMvc.perform(get(URL).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("검색 내역 등록")
    void create() throws Exception {
        String createSearchDtoJson = objectMapper.writeValueAsString(getCreateSearchDto());

        mockMvc.perform(post(URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(createSearchDtoJson))
                .andExpect(status().isCreated());
    }

    private CreateSearchDto getCreateSearchDto() {
        return CreateSearchDto.builder()
                .content("search")
                .memberId(2L)
                .build();
    }
}
