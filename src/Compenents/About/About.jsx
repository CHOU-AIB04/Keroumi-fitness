import { React, useEffect } from "react";
import Svg from "../Svg-Data/Svg";
import { motion } from "framer-motion";
import { CoachInfo } from "./CoachInfo";
import { Section3 } from "../Home/Section3";
import { Galery } from "./Galery";
const About = ({ onload }) => {
  useEffect(() => {
    const fetchData = async () => {
      onload && onload();
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="flex flex-col items-center">
        <CoachInfo />
      </section>
      <section className="relative top-[600px]  small_tablet:top-7 flex flex-col items-center">
        <Section3
          visible={true}
          tittle1="SELT TRAINING"
          des1="The best bodybuilding exercises for beginners to get stronger"
          svg1={Svg.svg1}
          tittle2="WORKOUT"
          des2="You will be taller, move better and feel less tired."
          svg2={Svg.svg2}
          tittle3="PROGRESSION"
          des3="You will be taller, move better and feel less tired."
          svg3={Svg.svg3}
        />
      </section>
      <section className="relative top-[1200px] small_tablet:top-7 flex flex-col items-center">
        <Section3
          visible={false}
          tittle1="CARDIO"
          des1="Cardio exercise, which is sometimes referred to as aerobic exercise"
          svg1={Svg.svg1}
          tittle2="GET LEANER"
          des2="If your goal is to gain lean muscle, you should focus on exercising regularly."
          svg2={Svg.svg4}
          tittle3="NUTRITION"
          des3="Nutrition is the study of nutrients in food and how the body uses them."
          svg3={Svg.svg5}
        />
      </section>
      <Galery />
    </>
  );
};
export default About;
