var leagueTeams = ["Bexley Beasts", "Greenwich Giants", "Newham Nasties", "Lewisham Leaders", "Hackney Hawks"];
/* Class example */

function League(name, teams) {
    if(typeof teams === "undefined") {
        teams = [];
    }

    this.name = name;
    this.teams = teams;
    this.matchLength = 90;
}

League.gameCount = function(teams) {
    return teams.length * 2;
}

League.prototype.totalPlayTime = function() {
    return League.gameCount(this.teams) * this.matchLength;
}

var league = new League("East London 5-a-side", leagueTeams);
console.log(league.name); //"East London 5-a-side"
console.log(League.gameCount(league.teams)); //10

/* Subclass */
function FiveASide(name, teams) {
    League.call(this, name, teams);

    this.players = 5;
    this.matchLength = 20;
}

FiveASide.prototype = Object.create(League.prototype);
FiveASide.prototype.constructor = FiveASide;

let fiveASide = new FiveASide("East London 5-a-side", leagueTeams);
console.log(fiveASide.totalPlayTime()); //200
