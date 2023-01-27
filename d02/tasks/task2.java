class task2{
	public static void main(String args[]){
		String sentence = "iti hi iti";
		String word = "iti";
		int count=0;
		String[] split_arr = sentence.split(" ");
		for(int i=0;i<split_arr.length;i++){
			System.out.println(split_arr[i]);
			if(split_arr[i].equals("iti")){
				count++;
			}
		}
		if(count==0){
				System.out.println(" no matching word");	
		}
		else{
			System.out.println("count is: "+count);		
		}
	}
}                                         