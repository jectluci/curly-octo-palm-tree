package com.musicadn.backend.rest;

import java.util.List;

import com.musicadn.backend.model.Rola;
import com.musicadn.backend.services.RolaService;

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

@RequestMapping("/rola/")
public class RolaRest {

    @Autowired
    private RolaService rolaService;

    @GetMapping
    private ResponseEntity<List<Rola>> getAllRolas() {
        List<Rola> rolas = rolaService.getAllRolas();
        return ResponseEntity.ok(rolas);
    }

    @PostMapping
    private ResponseEntity<?> addRola(@RequestBody Rola rola ) {
        rolaService.addRola(rola.getTitulo(), rola.getDutacion(), rola.getAutor().getId());
        return new ResponseEntity("rola añadida", HttpStatus.OK);
    }

    @PostMapping(value="{id}")
    private ResponseEntity<?> updateRola(@PathVariable Long id, @RequestBody Rola rola) {
        rolaService.updateRola(id, rola.getTitulo(), rola.getDutacion(), rola.getAutor().getId());
        return ResponseEntity.ok("rola actuaizada");
    }

    @DeleteMapping(value="{id}")
    private ResponseEntity<?> deleteAutor(@PathVariable Long id) {
        rolaService.quitarRola(id);
        return new ResponseEntity("Rola eliminada", HttpStatus.OK);
    }

}
