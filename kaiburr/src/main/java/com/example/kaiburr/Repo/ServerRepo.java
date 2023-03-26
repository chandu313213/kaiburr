package com.example.kaiburr.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.kaiburr.Server;

public interface ServerRepo extends MongoRepository<Server, String>{

}
