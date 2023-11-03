import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {}

  onSubmit(formData: NgForm) {
    let categoryData: Category = {
      category: formData.value.category,
    };

    this.categoryService.saveData(categoryData);

    // let subcategoryData = {
    //   subCategory: 'subCategory1',
    // };
    // this._afs
    //   .collection('categories')
    //   .add(categoryData)
    //   .then((docRef) => {
    //     console.log(docRef);

    //     this._afs
    //       .doc(`categories/${docRef.id}`)
    //       .collection('subcategories')
    //       .add(subcategoryData);

    //     this._afs
    //       .collection('categories')
    //       .doc(docRef.id)
    //       .collection('subcategories')
    //       .add(subcategoryData)
    //       .then((docRef1) => {
    //         console.log(docRef1);

    //         this._afs
    //           .doc(`categories/${docRef.id}/subcategories/${docRef1.id}`)
    //           .collection('subsubcategories')
    //           .add(subcategoryData);

    //         this._afs
    //           .collection('categories')
    //           .doc(docRef.id)
    //           .collection('subcategories')
    //           .doc(docRef1.id)
    //           .collection('subsubcategories')
    //           .add(subcategoryData)
    //           .then((docRef3) => {
    //             console.log('Second level subcategorie saved Successfully');
    //           });
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}
