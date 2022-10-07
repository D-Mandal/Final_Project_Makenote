package com.example.makeNote;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MakeNote_Repository extends JpaRepository<MakeNote,Long> {
    List<MakeNote> findByEmailidAndPassword(String emailid, String password);
}
