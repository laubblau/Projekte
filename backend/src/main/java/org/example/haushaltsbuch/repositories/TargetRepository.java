package org.example.haushaltsbuch.repositories;

import org.example.haushaltsbuch.models.Target;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TargetRepository extends JpaRepository<Target, Long> {
}
