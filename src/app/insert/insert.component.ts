import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

  addPost(f : NgForm) : void {
    let post = new Post(f.value.userId, f.value.id, f.value.title, f.value.body);
    this.postService.addPost(post);
    console.log(this.postService.getPosts());
  }

}
