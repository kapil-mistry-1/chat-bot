import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chat } from '../models/chat';

const chatBotUrl = 'https://tdm-chatbot-api.herokuapp.com/chatresponse/';

@Injectable({
  providedIn: 'root'
})
export class TdmbotService {

  constructor(private http: HttpClient) { }

  getChatBotResponse(query): Observable<Chat> { 
    const url = chatBotUrl + query;
    return this.http.get<Chat>(url)
  }
}
