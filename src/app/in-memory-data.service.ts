import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice', age: 25 },
            { id: 12, name: 'Narco', age: 25  },
            { id: 13, name: 'Bombasto', age: 25  },
            { id: 14, name: 'Celeritas', age: 25  },
            { id: 15, name: 'Magneta', age: 25  },
            { id: 16, name: 'RubberMan', age: 25  },
            { id: 17, name: 'Dynama', age: 25  },
            { id: 18, name: 'Dr IQ', age: 25  },
            { id: 19, name: 'Magma', age: 25  },
            { id: 20, name: 'Tornado', age: 25  }
        ];
        return { heroes };
    }

}