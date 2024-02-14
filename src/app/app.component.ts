import { Component, ViewChild } from '@angular/core';
import { SpeechService } from './speech.service';
import { catchError, pipe, tap, throwError } from 'rxjs';
import { response } from 'express';
import { subscribe } from 'node:diagnostics_channel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  newdata: any

  constructor(private speech: SpeechService){

  }


  gerarSenha(){


    

    this.speech.vocaliza().subscribe(res=>{
      this.newdata = res
    })


    }

}
 
