import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {AuthService} from "../../shared/services/authGuard/auth.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/userService/user.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PopupdialogComponent} from "../../shared/popupdialog/popupdialog/popupdialog.component";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  dialogTitle?: string = "Sikertelen regisztráció!";
  dialogLine1?: string = "Az emailnek legyen email formája!";
  dialogLine2?: string = "A jelszó álljon legalább 6 karakterből!";
  dialogLine3?: string = "A két jelszó legyen azonos!";

  constructor(private location: Location, private authService: AuthService, private userService: UserService,
              private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);

      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value,
        username: this.signUpForm.get('email')?.value.split('@')[0],
        name:{
          firstname: this.signUpForm.get('name.firstname')?.value,
          lastname: this.signUpForm.get('name.lastname')?.value
        }
      };
      //itt tortenik az adatbazisba szuras
      this.userService.create(user).then(_ =>{
        console.log('User added successfully.');
        this.router.navigateByUrl('/plays');
      }).catch(error =>{
        console.error(error);
      });
    }).catch(error => {
      this.openDialog();
      console.log('rossz');
      console.log(error);
    });
  }

  goBack(){
    this.location.back();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(PopupdialogComponent, {
      width: '450px',
      data: {
        title: this.dialogTitle,
        line1: this.dialogLine1,
        line2: this.dialogLine2,
        line3: this.dialogLine3
      },
    });


  }

}
