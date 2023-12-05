package in.co.vwits.sms.service;

import java.util.List;

import in.co.vwits.sms.model.User;

public interface UserService {
	
	void create(User s);
	
	List<User> findAll();
	
	User findOneUser(String username);
	
	void delete(String username);
	
	User updateUser(User user);
}
