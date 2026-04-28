# Persona-Based AI Chatbot (Assignment 01)

This repository contains the implementation of a Persona-Based AI Chatbot built using Next.js, React, Vanilla CSS, and the Google Gemini API. It allows users to have rich, context-aware conversations with three unique educator personas.

## Features
- **Dynamic Persona Switching**: Seamlessly toggle between three distinct personas (Anshuman Singh, Abhimanyu Saxena, Kshitij Mishra).
- **Custom System Prompts**: Each persona is backed by a heavily researched, highly structured system prompt that defines their communication style, values, and pedagogical approach.
- **Robust Prompt Architecture**: Prompts utilize Few-Shot Prompting, Chain-of-Thought reasoning instructions, strict Constraints, and Output formatting rules.
- **Secure Backend**: The API key is securely stored in environment variables and processed on the server-side via Next.js API routes.
- **Premium UI**: Designed with Vanilla CSS for maximum flexibility, featuring glassmorphism, responsive design, typing indicators, and suggestion chips.

## Directory Structure
- `src/app/page.js`: The frontend React component (UI).
- `src/app/globals.css` & `page.module.css`: Vanilla CSS styling files.
- `src/app/api/chat/route.js`: The backend Next.js API route integrating the LLM.
- `prompts.md`: Contains the detailed system prompts.
- `reflection.md`: Contains the 300-500 word reflection on the GIGO principle.

## Getting Started

### Prerequisites
- Node.js (v18+)
- A Google Gemini API Key (or OpenAI API Key if configured)

### Setup Instructions

1. **Clone the repository** (or download the source code).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   - Copy `.env.example` to `.env.local`
   - Add your API key:
     ```env
     GOOGLE_GENERATIVE_AI_API_KEY=your_actual_api_key_here
     ```
4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
5. **Open your browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment
This application is fully prepared to be deployed to Vercel. 
1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Add `GOOGLE_GENERATIVE_AI_API_KEY` to the Vercel Environment Variables settings.
4. Deploy!

### Live Project URL
*Deployment Link will be placed here after Vercel deployment*

## Screenshots
*(Add screenshots of the working UI and persona switcher here)*
