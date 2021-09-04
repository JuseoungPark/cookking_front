package com.cookking.models.member;

/**
 * Created by marathoner on 2021/08/24
 */
public enum LoginType {
    KAKAO("kakao"), NAVER("naver"), GOOGLE("google"), NATIVE("native");

    private final String value;

    LoginType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
