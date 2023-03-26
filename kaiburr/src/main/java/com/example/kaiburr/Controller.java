package com.example.kaiburr;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.example.kaiburr.Repo.ServerRepo;

@RestController
@CrossOrigin
public class Controller {
	@Autowired
	ServerRepo serverrepo;


	@RequestMapping("/")
	public List<Server> getallservers(){
		return serverrepo.findAll();
	}

	@RequestMapping("/{id}")
	public Server getserverbyid(@PathVariable String id){

		return serverrepo.findById(id).get();

	}

	@RequestMapping("/{name}")
	public List<Server> getserverbyname(@PathVariable String name){
		List<Server> list=serverrepo.findAll();
		ArrayList<Server> list2=new ArrayList<Server>();

		for(Server s:list) {
			if(s.getName().equalsIgnoreCase(name)) {
				list2.add(s);
			}
		}
		if(list2.size()>0)
			return list2;
		else
			return null;
	}


	@RequestMapping("/put")
	public void putserver(@RequestBody Server server){
		serverrepo.save(server);
	}


	@DeleteMapping("/delete/{id}")
	public void deleteserver(@PathVariable String id){
		Server s = serverrepo.findById(id).get();
		serverrepo.delete(s);

	}









}
