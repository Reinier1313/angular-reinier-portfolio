import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // Define the project array
  project: Project[] = [];
  filteredProjects: Project[] = [];
  
  // Filtering options (add a boolean flag for each tag)
  isCollapsed: boolean = true;
  filtering: boolean = false;
  typescript: boolean = false;
  nextjs: boolean = false;
  tailwindCSS: boolean = false;
  seoOptimization: boolean = false;
  react: boolean = false;
  responsiveDesign: boolean = false;
  python: boolean = false;
  reactJS: boolean = false;
  raspberryPi: boolean = false;
  iotSensors: boolean = false;
  mobileAppDevelopment: boolean = false;
  electronics: boolean = false;
  databaseManagement: boolean = false;
  userAuthentication: boolean = false;
  androidStudio: boolean = false;
  java: boolean = false;
  firebase: boolean = false;
  googleMapsAPI: boolean = false;
  arduino: boolean = false;
  dataVisualization: boolean = false;
  webDashboard: boolean = false;
  sensorIntegration: boolean = false;
  mechanicalDesign: boolean = false;
  medicalDeviceDevelopment: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Reinier Mariscotes - Portfolio');
  }

  ngOnInit(): void {
    // Load all projects initially
    this.project = this.projectService.GetProjects();
    this.filteredProjects = this.project; // Show all projects initially
  }

  Filter() {
    let filterTags: Tag[] = [];
    // Check which filters are selected
    if (this.typescript) { filterTags.push(Tag.TypeScript); this.filtering = true; }
    if (this.nextjs) { filterTags.push(Tag.NextJS); this.filtering = true; }
    if (this.tailwindCSS) { filterTags.push(Tag.TailwindCSS); this.filtering = true; }
    if (this.seoOptimization) { filterTags.push(Tag.SEOOptimization); this.filtering = true; }
    if (this.react) { filterTags.push(Tag.React); this.filtering = true; }
    if (this.responsiveDesign) { filterTags.push(Tag.ResponsiveDesign); this.filtering = true; }
    if (this.python) { filterTags.push(Tag.Python); this.filtering = true; }
    if (this.reactJS) { filterTags.push(Tag.ReactJS); this.filtering = true; }
    if (this.raspberryPi) { filterTags.push(Tag.RaspberryPi); this.filtering = true; }
    if (this.iotSensors) { filterTags.push(Tag.IOTSensors); this.filtering = true; }
    if (this.mobileAppDevelopment) { filterTags.push(Tag.MobileAppDevelopment); this.filtering = true; }
    if (this.electronics) { filterTags.push(Tag.Electronics); this.filtering = true; }
    if (this.databaseManagement) { filterTags.push(Tag.DatabaseManagement); this.filtering = true; }
    if (this.userAuthentication) { filterTags.push(Tag.UserAuthentication); this.filtering = true; }
    if (this.androidStudio) { filterTags.push(Tag.AndroidStudio); this.filtering = true; }
    if (this.java) { filterTags.push(Tag.Java); this.filtering = true; }
    if (this.firebase) { filterTags.push(Tag.Firebase); this.filtering = true; }
    if (this.googleMapsAPI) { filterTags.push(Tag.GoogleMapsAPI); this.filtering = true; }
    if (this.arduino) { filterTags.push(Tag.Arduino); this.filtering = true; }
    if (this.dataVisualization) { filterTags.push(Tag.DataVisualization); this.filtering = true; }
    if (this.webDashboard) { filterTags.push(Tag.WebDashboard); this.filtering = true; }
    if (this.sensorIntegration) { filterTags.push(Tag.SensorIntegration); this.filtering = true; }
    if (this.mechanicalDesign) { filterTags.push(Tag.MechanicalDesign); this.filtering = true; }
    if (this.medicalDeviceDevelopment) { filterTags.push(Tag.MedicalDeviceDevelopment); this.filtering = true; }

    // Apply the filtering based on the selected tags
    if (filterTags.length > 0) {
      this.filteredProjects = this.projectService.GetProjectsByFilter(filterTags);
    } else {
      this.filteredProjects = this.project; // If no filters are selected, show all projects
    }
  }

  ResetFilters() {
    // Reset all filter flags to false
    this.typescript = false;
    this.nextjs = false;
    this.tailwindCSS = false;
    this.seoOptimization = false;
    this.react = false;
    this.responsiveDesign = false;
    this.python = false;
    this.reactJS = false;
    this.raspberryPi = false;
    this.iotSensors = false;
    this.mobileAppDevelopment = false;
    this.electronics = false;
    this.databaseManagement = false;
    this.userAuthentication = false;
    this.androidStudio = false;
    this.java = false;
    this.firebase = false;
    this.googleMapsAPI = false;
    this.arduino = false;
    this.dataVisualization = false;
    this.webDashboard = false;
    this.sensorIntegration = false;
    this.mechanicalDesign = false;
    this.medicalDeviceDevelopment = false;

    // Reset the filteredProjects array to show all projects
    this.filteredProjects = this.projectService.GetProjects();
    this.filtering = false; // Set filtering to false
  }
}
