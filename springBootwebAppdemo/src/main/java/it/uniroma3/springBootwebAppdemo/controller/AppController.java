package it.uniroma3.springBootwebAppdemo.controller;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import it.uniroma3.springBootwebAppdemo.model.StudenteForm;

@Controller
public class AppController {

	@GetMapping(value= {"","/index","/home"})
	public String homeForm(Model model) {
		model.addAttribute("StudenteForm", new StudenteForm());
		return "home";
		
	}
	
	@PostMapping("/inserisciDati")
	  public String inserisciDati(@ModelAttribute("StudenteForm") StudenteForm StudenteForm) {
	    return "punteggi";
	  }
	
	@RequestMapping("/home")
	public String goHome() {
		return "index";
	}

	public static String uploadDirectory = System.getProperty("user.dir")+"/uploads";
	
	@RequestMapping("/carica")
	public String goCarica() {
		return "caricaFile";
	}
	

	@PostMapping("/inserisciFile")
	  public String inserisciFile(Model model,@RequestParam("files") MultipartFile[] files) {
		StringBuilder fileNames = new StringBuilder();
		for(MultipartFile file:files) {
			Path fileNameAndPath = Paths.get(uploadDirectory, file.getOriginalFilename());		//java.nio
			fileNames.append(file.getOriginalFilename());
			try {
				Files.write(fileNameAndPath,file.getBytes());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		model.addAttribute("msg","upload ottimo dei file"+fileNames.toString());
	    return "uploadView";
	  }
	
	

}

