import java.util.Random;
class task1 {
	public static void main(String args[]){
		int arr [];
		arr = new int[1000];		
		
		// insilize using random 
		
		// create instance of Random class
        Random rand = new Random();
		for(int i=0;i<arr.length;i++){
			int rand_val = rand.nextInt(1000);
			arr[i]=rand_val;
			
		}
		//Find min and max value
		int max = arr[0];
		int min = arr[0];
		for(int i=1;i<arr.length;i++){
			if(arr[i]>max){
				max= arr[i];
			}
			if(arr[i]<min){
				min=arr[i];
			}
		}
		
		System.out.println(min+":"+max);
		
	}	
}

abstract class x{
}

interface y implements x{}