package advance_java;

public class Lessons_04_Threads extends Thread{
	static public int mynumber=0;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Lessons_04_Threads thread=new Lessons_04_Threads();
		thread.start();
		while(thread.isAlive()) {
//			System.out.println("still waiting ........");
			mynumber++;
			System.out.println(mynumber);
		}
		System.out.println("this line is not in the thread");
		System.out.println(mynumber);
		mynumber++;
        System.out.println(mynumber);
	}
	
	public void run () {
		System.out.println("this line is in thread");
		mynumber++;
	}

}
