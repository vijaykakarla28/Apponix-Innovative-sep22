import { SelectedPage,ClassType } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from "./Class"


const classes:Array<ClassType> = [
      {
        name :"Weight Training Classes",
        description :"Working out regularly can also reduce your risk of injury and illness as well as preventing osteoporosis",
        image :image1,
      },
      {
        name :"Yoga Classes",
        description :"Working out regularly can also reduce your risk of injury and illness as well as preventing osteoporosis",
        image :image2,
      },
      {
        name :"Ab Core Classes",
        description :"Working out regularly can also reduce your risk of injury and illness as well as preventing osteoporosis",
        image :image3,
      },
      {
        name :"Adventure Classes",
        description :"Working out regularly can also reduce your risk of injury and illness as well as preventing osteoporosis",
        image :image4,
      },
      {
        name :"Fitness Classes",
        description :"Working out regularly can also reduce your risk of injury and illness as well as preventing osteoporosis",
        image :image5,
      },
      {
        name :"Training Classes",
        description :"Working out regularly can also reduce your risk of injury and illness as well as preventing osteoporosis",
        image :image6,
      },
]


type Props = {
    setSelectedPage : (value : SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return <section id="ourclasses" className="w-full bg-primary-100 py-40">
  <motion.div
  onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
  >
    <motion.div
    className="mx-auto w-5/6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once:true,amount:0.5 }}
    transition={{ duration:1 }}
    variants={{
      hidden:{opacity:0,x:-100},
      visible:{opacity:1,x:0}
    }}
    >
     <div className='md:w-3/5'>
        <HText>OUR CLASSES</HText>
        <p className='py-5'>
            This is the vision that many people have when they decide to join a gym, and it’s one that can become a reality if you’re willing to commit to the habit of working out at a gym.
            </p>
     </div>
    </motion.div>
    <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
     <ul className='w-[2800px] whitespace-nowrap'>
      {classes.map((item:ClassType,index) => (
        <Class
        key = {`${item.name}-${index}`}
        name ={item.name}
        description = {item.description}
        image = {item.image}
        />
      ))}
     </ul>
    </div>
  </motion.div>
  </section>
};

export default OurClasses; 