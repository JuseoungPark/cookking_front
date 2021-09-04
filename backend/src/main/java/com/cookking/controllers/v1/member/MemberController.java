package com.cookking.controllers.v1.member;

import com.cookking.models.example.ExampleDto;
import com.cookking.models.member.dto.CreateMemberDto;
import com.cookking.models.member.dto.MemberDto;
import com.cookking.models.member.dto.UpdateMemberDto;
import com.cookking.services.Member.MemberService;
import com.cookking.services.Member.MemberServiceImpl;
import com.cookking.services.example.ExampleService;
import com.cookking.services.example.ExampleServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * Created by marathoner on 2021/07/16.
 */
@RequestMapping("/api/v1/member")
@RestController
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberServiceImpl memberServiceImpl) {
        this.memberService = memberServiceImpl;
    }

    @GetMapping("/{memberId}")
    public ResponseEntity<MemberDto> getExampleById(@PathVariable("memberId") Long memberId) {
        MemberDto memberDto = memberService.findById(memberId);
        return new ResponseEntity<MemberDto>(memberDto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity saveNewExample(@RequestBody @Validated CreateMemberDto createMemberDto) {
        memberService.create(createMemberDto);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("/{memberId}")
    public ResponseEntity updateExampleById(@PathVariable("memberId") Long memberId, @RequestBody @Validated UpdateMemberDto updateMemberDto) {
        memberService.update(memberId, updateMemberDto);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
