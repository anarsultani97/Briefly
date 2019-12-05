package com.sars.briefly.api.briefly.api.contact;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class ContactSection {
	
	@NotNull
	private String name;
	
	@NotNull
	@Email
	private String email;
	
	@NotNull
	private String message;
	
	private String phoneNumber;
	
	public void setName(String nameI) {
		this.name = nameI;
	}
	
	public String getName() {
		return name;
	}
	
	public void setEmail(String emailI) {
		this.email = emailI;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setMessage(String messageI) {
		this.message = messageI;
	}
	
	public String getMessage() {
		return message;
	}

	public void setPhoneNumber(String phoneNumberI) {
		this.phoneNumber = phoneNumberI;
	}
	
	public String getPhoneNumber() {
		return phoneNumber;
	}

}
