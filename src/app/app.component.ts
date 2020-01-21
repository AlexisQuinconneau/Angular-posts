import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 /* title = 'Posts';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet eros augue. Etiam facilisis lacus velit, at gravida ante ultrices a. Donec tempor velit ut risus malesuada, sit amet consectetur enim laoreet. Quisque commodo tempus mattis. In hac habitasse platea dictumst. Proin facilisis lorem sed sem rutrum pulvinar. Nunc sem enim, fringilla non vulputate sit amet, pharetra eget leo. Suspendisse id pharetra ante. ',
      loveIts: 2,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet eros augue. Etiam facilisis lacus velit, at gravida ante ultrices a. Donec tempor velit ut risus malesuada, sit amet consectetur enim laoreet. Quisque commodo tempus mattis. In hac habitasse platea dictumst. Proin facilisis lorem sed sem rutrum pulvinar. Nunc sem enim, fringilla non vulputate sit amet, pharetra eget leo. Suspendisse id pharetra ante. ',
      loveIts: -1,
      createdAt: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Aenean ac pulvinar dolor. Vestibulum luctus tortor commodo blandit pulvinar. Suspendisse efficitur lacus sit amet magna tempor finibus. Morbi molestie lobortis accumsan. Proin fringilla sapien lectus, vestibulum efficitur ex posuere a. Fusce purus nibh, imperdiet non lectus vitae, vestibulum tristique justo. Nullam velit est, tempus vitae condimentum vitae, cursus quis metus. ',
      loveIts: 0,
      createdAt: new Date()
    }
  ];*/
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCAfuvyWRwAGJOpLsALIX0D0mmht4bc5gU",
      authDomain: "angular-posts-d9ab2.firebaseapp.com",
      databaseURL: "https://angular-posts-d9ab2.firebaseio.com",
      projectId: "angular-posts-d9ab2",
      storageBucket: "angular-posts-d9ab2.appspot.com",
      messagingSenderId: "243217209056",
      appId: "1:243217209056:web:60dd94f6f1da5bf431e285"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
