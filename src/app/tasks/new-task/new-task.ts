import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  // @Output() formulario = new EventEmitter<{}>();
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";

  // using signal
  // enteredTitle = signal("");
  // enteredSummary = signal("");
  // enteredDate = signal("");

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    console.log("submit btn was pressed");
  }
}
