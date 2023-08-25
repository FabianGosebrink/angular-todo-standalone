import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() todoAdded = new EventEmitter();

  form: FormGroup;

  constructor(formbuilder: FormBuilder) {
    this.form = formbuilder.group({
      todoValue: ['', Validators.required],
      done: [false],
    });
  }

  addTodo() {
    this.todoAdded.emit(this.form.value.todoValue);
    this.form.reset();
  }
}
