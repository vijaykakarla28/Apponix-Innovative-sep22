package lessons;

import task.Task_01_addition;

public class Lessons_18_MethodOverRiding {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Apponix1 myobj=new Apponix1();
		myobj.classroom();
		vijay1 vj=new vijay1();
		vj.classroom();
		lucifer1 lucy=new lucifer1();
		lucy.classroom();
		Task_01_addition pro=new Task_01_addition();
		
	}
}

class Apponix1{
	void classroom(){
		System.out.println("i am working 1");
	}
}
class vijay1 extends Apponix1{
	void classroom(){
		System.out.println("i am working 2");
	}
}
class lucifer1 extends Apponix1{
	void classroom(){
		System.out.println("i am working 3");
	}
}
