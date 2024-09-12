import { faker } from '@faker-js/faker'
import { createWriteStream } from 'node:fs'

const stream = createWriteStream('.\data/users.ndjson');
for (let i = 0; i < ie4; i++) {
    const data = {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        jobTitle: faker.name.jobTitle(),
        companyName: faker.company.name(),
    }

    const json = JSON.stringify(data);
    stream.write(json + '\n');
    console.log(data);
}

stream.end()
