import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { configs } from '../assets/config';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'angular-page-demo';
  jsonData: any = configs.registration;
  previewData: any = configs.registration; // This will be updated for preview
  showPreview = true;
  public editorOptions!: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, { static: false }) editor!: JsonEditorComponent;

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
  }

  updateConfig() {
    try {
      this.previewData = this.editor.get();
      this.showPreview = false; // Hide the component
      setTimeout(() => {
        this.showPreview = true; // Show the component again
      });
    } catch (error) {
      console.error('Invalid JSON format:', error);
    }
  }
}
