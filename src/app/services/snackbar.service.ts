import { Injectable } from '@angular/core';
import{MatSnackBar} from'@angular/material/snack-bar'
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }
  showsnackBar(msg:string){
    this.snackbar.open(msg,'Close',{
      duration:2500,
      horizontalPosition:'left',
      verticalPosition:"top"
    })
  }
}
