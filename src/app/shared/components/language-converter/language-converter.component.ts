import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-language-converter',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './language-converter.component.html',
  styleUrl: './language-converter.component.scss'
})
export class LanguageConverterComponent {

}
