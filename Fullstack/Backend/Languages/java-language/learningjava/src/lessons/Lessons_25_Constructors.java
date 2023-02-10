/**
 * 
 */
package lessons;

/**
 * @author vijay
 *
 */
public class Lessons_25_Constructors {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Humans12 hu=new Humans12("Hello I am dynamically given");
		System.out.println(hu.eyes);
		System.out.println(hu.nose);
		Rajesh ra=new Rajesh();
		System.out.println("I am Rajesh---"+ra.eyes);
		System.out.println("I am Rajesh---"+ra.nose);
		
	}

}

class Humans12{
	String eyes;
	boolean nose;
	Humans12(String h){
		eyes=h;
		nose=true;
	}
	Humans12(){
		
	}
}

class Rajesh extends Humans12{
	Rajesh(){
		eyes="I have 3 eyes";
	}
}

