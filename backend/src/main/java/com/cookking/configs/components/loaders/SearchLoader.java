package com.cookking.configs.components.loaders;

import com.cookking.mappers.search.CreateSearchMapper;
import com.cookking.models.member.LoginType;
import com.cookking.models.member.Member;
import com.cookking.models.member.dto.CreateMemberDto;
import com.cookking.models.search.CreateSearchDto;
import com.cookking.models.search.Search;
import com.cookking.repositories.MemberRepository;
import com.cookking.repositories.SearchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by marathoner on 2021/07/16.
 */
@RequiredArgsConstructor
@Component
public class SearchLoader implements CommandLineRunner {

    private final SearchRepository searchRepository;
    private final CreateSearchMapper createSearchMapper;

    @Override
    public void run(String... args) throws Exception {
        loadExampleObjects();
    }

    private void loadExampleObjects() {
        if (searchRepository.count() == 0) {
            CreateSearchDto createSearchDto = CreateSearchDto.builder().content("test1").memberId(2L).build();
            searchRepository.save(createSearchMapper.toEntity(createSearchDto));
        }
    }
}
