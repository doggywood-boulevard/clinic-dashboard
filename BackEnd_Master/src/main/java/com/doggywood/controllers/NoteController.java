package com.doggywood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.doggywood.entities.Note;
import com.doggywood.services.NoteService;

@RestController
public class NoteController {

	@Autowired
	NoteService ns;
	
	//works
	@PostMapping(value="/note", consumes="application/json")
	@CrossOrigin(origins = "*")
	public Note createNote(@RequestBody Note note) {
		return ns.createNote(note);
	}
	
	//works
	@GetMapping(value="/note/{id}")
	@CrossOrigin(origins = "*")
	public Note getNoteById(@PathVariable("id") int id) {
		return ns.getNoteById(id);
	}
	
	@GetMapping(value="/note/appt/{aId}")
	@CrossOrigin(origins = "*")
	public Note getNoteByAId(@PathVariable("aId") int id) {
		return ns.getNoteByAId(id);
	}
	
	@GetMapping(value="/note/pet/{pId}")
	@CrossOrigin(origins = "*")
	public List<Note> getNoteByPId(@PathVariable("pId")int id) {
		return ns.getNoteByPId(id);
	}
	
	@PutMapping(value="/note", consumes="application/json")
	@CrossOrigin(origins="*")
	public Note updateNote(@RequestBody Note change) {
		return ns.updateNote(change);
	}
	
	//works
	@DeleteMapping(value="/note/{id}")
	@CrossOrigin(origins = "*")
	public boolean deleteNote(@PathVariable("id")int id) {
		try {
			ns.deleteNote(ns.getNoteById(id));
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
}
