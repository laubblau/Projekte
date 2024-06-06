package org.example.haushaltsbuch.models;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Debt {

 @Id
 @GeneratedValue
 private Long id;

 @NotNull
 BigDecimal totalDebts;

 @NotNull
 BigDecimal alreadyPaid;

 @NotBlank
 String beneficiary;

 @NotNull
 Date deadline;
}
