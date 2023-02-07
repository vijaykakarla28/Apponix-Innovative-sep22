package lessons;

import java.util.Scanner;

public class Lessons_16_methodswithparameters {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner uservalues=new Scanner(System.in);
//System.out.println(addition(10,30));
System.out.println("user enter value 1");
int uservalue1=uservalues.nextInt();
System.out.println(uservalue1);
int uservalue2=uservalues.nextInt();
System.out.println("user enter value 2");
System.out.println(uservalue2);
System.out.println(addition(uservalue1,uservalue2));
	}

	static int addition(int a,int b) {
		return a+b;
	}
	
	
}
