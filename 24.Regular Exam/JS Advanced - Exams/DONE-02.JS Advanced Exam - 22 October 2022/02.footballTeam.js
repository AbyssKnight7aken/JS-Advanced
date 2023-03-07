class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (const entry of footballPlayers) {
            let [name, age, price] = entry.split('/');
            if (this.invitedPlayers.filter(x => x.name === name).length > 0) {
                const obj = this.invitedPlayers.find(x => x.name === name);
                if (obj.playerValue < Number(price)) {
                    obj.playerValue = Number(price);
                }
            } else {
                const obj = { name, age, playerValue: Number(price) };
                this.invitedPlayers.push(obj);
            }
        }
        const result = ['You successfully invite '];
        this.invitedPlayers.forEach((x, i) => {
            if (i < this.invitedPlayers.length - 1) {
                result.push(`${x.name}, `);
            } else {
                result.push(`${x.name}.`);
            }
        });
        return result.join('');
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split('/');
        if (this.invitedPlayers.filter(x => x.name === name).length > 0) {
            const obj = this.invitedPlayers.find(x => x.name === name);
            if (obj.playerValue > Number(offer)) {
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${obj.playerValue - Number(offer)} million more are needed to sign the contract!`)
            } else {
                obj.playerValue = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    ageLimit(name, age) {
        if (this.invitedPlayers.filter(x => x.name === name).length > 0) {
            const obj = this.invitedPlayers.find(x => x.name === name);
            if (obj.age < Number(age)) {
                if (Math.abs(obj.age - Number(age)) < 5) {
                    return `${name} will sign a contract for ${Number(age) - obj.age} years with ${this.clubName} in ${this.country}!`;
                } else if (Math.abs(obj.age - Number(age)) > 5) {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                }
            } else {
                return `${name} is above age limit!`;
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    transferWindowResult() {
        const players = ['Players list:'];
        const sortedArr = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(player => players.push(`Player ${player.name}-${player.playerValue}`));
        return players.join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

