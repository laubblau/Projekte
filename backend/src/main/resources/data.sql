INSERT INTO Account (id, name, balance) VALUES (1001,'Girokonto', 1500.00);
INSERT INTO Account (id,name, balance) VALUES (1002,'Sparkonto', 5000.00);
INSERT INTO Account (id,name, balance) VALUES (1003,'Investmentkonto', 10000.00);

INSERT INTO Category (id, name) VALUES (1006,'Lebensmittel');
INSERT INTO Category (id,name) VALUES (1007,'Transport');
INSERT INTO Category (id,name) VALUES (1008,'Unterhaltung');
INSERT INTO Transaction (id,date, amount, description, recurring, category_id, account_id) VALUES (1001,'2024-04-20', -50.00, 'Wochenendeinkauf', false, 1006, 1001);
INSERT INTO Transaction (id,date, amount, description, recurring, category_id, account_id) VALUES (1002,'2024-04-21', -30.00, 'Tanken', false, 1007, 1001);
INSERT INTO Transaction (id,date, amount, description, recurring, category_id, account_id) VALUES (1003,'2024-04-22', -20.00, 'Kino', false, 1008, 1001);
INSERT INTO Transaction (id,date, amount, description, recurring, category_id, account_id) VALUES (1004,'2024-04-23', 100.00, 'Gehaltseingang', false, 1008, 1001);


INSERT INTO Debt (id, total_debts, already_paid, beneficiary, deadline) VALUES (1001, 500.00, 200.00, 'Max Mustermann',  '2024-05-15');
INSERT INTO Debt (id, total_debts, already_paid, beneficiary, deadline) VALUES (1002, 1000.00, 0.00, 'Erika Musterfrau',  '2024-06-01');

INSERT INTO Target (id, name, rate, unit, start_date, end_date) VALUES (1001, 'Sparen für Urlaub', 0.1, '€', '2024-04-27', '2024-12-31');
INSERT INTO Target (id, name, rate, unit, start_date, end_date) VALUES (1002, 'Notfallfonds', 0.2, '€', '2024-01-01', '2024-12-31' );

-- Kategorie: Lebensmittel

INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1030, '2024-04-29', -20.00, 'Wochenendeinkauf', false, 1006, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1031, '2024-04-23', -15.00, 'Frühstück', false, 1006, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1032, '2024-04-22', -30.00, 'Abendessen mit Freunden', false, 1006, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1033, '2024-04-21', -10.00, 'Obst und Gemüse', false, 1006, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1034, '2024-04-20', -25.00, 'Einkauf im Bioladen', false, 1006, 1001);

-- Kategorie: Transport

INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1035, '2024-04-28', -20.00, 'Tanken', false, 1007, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1036, '2024-04-27', -15.00, 'Busfahrschein', false, 1007, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1037, '2024-04-26', -35.00, 'Taxi zum Flughafen', false, 1007, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1038, '2024-04-25', -40.00, 'Tankfüllung', false, 1007, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1039, '2024-04-24', -25.00, 'Parkgebühren', false, 1007, 1001);

-- Kategorie: Unterhaltung

INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1040, '2024-04-28', -30.00, 'Kino', false, 1008, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1041, '2024-04-27', -15.00, 'Videospielkauf', false, 1008, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1042, '2024-04-26', -50.00, 'Konzerttickets', false, 1008, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1043, '2024-04-25', -10.00, 'Streaming-Dienst', false, 1008, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1044, '2024-04-24', -20.00, 'Brettspielabend', false, 1008, 1001);

-- Kategorie: Miete
INSERT INTO Category (id, name) VALUES (1009,'Miete');
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1045, '2024-04-30', -800.00, 'Mietzahlung', false, 1009, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1046, '2024-04-15', -1000.00, 'Kaution', false, 1009, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1047, '2024-04-01', -200.00, 'Wohnungsbesichtigung', false, 1009, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1048, '2024-04-05', -20.00, 'Reparaturen', false, 1009, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1049, '2024-04-20', -50.00, 'Wohnungsreinigung', false, 1009, 1001);

-- Kategorie: Gesundheit
INSERT INTO Category (id, name) VALUES (1010,'Gesundheit');
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1050, '2024-04-30', -50.00, 'Arztrechnung', false, 1010, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1051, '2024-04-15', -30.00, 'Medikamente', false, 1010, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1052, '2024-04-06', -10.00, 'Fitnessstudio', false, 1010, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1053, '2024-04-29', -20.00, 'Gesundheitssnacks', false, 1010, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1054, '2024-04-17', -40.00, 'Therapiesitzung', false, 1010, 1001);
INSERT INTO Transaction (id, date, amount, description, recurring, category_id, account_id) VALUES (1055, '2024-03-17', -40.00, 'Therapiesitzung', false, 1010, 1001);