import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';

@Injectable({providedIn : 'root' })
export class ServerLogService {


    constructor(private http : HttpClient) {}

    log(log: ServerLog) {
        
        //baixar do site o servidor
        //servidor fake criado para receber o log
        return this.http.post('localhost:7000/infra/log', log);
    }

}