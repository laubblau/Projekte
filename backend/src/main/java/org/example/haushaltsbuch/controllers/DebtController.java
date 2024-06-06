package org.example.haushaltsbuch.controllers;

import org.example.haushaltsbuch.models.Debt;
import org.example.haushaltsbuch.services.DebtService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("debt")
@CrossOrigin("http://localhost:4200")
public class DebtController {

  private final DebtService debtService;


  public DebtController(DebtService debtService) {
    this.debtService = debtService;
  }

  @GetMapping
  public ResponseEntity<List<Debt>> findAllDebts() {
    return ok(debtService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Debt> findDebtById(@PathVariable Long id) {
    return ResponseEntity.of(debtService.findByID(id));
  }

  @PostMapping
  public ResponseEntity<Debt> createDebts(@Validated @RequestBody Debt debt) {
    if(debt.getId() != null) {
      return badRequest().build();
    }
    return ok(debtService.create(debt));
  }

  @PutMapping
  public ResponseEntity<Debt> updateDebts(@Validated @RequestBody Debt debt) {
    if(debt.getId() == null) {
      return badRequest().build();
    }
    return ok(debtService.update(debt));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteDebts(@PathVariable Long id) {
    debtService.delete(id);
    return ok().build();
  }
}

