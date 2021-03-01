import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagensPadraoService {

  constructor(private snackBar : MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
