import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerCar, CustomerTable } from '../../customer';

@Component({
  selector: 'customer-cars',
  templateUrl: './customer-cars.component.html',
  styleUrls: ['./customer-cars.component.scss'],
})
export class CustomerCarsComponent implements OnInit {
  @Input() cars: CustomerCar[] = [];
  @Output() carsChange = new EventEmitter<CustomerCar[]>();

  isEditing: boolean = false;
  currentIndex: number = -1;
  carForm!: FormGroup;

  columns: CustomerTable[] = [
    {
      columnName: 'Id',
      columnProp: 'id',
    },
    {
      columnName: 'Modelo',
      columnProp: 'model',
    },
    {
      columnName: 'Cor',
      columnProp: 'color',
    },
    {
      columnName: 'Ano',
      columnProp: 'year',
    },
  ];

  header: string[] = [];

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.header = [
      ...this.columns.map((column) => column.columnProp),
      'actions',
    ];
  }

  edit(car?: CustomerCar, index?: number) {
    this.carForm = this._fb.group({
      id: [''],
      model: ['', Validators.required],
      year: [2022, Validators.required],
      color: ['', Validators.required],
    });
    
    if (car) {
      this.carForm.patchValue(car);
    }

    this.currentIndex = index ?? -1;
    this.isEditing = true;
  }

  finalizeChange() {
    if (this.carForm.invalid) {
      this.carForm.markAllAsTouched();
      return;
    }
    
    const car = this.cars[this.currentIndex];

    if (car) {
      car.color = this.carFormValue.color;
      car.model = this.carFormValue.model;
      car.year = this.carFormValue.year;

      this.carsChange.emit(this.cars);
    } else {
      this.carsChange.emit([...this.cars, this.carFormValue]);
    }

    this.resetEditing();    
  }

  delete(index: number) {    
    const cars = this.cars.filter((_, i) => i !== index );

    this.carsChange.emit(cars);
  }

  resetEditing(){
    this.isEditing = false;
    this.currentIndex = -1;
  }

  get modelControlInvalid() {
    const modelControl = this.carForm.get('model');

    return modelControl?.invalid && modelControl.touched;
  }

  get colorControlInvalid() {
    const colorControl = this.carForm.get('color');

    return colorControl?.invalid && colorControl.touched;
  }

  get yearControlInvalid() {
    const yearControl = this.carForm.get('year');

    return yearControl?.invalid && yearControl.touched;
  }

  private get carFormValue() {
    const car: CustomerCar = this.carForm.value;

    return car;
  }
}
