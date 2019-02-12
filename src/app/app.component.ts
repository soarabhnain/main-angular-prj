import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCcCuiopRP0MtxmO5hYiP-Ycg3kpZy99Cc",
      authDomain: "ng-recipe-book-63c1f.firebaseapp.com"
    });
  }


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


}
