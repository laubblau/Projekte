package org.example.haushaltsbuch.controllers;

import org.example.haushaltsbuch.models.Transaction;
import org.example.haushaltsbuch.services.TransactionService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("transaction")
@CrossOrigin("http://localhost:4200")
public class TransactionController {

  private final TransactionService transactionService;

  public TransactionController(TransactionService transactionService) {
    this.transactionService = transactionService;
  }

  @GetMapping
  public ResponseEntity<List<Transaction>> findAllTransactions() {
    return ResponseEntity.ok(transactionService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Transaction> findTransactionById(@PathVariable Long id) {
    return ResponseEntity.of(transactionService.findByID(id));
  }

  @PostMapping
  public ResponseEntity<Transaction> createTransaction(@Validated @RequestBody Transaction transaction) {
    if(transaction.getId() != null) {
      return badRequest().build();
    }
    return ok(transactionService.create(transaction));
  }

  @PutMapping
  public ResponseEntity<Transaction> updateTransaction(@Validated @RequestBody Transaction transaction) {
    if(transaction.getId() == null) {
      return badRequest().build();
    }
    return ok(transactionService.update(transaction));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
    transactionService.delete(id);
    return ok().build();
  }
}

