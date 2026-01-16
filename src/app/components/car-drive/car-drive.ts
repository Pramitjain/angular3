import { Component, inject, signal } from '@angular/core'; // Added missing import
import { Apollo } from 'apollo-angular'; // Added missing import
import { GET_USER_PROFILE } from './cardrive.queries'; // Added missing import for carDrive
import 'tslib'; // Added missing import for tslib

@Component({
  selector: 'app-car-drive',
  imports: [],
  templateUrl: './car-drive.html',
  styleUrls: ['./car-drive.css'], // Fixed styleUrl to styleUrls
})

export class CarDrive {

  private apollo = inject(Apollo);
  
  // Using Signals for state
  carDrive = signal<any>(null);
  loading = signal(true);

  ngOnInit() {
    try {

    this.apollo.watchQuery({
      query: GET_USER_PROFILE,
      // variables: { id: '123' }
    }).valueChanges.subscribe((result: any) => {
      console.log(result);
      console.log(result.data.carDrive.nodes);

      this.carDrive = result.data.carDrive.nodes;
      
      result.data.carDrive.nodes.forEach((element: { f_DriveBy: any }) => { // Added type annotation for element
        console.log(element.f_DriveBy);
      });
    });

  }
  catch (error) {
    alert(error);
  }
  }
}
