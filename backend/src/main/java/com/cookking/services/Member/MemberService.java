package com.cookking.services.Member;

import com.cookking.models.example.ExampleDto;
import com.cookking.models.member.dto.CreateMemberDto;
import com.cookking.models.member.dto.MemberDto;
import com.cookking.models.member.dto.UpdateMemberDto;

import java.util.List;

/**
 * Created by marathoner on 2021/07/16.
 */
public interface MemberService {
    public MemberDto findById(Long memberId);
    public List<MemberDto> findAll();
    public void create(CreateMemberDto createMemberDto);
    public void update(Long memberId, UpdateMemberDto updateMemberDto);
}
