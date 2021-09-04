package com.cookking.mappers.search;

import com.cookking.configs.components.DateComponent;
import com.cookking.mappers.EntityMapper;
import com.cookking.models.search.Search;
import com.cookking.models.search.SearchDto;
import org.mapstruct.Mapper;

/**
 * Created by marathoner on 2021/08/28
 */
@Mapper(uses = {DateComponent.class}, componentModel = "spring")
public interface SearchMapper extends EntityMapper<SearchDto, Search> {
}
