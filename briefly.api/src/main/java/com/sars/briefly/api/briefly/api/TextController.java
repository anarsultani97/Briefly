package com.sars.briefly.api.briefly.api;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sars.briefly.api.briefly.api.summary.SummaryTool;

@RestController
@RequestMapping("/api/data")
public class TextController {
	
	@PostMapping("")
	public ResponseEntity<InputData> create(@RequestBody InputData newData){
		System.out.println(newData.getText());
		System.out.println("-------------------------------");
		System.out.println(newData.getText());
		
		String directory = System.getProperty("user.dir");
		String fileName = "sum.txt";
		String absolutePath = directory + File.separator + fileName;

		// write the content in file 
		try(FileWriter fileWriter = new FileWriter(absolutePath)) {
			String fileClearer = "";
			fileWriter.write(fileClearer);
		    String fileContent = newData.getText();
		    fileWriter.write(fileContent);
		    newData.setText("");
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
		System.out.println("ANSWER:");
		System.out.println(newData.getText());
		newData.setText(summary.summaryText);
		System.out.println(newData.getText());
		newData.setNOfParagraphSummary(summary.nOfParagraphsSummary);
		
		return ResponseEntity.ok(newData);
	}
	

}
