import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';     
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,CanvasJSAngularChartsModule,RouterOutlet,FontAwesomeModule],
  templateUrl:'./dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  faCoffee = faCoffee;
  chartOptions = {
    animationEnabled: true,
    title: {
        text: "Les vues de ton profil"
    },
    axisY: {
        title: "Nombre de vues",
        valueFormatString: "#0.",
        
    },
    data: [{
        type: "splineArea",
        color: "rgba(54,158,173,.7)",
        xValueFormatString: "MMM DD, YYYY",

        dataPoints: [
          { x: new Date(2024, 8, 1), y: 0 },
          { x: new Date(2024, 8, 2), y: 2 },
          { x: new Date(2024, 8, 3), y: 65 },
          { x: new Date(2024, 8, 4), y: 1 },
          { x: new Date(2024, 8, 5), y: 71 },
          { x: new Date(2024, 8, 6), y: 10 },
          { x: new Date(2024, 8, 7), y: 2 },
          { x: new Date(2024, 8, 8), y: 86 },
          { x: new Date(2024, 8, 9), y: 74 },
          { x: new Date(2024, 8, 10), y: 5 },
          { x: new Date(2024, 8, 11), y: 76 },
          { x: new Date(2024, 8, 12), y: 84 },
          { x: new Date(2024, 8, 13), y: 10 },
          { x: new Date(2024, 8, 14), y: 76 },
          { x: new Date(2024, 8, 15), y: 79 }
        ]
    }]
}
  

}
