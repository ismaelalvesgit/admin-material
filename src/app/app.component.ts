import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'ng-connection-service';
import { ToastrService } from 'ngx-toastr';
import { UtilsService } from './services/utils.service';

//@Author Ismael Alves
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  statusConnection:boolean = false;

  constructor(
    private router:Router,
    private connectionService: ConnectionService,
    private toastr:ToastrService
  ){
    this.connectionService.monitor().subscribe((isConnected)=> {
      if(isConnected != null){
        if(isConnected){
          this.router.navigate([UtilsService.getRouter()])
          this.toastr.info("Conexão restabelecida")
        }else{
         if(this.router.url != "/internet"){
          UtilsService.setRouter(this.router.url)
         }
          this.toastr.warning("Você está sem internet :(").onShown.subscribe(()=>{
            this.router.navigate(["/internet"])
          })
        }
      }
    })
  }
}
