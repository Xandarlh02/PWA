import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor(public sanitizer: DomSanitizer) { }

  //Handles uploading and clears the form after succesful upload
  myUploader(event: { files: any; }, form:any) {
   for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(event)
    form.clear();
  }
  getSafeUrl(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);     
  }


  ngOnInit(): void {
  }

}
