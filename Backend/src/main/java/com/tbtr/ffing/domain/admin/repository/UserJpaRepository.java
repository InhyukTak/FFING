package com.tbtr.ffing.domain.admin.repository;

import com.tbtr.ffing.domain.admin.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * JpaRepository를 기본적으로 활용하여 Repository 구성
 *
 * @author : jonghoon
 * @fileName : UserCRUDRepository
 * @since : 2/8/24
 */
@Repository
public interface UserJpaRepository extends JpaRepository<UserEntity, Long> {

}