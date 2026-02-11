## Ethan Nguyen – Portfolio
This is a personal engineering portfolio built with Next.js and TypeScript to showcase projects, work experience, and technical capabilities through interactive UI patterns and performant frontend architecture.

Live site:

## Overview
This portfolio emphasizes:

Interactive 3D project visualization
Clean component architecture
Motion-driven UI transitions
Resume preview and document integration
Responsive, accessible layout design

The primary goal was to move beyond a static project list and experiment with spatial UI representation while maintaining performance and maintainability.

## Technical Stack
Framework
Next.js (App Router)
Language
TypeScript
Styling
Tailwind CSS
Component System
shadcn/ui
Animation
Framer Motion
Icons
Lucide React

## Core Features
# 1. 3D Orbital Project Carousel
Projects are arranged in 3D space using CSS transforms and animated with Framer Motion.
Each card is positioned using:

rotateY(angle) translateZ(radius) rotateY(-(angle + parentRotation))

Key implementation details:

transform-style: preserve-3d

Perspective applied at container level
Depth-based opacity and scale calculation
Controlled rotation state
Smooth tween-based transitions
Cards locked to face forward during rotation

Depth effect:

opacity: 0.35 + depth * 0.65
scale: 0.85 + depth * 0.15

This provides spatial clarity while keeping the active card visually prioritized.

# 2. Grid / Orbit View Toggle

A layout toggle allows switching between:

3D orbital layout and Responsive grid layout

Switching is animated using AnimatePresence with controlled entry/exit transitions to avoid layout thrashing and unintended click propagation.

# 3. Resume Preview Integration

The resume section includes:

Embedded PDF preview using an iframe
External Overleaf link
Clean separation between document preview and metadata card
Scaled and centered rendering for visual balance

## Local Development

Install dependencies:

npm install


Start development server:

npm run dev


Open:

http://localhost:3000

## Contact

LinkedIn: https://www.linkedin.com/in/ethan-nguyen112/

## Resourced Used
Used https://github.com/dillionverma/portfolio as a template.