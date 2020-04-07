import { Component, OnInit, Renderer2 } from '@angular/core';
import { TdmbotService } from '../services/tdmbot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  openChatBox: boolean = false;
  bgoverly: boolean = true;
  chatQuery: string = '';
  responseList = [];

  constructor(private renderer: Renderer2, private chatBotService: TdmbotService) { }

  ngOnInit(): void {
  }
  
  showChatBox(){
    this.openChatBox = true;
    this.bgoverly = false;
  }
  closeChatBox() {
    this.openChatBox = false;
  }

  sendQueryAndGetResponse() {
    const newQuery = { response: this.chatQuery, from: 'user' };
    this.responseList.push(newQuery);

    this.chatBotService.getChatBotResponse(this.chatQuery)
      .subscribe((data) => {
        this.chatQuery = '';
        const newResponse = { response: data.response, from: 'system' };
        this.responseList.push(newResponse);
      })
  }
  

}
