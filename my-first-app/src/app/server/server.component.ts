import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        let randomId = Math.random() * 10;
        this.serverId =  parseInt(randomId.toFixed(0)) ;
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
      return this.serverStatus === 'online' ? '#a6f5ad' : '#f5aca6';
    }
}