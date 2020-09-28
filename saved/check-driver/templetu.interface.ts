
export class IPerson {
    lastName: string; 
    firstName: string; 
    dateOfBirth: Date; 
    nickname: string; 
    driverPin: string; 
  }
  
  export class userIdData extends IPerson {}
    
  export class userData {
    cultureInfo: string; 
    companyId: string; 
    clientContext: string; 
    userIdData: userIdData; 
  }
  
  export class driver extends IPerson {}
  
  export class ICheckDriverDTO {
    location: string; 
    userData: userData; 
    driver: driver; 
  }
