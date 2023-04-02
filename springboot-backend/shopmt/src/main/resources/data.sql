insert into role (name, create_at) 
values ("ADMIN", curdate());
insert into user (first_name, last_name, email, password, create_at) 
values ("admin", "admin", "admin@gmail.com", "$2a$10$sAIGSf4pAyg4BNqZBdr20uEK3kMg7keq0IugmhdrrXIAxG1vJ4r3S", curdate())