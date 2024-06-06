package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Debt;
import org.example.haushaltsbuch.repositories.DebtRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DebtService {
  private final DebtRepository debtRepository;
  public List<Debt> findAll(){
    return debtRepository.findAll();
  }
  public Optional<Debt> findByID(Long id){
    return debtRepository.findById(id);
  }
  public Debt create(Debt debt){
    return debtRepository.save(debt);
  }
  public Debt update(Debt debt){
    return debtRepository.save(debt);
  }
  public void delete(Long id){
    debtRepository.deleteById(id);
  }
}
