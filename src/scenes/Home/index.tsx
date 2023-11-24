
import ActionButton from '../navbar/shared/ActionButton';
import useMediaQuery from '@/hooks/useMediaQueries';
import { SelectedPage } from '../navbar/shared/types';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div className="md:flex mx-auto items-center 
                  w-5/6 justify-center md:h-5/6"
                  onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
                  >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">


          {/* Headings */}
          <motion.div className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{duration:1.4}}
          variants={{
            hidden: {opacity: 0, x:-50},
            visible: { opacity: 1, x: 0 },
          }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="text-sm mt-8 p-2">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the
              Body Shapes That you Dream of.. Get Your Dream Body Now.
            </p>
          </motion.div>

          {/* Action BTN */}
          <motion.div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-start"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5}}
               transition={{delay: 0.4, duration:1.4}}
               variants={{
                 hidden: {opacity: 0, x:-50},
                 visible: { opacity: 1, x: 0 },
               }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              <p>Join us</p>
            </ActionButton>
            <AnchorLink
              className="text-lg underline text-black hover:text-primary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>

        {/* Image */}
        <div className="flex basis-3/6 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end md:w-3/6">
          <img src={HomePageGraphic} alt="HomePageGraphic" />
        </div>
      </motion.div>

      {/* Sponsors */}
      {isAboveMediumScreen && (
        <div className="h-28 w-full bg-primary-100 p-10 my-20 justify-center ">
          <div className="mx-auto w-5/6 justify-center">
            <div className="flex items-center w-3/5 justify-between gap-8">
              <img src={SponsorRedBull} alt="" />
              <img src={SponsorFortune} alt="" />
              <img src={SponsorForbes} alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
