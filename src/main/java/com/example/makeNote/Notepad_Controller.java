package com.example.makeNote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Notepad_Controller {
    @Autowired
    private Notepad_Service notepad_service;


    public Notepad_Controller(Notepad_Service notepad_service)
    {
        this.notepad_service=notepad_service;

    }
    @CrossOrigin
    @PostMapping("/addnote")
    public Notepad addnote(@RequestBody Notepad user)
    {
        return notepad_service.addUser(user);
    }
}
