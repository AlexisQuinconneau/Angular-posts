import { Post} from '../models/post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {}

  emitPosts() {
  this.postsSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  loveItMore(post: Post) {
    const postIndexToLoveMore = this.posts.findIndex(
      (postElt) => {
        if (postElt === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToLoveMore].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  loveItLess(post: Post) {
    const postIndexToLoveLess = this.posts.findIndex(
      (postElt) => {
        if (postElt === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToLoveLess].loveIts--;
    this.savePosts();
    this.emitPosts();
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
