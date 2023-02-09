package lessons;

public class Lessons_19_Inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Apponix myobj=new Apponix();
		myobj.classroom();
		vijay vj=new vijay();
		vj.classroom();
		lucifer lucy=new lucifer();
		lucy.classroom();
	}
}

//Single level inharitance

class Apponix{
	void classroom(){
		System.out.println("i am working inheritance");
	}
}
class vijay extends Apponix{

}

//Hirarical inheritance;
class lucifer extends Apponix{

}
