package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Transaction;
import org.example.haushaltsbuch.repositories.TransactionRepository;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TransactionService {
    private final TransactionRepository transactionRepository;

    public List<Transaction> findAll(){
        return transactionRepository.findAll();
    }
    public Optional<Transaction> findByID(Long id){
        return transactionRepository.findById(id);
    }
    public Transaction create(Transaction transaction){
        return transactionRepository.save(transaction);
    }
    public Transaction update(Transaction transaction){
        return transactionRepository.save(transaction);
    }
    public void delete(Long id){
        transactionRepository.deleteById(id);
    }

    public void deleteByCategory(Long id) {
        transactionRepository.deleteByCategoryId(id);
    }

    public void deleteByAccount(Long id) { transactionRepository.deleteByAccountId(id); }
}

