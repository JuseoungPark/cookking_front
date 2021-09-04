package com.cookking.services.Member;

import com.cookking.mappers.CreateMemberMapper;
import com.cookking.mappers.MemberMapper;
import com.cookking.models.member.Member;
import com.cookking.models.member.dto.CreateMemberDto;
import com.cookking.models.member.dto.MemberDto;
import com.cookking.models.member.dto.UpdateMemberDto;
import com.cookking.repositories.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by marathoner on 2021/07/16.
 */
@Slf4j
@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;
    private final CreateMemberMapper createMemberMapper;

    @Override
    public MemberDto findById(Long memberId) {
        Member member = memberRepository.getById(memberId);
        return memberMapper.toDto(member);
    }

    @Override
    public List<MemberDto> findAll() {
        return null;
    }

    @Override
    public void create(CreateMemberDto createMemberDto) {
        Member member = createMemberMapper.toEntity(createMemberDto);
        memberRepository.save(member);
    }

    @Override
    public void update(Long memberId, UpdateMemberDto updateMemberDto) {
        Member member = memberRepository.getById(memberId);
        memberRepository.save(member);
    }
}
