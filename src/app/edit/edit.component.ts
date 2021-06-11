import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post : Post;

  constructor(private postService : PostService, private route : ActivatedRoute, private router : Router) { // ActivatedRoute pour récupérer les paramètres
    this.post = <Post>{};
  }

  ngOnInit(): void {
    this.route.params.subscribe( // inscire aux observables pour intercepter le flux de paramètres
      parametres => {
        // Récupérer le post à modifier.
        this.postService.getPostById(parametres['id']).subscribe(
          data => {
            this.post = data;
          }
        );
      }
    );
  }

  editPost(f : NgForm) : void {
    // Modifier le post avec les nouvelles valeurs.
    this.post.userId = f.value.userId;
    this.post.title = f.value.title;
    this.post.body = f.value.body;

    // Synchroniser avec la liste des postes
    this.postService.editPost(this.post);

    // Naviguer vers la page de liste des posts.
    this.router.navigate(['/list']);
  }

}
