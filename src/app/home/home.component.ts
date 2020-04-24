import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
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
  queryList = [];
  second: boolean = false;
  
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

  showSecondOption() {
    this.second = true;
  }
  
  scrollToBottom() {
    if (this.myList && this.myList.nativeElement) {
      this.myList.nativeElement.scrollTop = this.myList.nativeElement.scrollHeight;
    }
  }

  getDataForQuery(item: string, isSecondary?: boolean) {
    //debugger;
    if(!isSecondary) {
      this.queryList.push(item);
      this.chatQuery = item;
    } else {
      this.chatQuery = this.queryList.pop() + ' in ' + item;
    }
    this.sendQueryAndGetResponse();
  }

  getCurrentTime() {
    return formatDate(new Date(), 'hh:mm:ss a', 'en-US', '+0530');
  }

  sendQueryAndGetResponse() {
    if (this.chatQuery) {

      this.queryList.push(this.chatQuery);
      const userTime = this.getCurrentTime();
      const newQuery = { response: this.chatQuery, from: 'user', time: userTime };
      this.responseList.push(newQuery);
      this.chatQuery = '';
      this.chatBotService.getChatBotResponse(newQuery.response)
        .subscribe((data) => {
          const systemTime = this.getCurrentTime();
          const newResponse = data;
          newResponse.from = 'system';
          newResponse.time = systemTime;

          /* if (newResponse.response === 'jira_link') {
            newResponse.response = '<a href="http://www.pdf995.com/samples/pdf.pdf" target="_blank">page link</a>';
          } */
          this.responseList.push(newResponse);
        })
    }
  }
  

}
