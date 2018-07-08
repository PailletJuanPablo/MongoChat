import { ChatServiceService } from './../chat-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
messages;
chatID;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chatsv: ChatServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
     this.chatsv.getChat(params['id']).subscribe((data) => {
      console.log(data);
      this.messages = data;
    });
    });

  }

}
