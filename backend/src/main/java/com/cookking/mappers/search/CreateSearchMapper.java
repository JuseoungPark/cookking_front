package com.cookking.mappers.search;

import com.cookking.configs.components.DateComponent;
import com.cookking.mappers.EntityMapper;
import com.cookking.models.search.CreateSearchDto;
import com.cookking.models.search.Search;
import org.mapstruct.Mapper;

import java.util.List;

/**
 * Created by marathoner on 2021/08/28
 */
@Mapper(uses = {DateComponent.class}, componentModel = "spring")
public interface CreateSearchMapper extends EntityMapper<CreateSearchDto, Search> {
}
