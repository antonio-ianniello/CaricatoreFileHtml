package it.uniroma3.springBootwebAppdemo.model;

import java.io.File;

public class StudenteForm {
	

	private String nome;
	private String cognome;
	private String email;
	private String matricola;
	private File file;		//quale import? java.io o tomcat?
	
	
	public String getNome() {
		return nome;
	}
	public void setName(String name) {
		this.nome = name;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getMatricola() {
		return matricola;
	}

	public void setMatricola(String matricola) {
		this.matricola = matricola;
	}
	public File getFile() {
		return file;
	}
	public void setFile(File file) {
		this.file = file;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	

}
