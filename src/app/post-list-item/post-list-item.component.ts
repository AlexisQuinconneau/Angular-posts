import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../models/post.model';
import { PostsService} from '../services/posts.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  getColor() {
  }

  onDontLoveIt() {
    this.postLoveIts--;
  }

  onLoveIt() {
    this.postLoveIts++;
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post);
  }
}
