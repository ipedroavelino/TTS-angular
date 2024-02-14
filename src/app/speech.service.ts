import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeechService { 
 

  constructor(private http: HttpClient) { 
  }

  vocaliza() { 
    return this.http.get('http://127.0.0.1:5000/run_script')
  }

}
