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
		File source= new File("C:\\Users\\anton\\git\\Tester\\Tester\\target\\cucumber-reports\\report.js");
		File dest = new File("C:\\Users\\anton\\git\\CaricatoreFileHtml\\springBootwebAppdemo\\src\\main\\resources\\static\\js\\report.js");
		copyFileUsingStream(source, dest);
		
		new File(AppController.uploadDirectory).mkdir();
		SpringApplication.run(SpringBootwebAppdemoApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(SpringBootwebAppdemoApplication.class);
	}
	
	private static void copyFileUsingStream(File source, File dest) throws IOException {
	    InputStream is = null;
	    OutputStream os = null;
	    try {
	        is = new FileInputStream(source);
	        os = new FileOutputStream(dest);
	        byte[] buffer = new byte[1024];
	        int length;
	        while ((length = is.read(buffer)) > 0) {
	            os.write(buffer, 0, length);
	        }
	    } finally {
	        is.close();
	        os.close();
	    }

}
}
