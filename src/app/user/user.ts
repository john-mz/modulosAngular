import { Component, EventEmitter, Input, output, Output} from '@angular/core';

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

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id);
  }


}
