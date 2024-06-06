package org.example.haushaltsbuch.repositories;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Category;
import org.example.haushaltsbuch.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Modifying
    @Query("DELETE FROM Transaction t WHERE t.category.id = :categoryId")
    void deleteByCategoryId(@Param("categoryId") Long categoryId);

    @Modifying
    @Query("DELETE FROM Transaction t WHERE t.account.id = :accountId")
    void  deleteByAccountId(@Param("accountId") Long accountId);
}
