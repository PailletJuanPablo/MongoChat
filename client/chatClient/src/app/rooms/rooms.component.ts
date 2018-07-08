import { ChatServiceService } from './../chat-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
rooms;
  constructor(public chatsv: ChatServiceService) { }

  ngOnInit() {
    this.chatsv.getRooms().subscribe((data) => {
      this.rooms = data;
    });
  }

}
