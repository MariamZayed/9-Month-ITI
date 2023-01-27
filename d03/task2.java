import java.util.function.*;

	class Coefficients {
		public double a, b, c;
		Coefficients(double _a, double _b, double _c){
			a = _a;
			b = _b;
			c = _c;
		}
	}
	class Roots {
		public double r1, r2;
		 Roots(double _r1, double _r2){
			r1 = _r1;
			r2 = _r2;
		}
	}
class SecondEqautionFunction implements Function<Coefficients,Roots> {

	public Roots apply(Coefficients coeff) {
			double determinant = coeff.b * coeff.b -(4* coeff.a*coeff.c);
			
			double sqr = Math.sqrt(determinant);
			if(determinant>0){
				
				double firstRoot = (-coeff.b + sqr)/(2*coeff.a);
				double secondRoot = (-coeff.b - sqr)/(2*coeff.a);
				return new Roots(firstRoot, secondRoot);
		}else if(determinant == 0){
				double root = (-coeff.b + sqr)/(2*coeff.c);
				
				return new Roots(root, root);
		}
			System.out.println("Roots have imaginary number " );
			return null;
		}
}

class Solve {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Coefficients cof = new Coefficients(1, -5, 6);
		SecondEqautionFunction sec = new SecondEqautionFunction();
		Roots r = sec.apply(cof);
		System.out.println(r.r1+":"+r.r2);

	}

}

