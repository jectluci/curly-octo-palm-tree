CREATE DATABASE musicADN;
create table autor (
  id int primary key auto_increment,
  nombre nvarchar(100) not null,
  create_at TIMESTAMP default current_timestamp,
  update_at TIMESTAMP default current_timestamp On
  UPDATE
    current_timestamp
) create table rola (
  id int primary key auto_increment,
  titulo nvarchar(100) not null,
  duracion int not null,
  id_autor int not null,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP default current_timestamp On
  UPDATE
    current_timestamp,
    CONSTRAINT fk_autor FOREIGN KEY (id_autor) REFERENCES autor(id)
) DELIMITER $ create procedure SP_autor_create(in nom nvarchar(100)) BEGIN
Insert Into
  autor(nombre)
values
  (nom);
End $ DELIMITER $ create procedure SP_autor_update(in kid int, in nom nvarchar(100)) BEGIN
UPDATE
  autor
set
  nombre = nom
where
  id = kid;
End $ DELIMITER $ create procedure SP_autor_delete(in kid int) BEGIN
DELETE FROM
  autor
where
  id = kid;
end $ CREATE VIEW view_autor As
select
  id,
  nombre
from
  autor;
