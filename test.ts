import { Component, OnInit } from '@angular/core';
import { ExamPlanService } from 'src/app/gen';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-exam-plan-upload',
  templateUrl: './exam-plan-upload.component.html',
  styleUrls: ['./exam-plan-upload.component.sass']
})
export class ExamPlanUploadComponent implements OnInit {
  constructor(private readonly examPlanService: ExamPlanService) { }

  path: Object = {
    saveUrl: 'http://localhost:3000/exam-plan/import'
  };

  ngOnInit() {
  }

  onUploadSuccess(args) {
    if (args.operation === 'upload') {
      console.log('File uploaded successfully');
    }
  }

  onUploadFailure(args) {
    console.log('File failed to upload', args);
  }

  onBeforeUpload(args) {
    console.log("Bytes: ", args.fileData.size);
    console.log(args);
    this.examPlanService.importExamPlan(args.fileData.rawFile, 'response').subscribe(response => {
      console.log("success")
    }, (error) => {
      console.log(error)
    });
  }

  onChange(event) {
    if (event.srcElement.files[0]) {
      this.examPlanService.importExamPlan(event.srcElement.files[0], 'response').subscribe(response => {
        console.log("success")
        return;
      }, (error) => {
        console.log(error.message)
      });
    }
    else {
      console.log("No file")
    }

  }
}


