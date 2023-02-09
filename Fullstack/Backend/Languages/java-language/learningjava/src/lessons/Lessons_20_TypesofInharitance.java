package lessons;

public class Lessons_20_TypesofInharitance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Vijay3 v=new Vijay3();
       System.out.println(v.eyes);
       Anuf a=new Anuf();
       System.out.println(a.eyes);
	}

}

//multilevel inheritance;

class Human1{
	int eyes;
	String nose;
	int legs;
	int hands;
	Human1(){
		eyes=2;
	}
}

class Vijay3 extends Human1{
	
}

class Anuf extends Vijay3{
	String eyes;
	Anuf(){
		eyes="I have Eyes";
	}
}

//multiple inharitance

class Uday{
	int eyes;
	int nose;
	int mind;
}

class Male{
	boolean beard;
}

//class Chinni extends Uday extends Male{}

//Hybrid is the combination of single mutilevel hirarical



