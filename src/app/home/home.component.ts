import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  openChatBox: boolean = false;
  bgoverly: boolean = true;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // this.renderer.addClass(document.body, "transparentbg");
  }
  
  showChatBox(){
    this.openChatBox = true;
    this.bgoverly = false;
  }
  closeChatBox() {
    this.openChatBox = false;
    // this.renderer.removeClass(document.body, "transparentbg");
  }

}
