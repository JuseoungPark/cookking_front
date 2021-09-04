package com.cookking.configs;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by marathoner on 2021/07/16.
 */
@Configuration
@EnableAutoConfiguration
@EntityScan(basePackages = {JpaConfiguration.ENTITY_SCAN_PATH})
@EnableJpaRepositories(basePackages = {JpaConfiguration.RDS_DOMAIN_PACKAGE}) // JpaRepository 패키지 위치 등록
public class JpaConfiguration{
    static final String RDS_DOMAIN_PACKAGE = "com.cookking.repositories";
    static final String ENTITY_SCAN_PATH = "com.cookking.models";
}
