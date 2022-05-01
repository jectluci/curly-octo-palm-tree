package com.musicadn.backend.repository;

import java.util.List;

import com.musicadn.backend.model.Autor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long> {

    @Query(value = "{call sp_autor_view()}", nativeQuery = true)
    List<Autor> getAllAutores();

    @Query(value = "{call sp_autor_create(:nombre)}", nativeQuery = true)
    void añadirAutor(@Param("nombre") String nombre);

    @Query(value = " {call SP_autor_update(:id, :nombre)}", nativeQuery = true)
    void updateAutor(@Param("id") Long id, @Param("nombre") String nombre);

    @Query(value = " {call SP_autor_delete(:id)}", nativeQuery = true)
    void deleteAutor(@Param("id") Long id);

}
