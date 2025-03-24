import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularApp';
  message: string = "Hello Ayush! from BridgeLabz";
  logoUrl: string = "assets/bridge-labz.webp";
  errorMessage: string = ''; 

  bridgeLabzUrl: string = "https://www.bridgelabz.com";

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, "_blank");
  }

  validateUserName(): void {
    const regex = /^[A-Z][a-zA-Z]{2,}$/; 
    if (this.userName === '') {
      this.errorMessage = 'Name is required!';
    } else if (!regex.test(this.userName)) {
      this.errorMessage = 'Invalid Name! Must start with uppercase & be at least 3 letters.';
    } else {
      this.errorMessage = ''; 
    }
  }

  userName: string = '';  
}
