package com.cookking.services.search;

import com.cookking.models.search.CreateSearchDto;
import com.cookking.models.search.Search;
import com.cookking.models.search.SearchDto;

import java.util.List;

/**
 * Created by marathoner on 2021/08/28
 */
public interface SearchService {
    public CreateSearchDto create(CreateSearchDto createSearchDto);
    public SearchDto findByMemberId(Long memberId);
    public List<SearchDto> findAll();
}
