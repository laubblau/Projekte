package org.example.haushaltsbuch.controllers;

import org.example.haushaltsbuch.models.Category;
import org.example.haushaltsbuch.services.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("category")
@CrossOrigin("http://localhost:4200")
public class CategoryController {

  private final CategoryService categoryService;

  public CategoryController(CategoryService categoryService) {
    this.categoryService = categoryService;
  }

  @GetMapping
  public ResponseEntity<List<Category>> findAllCategories() {
    return ok(categoryService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Category> findCategoryById(@PathVariable Long id) {
    return ResponseEntity.of(categoryService.findByID(id));
  }

  @PostMapping
  public ResponseEntity<Category> createCategory(@Validated @RequestBody Category category) {
    if(category.getId() != null) {
      return badRequest().build();
    }
    return ok(categoryService.create(category));
  }

  @PutMapping
  public ResponseEntity<Category> updateCategory(@Validated @RequestBody Category category) {
    if(category.getId() == null) {
      return badRequest().build();
    }
    return ok(categoryService.update(category));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
    categoryService.delete(id);
    return ok().build();
  }
}

