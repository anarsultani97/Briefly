package com.sars.briefly.api.briefly.api.contact;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MailConfiguration {
	
	@Value("${spring.mail.host}")
	private String host;
	@Value("${spring.mail.port}")
	private int port;
	@Value("${spring.mail.username}")
	private String username;
	@Value("${spring.mail.password}")
	private String password;
	
	public void setHost(String hostI) {
		this.host = hostI;
	}
	
	public String getHost() {
		return host;
	}
	
	public void setPort(int portI) {
		this.port = portI;
	}
	
	public int getPort() {
		return port;
	}
	
	public void setUsername(String usernameI) {
		this.username = usernameI;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setPassword(String passwordI) {
		this.password = passwordI;
	}
	
	public String getPassword() {
		return password;
	}

}
