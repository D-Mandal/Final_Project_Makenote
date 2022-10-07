package com.example.makeNote;

import javax.persistence.*;

@Entity
@Table
public class Notepad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String noteText;
    private String emailid;
    public Notepad(){}

    public Notepad(Long id, String noteText, String emailid) {
        this.id = id;
        this.noteText = noteText;
        this.emailid = emailid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNoteText() {
        return noteText;
    }

    public void setNoteText(String noteText) {
        this.noteText = noteText;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }
}
