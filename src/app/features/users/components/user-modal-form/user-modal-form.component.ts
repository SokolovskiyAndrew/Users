import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormControlEnum } from '../../enums';
import { User } from '../../../../core/interfaces';

@Component({
  selector: 'app-user-modal-form',
  templateUrl: './user-modal-form.component.html',
  styleUrls: ['./user-modal-form.component.scss'],
})
export class UserModalFormComponent implements OnInit {
  @Input() title: string;
  @Input() userInfo: User | null;
  form: FormGroup;
  formControls = UserFormControlEnum;

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.initForm();
  }

  save(): void {
    this.activeModal.close(this.form.getRawValue());
  }

  cancel(): void {
    this.activeModal.close();
  }

  private initForm(): void {
    //Add validators for email, required fields
    this.form = this.fb.group({
      [this.formControls.firstName]: new FormControl(
        this.userInfo?.firstName ? this.userInfo?.firstName : null
      ),
      [this.formControls.lastName]: new FormControl(
        this.userInfo?.lastName ? this.userInfo?.lastName : null
      ),
      [this.formControls.email]: new FormControl(
        this.userInfo?.email ? this.userInfo?.email : null
      ),
      //Its preferable to create this control as datepicker component
      [this.formControls.birthDate]: new FormControl(
        this.userInfo?.birthDate ? this.userInfo?.birthDate : null
      ),
      //Its preferable to create this control as select dropdown with predefined options
      [this.formControls.role]: new FormControl(
        this.userInfo?.role ? this.userInfo?.role : null
      ),
    });
  }
}
