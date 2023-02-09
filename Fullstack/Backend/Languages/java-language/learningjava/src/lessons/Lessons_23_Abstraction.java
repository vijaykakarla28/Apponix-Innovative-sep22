package lessons;

public class Lessons_23_Abstraction {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Cmoney m=new Cmoney();
		m.howtowithdrawlmoney();

	}

}
abstract class Atm{
	int money=666;
	void howtowithdrawlmoney() {}
}
class Cmoney extends Atm{}