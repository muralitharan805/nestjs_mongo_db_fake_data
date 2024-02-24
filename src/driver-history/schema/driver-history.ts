import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type driverHistoryCollectionDocument = HydratedDocument<driverHistoryCollection>;

@Schema({ collection: 'driverHistoryCollection' }) // Specify your custom collection name here
export class driverHistoryCollection {

    @Prop({ type: [Number], required: true })
    coordinates: number[];

    @Prop({ type: [Number], default: [null, null] })
    home_coordinates: number[];

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    driverGender: string;

    @Prop({ required: true })
    cabType: string;

    @Prop({ required: true })
    driverID: number;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    timestamp: Date;

    @Prop({ default: null })
    home_timestamp: Date;

    @Prop()
    special_area: string;

    @Prop()
    priority_id: string;

    @Prop({ required: true })
    client_timestamp: Date;
}

export const driverHistoryCollectionSchema = SchemaFactory.createForClass(driverHistoryCollection);
