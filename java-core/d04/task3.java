import java.math.BigDecimal;

class Complex<BigDecimal>{
	BigDecimal real;
	BigDecimal img;
	Complex(BigDecimal _real,BigDecimal _img){
		real =_real;
		img = _img;
	}
	public void add(){
		BigDecimal result = real.add(img);
		System.out.println(result);
	}
	public void subtracat(){
		BigDecimal result = real.add(img);
		System.out.println(result);
	}
}

class task3{
	public static void main(String []args){
			Complex c = new Complex();
			c.add(10,20);
			c.subtracat(20,100);
	}
}