package in.co.vwits.sms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.co.vwits.sms.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	
	
}
