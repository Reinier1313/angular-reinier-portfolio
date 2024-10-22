import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {


  constructor(private titleService:Title , private renderer: Renderer2) {
    this.titleService.setTitle('Reinier Mariscotes - Resume');



  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/Resume-Mariscotes-Portfolio-updated.pdf');
    link.setAttribute('download','Resume-Mariscotes-Portfolio-updated.pdf');
    link.click();
    link.remove();


  }
  

}
