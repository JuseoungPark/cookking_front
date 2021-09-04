package com.cookking.models.search;

import com.cookking.models.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.sql.Timestamp;

/**
 * Created by marathoner on 2021/08/28
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchDto {
    @Null
    private Long id;

    @NotNull
    private Long memberId;

    @Null
    private String content;

    @Null
    private Timestamp createdAt;
}
