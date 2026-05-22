"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

// Chess piece SVG components for crisp rendering
const ChessPiece = ({ type, className }: { type: string; className?: string }) => {
  const pieces: Record<string, JSX.Element> = {
    king: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter"/>
          <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="currentColor" strokeLinecap="butt" strokeLinejoin="miter"/>
          <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="currentColor"/>
          <path d="M11.5 30c5.5-3 15.5-3 21 0M11.5 33.5c5.5-3 15.5-3 21 0M11.5 37c5.5-3 15.5-3 21 0"/>
        </g>
      </svg>
    ),
    queen: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/>
          <path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z" strokeLinecap="butt"/>
          <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" strokeLinecap="butt"/>
          <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/>
        </g>
      </svg>
    ),
    rook: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" strokeLinecap="butt"/>
          <path d="M34 14l-3 3H14l-3-3"/>
          <path d="M31 17v12.5H14V17" strokeLinecap="butt" strokeLinejoin="miter"/>
          <path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/>
          <path d="M11 14h23" fill="none" strokeLinejoin="miter"/>
        </g>
      </svg>
    ),
    bishop: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <g fill="currentColor" strokeLinecap="butt">
            <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/>
            <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/>
            <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/>
          </g>
          <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" strokeLinejoin="miter"/>
        </g>
      </svg>
    ),
    knight: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="currentColor"/>
          <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" fill="currentColor"/>
          <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="currentColor" stroke="currentColor"/>
        </g>
      </svg>
    ),
    pawn: (
      <svg viewBox="0 0 45 45" className={className}>
        <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  }
  return pieces[type] || null
}

// Generate chess pieces with varied animations
const generatePieces = (count: number) => {
  const pieceTypes = ["king", "queen", "rook", "bishop", "knight", "pawn"]
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: pieceTypes[Math.floor(Math.random() * pieceTypes.length)],
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: 40 + Math.random() * 50, // Larger, more visible pieces
    duration: 12 + Math.random() * 15,
    delay: Math.random() * 5,
    direction: Math.random() > 0.5 ? 1 : -1,
    opacity: 0.15 + Math.random() * 0.25, // More visible opacity
  }))
}

// Animated chess board squares that appear and fade
function AnimatedSquares() {
  const squares = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.4,
      size: 40 + Math.random() * 40,
    })), []
  )

  return (
    <>
      {squares.map((square) => (
        <motion.div
          key={square.id}
          className="absolute border border-primary/20 rounded-lg"
          style={{ 
            left: `${square.x}%`, 
            top: `${square.y}%`,
            width: square.size,
            height: square.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            delay: square.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

// Glowing particles
function Particles() {
  const particles = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: 2 + Math.random() * 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
    })), []
  )

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 10px oklch(0.55 0.25 230 / 0.6)',
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

// Connecting animated lines
function ConnectingLines() {
  return (
    <svg className="absolute inset-0 w-full h-full">
      <motion.line
        x1="5%"
        y1="15%"
        x2="25%"
        y2="35%"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/15"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="75%"
        y1="20%"
        x2="95%"
        y2="50%"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/15"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="30%"
        y1="65%"
        x2="55%"
        y2="85%"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/15"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 7, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="60%"
        y1="10%"
        x2="80%"
        y2="30%"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/15"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 5.5, delay: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  )
}

export function ChessBackground() {
  const [pieces, setPieces] = useState<ReturnType<typeof generatePieces>>([])
  
  useEffect(() => {
    setPieces(generatePieces(18)) // More pieces for better visibility
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0a1628] to-[#051024]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      
      {/* Large Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-0 -left-40 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[150px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-40 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[130px]"
        animate={{
          x: [0, -60, 0],
          y: [0, -50, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Chess Pieces - Large and Visible */}
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute text-primary"
          style={{
            left: `${piece.initialX}%`,
            top: `${piece.initialY}%`,
            width: piece.size,
            height: piece.size,
            opacity: piece.opacity,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: [0, piece.direction * 80, 0],
            y: [0, -40, 0],
            rotate: [0, piece.direction * 15, 0],
            opacity: [piece.opacity * 0.5, piece.opacity, piece.opacity * 0.5],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChessPiece 
            type={piece.type} 
            className="w-full h-full drop-shadow-[0_0_15px_oklch(0.55_0.25_230_/_0.7)]" 
          />
        </motion.div>
      ))}
      
      {/* Animated Squares */}
      <AnimatedSquares />
      
      {/* Particles */}
      <Particles />
      
      {/* Connecting Lines */}
      <ConnectingLines />
      
      {/* Diagonal Lines Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <defs>
          <pattern id="diagonalLines" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M-20,20 l40,-40 M0,80 l80,-80 M60,100 l40,-40" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary/15 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full" />
    </div>
  )
}
