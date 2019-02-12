import * as firebase from 'firebase';

export class AuthService {
  token: string;

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
}
