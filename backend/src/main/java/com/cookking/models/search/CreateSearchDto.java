package com.cookking.models.search;

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
public class CreateSearchDto {
    @Null
    private Long id;

    @NotNull
    private Long memberId;

    @NotNull
    private String content;

    @Null
    private Timestamp createdAt;

}
