import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listPosts : Post[];

  constructor(private postService : PostService) {
    this.listPosts = [];
  }

  ngOnInit(): void {
    this.listPosts = this.postService.getPosts();
  }

}
