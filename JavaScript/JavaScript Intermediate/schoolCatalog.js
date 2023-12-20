class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (value.isNaN()) {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    } else {
      this._numberOfStudents = value;
    }
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this.numberOfStudents} students at the ${this._level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomInt = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[randomInt];
  }
}

class SchoolCatalog {
  constructor(level) {
    this.level = level;
    this.schools = [];
  }

  addSchool(school) {
    if (school instanceof School) {
      this.schools.push(school);
      console.log(`${school.name} added to the catalog.`);
    } else {
      console.log('Invalid school object. Please provide an instance of the School class.');
    }
  }

  getSchools() {
    return this.schools;
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents, averageTestScores) {
    super(name, "middle", numberOfStudents);
    this._averageTestScores = averageTestScores;
  }

  get averageTestScores() {
    return this._averageTestScores;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts();

const sub = School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

const beauHale = new MiddleSchool("Beau Hale", 123, "92%");
beauHale.quickFacts();

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
alSmith.quickFacts();

const primarySchool1 = new PrimarySchool("Primary School 1", 300, "Parents pick up at main entrance");
const primarySchool2 = new PrimarySchool("Primary School 2", 250, "Pickup policy details");
const middleSchool = new School("Middle School", "middle", 400);
const highSchool = new School("High School", "high", 600);

const catalog = new SchoolCatalog("primary");
catalog.addSchool(primarySchool1);
catalog.addSchool(primarySchool2);
catalog.addSchool(middleSchool);
catalog.addSchool(highSchool);

console.log(catalog.getSchools());

