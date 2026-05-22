"use client"

import { motion } from "framer-motion"
import { ChessBackground } from "@/components/chess-background"
import {
  Award,
  MessageCircle,
  Languages,
  Heart,
  Users
} from "lucide-react"

import Link from "next/link"
import Image from "next/image"

const coaches = [
{
name:"Arjun C Krishnamachari",
specialization:"Expert Coach • All Levels",
image:"/arjun ck photo.jpeg",
description:"Active tournament player with years of practical chess experience and a strong understanding of the game. Focuses on helping students improve calculation, tactics, openings and overall game understanding through structured lessons and practice.",
button:"View FIDE Profile",
link:"https://ratings.fide.com/profile/46653252"
},

{
name:"Ananya Arumbakkam",
specialization:"Expert Coach • All Levels",
image:"/ananya.png",
description:"Passionate chess player and coach who believes in making learning interactive and enjoyable. Focuses on helping students build confidence, strengthen fundamentals and improve practical decision-making over the board.",
button:"View Profile",
link:"https://share.google/YhyVOodW5GPxiBMJ8"
}
]

const qualities = [
{
icon:Award,
title:"10+ Coaches",
description:"Experienced coaches available across different levels and training styles."
},

{
icon:Heart,
title:"Passionate Educators",
description:"Dedicated coaches focused on helping students improve and grow."
},

{
icon:Languages,
title:"Multilingual Support",
description:"Coaching available in English, Hindi, Marathi and Tamil."
}
]

export default function CoachesPage(){

return(

<>

<ChessBackground/>

<div className="min-h-screen pt-28 pb-16 px-4 relative z-10">

<div className="max-w-6xl mx-auto">

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="text-center mb-16">

<span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">

Meet the Team

</span>

<h1 className="text-4xl sm:text-5xl font-bold mb-4">

Our Coaches

</h1>

<p className="text-primary font-medium text-lg mb-6">

10+ Experienced Coaches Available

</p>

<p className="text-muted-foreground text-lg max-w-3xl mx-auto">

Learn from passionate educators and experienced players who help students improve through structured learning and practical chess understanding.

</p>

</motion.div>


{/* qualities */}

<div className="grid md:grid-cols-3 gap-6 mb-16">

{qualities.map((quality,index)=>(

<div
key={index}
className="p-6 bg-card rounded-2xl border border-border text-center">

<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">

<quality.icon className="w-6 h-6 text-primary"/>

</div>

<h3 className="font-semibold mb-2">

{quality.title}

</h3>

<p className="text-sm text-muted-foreground">

{quality.description}

</p>

</div>

))}

</div>


{/* coaches */}

<div className="grid md:grid-cols-2 gap-8 mb-16">

{coaches.map((coach,index)=>(

<div
key={index}
className="bg-card rounded-3xl overflow-hidden border border-primary/20">

<Image
src={coach.image}
alt={coach.name}
width={500}
height={700}
className="w-full h-[500px] object-cover object-center"
/>

<div className="p-8 text-center">

<h2 className="text-2xl font-bold mb-2">

{coach.name}

</h2>

<p className="text-primary mb-4">

{coach.specialization}

</p>

<p className="text-muted-foreground leading-8 mb-6">

{coach.description}

</p>

<Link
href={coach.link}
target="_blank"
className="inline-block px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition">

{coach.button}

</Link>

</div>

</div>

))}

</div>


{/* coaching options */}

<div className="mb-16">

<h2 className="text-3xl font-bold text-center mb-10">

Coaching Options

</h2>

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-card rounded-3xl p-8 border border-primary/20 text-center">

<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">

<Users className="w-8 h-8 text-primary"/>

</div>

<h3 className="text-2xl font-bold">

Expert Male Coach

</h3>

<p className="text-primary mb-4">

All Levels

</p>

<p className="text-muted-foreground leading-8">

Personalized coaching focused on tactical improvement, openings, practical game understanding and tournament preparation.

</p>

</div>



<div className="bg-card rounded-3xl p-8 border border-primary/20 text-center">

<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">

<Users className="w-8 h-8 text-primary"/>

</div>

<h3 className="text-2xl font-bold">

Expert Female Coach

</h3>

<p className="text-primary mb-4">

All Levels

</p>

<p className="text-muted-foreground leading-8">

Structured and interactive coaching designed to build confidence and support improvement at every level.

</p>

</div>

</div>

</div>


{/* language */}

<div className="bg-card rounded-3xl p-8 border border-border text-center mb-16">

<Languages className="w-10 h-10 text-primary mx-auto mb-4"/>

<h2 className="text-2xl font-bold mb-2">

Coaching Available In

</h2>

<p className="text-muted-foreground mb-6">

Learn comfortably in your preferred language

</p>

<div className="flex flex-wrap justify-center gap-4">

{["English","Hindi","Marathi","Tamil"].map((lang)=>(

<div
key={lang}
className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-xl">

{lang}

</div>

))}

</div>

</div>


<div className="text-center">

<Link
href="https://wa.me/917013204364"
target="_blank"
className="inline-flex items-center gap-2 px-8 py-4 bg-primary rounded-xl font-semibold">

<MessageCircle className="w-5 h-5"/>

Contact Us on WhatsApp

</Link>

</div>


</div>

</div>

</>

)

}
