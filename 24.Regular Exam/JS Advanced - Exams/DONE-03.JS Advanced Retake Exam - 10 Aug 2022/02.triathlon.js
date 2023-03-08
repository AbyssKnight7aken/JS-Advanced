class Triathlon {
  constructor(name) {
    this.name = name;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participant, gender) {

    if (this.participants[participant]) {
      return `${participant} has already been added to the list`;
    }

    this.participants[participant] = gender;
    return `A new participant has been added - ${participant}`;
  }

  completeness(participant, condition) {

    if (!this.participants[participant]) {
      throw new Error(`${participant} is not in the current participants list`);
    }

    if (condition < 30) {
      throw new Error(`${participant} is not well prepared and cannot finish any discipline`);
    }

    const completedDisciplines = Math.floor(condition / 30);

    if (completedDisciplines == 1 || completedDisciplines == 2) {
      return `${participant} could only complete ${completedDisciplines} of the disciplines`
    } else {
      this.listOfFinalists.push({ name: participant, gender: this.participants[participant] });
      delete this.participants[participant]; //!!!!!!!!!!!!!
      return `Congratulations, ${participant} finished the whole competition`;
    }

  }

  rewarding(participant) {
    const finalist = this.listOfFinalists.find(x => x.name == participant);
    if (!finalist) {
      return `${participant} is not in the current finalists list`;
    } else {
      return `${participant} was rewarded with a trophy for his performance`;
    }
  }

  showRecord(criteria) {

    if (this.listOfFinalists.length == 0) {
      return `There are no finalists in this competition`;
    }

    let winners = [];

    if (criteria == 'male' || criteria == 'female') {
      winners = this.listOfFinalists.filter(x => x.gender == criteria);
      if (winners.length == 0) {
        return `There are no ${criteria}'s that finished the competition`;
      }
      return `${winners[0].name} is the first ${criteria} that finished the ${this.name} triathlon`;
    } else if (criteria == 'all') {
      winners.push(`List of all ${this.name} finalists:`);
      this.listOfFinalists.sort((a, b) => a.name.localeCompare(b.name))
        .map(x => winners.push(`${x.name}`));
      return winners.join('\n')
    }
  }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

console.log(contest.listOfFinalists);
