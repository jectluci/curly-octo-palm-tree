package com.musicadn.backend.repository;

import java.util.List;

import com.musicadn.backend.model.Rola;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RolaRepository extends JpaRepository<Rola, Long> {

    @Query(value = "{call SP_rola_view()}", nativeQuery = true)
    List<Rola> getAllRolas();

    @Query(value = "{ call sp_rola_create(:titulo , :duracion , :id_autor) }", nativeQuery = true)
    void addRola(@Param("titulo") String titulo, @Param("duracion") int duracion, @Param("id_autor") Long id_autor);

    @Query(value = "{ call sp_rola_update(:id, :titulo , :duracion , :id_autor) }", nativeQuery = true)
    void updateRola(@Param(value = "id") Long id, @Param("titulo") String titulo, @Param("duracion") int dutacion,
            @Param("id_autor") Long id_autor);

    @Query(value = "{call sp_rola_delete(:id)}", nativeQuery = true)
    void quitarRola(@Param(value = "id") Long id);
}
