package com.doggywood.services;

import java.util.List;

import com.doggywood.entities.Note;

public interface NoteService {

	public Note getNoteById(int id);
	
	public Note getNoteByAid(int id);
	
	public List<Note> getNoteByPid(int id);
	
	public Note createNote(Note note);
	
	public Note updateNote(Note change);
	
	public boolean deleteNote(Note note);
	

}
