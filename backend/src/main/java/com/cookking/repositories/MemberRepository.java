package com.cookking.repositories;

import com.cookking.models.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by marathoner on 2021/08/24.
 */
public interface MemberRepository extends JpaRepository<Member, Long> {
}
