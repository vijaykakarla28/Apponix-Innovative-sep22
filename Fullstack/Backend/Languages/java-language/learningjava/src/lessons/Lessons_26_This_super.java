package lessons;

public class Lessons_26_This_super {

	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Trainer t=new Trainer();
		t.checkmoney(100);
	}

}

class vijay4{
	int money=1000;
}
class Trainer extends vijay4{
	int money=2000;
void checkmoney(int money) {
		System.out.println(money);
		System.out.println(super.money);
		System.out.println(this.money);
	}
	
}
