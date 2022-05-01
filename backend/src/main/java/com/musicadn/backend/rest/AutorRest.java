package com.musicadn.backend.rest;

import java.util.List;

import com.musicadn.backend.model.Autor;
import com.musicadn.backend.services.AutorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/autor/")
public class AutorRest {
    @Autowired
    private AutorService autorService;

    @GetMapping
    private ResponseEntity<List<Autor>> getAllAutores() {
        List<Autor> autores = autorService.getAllAutores();
        return ResponseEntity.ok(autores);
    }

    @PostMapping()
    private ResponseEntity<?> saveAutor(@RequestBody Autor autor) {
        autorService.añadirAutor(autor.getNombre());
        return new ResponseEntity("autor añadido", HttpStatus.OK);
    }

    @PostMapping(value ="{id}")
    private ResponseEntity<?> updateAutor(@PathVariable Long id ,@RequestBody Autor autor) {
        autorService.updateAutor(id, autor.getNombre());
        return new ResponseEntity("autor modificado", HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    private ResponseEntity<?> deleteAutor(@PathVariable Long id) {
        autorService.deleteAutor(id);
        return new ResponseEntity("autor eliminado", HttpStatus.OK);
    }

}
