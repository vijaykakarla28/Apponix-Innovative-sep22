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

class Apponix{
	void classroom(){
		System.out.println("i am working inheritance");
	}
}
class vijay extends Apponix{

}
class lucifer extends Apponix{

}
