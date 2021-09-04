package com.cookking.models.search;

import com.cookking.models.member.Member;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by marathoner on 2021/08/23
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Search {
    @Id
    @GeneratedValue()
    @Column(updatable = false, nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    private String content;

    @CreationTimestamp
    @Column(updatable = false)
    private Timestamp createdAt;

}
