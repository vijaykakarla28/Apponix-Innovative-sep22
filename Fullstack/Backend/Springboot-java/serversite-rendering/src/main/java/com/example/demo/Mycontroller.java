package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class Mycontroller {

	@RequestMapping(value="/home",method=RequestMethod.GET)
	//@ResponseBody
	public ModelAndView handel() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("home");
	return mv;
	}
	
	@RequestMapping(value="/about",method=RequestMethod.GET)
	//@ResponseBody
	public ModelAndView handel2(ModelMap model) {
		ModelAndView mv=new ModelAndView();
	
		model.put("content", "Hero");
		//System.out.println(mv.addObject("user", p));
		mv.setViewName("about");
	return mv;
	}
}


