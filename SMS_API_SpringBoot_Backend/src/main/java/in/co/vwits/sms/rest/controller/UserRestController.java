package in.co.vwits.sms.rest.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.co.vwits.sms.model.User;
import in.co.vwits.sms.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserRestController {

	@Autowired
	private UserService service;
	
	@GetMapping
	public List<User> findAllUsers(){
		return service.findAll();
	}
	
	@GetMapping("/{username}")
	public User findOneUserById(@PathVariable String username){
		return service.findOneUser(username);
	}
	
	@PostMapping()
	public void CreateNewUser(@RequestBody User user) {
		this.service.create(user);
	}
	
	@DeleteMapping("/{username}")
	public void delete(@PathVariable String username) {
		this.service.delete(username);
	}
	
	@PutMapping("/{username}")
	public User updateUser(@RequestBody User user) {
		this.service.create(user);
		return user;
	}
	
}
