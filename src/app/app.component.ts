import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  nom : String;
  posts: any[]=[];
  constructor(postService : PostService){
    this.nom = postService.nom;
    postService.getPost().subscribe(res =>{
      console.log(res);
      console.log("ok")
      this.posts= res;
      console.log(res.id);
    }, err =>{
      console.log(err);
    })
  }
}
