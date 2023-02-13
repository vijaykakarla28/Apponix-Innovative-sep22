package advance_java;

public class Lessons_08_Errors {

	public static void main(String[] args) {
		int o=7;
		System.out.println(o);
		try {
			System.out.println(o/3);
		}catch(Exception e){
			System.out.println(e);
		}

	}
	
}
