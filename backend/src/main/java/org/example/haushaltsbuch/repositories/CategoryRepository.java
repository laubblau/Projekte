package org.example.haushaltsbuch.repositories;

import org.example.haushaltsbuch.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Modifying
    @Query("DELETE FROM Category c WHERE c.id IN (SELECT t.category.id FROM Transaction t WHERE t.account.id = :accountId)")
    void deleteByAccountId(@Param("accountId") Long accountId);
}

