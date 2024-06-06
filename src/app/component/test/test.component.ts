import { Component } from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {ColorEvent} from "ngx-color";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',

  };
  state: string = '#ff0000';
  toggle: boolean = false;
  isDisabled: boolean = false;
  colorMode: 'color' | 'grayscale' = 'color'; // Variable to control the color mode
  toggleColorPicker() {
    this.toggle = !this.toggle;  // Toggle the color picker
  }
  toggleDisableColorPicker() {
    this.isDisabled = !this.isDisabled;  // Toggle the disabled state
  }
  changeColorMode() {
    this.colorMode = this.colorMode === 'color' ? 'grayscale' : 'color';  // Toggle color mode
  }
    handleChange($event: any) {
    this.state = $event.color.hex;
  }
  htmlContent = "";


}
