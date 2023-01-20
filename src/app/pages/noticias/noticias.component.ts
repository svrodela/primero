import { Component } from '@angular/core';
import { NoticiaResult } from 'src/app/interfaces/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  constructor(private service: NoticiasService) {

  }
  noticias!: NoticiaResult;

  ngOnInit(): void {
    this.service.getNoticias().subscribe((result: NoticiaResult) => {
      this.noticias = result;
      console.log(result);
    });
  }


}
