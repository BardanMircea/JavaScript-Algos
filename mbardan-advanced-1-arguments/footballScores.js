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

const footballScores = (resultsArr) => {
    let teamsPointsArr = []
    
    for(let value of Object.values(resultsArr) ){
        // console.log(value.scoreA, value.scoreB)
        let entry = {}
        
        if(value.scoreA > value.scoreB){
            entry[value.teamA] = 3
            teamsPointsArr.push(entry)
            entry = {}
            entry[value.teamB] = 0
            teamsPointsArr.push(entry)
        } else if(value.scoreA < value.scoreB) {
            entry[value.teamA] = 0
            teamsPointsArr.push(entry)
            entry = {}
            entry[value.teamB] = 3
            teamsPointsArr.push(entry)
        } else {
            entry[value.teamA] = 1
            teamsPointsArr.push(entry)
            entry = {}
            entry[value.teamB] = 1
            teamsPointsArr.push(entry)
        }
    }
    // console.log(teamsPointsArr)

    let finalTable = []
    for(let i = 0 ; i < teamsPointsArr.length; i++){
         for(let j = 1; j < teamsPointsArr.length; j++){
            let keys1 = Object.keys(teamsPointsArr[i]) 
            let keys2 = Object.keys(teamsPointsArr[j])
            // let value = 0;
            // console.log(keys1[0] === keys2[0])
            
            if(keys1[0] === keys2[0]){
                let values1 = Object.values(teamsPointsArr[i]) 
                // console.log(values1)
                let values2 = Object.values(teamsPointsArr[j])
                // console.log(values2)
                console.log(teamsPointsArr[keys1[0]])
                teamsPointsArr[keys1[0]] = values1[0] + values2[0]
                console.log(teamsPointsArr[keys1[0]])
            }
            
            // let entry = {

            // }
            // entry[keys1[0]] = 
           
            // if(teamsPointsArr[i]){
                
            // }
        }
    
        // console.log(teamsPointsArr[i - 1], teamsPointsArr[i])
        // for(let [key ,value] of  Object.entries(teamsPointsArr[i])){
            //console.log(Object.keys(teamsPointsArr[i]) == Object.keys(teamsPointsArr[i + 1]))
        //     // if(Object.entries(teamsPointsArr[i]) === Object.entries(teamsPointsArr[j])){
        
        //     // }
        //     // if(teamsPointsArr[i]){
        //        // console.log(Object.keys(teamsPointsArr[i]), Object.keys(teamsPointsArr[i + 1]))
        //         // for( let [key, value] of Object.entries(teamsPointsArr[i])){
            
        //         // }
        //     // }
        // }
        

        // console.log(key)

     
        // for(let j = 1; j < teamsPointsArr.length; j++){
        //     // if(teamsPointsArr[i]){
        //         console.log(teamsPointsArr[i])
        //     // }
        // }
        // console.log(elem)
        
    }
    // console.log(teamsPointsArr)

} 

footballScores([
      {'teamA': "PSG", 'teamB': 'Monaco', 'scoreA': 2, 'scoreB': 3},
      {'teamA': "PSG", 'teamB': 'OL', 'scoreA': 2, 'scoreB': 1},
      {'teamA': "OL", 'teamB': 'Monaco', 'scoreA': 3, 'scoreB': 1},
      {'teamA': "Monaco", 'teamB': 'PSG', 'scoreA': 0, 'scoreB': 0},
      {'teamA': "OL", 'teamB': 'PSG', 'scoreA': 1, 'scoreB': 1},
      {'teamA': "Monaco", 'teamB': 'OL', 'scoreA': 1, 'scoreB': 0},
    ])

