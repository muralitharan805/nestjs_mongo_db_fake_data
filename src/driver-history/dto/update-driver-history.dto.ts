import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverHistoryDto } from './create-driver-history.dto';

export class UpdateDriverHistoryDto extends PartialType(CreateDriverHistoryDto) {}
