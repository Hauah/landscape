"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Center } from "@react-three/drei";
import Model from "./Model";

import { Geist, Lexend } from "next/font/google";
import ShortSlideDown from "@/components/ui/smoothui/short-slide-down";
import ScrambleHover from "@/components/ui/smoothui/scramble-hover";
import { NavBar } from "./NavBar";
import { Scroll } from "lucide-react";
import ScrollRevealParagraph from "@/components/ui/smoothui/scroll-reveal-paragraph";
import ImageTrail from "./Album";
import { useRef } from "react";

const geist = Geist({
  subsets: ["latin"],
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=400&q=80",
];


 

export default function ModelViewer() {

 

    const ref = useRef<HTMLDivElement | null>(null)
  
 


  return (
    <div className=" relative w-full ">
        <section className="h-screen">

      <NavBar items={[{
        name: "Home", url: "/",
        icon: require("lucide-react").Home,
      },
      {
        name: "About", url: "/about",
        icon: require("lucide-react").User,
      },
      {
        name: "Contact", url: "/contact",
        icon: require("lucide-react").Mail,
      }]} />


     

     

     

      <Canvas
      
       style={{
    width: "100%",
    height: "100vh",
        paddingLeft: "550px",
   
  }}
  
  camera={{ position: [0, 1, 5], fov: 45 }}>

        <ambientLight intensity={1} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <Center>
          <Model />
        </Center>

        <Environment preset="city" />

        <OrbitControls  enableZoom={false} />

      </Canvas>

      

       <div className="absolute  h-[100vh]  inset-0 z-20 pointer-events-none w-full flex items-center justify-center">
     
     <div className="flex flex-col px-44 w-full justify-items-start  gap-10  ">
      
      

        <div className="   flex flex-col lexend-className px-[90px] font-bold text-9xl  w-[40VW]">


      
      <div className={` ${lexend.className}  pointer-events-auto mb-3`}><ScrambleHover duration={600} speed={30}>
            
          HERE
          
          </ScrambleHover>        
          </div>
          

            <div className={` ${lexend.className}  pointer-events-auto mb-3`}><ScrambleHover duration={600} speed={30}>
            
           YOU 
          
          </ScrambleHover>
          </div>

         <div className={` ${lexend.className}  pointer-events-auto mb-3`}  ><ScrambleHover duration={600} speed={30}>
            
            GO
          
          </ScrambleHover>
          </div>

          <div className={` ${lexend.className} mt-5 font-medium text-2xl  pointer-events-auto `}  >
            <ScrollRevealParagraph paragraph={"Cars are more than just a way to get from one place to another—they're a passion. From the sound of the engine to the thrill of driving, every journey creates a unique experience. Whether it's admiring timeless classics or high-performance supercars, the love for automobiles is driven by excitement, freedom, and the craftsmanship behind every machine."}></ScrollRevealParagraph>
          </div>

        
          
        </div>

       

        
        
        </div>

        
      
    
  </div>

  </section>


 <section className="h-screen">

     <div
      ref={ref}
      className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center"
    >
      <ImageTrail containerRef={ref}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-24 h-24 rounded-xl object-cover"
          />
        ))}
      </ImageTrail>

      <h1 className="z-10 text-8xl font-bold">
        ALBUMS
      </h1>
    </div>


  

 </section>


      
    </div>
  );
}