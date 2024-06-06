import { Target } from '../../models/target';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-target-form',
  templateUrl: './target-form.component.html',
  styleUrl: './target-form.component.scss'
})
export class TargetFormComponent  {
  @Input() targetList?: Target[];
  @Output() generateTarget: EventEmitter<Target> = new EventEmitter<Target>();
  @Output() updateTarget: EventEmitter<Target> = new EventEmitter<Target>();
  @Output() deleteTarget: EventEmitter<number> = new EventEmitter<number>();
  targetForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.targetForm = this.fb.group({
      id: [],
      name: [null, Validators.required],
      rate: [null, Validators.required],
      unit: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

  saveTarget(id?: number | null) {
   let newTarget: Target;
    newTarget = {
      id: this.targetForm.value.id || null,
      name: this.targetForm.value.name,
      rate: this.targetForm.value.rate,
      unit: this.targetForm.value.unit,
      startDate: this.targetForm.value.startDate,
      endDate: this.targetForm.value.endDate
    }
    if(id){
      this.updateTarget.emit(newTarget);
    } else {
      this.generateTarget.emit(newTarget);
    }
    this.targetForm.reset();
  }

  editTarget(target: Target){
    this.targetForm.patchValue(target);
    this.openTargetForm();
  }

  removeTarget(id: number) {
    this.deleteTarget.emit(id);
  }

  openTargetForm() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null){
     modelDiv.style.display= 'block';
    }
  }

  closeTargetForm() {
    const modelDiv =   document.getElementById('myModal');
    if(modelDiv!= null){
     modelDiv .style.display= 'none';
    }
  }
}
