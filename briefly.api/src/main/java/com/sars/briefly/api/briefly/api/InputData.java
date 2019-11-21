package com.sars.briefly.api.briefly.api;

public class InputData {
	
	private String text;
	
	private double nOfWordsSummary;
	
	private int nOfParagraphSummary;
	
	private String compressionRate;
	
	public void setText(String textI) {
		this.text = textI;
	}
	
	public String getText() {
		return text;
	}
	
	public void setNOfWordsSummary(double nOfWordsSummaryI) {
		this.nOfWordsSummary = nOfWordsSummaryI;
	}
	
	public double getNOfWordsSummary() {
		return nOfWordsSummary;
	}
	
	public void setNOfParagraphSummary(int nOfParagraphSummaryI) {
		this.nOfParagraphSummary = nOfParagraphSummaryI;
	}
	
	public int getNOfParagraphSummary() {
		return nOfParagraphSummary;
	}
	
	public void setCompressionRate(String compressionRateI) {
		this.compressionRate = compressionRateI;
	}
	
	public String getCompressionRate() {
		return compressionRate;
	}

}

