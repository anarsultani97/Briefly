package com.sars.briefly.api.briefly.api.summary;

public class Sentence {
	
	int paragraphNumber;
	int number;
	int stringLength;
	double score;
	int nOfWords;
	String value;
	
	Sentence(int numberI, String valueI, int stringLengthI, int paragraphNumberI){
		this.number = numberI;
		this.value = new String(valueI);
		this.stringLength = stringLengthI;
		nOfWords = valueI.split("\\s+").length;
		score = 0.0;
		this.paragraphNumber = paragraphNumberI;
	}

}