package com.cookking.repositories;

import com.cookking.models.search.Search;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by marathoner on 2021/08/28
 */
public interface SearchRepository extends JpaRepository<Search, Long> {
}
