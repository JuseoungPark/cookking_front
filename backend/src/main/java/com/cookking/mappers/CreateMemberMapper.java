package com.cookking.mappers;

import com.cookking.configs.components.DateComponent;
import com.cookking.models.common.EntityMapper;
import com.cookking.models.member.Member;
import com.cookking.models.member.dto.CreateMemberDto;
import org.mapstruct.Mapper;

/**
 * Created by marathoner on 2021/08/24
 */
@Mapper(uses = {DateComponent.class}, componentModel = "spring")
public interface CreateMemberMapper extends EntityMapper<CreateMemberDto, Member> {
}
