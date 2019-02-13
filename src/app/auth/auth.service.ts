import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      () => alert("Account Created!!")
    )
    .catch(
      error => console.log(error)
    );
  }

  signInUser(email: string, password:string){
    this.router.navigate(['/']);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        );
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
