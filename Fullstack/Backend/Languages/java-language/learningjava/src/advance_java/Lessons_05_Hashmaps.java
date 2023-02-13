package advance_java;

import java.util.HashMap;

public class Lessons_05_Hashmaps {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
      HashMap mystudents=new HashMap();
      mystudents.put("one", "Vijay");
      mystudents.put("two", "kalyan");
      System.out.println(mystudents);
//      mystudents.get(1);
      System.out.println(mystudents.get("one"));
      mystudents.remove("one");
      System.out.println(mystudents);
	}

}
