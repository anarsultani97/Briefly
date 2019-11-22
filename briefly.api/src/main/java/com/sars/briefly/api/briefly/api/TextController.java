package com.sars.briefly.api.briefly.api;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin (origins = "*")
@RestController
@RequestMapping("/api/data")
public class TextController {
	
	@PostMapping("")
	public ResponseEntity<InputData> create(@RequestBody InputData newData){
		System.out.println(newData.getText());
		System.out.println("-------------------------------");
		System.out.println(newData.getText().replace("\\n", "\n"));
		
		String directory = System.getProperty("user.dir");
		String fileName = "sum.txt";
		String absolutePath = directory + File.separator + fileName;

		// write the content in file 
		try(FileWriter fileWriter = new FileWriter(absolutePath)) {
		    String fileContent = newData.getText().replace("\\n", "\n");
		    fileWriter.write(fileContent);
		} catch (IOException e) {
		    // exception handling
		}
		
		//System.out.println(newData.getText());
		//System.out.println(System.getProperty("user.dir"));
		//newData.setNOfWords(25);
		//newData.setParagraph(64);
		
		SummaryTool summary = new SummaryTool();
		summary.init();
		summary.extractSentenceFromContext();
		summary.groupSentencesIntoParagraphs();
		//summary.printSentences();
		summary.createIntersectionMatrix();
		//System.out.println("INTERSECTION MATRIX");
		//summary.printIntersectionMatrix();

		summary.createDictionary();
		//summary.printDicationary();
		System.out.println("SUMMMARY");
		summary.createSummary();
		summary.printSummary();
		summary.printStats();
		summary.finalizeSummary();
		newData.setCompressionRate(String.format("%.0f", summary.compressionRate) + "%");
		newData.setNOfWordsSummary(summary.nOfWordsSummary);
		newData.setText(summary.summaryText);
		newData.setNOfParagraphSummary(summary.nOfParagraphsSummary);
		
		return ResponseEntity.ok(newData);
	}
	

}
