import Card from "./Card";
import taskEase from "../assets/taskEase.png";

const ChromeExtension = () => {
  return (
    <div className="text-white grid grid-cols-1 sm:grid-cols-2 pb-96">
      <Card
        projectName="TaskEase"
        liveLink="https://task-ease-r16.netlify.app"
        githubLink="https://github.com/DesaiVishal-16/Chrome-Extensions/tree/main/reading-time"
        src={taskEase}
        title="Task Management App"
        des="The project allows users to categorize tasks into four sections: all tasks, important tasks, urgent tasks, and completed tasks. Users receive notifications when task deadlines are exceeded."
        tags="React, Tailwind, React Router, React Context, Firebase"
      />
      <Card
        projectName="Chatify"
        liveLink="https://chatify-r16.netlify.app"
        githubLink="https://github.com/DesaiVishal-16/React-Projects/tree/main/Intermediate/Chat-App"
        src={taskEase}
        title="Chat App"
        des="The app offers real-time messaging with WebSocket, user authentication, and presence/status indicators. It supports rich text formatting, message history, and notifications for new messages and mentions."
        tags="React,Redux,Tailwind CSS,Axios,React Router,Firebase"
      />
      <Card
        projectName="weatherPilot"
        liveLink="https://weather-app-r16.vercel.app"
        githubLink="https://github.com/DesaiVishal-16/React-Projects/tree/main/Intermediate/Weather-App"
        src={taskEase}
        title="Weather Forecast App"
        des="The app displays real-time weather conditions, provides detailed forecasts, and sends alerts for severe weather. It includes interactive maps, geolocation services, and customizable notifications for multiple locations."
        tags="React,Weather Api,GeoLocation,Axios,Tailwind,React Context"
      />
      <Card
        projectName="weatherPilot"
        liveLink="https://weather-app-r16.vercel.app"
        githubLink="https://github.com/DesaiVishal-16/React-Projects/tree/main/Intermediate/Weather-App"
        src={taskEase}
        title="Weather Forecast App"
        des="The app displays real-time weather conditions, provides detailed forecasts, and sends alerts for severe weather. It includes interactive maps, geolocation services, and customizable notifications for multiple locations."
        tags="React,Weather Api,GeoLocation,Axios,Tailwind,React Context"
      />
    </div>
  );
};

export default ChromeExtension;
