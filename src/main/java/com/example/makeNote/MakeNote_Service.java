package com.example.makeNote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MakeNote_Service {
    @Autowired
    private MakeNote_Repository repos;
    public MakeNote_Service(MakeNote_Repository repos){
        this.repos=repos;
    }

    public MakeNote addUser(MakeNote user) {
        return repos.save(user);
    }

    public List<MakeNote> verifyUser(MakeNote user) {
        return repos.findByEmailidAndPassword(user.getEmailid(),user.getPassword());
    }
}
