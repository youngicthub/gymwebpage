import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../navbar/shared/types"
import { motion } from "framer-motion"
import HText from "../navbar/shared/HText"
import Benefit from "./Benefit"
import ActionButton from "../navbar/shared/ActionButton"
import BenefitPageGraphics from '@/assets/BenefitsPageGraphic.png'



const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "State of the facilities",
    description: "Evolve Gym is actually the best you will see in town and offers the best services for the growth of humanity"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's Diverse classes",
    description: "Evolve Gym offers the best classes will see in town and offers the best services for the growth of humanity"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainer",
    description: "We gat you covered with our expert and Pro trainers and always ready to Serve "
  }
]

const container={
  hidden: {},
  visble: {
    transition:{staggerChildren: 0.2}
  },

}
type Props = {setSelectedPage: (value: SelectedPage)=> void}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits"
    className="min-h-full mx-auto w-5/6 py-20 "
    >
      <motion.div
      onViewportEnter={(()=> setSelectedPage(SelectedPage.Benefits))}
      >
        {/* Header */}
        <motion.div 
        className="md:w-3/5 md:my-5"
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{duration:1.4}}
          variants={{
            hidden: {opacity: 0, x:-50},
            visible: { opacity: 1, x: 0 }
          }}
        >
         <HText>
          More Than Just a Gym
         </HText>
         <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div> 

        {/* Benefits */}
        <motion.div 
        className="md:flex  items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 2}}
        variants={container}
        >
          {benefits.map((benefit: BenefitType)=>(
            <Benefit 
            key={benefit.title}
            title={benefit.title}
            icon={benefit.icon}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DECRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Grapics */}
          <img src={BenefitPageGraphics} alt="benefitpage" className="mx-auto" />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration:1.4}}
                variants={{
                  hidden: {opacity: 0, x:50},
                  visible: { opacity: 1, x: 0 }
                }}
                 >
                  <HText>
                    Millions of Happy Members are Getting { " "}
                    <span className="text-primary-500">Fit </span>
                  </HText>
                </motion.div>

              </div>
            </div>

            {/* Description */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{delay: 0.2, duration:1.4}}
            variants={{
              hidden: {opacity: 0, x:50},
              visible: { opacity: 1, x: 0 }
            }}
            >
              <p className="my-5 text-justify"> 
                Unlock Your Potential, Transform Your Life
                Are you ready to embark on a journey of health, wellness, and self-discovery? 
                Look no further! Danny`s Gym is your ultimate destination for all things fitness, 
                tailored to meet your unique needs and goals. Whether you're a beginner taking your 
                first steps towards a healthier lifestyle or a seasoned fitness enthusiast striving 
                for new heights, we've got you covered.
              </p>
              <p className="mb-5 text-justify">
              Ready to take the first step towards a fitter you? 
              Sign up now and gain access to a world of fitness knowledge, 
              expert guidance, and a supportive community that's dedicated to your success.
              Remember, your fitness journey is unique – let Danny`s Gym be your partner in 
              achieving the results you've always dreamed of. It's time to thrive!
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 
                              before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
              </div>
            </div>
          </div>
        </div>
        </motion.div>      
    </section>
  )
}

export default Benefits