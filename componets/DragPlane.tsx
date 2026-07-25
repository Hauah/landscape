"use client"
import React from 'react'
import Image from 'next/image'
import Draggable from 'react-draggable'
import DraggableItem from './DragItem'


const DragPlane = () => {
  return (
   
        <div
                className="relative overflow-hidden book-page bg-amber-50 text-black"
                style={{ width: 600, height: 500 }}
              >
                {/* <div className="flex h-full items-center justify-center text-4xl">
                  Page 3
                </div> */}

               
        
             

        
             <DraggableItem x={100} y={100}>       
                <Image
                  src="/elements/billa6.png"
                  alt="Lyrics"
                 width={300}
    height={300}
    priority
              
                  draggable={false}
                  className="object-contain scale-55 rotate-1 -translate-x-30 -translate-y-10"
                />
                </DraggableItem>
        
                {/* Wine */}
                <Image
                  src="/elements/side1.png"
                  alt="Wine"
                  fill
                  priority
                  draggable={false}
                  className="object-contain scale-50 rotate-180 -translate-x-26 translate-y-31"
                />
        
                {/* Tape */}
                <Image
                  src="/elements/starem.png"
                  alt="Tape"
                  fill
                  priority
                  draggable={false}
                  className="object-contain scale-16 -rotate-18 translate-x-18 -translate-y-56 z-20"
                />
        
                <Image
                  src="/ref/girl4.jpg"
                  alt="Frame"
                  fill
                  priority
                  draggable={false}
                  className="object-contain scale-33 rotate-17 translate-x-13 -translate-y-21 z-30"
                />
        
                {/* Photo Frame (Main Focus) */}
                <Image
                  src="/elements/frame11.png"
                  alt="Frame"
                  fill
                  priority
                  draggable={false}
                  className="object-contain scale-75 rotate-18 translate-x-10 -translate-y-11 z-30"
                />
        
                {/* Recorder */}
                <Image
                  src="/elements/moon.png"
                  alt="Recorder"
                  fill
                  priority
                  draggable={false}
                  className="object-contain scale-34 -rotate-14 -translate-x-20 translate-y-30 z-40"
                />
        
                <Image
                  src="/elements/fits.png"
                  alt="Recorder"
                  fill
                  priority
                  draggable={false}
                  className="object-contain scale-44 -rotate-14 -translate-x-30 -translate-y-50 z-40"
                />
        
                {/* Vinyl Disk */}
                <Image
                  src="/elements/note1.png"
                  alt="Disk"
                  fill
                  priority
                  draggable={false}
                  className="object-contain scale-68 -rotate-7 z-50 translate-x-14 translate-y-38 "
                />
        
                {/* Old Paper */}
                <Image
                  src="/elements/lovetape.png"
                  alt="Old Paper"
                  fill
                  priority
                  draggable={false}
                  className="object-contain scale-19 rotate-0 z-50 translate-x-10 translate-y-24"
                />
              </div>
      
    
  )
}

export default DragPlane
