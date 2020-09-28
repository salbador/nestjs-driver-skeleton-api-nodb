import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
// import { CheckDriverService } from './checkdriver.service';
import { ICheckDriverDTO } from './templetu.interface';
// import { CheckDriverDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'


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

  let person: Person = {
    lastName: "Alfonso",
    firstName: "Thomas", 
    dateOfBirth: new Date(), 
    nickname: "thom", 
    driverPin: "QWER123" 
  }
let user_id_data: userIdData = {...person}

let user_data: userData = {
    cultureInfo: "ARG", 
    companyId: "022101", 
    clientContext: "213409",
    userIdData: user_id_data 
}
let driver_data: driver = {...person}
let checkDriverDTO: CheckDriverDTO =  {
    location: "Hamburg",
    userData: user_data, 
    driver: driver_data, 
  }
@ApiTags('checkdriver') // Swagger Tag Decorator
@Controller('checkdriver')
export class CheckDriverController {
    // constructor(private checkdriverService: CheckDriverService) {}

    @Post()
    createTempletu(@Res() res, @Body() checkDriverDTO: CheckDriverDTO): ICheckDriverDTO {
        // const checkdriver = this.checkdriverService.createTempletu(checkDriverDTO)
        return res.status(HttpStatus.CREATED).json({
                checkdriver: {
                    lastName: "Alfonso",
                    firstName: "Thomas", 
                    dateOfBirth: new Date(), 
                    nickname: "thom", 
                    driverPin: "QWER123" 
                  }
        })
    }

}
