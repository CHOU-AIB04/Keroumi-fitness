import { React, useEffect } from "react";
import Svg from "../Svg-Data/Svg";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";

const Home = ({ onload }) => {
  useEffect(() => {
    // Simulating some asynchronous operation (e.g., API call)
    const fetchData = async () => {
      // Your actual data fetching logic goes here

      // Once the component is loaded, call the onLoad callback
      onload && onload();
    };

    fetchData();
  }, []);
  return (
    <article className="flex flex-col gap-10 small_tablet:gap-20 items-center mt-10">
      <Section1 />
      <Section2 />
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
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </article>
  );
};
export default Home;
