package org.example.haushaltsbuch.controllers;

import org.example.haushaltsbuch.models.Target;
import org.example.haushaltsbuch.services.TargetService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.*;

@RestController
@RequestMapping("target")
@CrossOrigin("http://localhost:4200")
public class TargetController {

  private final TargetService targetService;

  public TargetController(TargetService targetService) {
    this.targetService = targetService;
  }

  @GetMapping
  public ResponseEntity<List<Target>> findAllTargets() {
    return ok(targetService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Target> findTargetById(@PathVariable Long id) {
    return of(targetService.findByID(id));
  }

  @PostMapping
  public ResponseEntity<Target> createTarget(@RequestBody @Validated Target target) {
    if(target.getId() != null) {
      return ResponseEntity.badRequest().build();
    }
    return ResponseEntity.ok(targetService.create(target));
  }


  @PutMapping
  public ResponseEntity<Target> updateTarget( @RequestBody @Validated Target target) {
    if(target.getId() == null) {
      return ResponseEntity.badRequest().build();
    }
    return ResponseEntity.ok(targetService.update(target));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteTarget(@PathVariable Long id) {
    targetService.delete(id);
    return ok().build();
  }
}
