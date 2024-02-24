import { faker } from '@faker-js/faker';

export class CreateDriverHistoryDto {

    coordinates: number[] = [faker.location.longitude(), faker.location.latitude()];

    home_coordinates: number[] = [null, null];

    type: string = "point";

    city: string = faker.helpers.arrayElement(['CBA', 'CH']);

    driverGender: string = faker.helpers.arrayElement(['male', 'female']);;

    cabType: string = faker.helpers.arrayElement(['AUTO', 'SEDAN']);;

    driverID: number = faker.number.int();

    status: string = faker.helpers.arrayElement(['free', 'offline']);

    timestamp: Date = faker.date.past({ years: 3 });

    home_timestamp: Date = null;

    special_area: string = null;

    priority_id: string = null;

    client_timestamp: Date = new Date();
}
