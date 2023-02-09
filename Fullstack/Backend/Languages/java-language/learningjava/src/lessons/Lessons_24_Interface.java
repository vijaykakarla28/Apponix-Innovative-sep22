package lessons;

public class Lessons_24_Interface {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}

interface Iv{
	boolean tyres=true;
	void withtyres();
}
class vehicles implements Iv{
	boolean tyres=true;
	public void withtyres() {};
}
class bike{
	boolean tyres=true;
	void withtyres2() {};
}
class car{
	boolean tyres=true;
	void withtyres3() {};
}