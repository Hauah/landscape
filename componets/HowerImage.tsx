"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Geist, Noto_Serif_Ahom, Montserrat } from "next/font/google";
import gsap from "gsap";
import { fill } from "three/src/extras/TextureUtils.js";
import SplitType from "split-type";

const geist = Geist({ subsets: ["latin"] });
const sans = Noto_Serif_Ahom({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({ subsets: ["latin"] });

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80",
    text: "Age",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&q=80",
    text: "Tweak",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
    text: "wenden",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    text: "with gro",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
    text: "text 5",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&q=80",
    text: "text 6",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&q=80",
    text: "text 7",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=400&q=80",
    text: "text 8",
  },
];

const HowerImage = () => {
  const [cText, setcText] = useState("Age");
  const [style, setStyle] = useState("");
  const [first, setfirst] = useState(
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80",
  );

  const handleMouseOver = (text: string) => {
    setcText(text);
    const image = images.find((img) => img.text == text);
    setfirst(image?.url || "");
  };

  const imageRef = useRef(null);

  useEffect(() => {
    const text = document.querySelectorAll<HTMLElement>(".wave");

    let lasthover: HTMLElement | null = null;
    let preSplitChar:HTMLElement[] | null = null 

    text.forEach((Text) => {
      const split = new SplitType(Text, { types: "chars" });

      const el = Text as HTMLElement;

      Text.addEventListener("mouseenter", () => {
        if (lasthover === el) return;

        lasthover = el;
      

        if(preSplitChar != null){

            gsap.fromTo(
    preSplitChar,
    {
      yPercent: -80,
    },
    {
      yPercent: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "expo.out",
    }
  );

        }

        gsap.fromTo(
          split.chars,
          {
       

            yPercent: 80,
          },
          {

            yPercent: 0,
            stagger: 0.05,
            duration: 0.5,
            delay: 0.1,
            ease: "expo.out",
            yoyo: true,
            repeat: 0,
          },
        );

          preSplitChar = split.chars
      });

// Text.addEventListener("mouseleave", () => {
//   gsap.fromTo(
//     split.chars,
//     {
//       yPercent: -80,
//     },
//     {
//       yPercent: 0,
//       stagger: 0.05,
//       duration: 0.5,
//       ease: "expo.out",
//     }
//   );
// });

      
    });
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className=" flex h-[30vh] text-4xl gap-40 grid-cols-2">
        <div
          style={{
            clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0% 100%)",
          }}
          className={` ${montserrat.className} font-bold w-full flex flex-col items-end justify-center gap-4`}
        >
          <h1
            style={{
              clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0% 100%)",
            }}
            className={
              cText == "Age" ? " wave text-black " : " wave text-[#9E9B9B]"
            }
            onMouseOver={() => handleMouseOver("Age")}
          >
            Age
          </h1>
          <h1
            style={{
              clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0% 100%)",
            }}
            className={
              cText == "Tweak" ? " wave text-black " : " wave text-[#9E9B9B]"
            }
            onMouseOver={() => handleMouseOver("Tweak")}
          >
            Tweak
          </h1>
          <h1
            style={{
              clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0% 100%)",
            }}
            className={
              cText == "wenden" ? " wave text-black " : " wave text-[#9E9B9B]"
            }
            onMouseOver={() => handleMouseOver("wenden")}
          >
            wenden
          </h1>
          <h1
            style={{
              clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0% 100%)",
            }}
            className={
              cText == "with gro" ? " wave text-black " : " wave text-[#9E9B9B]"
            }
            onMouseOver={() => handleMouseOver("with gro")}
          >
            with gro
          </h1>
        </div>
        <div className="w-full  flex flex-col items-start justify-center gap-4">
          <Image
            src={first}
            ref={imageRef}
            onLoad={() => {
              gsap.fromTo(
                imageRef.current,
                {
                  clipPath: "inset(50% 0 50% 0)",
                },
                {
                  clipPath: "inset(0% 0 0% 0)",
                  duration: 0.8,
                  ease: "power3.out",
                },
              );
            }}
            className=" ima  object-cover h-[300] w-[200] "
            alt="Description"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default HowerImage;
