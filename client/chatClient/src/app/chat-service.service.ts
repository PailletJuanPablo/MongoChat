import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(public http: HttpClient) {
   }

   getRooms() {
    return this.http.get("http://localhost:3000/api/Rooms");
   }

   getChat(id) {
     return this.http.get("http://localhost:3000/api/Rooms/" + id + "/messages");
   }

   getAuthorName(id) {
    this.http.get("http://localhost:3000/api/Users/" + id).subscribe((data) => {
    return data['username'];
    });
   }
}
