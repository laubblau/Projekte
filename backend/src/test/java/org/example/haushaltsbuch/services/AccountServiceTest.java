package org.example.haushaltsbuch.services;

import org.example.haushaltsbuch.models.Account;
import org.example.haushaltsbuch.repositories.AccountRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AccountServiceTest {

    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountRepository accountRepository;

    @Test
    void testFindAll() {
        List<Account> accounts = new ArrayList<>();
        accounts.add(new Account(1001L, "Ginald", BigDecimal.valueOf(900.00), new ArrayList<>()));
        accounts.add(new Account(1002L, "Sebnem", BigDecimal.valueOf(600.00), new ArrayList<>()));
        accounts.add(new Account(1003L, "Jinan", BigDecimal.valueOf(300.00), new ArrayList<>()));
        accounts.add(new Account(1004L, "Sehad", BigDecimal.valueOf(1200.00), new ArrayList<>()));
        accountRepository.saveAll(accounts);

        List<Account> foundAccounts = accountService.findAll();

        assertEquals(accounts.size(), foundAccounts.size());
        for (int i = 0; i < accounts.size(); i++) {
            assertEquals(accounts.get(i), foundAccounts.get(i));
        }
    }

    @Test
    void findByID() {
    }

    @Test
    void testCreate() {
        Account account = new Account();
        account.setName("Postbank");
        account.setBalance(BigDecimal.valueOf(1000));

        Account savedAccount = accountService.create(account);

        assertNull(savedAccount.getTransactions());
        assertNotNull(savedAccount.getId());

    }

    @Test
    void update() {
    }

    @Test
    void delete() {
    }
}