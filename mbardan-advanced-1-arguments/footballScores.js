// Write a module footballScores that exports a function footballScores.

// The function footballScores takes an array (the results of a soccer tournament) as an argument and returns an array of all the teams ranked (from the best team to the worst).

// How to calculate the rank?

// When a team wins a match, it gets 3 points
// When a team loses a match, it gets 0 points
// In case of a draw, both teams get 1 point
// To decide the ranking between teams with the same number of points, you will look at the "goal difference", i.e. the sum of goals scored minus the sum of goals taken.

// If two teams still have the same rank, you will sort them by name, with the last in the alphabet being ranked higher.

// Example
// This:

// footballScores([
//       {'teamA': "PSG", 'teamB': 'Monaco', 'scoreA': 2, 'scoreB': 3},
//       {'teamA': "PSG", 'teamB': 'OL', 'scoreA': 2, 'scoreB': 1},
//       {'teamA': "OL", 'teamB': 'Monaco', 'scoreA': 3, 'scoreB': 1},
//       {'teamA': "Monaco", 'teamB': 'PSG', 'scoreA': 0, 'scoreB': 0},
//       {'teamA': "OL", 'teamB': 'PSG', 'scoreA': 1, 'scoreB': 1},
//       {'teamA': "Monaco", 'teamB': 'OL', 'scoreA': 1, 'scoreB': 0},
//     ])
// Will return the array: ['Monaco', 'PSG', 'OL']


const footballScores = (matchesArr) => {
   // extract all unique teams into an array 
    const teams = []
    extractTeams(matchesArr, teams)

    // creating a start-of-the-season table object, with the team names aswell as the stats (points, goals scored and goals taken) initialized at 0
    const startingTable = {}
    generateStartOfSeasonTable(teams, startingTable)


    // simulating season progression - populating the starting table with results and stats (points, goals scored/taken)
   simulateSeasonProgression(startingTable, matchesArr)

    // convert startingTable object into an array of arrays, for sorting based on multiple criteria (points, goal difference, name of the team), with array.sort()
    const sortedArr = []
    convertObjectToArr(startingTable, sortedArr)

    // sort by points, then by goal difference, then alphabetically
    sortedArr.sort(myCustomSortingFunction())

    // extract just the names of the teams from the sorted array into a final array and return it
    let finalArr = []
    sortedArr.forEach(elem => {
        finalArr.push(elem[0])
    })

    return finalArr
} 


function convertObjectToArr(startingTable, sortedArr) {
    for (const [key, value] of Object.entries(startingTable)) {
        sortedArr.push([key, value.points, value.goalsScored, value.goalsTaken])
    }
}

function myCustomSortingFunction() {
    return function (firstArr, secondArr) {
        // sort teams by poins, descending
        if (secondArr[1] > firstArr[1])
            return 1
        if (secondArr[1] < firstArr[1])
            return -1

        // if equal number of points,  sort by goal difference, descending    
        if (secondArr[2] - secondArr[3] > firstArr[2] - firstArr[3])
            return 1
        if (secondArr[2] - secondArr[3] < firstArr[2] - firstArr[3])
            return -1
        
        // if equal points and equal goal difference, sort by team name (alphabetically), descending
        if (secondArr[0] > firstArr[0])
            return 1
        if (secondArr[0] < firstArr[0])
            return -1

    }
}


function simulateSeasonProgression(startingTable, matchesArr) {
    for (const match of matchesArr) {
        startingTable[match.teamA].goalsScored += match.scoreA
        startingTable[match.teamA].goalsTaken += match.scoreB

        startingTable[match.teamB].goalsScored += match.scoreB
        startingTable[match.teamB].goalsTaken += match.scoreA

        if (match.scoreA > match.scoreB) {
            startingTable[match.teamA].points += 3
        } else if (match.scoreA < match.scoreB) {
            startingTable[match.teamB].points += 3
        } else {
            startingTable[match.teamA].points += 1
            startingTable[match.teamB].points += 1
        }
    }
}

function generateStartOfSeasonTable(teams, startingTable) {
    for (const team of teams) {
        startingTable[team] = {
            points : 0,
            goalsScored: 0,
            goalsTaken: 0
        }
    }
}

function extractTeams(matchesArr, teams) {
    for (const match of matchesArr) {
        if (!(teams.includes(match.teamA))) {
            teams.push(match.teamA)
        }
        if (!(teams.includes(match.teamB))) {
            teams.push(match.teamB)
        }
    }
}

module.exports = footballScores