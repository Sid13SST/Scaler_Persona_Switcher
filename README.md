<div align="center">
  <h1>✨ Scaler Persona-Based AI Chatbot</h1>
  <p><i>A deeply context-aware, highly structured AI mentoring platform.</i></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Gemini API](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
</div>

<br />

Welcome to **Assignment 01**! This application allows users to experience real, context-driven conversations with three prominent Scaler personalities: **Anshuman Singh**, **Abhimanyu Saxena**, and **Kshitij Mishra**. 

By utilizing rigorous system prompt engineering (including Few-Shot Learning, Chain-of-Thought reasoning, and strict behavioral constraints), the Gemini API effortlessly embodies their unique mentoring styles, values, and teaching paradigms.

---

## 📸 Screenshots

*(Replace the URL below with a link to your actual screenshot after deploying)*

<div align="center">
  <img src="https://via.placeholder.com/800x450.png?text=Add+Your+App+Screenshot+Here" alt="Chatbot UI Preview" width="800" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"/>
</div>

---

## 🌟 Key Features

* 🎭 **Dynamic Persona Switching**: Seamlessly toggle between three distinct educators. The conversation resets and suggestion chips adapt instantly upon switching.
* 🧠 **Robust Prompt Architecture**: Powered by advanced prompt engineering embedded directly in the API route, preventing prompt-injection and guaranteeing hyper-realistic responses.
* 🎨 **Premium UI/UX**: Built with purely Vanilla CSS modules—featuring glassmorphism, fluid micro-animations, a responsive layout, and an active typing indicator.
* 🔒 **Secure Execution**: API keys are securely stored on the server-side (`/api/chat`), ensuring absolute safety from frontend exposure.
* ⚡ **Zero-Config Deployment**: Engineered using the Next.js App Router to automatically deploy the frontend and backend in one single, frictionless Vercel deployment.

---

## 🛠️ Technology Stack

| Area | Technology | Reason for Choice |
| :--- | :--- | :--- |
| **Frontend** | React (Next.js 15) | Chosen for its robust App Router architecture and React state management. |
| **Backend** | Next.js API Routes | Serves as a secure, serverless backend to keep the API key completely hidden. |
| **Styling** | Vanilla CSS Modules | Adheres strictly to the requirement for raw CSS, achieving premium aesthetics without Tailwind. |
| **AI Integration** | `@google/generative-ai` | The official Node SDK for connecting to the powerful Gemini `2.5-flash` model. |

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18 or higher)
- A valid Google Gemini API Key

### Installation

1. **Clone the repository** 
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Rename `.env.example` to `.env.local` (or just `.env`) and add your API key:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_actual_api_key_here
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.*

---

## 🌐 Deployment

This application is optimized for Vercel. 

1. Push your code to a public GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your newly created repository.
4. Under **Environment Variables**, add `GOOGLE_GENERATIVE_AI_API_KEY` with your working Gemini key.
5. Click **Deploy**.

> **Live Demo:** [Click Here to View Live Project](https://your-vercel-deployment-url-goes-here.vercel.app)

---

## 📂 Documentation Deliverables

As per the assignment requirements, the following documentation files are included in the root directory:
- 📝 `prompts.md`: Contains the thoroughly structured system prompts for all 3 personas, including Few-Shot examples and Constraints.
- 💡 `reflection.md`: A ~350-word reflection dissecting the *Garbage In, Garbage Out* (GIGO) principle in prompt engineering.
- 🔑 `.env.example`: Safe template file demonstrating the necessary environment variables.
