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

  bridgeLabzUrl: string = "https://www.bridgelabz.com";

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, "_blank");
  }
}
