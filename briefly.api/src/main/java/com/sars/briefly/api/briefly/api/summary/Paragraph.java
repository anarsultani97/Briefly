package com.sars.briefly.api.briefly.api.summary;

import java.util.ArrayList;

public class Paragraph {
	
	int number;
	
	ArrayList<Sentence> sentences;
	
	Paragraph(int numberI){
		this.number = numberI;
		sentences = new ArrayList<Sentence>();
	}

}