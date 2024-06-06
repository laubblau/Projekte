package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Category;
import org.example.haushaltsbuch.repositories.CategoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final TransactionService transactionService;

    public List<Category> findAll(){
        return categoryRepository.findAll();
    }
    public Optional<Category> findByID(Long id){
        return categoryRepository.findById(id);
    }
    public Category create(Category category){
        return categoryRepository.save(category);
    }
    public Category update(Category category){
        return categoryRepository.save(category);
    }
    @Transactional
    public void delete(Long id){
        transactionService.deleteByCategory(id);
        categoryRepository.deleteById(id);
    }

    public void deleteByAccount(Long id){
        categoryRepository.deleteByAccountId(id);
    }
}
