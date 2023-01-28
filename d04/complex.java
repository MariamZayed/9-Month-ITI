import java.math.BigDecimal;

class ComplexNumber<T extends BigDecimal> {
    private T real;
    private T img;

    public ComplexNumber(T _real, T _img) {
        this.real = _real;
        this.img = _img;
    }

    public T getReal() {
        return real;
    }

    public T getImag() {
        return img;
    }

    // Adding Method // Return an obj of ComplexNumber type
    public ComplexNumber<T> addComplex(ComplexNumber<T> number){
        return new ComplexNumber<T> ((T)this.real.add(number.real),(T)this.img.add(number.img));
    }


}

class Complex {

    public static void main(String args[]) {
        BigDecimal real1 = new BigDecimal(10);
        BigDecimal img1 = new BigDecimal(5);
        BigDecimal real2 = new BigDecimal(20);
        BigDecimal img2 = new BigDecimal(25);

        ComplexNumber<BigDecimal> complex1 = new ComplexNumber<>(real1, img1);
        ComplexNumber<BigDecimal> complex2 = new ComplexNumber<>(real2, img2);

        ComplexNumber<BigDecimal> result = complex1.addComplex(complex1);
        System.out.println("Addition : " + result.getReal() + " + " + result.getImag() + "i");

    }
}