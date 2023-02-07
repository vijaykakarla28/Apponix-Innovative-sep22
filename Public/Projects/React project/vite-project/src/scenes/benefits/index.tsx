import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
   HomeModernIcon,
   UserGroupIcon,
   AcademicCapIcon ,
  } from "@heroicons/react/24/solid";
import { motion } from "framer-motion"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefits";


const benefits:Array<BenefitType> = [
  {
    icon :<HomeModernIcon className="h-6 w-6" />,
    title : "State of the Art Facilities",
    description : "Ask almost any personal trainer and they’ll tell you that regardless of your training goals, healthy eating is the backbone. "
  },
  {
    icon :<UserGroupIcon className="h-6 w-6" />,
    title : "100`s of Diverse Classes",
    description : "Strength or resistance training challenges your muscles with a stronger-than-usual counterforce, such as pushing against a wall or lifting a dumbbell or pulling on a resistance band. "
  },
  {
    icon :<AcademicCapIcon className="h-6 w-6" />,
    title : "Expert and Pro Trainers",
    description : "Motivation is what gets you started, but making things a habit is how you keep the longevity of an active lifestyle. "
  },
];

const container = {
     hidden : {},
     visible :{
      transition : {staggerChildren : 0.2}
     }
}


type Props = {
    setSelectedPage:(value:SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
   <section id="benefits" className="mx-auto min-h-full w-5/6 py-20" >
   <motion.div
    onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
   >

    {/*HEADER*/}
    <motion.div 
    className="md:my-5 md:w-3/5"
    initial="hidden"
    whileInView="visible"
    viewport={{ once:true,amount:0.5 }}
    transition={{ duration:1.3 }}
    variants={{
      hidden:{opacity:0,x:-100},
      visible:{opacity:1,x:0}
    }}
    >
        <HText>MORE THAN JUST A GYM.</HText>
        <p className="my-5 text-sm">
            We provide world class fitness equipment,trainer and classes to get you to your ultimate fitness goals with ease.We provide true care into each and every member
            </p>
    </motion.div>

    {/*BENEFITS*/}
     <motion.div 
     className="mt-5 items-center justify-between gap-8 md:flex"
     initial="hidden"
     whileInView="visible"
     viewport={{once:true,amount:0.5}}
     variants={container}>
    {benefits.map((benefits:BenefitType) => (
      <Benefit
      key = {benefits.title}
      icon = {benefits.icon}
      title = {benefits.title}
      description = {benefits.description}
      setSelectedPage = {setSelectedPage}
      />
    ))}
     </motion.div>

     {/*GRAPHICS AND DISCRIPTION*/}
     <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
      {/*GRAPHIC*/}
      <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />

      {/*DISCRIPTION*/}
      <div>
        {/*TITLE*/}
        <div className="relative">
          <div className="before:absolute before:-top-20 before:-left-20 before-z[1] before:content-abstractwaves">
             <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true,amount:0.5 }}
              transition={{ duration:1.3 }}
              variants={{
                hidden:{opacity:0,x:100},
                visible:{opacity:1,x:0}
              }}
             >
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING{""}
                <span className="text-primary-500">FIT</span>
              </HText>
             </motion.div>
          </div>
        </div>

        {/*DISCRIPTION*/}
        <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once:true,amount:0.5 }}
         transition={{ delay:0.3, duration:1.3 }}
         variants={{
           hidden:{opacity:0,x:100},
           visible:{opacity:1,x:0}
         }}
        >
          <p className="my-5 ">Exercise Helps In Maintaining Good Health. It Boosts The Physical As Well As Mental Fitness By Improving Your Mood Keeping Chemical/ Hormonal Balance In The Body. Here, We Discuss The Ways How Exercise Can Improve Life.Exercise Can Help To Maintain Healthy Weight As It Prevents Excess Weight Gain Or Help Maintain Weight Loss. </p>
          <p className="mb-5 ">A Gym Session Or Brisk Walk Can Help. Physical Activity Stimulates Various Brain Chemicals That May Leave You Feeling Happier, More Relaxed And Less Anxious.Exercise Delivers Oxygen And Nutrients To Your Tissues And Helps Your Cardiovascular System Work More Efficiently.</p>
        </motion.div>

        {/*BUTTON*/}
        <div className="relative mt-16">
          <div className="before:absolute before:-bottom-20 before:right-40 before:z[1] before:content-sparkles">
           <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
           </ActionButton>
          </div>
        </div>

      </div>
     </div>

   </motion.div>
   </section>
  );
};

export default Benefits;