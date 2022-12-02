import { Person } from '../models/person';
import { FullNamePipe } from './full-name.pipe';

const mockUser = {
  "gender": "female",
  "name": {
      "title": "Miss",
      "first": "Shaina",
      "last": "Van Oudheusden"
  },
  "location": {
      "street": {
          "number": 1820,
          "name": "Bovenveldsweg"
      },
      "city": "Bunne",
      "state": "Gelderland",
      "country": "Netherlands",
      "postcode": "9691 SI",
      "coordinates": {
          "latitude": "37.3676",
          "longitude": "13.0402"
      },
      "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
      }
  },
  "email": "shaina.vanoudheusden@example.com",
  "login": {
      "uuid": "dd252324-c5ba-4a84-9c74-b1bf4d2186be",
      "username": "brownpeacock175",
      "password": "jump",
      "salt": "uUONGrxW",
      "md5": "59bcf4f9a71cb10dabbd506ead56d634",
      "sha1": "fc75da4998a419cd060b46d857d9ba0989696774",
      "sha256": "8930a23fb9de5c421910587200de786c5376ad37b715ce17c248a498ec2d057d"
  },
  "dob": {
      "date": "1984-12-20T04:16:44.203Z",
      "age": 37
  },
  "registered": {
      "date": "2021-08-13T10:51:51.495Z",
      "age": 1
  },
  "phone": "(0480) 730664",
  "cell": "(06) 03846190",
  "id": {
      "name": "BSN",
      "value": "94919727"
  },
  "picture": {
      "large": "https://randomuser.me/api/portraits/women/26.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
  },
  nat: "NL"
};

describe('FullNamePipe (test unitaire)', () => {
  it('devrait créer une instance', () => {
    const pipe = new FullNamePipe();
    // ...
    expect(pipe).toBeTruthy();
  });

  it('devrait retourner un nom complet', () => {
    const pipe = new FullNamePipe();
    const nomComplet = pipe.transform(mockUser as Person);
    expect(nomComplet).toBeTruthy();
    expect(nomComplet).toEqual('Miss Shaina VAN OUDHEUSDEN');
  });
});
