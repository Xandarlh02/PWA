import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  uploadedFiles: any[] = [];
  filename = ''
  display: boolean = false;
  display2: boolean = false;

  //This gets set when the dialog is opened, 
  //and the row you click on gets sent into the method "showDialog"
  displayedFile:any

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  //Handles uploading and clears the form after succesful upload
  uploadFile(event: { files: any; }, form:any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(file)
    }
      console.log(event.files)
      form.clear();
  }
  
  showDialog(file:any) {
    console.log(file)
    this.displayedFile = file
    this.display = true;
  }

  getSafeUrl(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);     
  }

}
