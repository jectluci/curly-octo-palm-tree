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
) 
DELIMITER $ 
create procedure SP_autor_create(in nom nvarchar(100)) BEGIN
Insert Into
  autor(nombre)
values
  (nom);
End 
$ 
DELIMITER $ 
create procedure SP_autor_update(
        in kid int, in nom nvarchar(100)
) 
BEGIN
UPDATE
  autor
set
  nombre = nom
where
  id = kid;
End $ 
DELIMITER $ create procedure SP_autor_delete(in kid int) BEGIN
DELETE FROM
  autor
where
  id = kid;
end $ 
DELIMITER $ create procedure SP_autor_view() BEGIN
SELECT
  *
FROM
  view_autor;
End $ 
CREATE VIEW view_autor As
select
  id,
  nombre
from
  autor;

CREATE VIEW view_rola AS
SELECT
  id,
  titulo,
  duracion,
  id_autor
from
  rola

DELIMITER $
CREATE PROCEDURE SP_rola_view() BEGIN
SELECT * FROM view_rola;
END
$

DELIMITER $
CREATE PROCEDURE SP_rola_create(
        in itilulo nvarchar(100),
        in iduracion int,
        in iautor int
)
BEGIN
INSERT Into rola(titulo, duracion, id_autor) values(itilulo, iduracion, iautor);
END $


DELIMITER $
CREATE PROCEDURE SP_rola_update(
        in inid int,
        in itilulo nvarchar(100),
        in iduracion int,
        in iautor int
)
BEGIN
update rola set titulo=itilulo,  duracion=iduracion, id_autor=iautor where id = inid;
END $

DELIMITER $ 
Create procedure sp_rola_delete(in inid int)
BEGIN delete  from rola where id = inid;
END
$



