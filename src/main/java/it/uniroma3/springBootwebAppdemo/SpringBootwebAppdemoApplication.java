package it.uniroma3.springBootwebAppdemo;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

import it.uniroma3.springBootwebAppdemo.controller.AppController;

@SpringBootApplication
@ComponentScan({"it.uniroma3.springBootwebAppdemo","it.uniroma3.springBootwebAppdemo.controller"})
public class SpringBootwebAppdemoApplication extends SpringBootServletInitializer{

	public static void main(String[] args) throws IOException {	
		
		new File(AppController.uploadDirectory).mkdir();
		SpringApplication.run(SpringBootwebAppdemoApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(SpringBootwebAppdemoApplication.class);
	}
	


}

