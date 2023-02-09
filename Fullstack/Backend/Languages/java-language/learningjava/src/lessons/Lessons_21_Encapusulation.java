package lessons;

public class Lessons_21_Encapusulation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		vijay2 v=new vijay2();
System.out.println(v.givepassword("lucifer"));
v.updatepassword(12345);
System.out.println(v.givepassword("lucifer"));
	}

}

class vijay2{
	String head="Yes i have a head";
	int money=1000;
	private int password=987654321;
	
	//getter method
	int givepassword(String security){
		if(security=="lucifer") {
			return password;	
		}else {
			System.out.println("wrong security");
			return 000;
		}
		
	}
	void updatepassword(int a) {
		this.password=a;
	}
	
}













