class ThrowException extends Exception
{
	public ThrowException()//this is a ctor
	{
		super("Oops! ...");
	}
}

class TestException{
	int fact(int n) throws ThrowException
	{
		if(n<0)throw new ThrowException();
		if(n==1)return 1;
		return n*fact(n-1);
	}
	public void computeFact(){
		System.out.println("Compute Function is running");
		try{
		System.out.println("Fact (-5) = " + fact(-5));
		}
		catch(ThrowException e){
			e.printStackTrace();
		}
	}// first exception
	
	public void divideByZero(int num)throws ThrowException
	{
		int output=0;
		if(num==0)
			throw new ThrowException();
		else
			output = 10/num;
		
	}// sec exception
	
	// public void outOfRangeArray(int index)throws ThrowException
	// {
	// 	int arr[] = {1,2,3};
	// 	int new_arr[];
	// 	if(index>arr.length)
	// 		throw new ThrowException();
	// 	else
	// 		new_arr = arr[index];
	// }// third exception
	
	public static void main(String []args)
	{
		TestException t = new TestException();
		//first
		t.computeFact();
		
		//sec
		int val = 0;
		try{
			t.divideByZero(val);
		}
		catch(ThrowException e){
			e.printStackTrace();
		}

		// //third
		// int val2=10;
		// try{
		// 	t.outOfRangeArray(val2);
		// }
		// catch(ThrowException e){
		// 	e.printStackTrace();
		// }
		
	}
}