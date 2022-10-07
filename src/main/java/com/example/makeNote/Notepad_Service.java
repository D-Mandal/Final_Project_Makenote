package com.example.makeNote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Notepad_Service {
    @Autowired
    private Notepad_Repository repos;
    public Notepad_Service(Notepad_Repository repos){
        this.repos=repos;
    }

    public Notepad addUser(Notepad user) {
        return repos.save(user);
    }


}
