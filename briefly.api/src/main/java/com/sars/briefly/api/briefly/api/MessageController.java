package com.sars.briefly.api.briefly.api;

import javax.validation.ValidationException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sars.briefly.api.briefly.api.contact.MailConfiguration;
import com.sars.briefly.api.briefly.api.contact.ContactSection;

@CrossOrigin (origins = "*")
@RestController
@RequestMapping("/message")
public class MessageController {
	
	private MailConfiguration mailConfiguration;
	
	public MessageController(MailConfiguration mailConfigurationI) {
		this.mailConfiguration = mailConfigurationI;
	}
	
	@PostMapping
	public void sendMessage(@RequestBody ContactSection contactInfos,
			BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			throw new ValidationException("Contact Information is not valid");
		}
		
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setHost(this.mailConfiguration.getHost());
		mailSender.setPort(this.mailConfiguration.getPort());
		mailSender.setUsername(this.mailConfiguration.getUsername());
		mailSender.setPassword(this.mailConfiguration.getPassword());
		
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		
		mailMessage.setFrom(contactInfos.getEmail());
		mailMessage.setTo("briefly4sars@gmail.com");
		mailMessage.setSubject("New message from " + contactInfos.getName());
		mailMessage.setText(contactInfos.getMessage() + " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nPhone Number: "
				+ contactInfos.getPhoneNumber());
				
		mailSender.send(mailMessage);
	}

}
