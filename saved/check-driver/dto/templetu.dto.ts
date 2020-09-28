import { ApiProperty } from '@nestjs/swagger'


export class Person {
    lastName: string; 
    firstName: string; 
    dateOfBirth: Date; 
    nickname: string; 
    driverPin: string; 
  }
  
  export class userIdData extends Person {}
    
  export class userData {
    cultureInfo: string; 
    companyId: string; 
    clientContext: string; 
    userIdData: userIdData; 
  }
  
  export class driver extends Person {}
  
  export class CheckDriverDTO {
    location: string; 
    userData: userData; 
    driver: driver; 
  }
export class TempletuDTO {
    id: string

    @ApiProperty()
    title: string

    @ApiProperty()
    description: string
}