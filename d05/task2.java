class task2 {

    static void traverseString(String str)
    {
        for (int i = 0; i < str.length(); i++) {
            if(!Character.isLetter(str.charAt(i)))
            {
                System.out.println("must inter letter!");
                break;
            }
        }
        System.out.println("the word is: "+str);
    }
    public static void main(String[] args) {
        String word = "hello java";
        traverseString(word);
    }

}