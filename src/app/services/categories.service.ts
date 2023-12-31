import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _afs: AngularFirestore, private toastr: ToastrService) {}

  saveData(data: any) {
    this._afs
      .collection('categories')
      .add(data)
      .then((docRef) => {
        console.log(docRef);
        this.toastr.success('Data Insert Successfully ...!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
