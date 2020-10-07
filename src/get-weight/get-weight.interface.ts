
export interface Person {
    lastName: string,
    firstName: string, 
    dateOfBirth: Date, 
    nickname: string, 
    driverPin: string, 
  }
  
  export interface userIdData extends Person {}
    
  export interface userData {
    cultureInfo: string, 
    companyId: string, 
    clientContext: string, 
    userIdData: userIdData, 
  }
  
  export interface driver extends Person {}
export interface ITempletu {
    id?: string,
   location: string,
   userData: userData,
   driver: driver

}
