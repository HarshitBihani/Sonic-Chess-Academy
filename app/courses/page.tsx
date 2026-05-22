"use client"

import { motion } from "framer-motion"
import { ChessBackground } from "@/components/chess-background"
import { BookOpen, User, Zap, Check, MessageCircle, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const courses = [
{
title:"Beginner Course",
rating:"Rating: 0 - 800",
description:"Perfect for children just starting their chess journey. Learn the fundamentals of chess including piece movements, basic tactics, and essential opening principles.",
features:[
"Chess basics & rules",
"Piece movements & values",
"Basic checkmate patterns",
"Opening principles",
"Simple tactics training",
"Practice games with feedback"
],
icon:BookOpen,
color:"from-blue-500/20 to-cyan-500/10",
iconColor:"text-blue-400"
},

{
title:"Intermediate Course",
rating:"Rating: 800 - 1400",
description:"Take your game to the next level with advanced strategies, complex tactics, and deeper understanding of positional play.",
features:[
"Advanced tactical patterns",
"Positional understanding",
"Opening repertoire building",
"Endgame techniques",
"Game analysis & review",
"Tournament preparation"
],
icon:TrendingUp,
color:"from-cyan-500/20 to-teal-500/10",
iconColor:"text-cyan-400"
},

{
title:"Crash Course",
rating:"Rating: 0 - 800 to Intermediate",
description:"An intensive, fast-paced course designed to quickly build a strong foundation.",
features:[
"Accelerated learning path",
"Core concepts mastery",
"Essential tactics training",
"Focused opening study",
"Quick improvement strategies",
"Intensive practice sessions"
],
icon:Zap,
color:"from-amber-500/20 to-orange-500/10",
iconColor:"text-amber-400"
},

{
title:"1-to-1 Personal Coaching",
rating:"All Levels",
description:"Personalized coaching sessions tailored to your specific needs and goals.",
features:[
"Personalized curriculum",
"Flexible scheduling",
"Individual attention",
"Custom game analysis",
"Targeted improvement plan",
"Direct coach communication"
],
icon:User,
color:"from-purple-500/20 to-pink-500/10",
iconColor:"text-purple-400",
featured:true
}
]

export default function CoursesPage() {

return(

<>
<ChessBackground/>

<div className="min-h-screen pt-28 pb-16 px-4 relative z-10">

<div className="max-w-6xl mx-auto">

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="text-center mb-16"
>

<span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
Our Programs
</span>

<h1 className="text-4xl sm:text-5xl font-bold mb-6">
Courses for Every Level
</h1>

<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
Structured courses designed for every skill level with expert guidance.
</p>

</motion.div>

{/* Languages */}

<div className="bg-card rounded-2xl p-6 border border-border mb-12">

<div className="flex flex-wrap items-center justify-center gap-6">

<div>

<span className="text-muted-foreground text-sm">
Available in:
</span>

<div className="flex flex-wrap gap-2 mt-2">

{["Hindi","English","Marathi","Tamil"].map((lang)=>(

<span
key={lang}
className="px-3 py-1 bg-primary/10 rounded-lg text-primary text-sm font-medium"
>
{lang}
</span>

))}

</div>

</div>

<div className="w-px h-12 bg-border hidden sm:block"/>

<div>

<span className="text-muted-foreground text-sm">
Coaches:
</span>

<div className="flex gap-2 mt-2">

<span className="px-3 py-1 bg-secondary rounded-lg text-sm">
Male
</span>

<span className="px-3 py-1 bg-secondary rounded-lg text-sm">
Female
</span>

</div>

</div>

</div>

</div>

{/* Course Cards */}

<div className="grid md:grid-cols-2 gap-8">

{courses.map((course,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*0.1}}
className={`relative bg-gradient-to-br ${course.color} rounded-2xl p-8 border border-border ${
course.featured ? "ring-2 ring-purple-500/30":""
}`}
>

{course.featured && (

<span className="absolute top-4 right-4 px-3 py-1 bg-purple-500/20 rounded-lg text-xs">
POPULAR
</span>

)}

<div className="flex gap-4 mb-6">

<div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center">

<course.icon className={`w-6 h-6 ${course.iconColor}`}/>

</div>

<div>

<h3 className="font-bold text-xl">
{course.title}
</h3>

<p className="text-sm text-muted-foreground">
{course.rating}
</p>

</div>

</div>

<p className="text-muted-foreground text-sm mb-6">
{course.description}
</p>

<ul className="space-y-2">

{course.features.map((feature,i)=>(

<li
key={i}
className="flex items-center gap-2 text-sm"
>

<Check className="w-4 h-4 text-primary"/>

{feature}

</li>

))}

</ul>

</motion.div>

))}

</div>

{/* SINGLE CTA */}

<div className="text-center mt-16">

<h2 className="text-3xl font-bold mb-4">
Ready to Begin Your Chess Journey?
</h2>

<p className="text-muted-foreground mb-6">
Book a free demo class and start improving today.
</p>

<Link
href="https://wa.me/917013204364"
target="_blank"
className="inline-flex items-center gap-2 px-8 py-4 bg-primary rounded-xl font-semibold"
>

<MessageCircle className="w-5 h-5"/>

Book Free Demo

</Link>

</div>

</div>

</div>

</>

)

}
