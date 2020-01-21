package com.doggywood.services;

import java.util.List;

import com.doggywood.entities.Note;

public interface NoteService {

	public Note getNoteById(int id);
	
	public Note getNoteByAId(int id);
	
	public List<Note> getNoteByPId(int id);
	
	public Note createNote(Note note);
	
	public Note updateNote(Note change);
	
	public boolean deleteNote(Note note);
	

}
