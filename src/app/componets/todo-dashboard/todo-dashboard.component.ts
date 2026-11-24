import { Component, OnInit} from '@angular/core';
import { Itodo } from 'src/app/model/todointerface';
import { UuidService } from 'src/app/services/uuid.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todoarr:Array<Itodo>=[
    {
  
todoitem:"Crud",
todoid:"111",
isCompleted:true
    },

    {
  
todoitem:"Create",
todoid:"112",
isCompleted:false
    }

  ]
  constructor(private UuidService:UuidService,
    private SnackbarService:SnackbarService
  ) { }

  ngOnInit(): void {
  }
  OntoAdd(newTodoObj:Itodo):void{
    this.todoarr.unshift(newTodoObj)

  }

}
