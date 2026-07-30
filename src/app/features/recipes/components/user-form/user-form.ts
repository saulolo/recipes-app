import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  //Campo nombre
  nombre = signal('');

  //campo genero
  genero = signal('');

  hobbies = signal('');
  hobbiesArray = signal<String[]>([]);

  procesarHobbies(): void {
    const text = this.hobbies().trim();

    if (text == '') {
      this.hobbiesArray.set([]);
      return;
    }

    const hobbies = text.split(' ').filter((hobbie) => hobbie.length > 0);

    this.hobbiesArray.set(hobbies);
  }

  getTitulo(): string {
    if (this.genero() == 'masculino') {
      return 'Señor';
    } else if (this.genero() === 'femenino') {
      return 'Señora';
    } else {
      return '';
    }
  }
}
