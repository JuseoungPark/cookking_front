package com.cookking.models.member.dto;

import com.cookking.models.alarm.Alarm;
import com.cookking.models.member.LoginType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.sql.Timestamp;
import java.util.List;

/**
 * Created by marathoner on 2021/08/24
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateMemberDto {
    @NotNull
    private Long id;

    @Null
    private String nickName;

    @Null
    private LoginType loginType;

    @Null
    private String token;

    private String email;

    private List<Alarm> alarms;

    private Timestamp createdAt;

    private Timestamp deletedAt;

    private Timestamp updatedAt;
}
