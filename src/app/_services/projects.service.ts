import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
        id: 0,
        name: "LRY Reviews Marketing Website",
        summary: "SEO-optimized website using Next.js and Tailwind CSS.",
        description: "Developed a responsive and interactive marketing website with a focus on search engine optimization. The project involved creating a modern, user-friendly interface that effectively showcases LRY's services and improves their online presence. Key features include dynamic content loading, optimized meta tags for better SEO, and integration with analytics tools for performance tracking.",
        projectLink: '',
        tags: [Tag.NextJS, Tag.TailwindCSS, Tag.SEOOptimization, Tag.React, Tag.ResponsiveDesign,Tag.TypeScript],
        pictures: ["../../assets/lry-marketing.JPG"]
        
    },
    {
        id: 1,
        name: "dotBean",
        summary: "Smart coffee bean storage monitored through a mobile application.",
        description: "Designed and developed an embedded system for smart coffee bean storage using Python, various sensors, Raspberry Pi, and React JS. This IoT project aims to revolutionize coffee bean storage for enthusiasts and small businesses. The system monitors temperature, humidity, and CO2 levels to ensure optimal storage conditions for coffee beans.",
        projectLink: '../../assets/dotBean-Final Manuscript.pdf',
        tags: [Tag.Python, Tag.ReactJS, Tag.RaspberryPi, Tag.IOTSensors, Tag.MobileAppDevelopment],
        pictures: ["../../assets/dotBean.JPG"]
    },
    {
        id: 2,
        name: "CPE DocHub",
        summary: "Digital library for the Computer Engineering Department.",
        description: "Created a centralized platform for academic resources using Next.js and Tailwind CSS. This project serves as a comprehensive digital library for Computer Engineering students, providing easy access to course materials, research papers, and department resources.",
        projectLink: '',
        tags: [Tag.NextJS, Tag.TailwindCSS, Tag.DatabaseManagement, Tag.UserAuthentication],
        pictures: ["../../assets/dochub.png"]
    },
    {
        id: 3,
        name: "Palengk-E",
        summary: "Mobile application connecting farmers and buyers.",
        description: "Developed an Android app to revolutionize local market connections for fresh produce. Palengk-E aims to create a direct link between farmers and consumers, reducing intermediaries and promoting fair trade practices.",
        projectLink: '../../assets/Palengk-e-documentation.pdf',
        tags: [Tag.AndroidStudio, Tag.Java, Tag.Firebase, Tag.GoogleMapsAPI,Tag.MobileAppDevelopment],
        pictures: ["../../assets/palengke-app.jpg"]
    },
    {
        id: 4,
        name: "IoT Air Quality Monitoring System",
        summary: "Real-time monitoring of Temperature, Humidity, and Gas levels.",
        description: "Integrated various sensors with Arduino for comprehensive air quality analysis. This project focuses on creating an affordable and accurate air quality monitoring system for indoor environments, with potential applications in homes, offices, and industrial settings.",
        projectLink: '../../assets/AirAware_Final-Documentation.pdf',
        tags: [Tag.Arduino, Tag.IOTSensors, Tag.DataVisualization, Tag.WebDashboard],
        pictures: ["../../assets/iot.jpg"]
    },
    {
        id: 5,
        name: "Mechanical Non-invasive Ventilator",
        summary: "Ventilator with integrated sensors for patient care.",
        description: "Collaborated with Mechanical Engineers to design a non-invasive ventilator with Arduino-based sensor integration for vital signs monitoring. This interdisciplinary project aimed to create an affordable ventilator solution in response to global healthcare challenges.",
        projectLink: '',
        tags: [Tag.Arduino, Tag.SensorIntegration, Tag.MechanicalDesign, Tag.MedicalDeviceDevelopment],
        pictures: ["../../assets/Me.jpg"]
    },
    {
      id: 6,
      name: "Next JS Porftolio Website",
      summary: "My Portfolio in Next JS.",
      description: "Showcasing my versatility made a completelty separate website porftolio using another framework NEXTJS",
      projectLink: 'https://my-personal-portfolio-eight-rho.vercel.app',
      tags: [Tag.NextJS, Tag.TailwindCSS, Tag.ResponsiveDesign, Tag.TypeScript],
      pictures: ["../../assets/nextjs.JPG"]
  }
];

  constructor() { }

  GetProjects (){
    return this.projects;
  }

  GetProjectsById( id: number) : Project {

    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError ('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]): Project[] {
    let filteredProjects: Project[] = [];

    this.projects.forEach((project) => {
        let foundAll = true;

        filterTags.forEach((filterTag) => {
            // Check if the project contains the filterTag, set foundAll to false if not found
            if (project.tags.includes(filterTag) === false) {
                foundAll = false;
            }
        });

        // If the project contains all filter tags, add it to the filteredProjects array
        if (foundAll) {
            filteredProjects.push(project);
        }
    });

    return filteredProjects;
}

}
