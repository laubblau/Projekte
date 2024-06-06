package org.example.haushaltsbuch.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Category {
  @Id
  @GeneratedValue
  private Long id;

  @NotBlank
  private String name;

  @OneToMany(mappedBy = "category")
  @JsonIgnoreProperties({"account", "category"})
  private List<Transaction> transactions;
}

