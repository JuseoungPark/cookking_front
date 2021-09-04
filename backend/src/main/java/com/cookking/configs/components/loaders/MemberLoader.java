package com.cookking.configs.components.loaders;

import com.cookking.models.member.LoginType;
import com.cookking.models.member.Member;
import com.cookking.repositories.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by marathoner on 2021/07/16.
 */
@RequiredArgsConstructor
@Component
public class MemberLoader implements CommandLineRunner {

    private final MemberRepository memberRepository;

    @Override
    public void run(String... args) throws Exception {
        loadExampleObjects();
    }

    private void loadExampleObjects() {
        if (memberRepository.count() == 0) {
            memberRepository.save(Member.builder().email("test@naver.com").loginType(LoginType.NATIVE).build());
        }
    }
}
