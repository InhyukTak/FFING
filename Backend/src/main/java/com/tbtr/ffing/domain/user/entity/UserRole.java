package com.tbtr.ffing.domain.user.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum UserRole {
    USER("ROLE_USER"),ADMIN("ROLE_ADMIN");

    private final String key;
}
