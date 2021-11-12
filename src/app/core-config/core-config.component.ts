import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { downloadUrl } from 'src/utils/global';
import { AppService } from '../app.service';

@Component({
  selector: 'app-core-config',
  templateUrl: './core-config.component.html',
  styleUrls: ['./core-config.component.css']
})
export class CoreConfigComponent implements OnInit, OnDestroy {

  constructor(
    private service: AppService
  ) {
  }
  fileUrl: string = "";
  configForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  get f() {
    return this.configForm.controls;
  }

  ngOnInit(): void {
    this.setConfigForm()
  }

  setConfigForm() {
    this.configForm = new FormGroup({
      APP_NAME: new FormControl("", [Validators.required]),
      APP_TITLE: new FormControl("", []),
      APP_LOGO: new FormControl("", []),
      APP_ICON: new FormControl("", []),
      DEFAULT_CURRENCY: new FormControl("", []),
      DEFAULT_CURRENCY_CODE: new FormControl("", []),
      DEFAULT_COUNTRY: new FormControl("", []),
      DEFAULT_THEME: new FormControl("", []),
      API_URL: new FormControl("", []),
      ADMIN_URL: new FormControl("", []),
      WEB_URL: new FormControl("", []),
      BASIC_AUTH_USERNAME: new FormControl("", []),
      BASIC_AUTH_PASSWORD: new FormControl("", []),
      MQTT_USERNAME: new FormControl("", []),
      MQTT_PASSWORD: new FormControl("", []),
      MQTT_URL: new FormControl("", []),
      SUPPORT_EMAIL: new FormControl("", []),
      ALT_TEXT: new FormControl("", []),
      METATAG_TITLE: new FormControl("", []),
      METATAG_DESCRIPTION: new FormControl("", []),
      PREVIEW_IMAGE: new FormControl("", []),
      OG_IMAGE: new FormControl("", []),
      TWITTER_IMAGE: new FormControl("", []),
      FACEBOOK_IMAGE: new FormControl("", []),
    })
  }

  handleSubmitForm(formData: any) {
    this.submitted = true;
    localStorage.setItem('formData', JSON.stringify(formData));
    // const payload = {
    //   data: formData,
    //   filename: "config.js"
    // }
    // this.service.getDownloadableUrl(payload)
    //   .subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       this.fileUrl = res.data
    //     }
    //   )
  }

  handleDownloadConfig(data: any) {
    console.log('data', data)
    // downloadUrl(data, "core-config.js")

    let content = '';
    Object.keys(data).forEach((key) => {
      // Append the text into the content
      content += `export const ${key}: "${data[key]}";\n`;
    });

    let a = document.createElement('a');
    a.href = "data:application/octet-stream," + encodeURIComponent(content);
    a.download = 'config.ts';
    a.click();
  }

  ngOnDestroy() {
    // localStorage.removeItem('formData')
  }
}

export const APP_NAME = "Fanzly";