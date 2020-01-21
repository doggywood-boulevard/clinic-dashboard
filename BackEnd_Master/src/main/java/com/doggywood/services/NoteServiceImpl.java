package com.doggywood.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doggywood.entities.Note;
import com.doggywood.repositories.NoteRepository;

@Service
public class NoteServiceImpl implements NoteService {

	@Autowired
	NoteRepository nr;
	
	@Override
	public Note getNoteById(int id) {
		return nr.findById(id).get();
	}

	@Override
	public Note getNoteByAId(int id) {
		return nr.getNoteByAId(id);
	}

	@Override
	public List<Note> getNoteByPId(int id) {
		return (List<Note>) nr.getNoteByPId(id);
	}

	@Override
	public Note createNote(Note note) {
		return nr.save(note);
	}

	@Override
	public Note updateNote(Note change) {
		return nr.save(change);
	}

	@Override
	public boolean deleteNote(Note note) {
		try {
			nr.delete(note);
		} catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}	

}
