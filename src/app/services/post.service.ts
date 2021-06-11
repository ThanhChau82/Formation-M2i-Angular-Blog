import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts : Post[];

  constructor() {
    this.posts = [
      new Post(1, 1, "test title 1", "test body 1"),
      new Post(1, 2, "test title 2", "test body 2"),
    ];
  }

  getPosts() : Post[] {
    return [...this.posts]; // Retourner une copie de valeur de tableau de posts.
  }

  getPostById(id : number) : Post {
    return <Post>{...this.posts.find(p => p.id == id)}; // Retourner une copie de valeur de post.
  }

  addPost(post : Post) : void {
    this.posts.push(post);
  }

  editPost(post : Post) : void {
    let indice = this.posts.findIndex(p => p.id == post.id);
    this.posts[indice] = post;
  }

  deletePost(id : number) : void {
    this.posts = this.posts.filter(p => p.id == id);
  }
}
