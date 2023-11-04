public class Calculator {
	private int first;
	private int second;
	private String symbol;	
	
	public int getFirst() {
		return first;
	}
	public void setFirst(int first) {
		this.first = first;
	}
	public int getSecond() {
		return second;
	}
	public void setSecond(int second) {
		this.second = second;
	}
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	
	public int calculate(int first, int second, String symbol) {
		if (symbol.equals("+")) {
			return first + second;
		} else if (symbol.equals("-")) {
			return first - second;
		} else if (symbol.equals("*")) {
			return first * second;
		} else if (symbol.equals("/")) {
			return first / second;
		} else if (symbol.equals("%")) {
			return first % second;
		} else {
			return 0;
		}
	}
}
