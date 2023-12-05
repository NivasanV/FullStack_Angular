package in.co.vwits.sms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import in.co.vwits.sms.model.User;
import in.co.vwits.sms.repository.UserRepository;
import in.co.vwits.sms.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public void create(User s) {
		this.userRepo.save(s);
	}

	@Override
	public List<User> findAll() {
		return userRepo.findAll();
	}

	@Override
	public User findOneUser(String username) {
		return userRepo.findById(username).get();
	}

	@Override
	public void delete(String username) {
		this.userRepo.deleteById(username);
	}

	@Override
	public User updateUser(User user) {
		return userRepo.save(user);
	}

}
