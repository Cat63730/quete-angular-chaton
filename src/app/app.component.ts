import { Component } from '@angular/core';
import { catsToAdopt } from './data/cats';
import { Cat } from './models/Cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  catsToAdoptList: Cat[] = catsToAdopt;

  catsAdopted: Cat[] = [{
    race: 'Russe',
    name: 'Hasbulla',
    birth: new Date(),
    imgCat:
      'https://i.pinimg.com/736x/85/3b/eb/853beb1ca96bb4af58169ae4d28ad2fd.jpg',
  }];

  addNewCat(event: Cat){
    this.catsToAdoptList.push(event);
  }

  receiveToAdopt(event: Cat){
    this.catsAdopted.push(event);
    this.catsToAdoptList.splice(this.catsToAdoptList.indexOf(event), 1);
  }
}
