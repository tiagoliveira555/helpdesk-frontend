import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toasts: ToastrService) { }

  ngOnInit(): void {
  }

  logar() {
    this.toasts.error('usuário e/ou senha inválidos!', 'Login');
    this.creds.senha = '';
  }

  validaCampos(): boolean {
    if(this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }
  }

}
