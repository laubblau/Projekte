package org.example.haushaltsbuch.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private Date date;

    @NotNull
    private BigDecimal amount;

    @NotBlank
    private String description;

    @NotNull
    private boolean recurring;

    @ManyToOne
    @JsonIgnoreProperties("transactions")
    private Category category;

    @ManyToOne
    @JsonIgnoreProperties("transactions")
    private Account account;
}

