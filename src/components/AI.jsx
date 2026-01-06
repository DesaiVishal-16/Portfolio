import Card from "./Card";
import ragImg from "../assets/rag_demo.png";
import tutorImg from "../assets/llm_tutor.png";

const AI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
      <Card
        projectName="RAG-Demo"
        liveLink="#"
        githubLink="https://github.com/DesaiVishal-16/RAG-Demo"
        src={ragImg}
        title="RAG Implementation"
        des="A demonstration of Retrieval-Augmented Generation (RAG) using LangChain and OpenAI. Features document ingestion, vector storage, and context-aware question answering."
        tags="Python, LangChain, OpenAI, VectorDB"
      />
      <Card
        projectName="LLM-Tutor"
        liveLink="#"
        githubLink="https://github.com/DesaiVishal-16/LLM-Tutor"
        src={tutorImg}
        title="AI-Powered Tutor"
        des="An intelligent tutoring system powered by LLMs. Provides personalized learning paths, interactive explanations, and automated feedback for students."
        tags="React, OpenAI, Node.js, Tailwind"
      />
      <Card
        projectName="Automation-tool"
        liveLink="#"
        githubLink="https://github.com/DesaiVishal-16/Automation-tool"
        src={ragImg}
        title="AI Automation Tool"
        des="A tool for automating repetitive tasks using AI agents. Supports multi-step workflows, natural language commands, and integration with various APIs."
        tags="Python, LangGraph, CrewAI, Streamlit"
      />
    </div>
  );
};

export default AI;
