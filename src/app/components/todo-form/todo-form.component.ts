import { Component, OnInit ,ViewChild,Output,Input,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todointerface';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm')todoForm!:NgForm
  @Output()newTodoObj=new EventEmitter<Itodo>();

  constructor(private snackbar:SnackbarService) { }

  ngOnInit(): void {

  }


  // create
  OntoAdd():void{
    console.log(this.todoForm.value);
    if(this.todoForm.invalid){
      this.todoForm.form.markAllAsTouched();
      
    }
    else{
      let val= this.todoForm.form.value;
      let newTodo:Itodo={
        todoitem:val.todoitem,
        todoid:Date.now().toString(),
      isCompleted: val.isCompleted === 'true'
      }
      this.newTodoObj.emit(newTodo);
      this.todoForm.resetForm();
      this.snackbar.showsnackBar('todo created sucsessfully!!')
    }
  }

  
}
