import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FakeLoadingService} from "../../shared/services/spinnerService/fake-loading.service";
import {Observable, Subscription} from "rxjs";
import {AuthService} from "../../shared/services/authGuard/auth.service";
import {PopupdialogComponent} from "../../shared/popupdialog/popupdialog/popupdialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;
  loading: boolean = false;

  dialogTitle?: string = "Sikertelen belépés!";
  dialogLine1?: string = "Téves e-mail vagy jelszó!";

  constructor(private router: Router,  private loadingService: FakeLoadingService, private authService: AuthService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;
    //Promise
/*    this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean) => {
      console.log("this executed second");
      this.router.navigateByUrl('/main');
    }).catch(error => {
      console.error('Incorrect email or password!');
    }).finally(()=>{
      console.log('this is executed finally');
    });*/

    // async-await
/*    try {
      //then
    const _ = await this.loadingService.loadingWithPromise(this.email.value, this.password.value)
      this.router.navigateByUrl('/main');
    }catch(error) {
      //catch
      console.error('Incorrect email or password!');
    }
    //finally
    console.log('this is executed finally');*/

  //Observable
    //memory leak

/*    this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value, this.password.value);
    this.loadingSubscription = this.loadingObservation/!*.subscribe((data : boolean) => {
      console.log(data);*!/
      .subscribe(
        {
          next: (data: boolean) => {
            this.router.navigateByUrl('/main');
          }, error: (error) => {
            console.error(error);
            this.loading = false;
          }, complete: () => {
            console.log('finally');
            this.loading = false;
          }
        }
      );*/
    /*});*/

    this.authService.login(this.email.value, this.password.value).then((cred) =>{
      console.log(cred);
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch(error => {
      this.openDialog();
      console.log(error);
      this.loading = false;
    });

  }


  ngOnDestroy(){
    this.loadingSubscription?.unsubscribe();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(PopupdialogComponent, {
      width: '450px',
      data: {
        title: this.dialogTitle,
        line1: this.dialogLine1,
      },
    });


  }

}


