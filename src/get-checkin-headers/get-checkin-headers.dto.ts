import { ApiProperty } from '@nestjs/swagger'

export class GetCheckinHeadersDto {
  id: string
  @ApiProperty()
  name: string
}
