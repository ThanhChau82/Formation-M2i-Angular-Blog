import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route : ActivatedRoute) { } // ActivatedRoute pour récupérer les paramètres

  ngOnInit(): void {
    this.route.params.subscribe( // inscire aux observables pour intercepter le flux de paramètres
      parametres => {
        console.log(parametres['id']);
      }
    );
  }


}
