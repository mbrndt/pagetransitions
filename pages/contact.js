import { motion as m } from "framer-motion";
import { container, item } from "../animation";

export default function Contact() {
  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-200 to-orange-100  lg:px-48 px-16"
    >
      <div className="my-96 p-1 overflow-hidden lg:my-44">
        <m.h1
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="lg:text-8xl text-6xl lg:text-right text-center "
        >
          Let`s Talk
        </m.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base ">
          <h4>Find me: </h4>
        </div>
        <div className="lg:text-4xl text-2xl ">
          <m.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Twitter
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Instagram
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                LinkedIn
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Dribble
              </m.li>
            </div>
          </m.ul>
        </div>
      </div>
    </m.main>
  );
}
