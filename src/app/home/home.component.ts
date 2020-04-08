import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('myList') myList: ElementRef;

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

  scrollToBottom() {
    if (this.myList && this.myList.nativeElement) {
      this.myList.nativeElement.scrollTop = this.myList.nativeElement.scrollHeight;
    }
  }

  sendQueryAndGetResponse() {
    const newQuery = { response: this.chatQuery, from: 'user' };
    this.responseList.push(newQuery);
    this.chatQuery = '';
    this.chatBotService.getChatBotResponse(newQuery.response)
      .subscribe((data) => {
        const newResponse = { response: data.response, from: 'system' };
        this.responseList.push(newResponse);
      })
  }
  

}
