package org.example.haushaltsbuch.controllers;

import org.example.haushaltsbuch.models.Account;
import org.example.haushaltsbuch.services.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("account")
@CrossOrigin("http://localhost:4200")
public class AccountController {

  private final AccountService accountService;

  public AccountController(AccountService accountService) {
    this.accountService = accountService;
  }

  @GetMapping
  public ResponseEntity<List<Account>> findAllAccounts() {
    return ok(accountService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Account> findAccountById(@PathVariable Long id) {
    return ResponseEntity.of(accountService.findByID(id));
  }

  @PostMapping
  public ResponseEntity<Account> createAccount(@Validated @RequestBody Account account) {
    if(account.getId() != null) {
      return badRequest().build();
    }
    return ok(accountService.create(account));
  }

  @PutMapping
  public ResponseEntity<Account> updateAccount(@Validated @RequestBody Account account) {
    if(account.getId() == null) {
      return badRequest().build();
    }
    return ok(accountService.update(account));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteAccount(@PathVariable Long id) {
    accountService.delete(id);
    return ok().build();
  }
}

