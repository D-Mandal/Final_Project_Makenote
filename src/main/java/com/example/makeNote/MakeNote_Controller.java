package com.example.makeNote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class MakeNote_Controller {
    @Autowired
    private MakeNote_Service makeNote_service;


    public MakeNote_Controller(MakeNote_Service makeNote_service)
    {
        this.makeNote_service=makeNote_service;

    }
    @CrossOrigin
    @PostMapping("/adduser")
    public MakeNote adduser(@RequestBody MakeNote user)
    {
        return makeNote_service.addUser(user);
    }
    @CrossOrigin
    @PostMapping("/verify")
    public List<MakeNote> verify(@RequestBody MakeNote user)
    {
        return makeNote_service.verifyUser(user);
    }
}
