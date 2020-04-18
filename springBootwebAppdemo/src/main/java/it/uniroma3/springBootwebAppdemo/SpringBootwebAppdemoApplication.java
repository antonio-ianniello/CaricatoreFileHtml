package it.uniroma3.springBootwebAppdemo;

import java.io.File;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import it.uniroma3.springBootwebAppdemo.controller.AppController;

@SpringBootApplication
@ComponentScan({"it.uniroma3.springBootwebAppdemo","it.uniroma3.springBootwebAppdemo.controller"})
public class SpringBootwebAppdemoApplication {

	public static void main(String[] args) {
		new File(AppController.uploadDirectory).mkdir();
		SpringApplication.run(SpringBootwebAppdemoApplication.class, args);
	}

}
