export class Coordinates {
  constructor({ lat, lng }) {
    this.lat = lat;
    this.lng = lng;
  }
}


export class Address {
  constructor({ address, city, state, stateCode, postalCode, coordinates, country }) {
    this.address = address;
    this.city = city;
    this.state = state;
    this.stateCode = stateCode;
    this.postalCode = postalCode;
    this.coordinates = coordinates ? new Coordinates(coordinates) : null;
    this.country = country;
  }
}


export class Hair {
  constructor({ color, type }) {
    this.color = color;
    this.type = type;
  }
}


export class Bank {
  constructor({ cardExpire, cardNumber, cardType, currency, iban }) {
    this.cardExpire = cardExpire;
    this.cardNumber = cardNumber;
    this.cardType = cardType;
    this.currency = currency;
    this.iban = iban;
  }
}


export class Company {
  constructor({ department, name, title, address }) {
    this.department = department;
    this.name = name;
    this.title = title;
    this.address = address ? new Address(address) : null;
  }
}


export class Crypto {
  constructor({ coin, wallet, network }) {
    this.coin = coin;
    this.wallet = wallet;
    this.network = network;
  }
}

export class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.maidenName = data.maidenName;
    this.age = data.age;
    this.gender = data.gender;
    this.email = data.email;
    this.phone = data.phone;
    this.username = data.username;
    this.password = data.password;
    this.birthDate = data.birthDate;
    this.image = data.image;
    this.bloodGroup = data.bloodGroup;
    this.height = data.height;
    this.weight = data.weight;
    this.eyeColor = data.eyeColor;
    this.hair = data.hair ? new Hair(data.hair) : null;
    this.ip = data.ip;
    this.address = data.address ? new Address(data.address) : null;
    this.macAddress = data.macAddress;
    this.university = data.university;
    this.bank = data.bank ? new Bank(data.bank) : null;
    this.company = data.company ? new Company(data.company) : null;
    this.ein = data.ein;
    this.ssn = data.ssn;
    this.userAgent = data.userAgent;
    this.crypto = data.crypto ? new Crypto(data.crypto) : null;
    this.role = data.role;
  }
}
export default User;
