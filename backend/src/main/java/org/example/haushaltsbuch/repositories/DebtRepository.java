package org.example.haushaltsbuch.repositories;

import org.example.haushaltsbuch.models.Debt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DebtRepository extends JpaRepository<Debt, Long> {
}

