let leagueTeams = ["Bexley Beasts", "Greenwich Giants", "Newham Nasties", "Lewisham Leaders", "Hackney Hawks"];

/* Class example */
class League {
    //Build out class data from the constructor method
    constructor(name, teams = []) {
        this.name = name; //Internally will call get method
        this.teams = teams;
        this.matchLength = 90;
    }

    get name() {
        //this.name would recursively call this method
        return this._name;
    }

    set name(name) {
        this._name = name.trim(); 
    }

    get teams() {
        return this._teams;
    }

    set teams(teams) {
        if(teams instanceof Array) {
            this._teams = teams;
        } else {
            throw new TypeError("teams must be in an array");
        }
    }

    get matchLength() {
        return this._matchLength;
    }

    set matchLength(length) {
        this._matchLength = length;
    }

    //You can access static methods on a class without instantiating it
    static gameCount(teams) {
        return teams.length * 2;
    }

    //Short function declarations are available in ES6
    //Equates to 'totalPlayTime: function() {'
    totalPlayTime() {
        return League.gameCount(this.teams) * this.matchLength;
    }
}

let league = new League("East London 5-a-side", leagueTeams);
console.log(league.name); //"East London 5-a-side"
console.log(League.gameCount(league.teams)); //10

/* Subclass using 'extends' */
class FiveASide extends League {
    constructor(name, teams = []) {
        //Call the constructor of the parent class, or 'superclass'
        super(name, teams);
        this.players = 5;
        this.matchLength = 20;
    }

    get players() {
        return this._players;
    }

    set players(count) {
        if(count < 1) {
            count = 1;
        }

        this._players = count;
    }
}

let fiveASide = new FiveASide("East London 5-a-side", leagueTeams);
console.log(fiveASide.totalPlayTime()); //200

/* Mixins for classes */

//Create a function which makes an anonymous class extending the class passed...
var DatabaseComms = BaseClass => class extends BaseClass {
  //...
  read(id) {
    console.log(`Reading ID ${id} from database`);
  }
  //...
};

var AnalyticsComms = BaseClass => class extends BaseClass {
  //...
  visit() {
    console.log("Recording visit");
  }
  //...
}

class Parent { }
//...and call them as necessary when extending
class Child extends DatabaseComms(AnalyticsComms(Parent)) { }

var x = new Child();

x.visit(); //"Recording visit"
x.read(1); //"Reading ID 1 from database"