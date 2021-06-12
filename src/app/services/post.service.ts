import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts : Post[];

  constructor(private http : HttpClient) {
    this.posts = [];
   }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'); // Lancer la requête vers le server.
  }

  getPostById(id : number) : Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  addPost(post : Post) : void {
    this.http.post('https://jsonplaceholder.typicode.com/posts', post).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  editPost(post : Post) : void {
    this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post).subscribe(
      data => {
        console.log(data);
      }
    );
    //let indice = this.posts.findIndex(p => p.id == post.id);
    //this.posts[indice] = post;
  }

  deletePost(id : number) : void {
    this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id).subscribe(
      data => {
        console.log(data);
      }
    )
    //this.posts = this.posts.filter(p => p.id != id);
    //console.log(this.posts);
  }
}
