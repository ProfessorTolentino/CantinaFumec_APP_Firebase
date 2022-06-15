import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithEmail(credentials) {
    console.log('Sign in with email');
    return this.afAuth.signInWithEmailAndPassword(credentials.email,
      credentials.password);
  }

  signUp(credentials) {
    return this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  getEmail() {
    return this.user && this.user.email;
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  signInWithGoogle(): Promise<any> {
    console.log('Sign in with google');
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  private oauthSignIn(provider: AuthProvider) {
    if (!( window as any).cordova) {
      return this.afAuth.signInWithPopup(provider);
    } else {
      return this.afAuth.signInWithRedirect(provider)
        .then(() => {
          return this.afAuth.getRedirectResult().then(result => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            const token = result.credential.providerId;
            // The signed-in user info.
            const user = result.user;
            console.log(token, user);
          }).catch(function(error) {
            // Handle Errors here.
            alert(error.message);
          });
        });
    }
  }
}
