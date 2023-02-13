package advance_java;

import java.util.ArrayList;
import java.util.Iterator;

public class Lessons_07_Itterator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
ArrayList<String> mystudents=new ArrayList();
System.out.println(mystudents);
mystudents.add("Vijay");
mystudents.add("Sumanth");
mystudents.add("Janni");
mystudents.add("Jai");
mystudents.add("Harsha");
//System.out.println(mystudents.get(0));
Iterator myitems=mystudents.iterator();
//System.out.println(myitems.next());
//System.out.println(myitems.next());
//System.out.println(myitems.next());
//System.out.println(myitems.next());
//System.out.println(myitems.next());
System.out.println("short cut way");
while(myitems.hasNext()) {
	System.out.println("this is the short cut way with while loop---"+myitems.next());
}

	}

}
