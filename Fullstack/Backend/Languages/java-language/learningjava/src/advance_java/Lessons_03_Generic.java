package advance_java;

import java.util.ArrayList;

public class Lessons_03_Generic {

	public static void main(String[] args) {
		ArrayList<Integer> numbers=new ArrayList<Integer>();
		numbers.add(1);
		numbers.add(2);
		numbers.add(3);
		numbers.add(4);
		System.out.println(numbers);
		numbers.forEach((a)->{
			System.out.println("lamda---"+a);
		});
	}
	
}
