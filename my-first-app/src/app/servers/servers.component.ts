import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <h4>Inline Template</h4>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = "";
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created';
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
