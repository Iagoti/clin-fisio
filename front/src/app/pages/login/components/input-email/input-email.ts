import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SHARED_INPUT_IMPORTS } from '../../../../shared/input-modules';

@Component({
  selector: 'app-input-email',
  imports: [...SHARED_INPUT_IMPORTS],
  templateUrl: './input-email.html',
  styleUrl: './input-email.scss',
})
export class InputEmail {
  @Input({ required: true }) parentFormGroup!: FormGroup;
  @Input() controlName = 'email';
  @Input() label = 'E-mail';  
}
