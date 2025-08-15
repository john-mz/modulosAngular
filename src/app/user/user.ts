import { Component, EventEmitter, Input, output, Output} from '@angular/core';

interface UserObject {
    id: string;
    name: string;
    avatar: string;
}   

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // "!" means we know it'll have a value
  // "required: true" hace que me obligue a poner avatar y name en el frontend
  // @Input() name!: string; //este input seria opcional 

  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;

  @Input({required: true}) user!: UserObject;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.user?.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user?.id);
  }


}
