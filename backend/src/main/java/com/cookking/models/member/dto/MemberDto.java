package com.cookking.models.member.dto;

import com.cookking.models.alarm.Alarm;
import com.cookking.models.member.LoginType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by marathoner on 2021/08/24
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberDto {
    private Long id;

    private String email;

    private String nickName;

    private LoginType loginType;

    private List<Alarm> alarms;

    private String token;

    private Timestamp createdAt;

    private Timestamp deletedAt;

    private Timestamp updatedAt;
}
