import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chat } from '../models/chat';

const chatBotUrl = 'http://tdm-chatbot-api.herokuapp.com/chatresponse/';

@Injectable({
  providedIn: 'root'
})
export class TdmbotService {

  constructor(private http: HttpClient) { }

  getChatBotResponse(query): Observable<Chat> { 
    console.log('In Service -- > ', query);
    const url = chatBotUrl + query;
    return this.http.get<Chat>(url)
  }
}
