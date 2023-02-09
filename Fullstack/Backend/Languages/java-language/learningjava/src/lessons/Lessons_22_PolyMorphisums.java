package lessons;

public class Lessons_22_PolyMorphisums {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Humans1 h=new Humans1();
h.walk();
anuf1 a=new anuf1();
a.walk();
akash s=new akash();
s.walk();

	}

}
class Humans1{
	void walk(){
		System.out.println("Humans can walk");
	}
}
class anuf1 extends Humans1{
	void walk(){
		System.out.println("Humans can walk and can dance");
	}
}
class akash extends Humans1{
	void walk(){
		System.out.println("Humans can walk and can jump");
	}
}
