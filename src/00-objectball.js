function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: '0',
                    shoe: '16',
                    points: '22',
                    rebounds: '12',
                    assists: '12',
                    steals: '3',
                    blocks: '1',
                    slamDunks: '1'
                },
                'Reggie Evans': {
                    number: '30',
                    shoe: '14',
                    points: '12',
                    rebounds: '12',
                    assists: '12',
                    steals: '12',
                    blocks: '12',
                    slamDunks: '7'
                },
                'Brook Lopez': {
                    number: '11',
                    shoe: '17',
                    points: '17',
                    rebounds: '19',
                    assists: '10',
                    steals: '3',
                    blocks: '1',
                    slamDunks: '15'
                },
                'Mason Plumlee': {
                    number: '1',
                    shoe: '19',
                    points: '26',
                    rebounds: '12',
                    assists: '6',
                    steals: '3',
                    blocks: '8',
                    slamDunks: '5'
                },
                'Jason Terry': {
                    number: '31',
                    shoe: '15',
                    points: '19',
                    rebounds: '2',
                    assists: '2',
                    steals: '4',
                    blocks: '11',
                    slamDunks: '1'
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: '4',
                    shoe: '18',
                    points: '10',
                    rebounds: '1',
                    assists: '1',
                    steals: '2',
                    blocks: '7',
                    slamDunks: '2'
                },
                'Bismack Biyombo': {
                    number: '0',
                    shoe: '16',
                    points: '12',
                    rebounds: '4',
                    assists: '7',
                    steals: '7',
                    blocks: '15',
                    slamDunks: '10'
                },
                'DeSagna Diop': {
                    number: '2',
                    shoe: '14',
                    points: '24',
                    rebounds: '12',
                    assists: '12',
                    steals: '4',
                    blocks: '5',
                    slamDunks: '5'
                },
                'Ben Gordon': {
                    number: '8',
                    shoe: '15',
                    points: '33',
                    rebounds: '3',
                    assists: '2',
                    steals: '1',
                    blocks: '1',
                    slamDunks: '0'
                },
                'Brendan Haywood': {
                    number: '33',
                    shoe: '15',
                    points: '6',
                    rebounds: '12',
                    assists: '12',
                    steals: '22',
                    blocks: '5',
                    slamDunks: '12'
                },
            },
        },
    }
}

function homeTeamnName() {
    let object = gameObject()
    return object['home']['teamName']
}

function numPointsScored(playerName) {
    let points = gameObject()
    let homePlayers = points.home.players
    let awayPlayers = points.away.players
    if (homePlayers.hasOwnProperty(playerName)) {
        return homePlayers[playerName].points
    }
    else if (awayPlayers.hasOwnProperty(playerName)) {
        return awayPlayers[playerName].points
    }
    else {
        return "Nothing"
    }
}

function shoeSize(playerName) {
    let shoe = gameObject()
    let homePlayers = shoe.home.players
    let awayPlayers = shoe.away.players
    if (homePlayers.hasOwnProperty(playerName)) {
        return homePlayers[playerName].shoe
    }
    else if (awayPlayers.hasOwnProperty(playerName)) {
        return awayPlayers[playerName].shoe
    }
    else {
        return "Nothing"
    }
}

function teamColors(teamName) {
    let color = gameObject()
    let homeColors = color.home.colors
    let awayColors = color.away.colors
    if (teamName === 'Brooklyn Nets') {
        return homeColors
    }
    else if (teamName === 'Charlotte Hornets') {
        return awayColors
    }
    else {
        return 'Nothing'
    }
}

function teamNames() {
    let teams = gameObject()
    let teamArray = []
    teamArray.push(teams.home.teamName)
    teamArray.push(teams.away.teamName)
    return teamArray
}

function playerNumbers(teamName) {
    let jerseys = gameObject()
    let jerseyNumbers = []
    if (teamName === 'Brooklyn Nets') {
        for (let player in jerseys.home.players) {
            jerseyNumbers.push(jerseys.home.players[player].number)
        }
    }
        else if (teamName === 'Charlotte Hornets') {
            for (let player in jerseys.away.players) {
                jerseyNumbers.push(jerseys.away.players[player].number)
        }
    }
    return jerseyNumbers
}

function playerStats(playerName) {
    let stats = gameObject()
    let homePlayers = stats.home.players
    let awayPlayers = stats.away.players
    if (homePlayers.hasOwnProperty(playerName)) {
      return Object.entries(homePlayers[playerName])
  }
    else if (awayPlayers.hasOwnProperty(playerName)) {
      return Object.entries(awayPlayers[playerName])
  }
    else {
      return 'Nothing'
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    const players = {...game.home.players, ...game.away.players};
  
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = null;
  
    for (const playerName in players) {
      const player = players[playerName];
      const shoeSize = parseInt(player.shoe);
  
      if (shoeSize > largestShoeSize) {
        largestShoeSize = shoeSize;
        playerWithLargestShoeSize = playerName;
      }
    }
  
    const rebounds = players[playerWithLargestShoeSize].rebounds;
  
    return rebounds;
  }