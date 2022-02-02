import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css'],
})
export class ContractsComponent implements OnInit {
  contracts = [
    {
      name: 'Amy Winehouse',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      value: '$300',
      status: 'Active',
      urlPhoto: '../../../assets/images/amy.jpg',
    },

    {
      name: 'John Lennon',
      type: 'Traditional',
      startDate: 'Mar 5, 2021',
      value: '$500',
      status: 'Active',
      urlPhoto: '../../../assets/images/john.jpeg',
    },

    {
      name: 'Elvis Presley',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      value: '$400',
      status: 'Signature pending',
      urlPhoto: '../../../assets/images/elvis.jpeg',
    },

    {
      name: 'Michael Jackson',
      type: 'Traditional',
      startDate: 'Mar 5, 2021',
      value: '$600',
      status: 'Signature pending',
      urlPhoto: '../../../assets/images/michael.jpg',
    },
  ];

  types = [
    {
      value: 'Traditional',
    },
    { value: 'Others' },
    { value: 'All' },
  ];

  status = [
    {
      value: 'Active',
    },
    { value: 'Signature pending' },
    { value: 'All' },
  ];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      dateRange1: '',
      dateRange2: '',
      search: '',
      contractorName: ''
    });
  }
}
