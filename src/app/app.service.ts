import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Ijsontojs } from "src/utils/interfaces";
import { Observable } from "rxjs";
const apiUrl = "https://jsontofs.jagan.cf/fs"

@Injectable({
    providedIn: 'root',
})
export class AppService {
    constructor(private http: HttpClient) { };


    getDownloadableUrl(data: Ijsontojs): Observable<any> {
        return this.http.post(apiUrl, data)
    }
}