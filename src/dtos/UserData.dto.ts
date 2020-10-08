import { ApiProperty } from '@nestjs/swagger'
import { CultureInfoENUMDTO } from '../dtos/CultureInfo.enum.dto'
import { ClientContextENUMDTO } from '../dtos/CultureContext.enum.dto'
import { UserIdDataDTO } from '../dtos/UserIdData.dto'


export class UserDataDTO {
    @ApiProperty()
    cultureInfo: CultureInfoENUMDTO
    @ApiProperty()
    companyId: string
    @ApiProperty()
    clientContext: ClientContextENUMDTO
    @ApiProperty()
    userIdData: UserIdDataDTO
}
