package com.cookking.models.example;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.sql.Timestamp;
import java.time.OffsetDateTime;

/**
 * Created by marathoner on 2021/07/16.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ExampleDto {
    @Null
    private Long id;

    @NotNull
    private String content;

    @Null
    private Timestamp createdAt;

    @Null
    private Timestamp updatedAt;

    @Null
    private Timestamp deletedAt;

}
