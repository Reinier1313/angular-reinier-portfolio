import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  words: string[] = ['Computer Engineer', 'Frontend Developer', 'Designer', 'Aspiring Full-Stack Developer'];
  currentWord: string = '';
  wordIndex: number = 0;
  letterIndex: number = 0;

  ngOnInit(): void {
    this.type();
  }

  type() {
    if (this.letterIndex < this.words[this.wordIndex].length) {
      this.currentWord += this.words[this.wordIndex].charAt(this.letterIndex);
      this.letterIndex++;
      setTimeout(() => this.type(), 100); // Adjust typing speed here
    } else {
      setTimeout(() => {
        this.currentWord = ''; // Clear the current word
        this.wordIndex = (this.wordIndex + 1) % this.words.length; // Move to the next word
        this.letterIndex = 0; // Reset letter index
        this.type(); // Start typing the next word
      }, 3000); // Time to wait before starting the next word
    }
  }
}
