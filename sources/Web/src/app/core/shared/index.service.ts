/**
* Index Service
* Allow you to define code that's accessible and reusable throughout multiple components.
* @package IndexService
* @subpackage app\core\shared\indexservice
* @author SEPA Cyber Technologies, Sayyad M.
*/

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpclientService } from './httpclient.service'
import { HttpUrl } from './httpUrl.component'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndexService {

  public isSmsVerified: boolean;
  private userDetails = new BehaviorSubject([]);

  constructor(private dataClient: HttpclientService,private http: HttpClient) { }

  getCountryDetails(): Observable<any> {
    return this.dataClient.get<any>(HttpUrl.Countries_Details);
  }
  createOTP(val): Observable<any> {
    let obj={referenceValue  :val}
    return this.dataClient.post<any>(HttpUrl.Generate_OTP,obj);
  }
  
  verifyOTP(OTP,val): Observable<any> {
    let obj={otpReference:OTP,referenceValue  :val}
    return this.dataClient.post<any>(HttpUrl.Verify_OTP,obj);
  }

  registration(signUpData): Observable<any> {
    return this.dataClient.post(HttpUrl.Sign_Up, signUpData);
  }


  uploadCsv(obj): Observable<any> {
    return this.dataClient.post(HttpUrl.Upload_Csv, obj);
  }
  duplicateEmailMobile(obj): Observable<any> {
    return this.dataClient.post(HttpUrl.Check_Duplicate, obj);
  }
  
  getBusinessType(): Observable<any> {
     let headers = new HttpHeaders({
     'content-Type': 'application/json',
     'x-auth-token': sessionStorage.getItem('x-auth-token')
    });
    let options = {
      headers: headers,
    }
    return this.http.get(HttpUrl.Business_Type, options)
  }

  registerBusiness(formData): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers,
    }
    return this.http.post(HttpUrl.Register_Business,formData,options);
  }

  saveCompanywithoutKYB(obj): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers,
    }
    return this.http.post(HttpUrl.Reg_Without_KYB,obj,options);
  }

  forgotPassword(obj): Observable<any> {
    return this.dataClient.post(HttpUrl.Forgot_Password,obj);
  }

  checkPassword(obj):Observable<any> {
    return this.dataClient.post(HttpUrl.Reset_Password,obj)
  }
  
  getPersonalDetails(obj) {
    return this.dataClient.get(HttpUrl.Business_OwnerDetails+'/'+obj); 
  }

  isVerified() {
    this.isSmsVerified = true;
  }
 
  submitPersonalDetails(obj) {
    return this.dataClient.post(HttpUrl.Business_OwnerDetails, obj);
  }

  submitAddr(formData) {
    return this.dataClient.post(HttpUrl.Bus_Addr_Reg, formData);
  }

  IsVerifiedDirOwnr(obj) {
    return this.dataClient.patch(HttpUrl.DirectorsShareHolder_Details, obj);
  }


  Bus_SubmitForKYCInvitaion(appId){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers,
    }
  //  var obj= { applicant_id: appId };
    var obj=appId
    return this.http.post(HttpUrl.Ident_Id, obj, options);
  }

  getKYCStatus(appId): Observable<any> {

   
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers,
    }
   return this.http.post(HttpUrl.KYC_Status,appId,options);
  }


  KYClinkToMobile(mobile, email, mobilePlatform, identId): Observable<any> {
    return this.dataClient.get(HttpUrl.KYC_Link + '/' + mobile + '/' + email + '/' + mobilePlatform + '/' + identId);
  }

  getUserData(token){
    return this.dataClient.get(HttpUrl.share_direct_token_data + '/' +token );

  }

  setUserDetails(value: any) {
    this.userDetails.next(value);
  }

  getUserDetails() {
    return this.userDetails as Observable<any>;
  }


 // //Business Login Personal Settings Verify Otp
 verifyBusinessOTP(OTP,val): Observable<any> {
  let obj={otpReference:OTP.otp,referenceValue  :val}
  return this.dataClient.post<any>(HttpUrl.Verify_OTP,obj);
}






 





}