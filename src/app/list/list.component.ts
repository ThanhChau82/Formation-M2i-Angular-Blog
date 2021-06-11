import { Component, DoCheck, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, DoCheck {
  listPosts : Post[];

  constructor(private postService : PostService) { // Injecter le PostService
    this.listPosts = [];
  }

  ngOnInit(): void {
    this.listPosts = this.postService.getPosts();
  }

  deletePost(id : number) : void {
    if (confirm("Êtes-vous sûre de vouloir supprimer le post ?")) {
      this.postService.deletePost(id);
    }
  }

  ngDoCheck() {
    this.listPosts = this.postService.getPosts();
  }

}
