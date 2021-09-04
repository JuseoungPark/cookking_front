package com.cookking.mappers;

import com.cookking.models.example.Example;
import com.cookking.models.example.ExampleDto;
import com.cookking.models.example.ExampleMapper;
import com.cookking.models.member.Member;
import com.cookking.models.member.dto.CreateMemberDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Created by marathoner on 2021/07/16.
 */

@ActiveProfiles(profiles = {"local"})
@SpringBootTest
class MemberMapperTest {

    @Autowired
    private CreateMemberMapper createMemberMapper;

    @Test
    void dtoToEntity() {
        CreateMemberDto dto = CreateMemberDto
                .builder()
                .email("test@gmail.com")
                .build();

        Member member = createMemberMapper.toEntity(dto);

        assertEquals(dto.getEmail(), member.getEmail());
    }
}
