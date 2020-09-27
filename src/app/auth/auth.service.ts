import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
  ) {

    this.user$ = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )

    this.isLoggedIn$ = this.user$.pipe(
      map(user => !!user)
    )
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.angularFireAuth.signInWithPopup(provider);
    return this.updateUserData(credentials.user);
  }

  async signOut() {
    await this.angularFireAuth.signOut();
    this.router.navigateByUrl('/');
  }

  updateUserData(firebaseUser: firebase.User) {
    // Sets user data to firebase on login
    const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(`users/${firebaseUser.uid}`);

    const user: User = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL
    }

    return userRef.set(user, {merge: true});
  }
}
