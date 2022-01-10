import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { getISOWeek } from 'date-fns';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { NzSelectSizeType } from 'ng-zorro-antd/select';


@Component({
  selector: 'app-agrolab',
  templateUrl: './agrolab.component.html',
  styleUrls: ['./agrolab.component.less']
})
export class AgrolabComponent implements OnInit {

// SELECT
listOfOption: Array<{ label: string; value: string }> = [];
  size: NzSelectSizeType = 'default';
  singleValue = 'AGRO';
// S;ECT
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
  
  date = null;
  isEnglish = false;
  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
  type: 'info-circle',
  theme: 'twotone'
  
};

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(
    private fb: FormBuilder,
    private i18n: NzI18nService
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });


    
  }


  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  
  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }
  
  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }

}







