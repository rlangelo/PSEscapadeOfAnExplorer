// game.js for Perlenspiel 3.2

/*
Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright © 2009-15 Worcester Polytechnic Institute.
This file is part of Perlenspiel.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.

Perlenspiel uses dygraphs (Copyright © 2009 by Dan Vanderkam) under the MIT License for data visualization.
See dygraphs License.txt, <http://dygraphs.com> and <http://opensource.org/licenses/MIT> for more information.
*/

// The following comment lines are for JSLint. Don't remove them!

/*jslint nomen: true, white: true */
/*global PS */

// This is a template for creating new Perlenspiel games

var MAP = {
	
	MAP1: [["#","#","#","#","#","#","#","#","#"], ["#","_","_","_","_","#","#","#","#"], ["#","S","#","#","B","#","#","#","#"], ["#","#","#","#","_","#","#","#","#"], ["#","#","#","#","_","_","#","#","#"], ["#","#","_","_","_","_","#","#","#"], 
	["#","_","_","_","#","#","#","#","#"], ["#","_","#","#","#","#","#","X","#"],
	["#","_","_","_","_","_","_","_","#"], ["#","#","#","#","#","#","#","#","#"]],
	
    MAP2:[["#","#","#","#","#","#","#"], ["#", "o", "_", "_", "_", "o", "#"], ["#", "_", "B", "S", "B", "_", "#"], ["#", "_", "_", "_", "_", "_", "#"], ["#", "#", "#", "|", "#", "#", "#"], ["#", "X", "_", "_", "_", "_", "#"], ["#","#","#","#","#","#","#"]],

	MAP3: [["#","#","#","#","#"], ["#", "_", "S", "_", "#"], ["#", "b", "B", "b", "#"], ["#", "_", "_", "_", "#"], ["#", "#", "b", "#", "#"], ["#", "_", "X", "_", "#"], ["#","#","#","#","#"]],
    
    MAP4: [["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"], ["#", "S", "D", "_", "_", "B", "~", "_", "_", "#"], ["#", "D", "D", "_", "_", "B", "~", "_", "X", "#"], ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]],

    MAP5: [["#","#","#","#","#","#","#","_","_","#","_","_","#","#","#","#","#","#","#"], ["#","_","_","_","_","_","#","_","#","_","#","_","#","_","_","_","_","_","#"], ["#","_","~","_","~","_","#","#","_","_","_","#","#","_","B","b","B","_","#"], ["#","_","_","S","_","_","B","_","_","_","_","_","|","_", "b","X","b","_","#"],
	["#","_","~","_","~","_","#","#","#","o","#","#","#","_","B","b","B","_","#"],
	["#","_","_","_","_","_","#","_","#","#","#","_","#","_","_","_","_","_","#"],
	["#","#","#","#","#","#","#","_","_","#","_","_","#","#","#","#","#","#","#"]],
	
	MAP6:[["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"], ["#","_","_","_","_","_","_","_","B","o","#","o","B","_","_","_","_","_","_","_","_","_","#"], ["#","_","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","_","#","_","#","_","#"], ["#","_","_","_","_","_","_","_","#","_","_","_","_","_","_","_","#","_","#","_","#","_","#"], ["#","#","#","#","#","_","#","#","#","_","#","#","#","_","#","#","#","#","#","_","#","_","#"], ["#","_","_","_","_","_","#","_","#","_","_","_","#","_","_","_","_","_","_","_","#","_","#"], ["#","_","#","#","#","_","#","_","#","#","#","#","#","#","#","#","#","#","#","_","#","_","#"], ["#","_","_","_","#","_","#","_","_","_","_","_","_","_","_","_","_","_","_","_","#","_","#"], ["#","#","#","_","#","_","#","#","#","_","#","_","#","#","#","#","#","#","#","_","#","_","#"], ["#","_","_","_","#","_","_","_","_","_","#","S","#","_","_","_","_","_","#","_","#","_","#"], ["#","_","#","#","#","#","#","#","#","#","#","#","#","_","#","#","#","_","#","#","#","_","#"], ["#","_","#","_","_","_","#","_","_","_","#","X","#","_","_","_","#","_","_","_","_","_","#"], ["#","_","#","_","#","_","#","_","#","#","#","|","#","#","#","_","#","#","#","_","#","#","#"], ["#","_","_","_","#","_","_","_","_","_","_","_","#","_","_","_","_","_","#","_","#","o","#"], ["#","_","#","#","#","#","#","#","#","#","#","#","#","_","#","_","#","_","#","_","#","B","#"], ["#","_","#","_","_","_","_","#","o","_","_","_","#","_","#","_","#","_","#","_","#","_","#"], ["#","_","#","_","#","#","#","#","#","B","#","_","#","#","#","_","#","#","#","_","#","_","#"], ["#","_","#","_","#","_","_","_","#","_","#","_","_","_","#","_","_","_","#","_","#","_","#"], ["#","_","#","_","#","_","#","_","#","_","#","#","#","_","#","_","#","_","#","#","#","_","#"], ["#","_","_","_","_","_","#","_","_","_","_","_","#","_","_","_","#","_","_","_","_","_","#"], ["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"]],
	
	MAP7: [["_","_","_","_","_","_","_","_","_","_","#","#","#","#","#","#"],["#","#","#","#","#","#","#","#","#","#","#","o","_","_","o","#"],["#","_","_","_","_","_","_","~","~","_","_","B","_","B","_","#"],["#","S","_","B","B","#","#","b","b","#","#","o","B","_","_","#"],["#","_","_","_","_","_","_","~","~","_","_","B","_","B","_","#"],["#","|","#","#","#","#","#","#","#","#","#","o","_","_","o","#"],["#","_","_","_","_","_","_","_","_","X","#","#","#","#","#","#"],["#","#","#","#","#","#","#","#","#","#","#","_","_","_","_","_"]],
	
	MAP8: [["#","#","#","#","#","#","#","#","#","#","#","#","#"],["#","S","B","_","_","_","_","_","_","_","_","_","#"],["#","#","#","#","#","#","#","#","#","#","_","_","#"],["#","o","_","_","_","_","_","_","_","_","B","_","#"],["#","#","B","#","#","#","#","#","#","#","|","#","#"],["#","~","D","_","_","_","_","_","b","_","_","_","#"],["#","_","_","_","_","_","_","~","#","B","B","_","#"],["#","#","#","#","#","#","#","X","#","_","_","_","#"],["#","#","#","#","#","#","#","#","#","#","#","#","#"]],
	
	MAP9: [["#","#","#","#","#","#","#"],["#","_","_","_","_","#","#"],["#","_","_","B","B","b","#"],["#","_","#","B","_","b","#"],["#","_","B","_","#","b","#"],["#","_","_","B","_","b","#"],["#","_","#","B","#","b","#"],["#","S","_","_","#","b","#"],["#","#","#","#","#","X","#"]],
	
	MAP10: [["~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~"],["~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~"],["~","~","~","~","~","~","_","_","~","~","_","~","~","~","~","~","B","~","X","~","~"],["~","~","_","_","_","~","_","B","B","~","B","B","~","~","~","B","~","~","~","~","~"],["~","~","_","S","_","~","~","~","B","~","B","~","~","~","B","~","~","~","~","~","~"],["~","~","_","B","_","~","~","~","~","~","~","~","~","B","~","~","~","~","~","~","~"],["~","~","_","_","_","~","~","~","~","_","_","_","B","~","~","~","~","~","~","~", "~"],["~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~"],["~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~"]],
	
	MAP11: [["#","#","#","#","#","#","#","#","#","#","#","#","#"],["#","_","_","_","#","_","_","_","#","_","_","_","#"],["#","_","B","_","|","_","S","_","|","_","o","_","#"],["#","_","_","_","#","_","_","_","#","_","_","_","#"],["#","#","#","#","#","#","_","#","#","#","_","#","#"],["#","_","_","_","#","_","_","_","#","_","_","_","#"],["#","_","~","_","b","_","B","_","_","_","P","_","#"],["#","_","_","_","#","_","_","_","#","_","_","_","#"],["#","#","b","#","#","#","#","#","#","#","B","#","#"],["#","_","_","_","#","_","_","_","#","D","D","D","#"],["#","_","P","_","_","_","#","_","D","D","B","D","#"],["#","_","_","_","#","_","_","_","#","D","D","D","#"],["#","#","#","#","#","#","|","#","#","#","#","#","#"],["#","_","_","_","#","D","_","D","#","_","_","_","#"],["#","_","X","_","~","_","D","_","D","_","B","_","#"],["#","_","_","_","#","D","_","D","#","_","_","_","#"],["#","#","#","#","#","#","#","#","#","#","#","#","#"]],
	
	MAPS: [],
	
	currentMap: 1,
	firstRound: true,
	secondRound: false,
	thirdRound: false,
	fourthRound: false,
	fifthRound: false,
	sixthRound: false,
	counter: 0,
	WIDTH: 0,
	HEIGHT: 0,
	GAME_OVER: false,
	myTimer: 0,
	anim: 1,
	numOfPlates: 0,
	pressedPlates: 0,
	onTop: false,
	mid: 15,
	
	calculateOffset : function(mapNumber) {
		var leftMargin;
		var rightMargin;
		if ((MAP.WIDTH % 2) != 0) {
			leftMargin = MAP.mid - Math.floor(MAP.WIDTH / 2);
			rightMargin = MAP.mid + Math.floor(MAP.WIDTH / 2);
		}
		else {
			leftMargin = MAP.mid - Math.floor(MAP.WIDTH / 2);
			rightMargin = MAP.mid + (MAP.mid - Math.floor(MAP.WIDTH / 2));
		}
		
		for (var i=0; i<MAP.HEIGHT;i++) {
			for (var j=0; j<MAP.WIDTH;j++) {
				var X = j + leftMargin;
		
				switch(MAP.MAPS[mapNumber-1][i][j]) {
						case "#":
							PS.color(X, i, 0x8C3313);
							break;
						case "_":
							PS.color(X, i, PS.COLOR_WHITE);
							break;
						case "S":
							PS.color(X, i, 0xE6A644);
							PS.radius(X, i, 50);
							PLAYER.X_POS = X;
							PLAYER.Y_POS = i;
							break;
						case "B":
							PS.color(X, i, 0x738F9B);
							PS.radius(X, i, 25);
							break;
						case "X":
							PS.color(X, i, 0xFFD700);
							PS.radius(X, i, 50);
							break;
						case "~":
							PS.color(X, i, 0x40A4DF);
							break;
						case "o":
							PS.color(X, i, 0x7D26CD);
							PS.radius(X, i, 50);
							MAP.numOfPlates += 1;
							break;
						case "|":
							PS.color(X, i, 0x7D26CE);
							break;
						case "b":
							PS.color(X, i, 0xFF0000);
							PS.radius(X, i, 50);
							break;
						case "D":
							//PS.color(X, i, 0x786600);
							PS.color(X, i, 0x786600);
							break;
						case "P":
							PS.color(X, i, 0x785AB4);
							PS.radius(X, i, 25);
							break;
						default:
							break;
				}
			}
		}
	},
	
	buildFromFile : function(mapNumber) {
		PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
		PS.border(PS.ALL, PS.ALL, 0);
		PS.radius(PS.ALL, PS.ALL, 0);
		MAP.numOfPlates = 0;
		MAP.pressedPlates = 0;
		
		switch(mapNumber) {
			case 1:
                PS.statusText("Use Arrow Keys to Move");
				MAP.WIDTH = MAP.MAP1[0].length;
				MAP.HEIGHT = MAP.MAP1.length;
				break;
			case 2:
				PS.statusText("Place the blocks on pressure plates!");
				MAP.WIDTH = MAP.MAP2[0].length;
				MAP.HEIGHT = MAP.MAP2.length;
				break;
			case 3:
				PS.statusText("Don't step on the bombs! Use the blocks!");
				MAP.WIDTH = MAP.MAP3[0].length;
				MAP.HEIGHT = MAP.MAP3.length;
				break;
			case 4:
                PS.statusText("Step on dirt, but not in the water!");
				MAP.WIDTH = MAP.MAP4[0].length;
				MAP.HEIGHT = MAP.MAP4.length;
				break;
			case 5:
            PS.statusText("Get to the Exit!");
				MAP.WIDTH = MAP.MAP5[0].length;
				MAP.HEIGHT = MAP.MAP5.length;
				break;
			case 6:
				MAP.WIDTH = MAP.MAP6[0].length;
				MAP.HEIGHT = MAP.MAP6.length;
				break;
			case 7:
				MAP.WIDTH = MAP.MAP7[0].length;
				MAP.HEIGHT = MAP.MAP7.length;
				break;
			case 8:
				MAP.WIDTH = MAP.MAP8[0].length;
				MAP.HEIGHT = MAP.MAP8.length;
				break;
			case 9:
				MAP.WIDTH = MAP.MAP9[0].length;
				MAP.HEIGHT = MAP.MAP9.length;
				break;
			case 10:
				MAP.WIDTH = MAP.MAP10[0].length;
				MAP.HEIGHT = MAP.MAP10.length;
				break;
			default:
				break;
		}
		
		MAP.calculateOffset(mapNumber);
	},
			
	checkGates : function() {
		var result;
		if (MAP.numOfPlates == MAP.pressedPlates) {
			for (var i=0; i<32;i++) {
				for (var j=0; j<32;j++) {
					result = PS.unmakeRGB(PS.color(i, j), {});
					if (result.r == 125 && result.g == 38 && result.b == 206) {
						PS.color(i, j, PS.COLOR_WHITE);
						PS.border(i, j, 1);
						PS.borderColor(i, j, 125, 38, 206);
						PS.audioPlay("fx_swoosh");
					}
				}
			}
		}
	},
	
};

var PLAYER = {
	
	X_POS: 12,
	Y_POS: 13,
	
	moveVertically : function(direction) {
		var newY;
		if (direction == 1) {
			newY = PLAYER.Y_POS-1;
		}
		else {
			newY = PLAYER.Y_POS+1;
		}
		var result = PS.unmakeRGB(PS.color(PLAYER.X_POS, newY), {});
		if (result.r == 255 && result.g == 255 && result.b == 255 || result.r == 120 && result.g == 102 && result.b == 0) {
			if (result.r == 120 && result.g == 102 && result.b == 0) {
				PS.audioPlay("perc_shaker");
			}
			if (MAP.onTop) {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
				MAP.onTop = false;
			}
			else {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			}
			PLAYER.Y_POS = newY;
		}
		else if (result.r == 125 && result.g == 38 && result.b == 205) {
			MAP.onTop = true;
			PS.color(PLAYER.X_POS, newY, 0xE6A644);
			PS.radius(PLAYER.X_POS, newY, 50);
			PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
			PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			PLAYER.Y_POS = newY;
		}
		else if (result.r == 255 && result.g == 215 && result.b == 0) {
			if (MAP.currentMap < 7) {
				PS.audioPlay("fx_coin7");
				MAP.currentMap += 1;
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				//PS.statusText("YOU WON!");
				MAP.buildFromFile(MAP.currentMap);
			}
			else {
				PS.audioPlay("fx_tada");
				PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
				PS.statusText("YOU ESCAPED! Press R to Play Again!");
				MAP.currentMap = 1;
			}
		}
		else if (result.r == 115 && result.g == 143 && result.b == 155) {
			var otherY;
			if (direction == 1) {
				otherY = newY-1;
			}
			else {
				otherY = newY+1;
			}
			var secondResult = PS.unmakeRGB(PS.color(PLAYER.X_POS, otherY), {});
			if (secondResult.r == 255 && secondResult.g == 255 && secondResult.b == 255) {
				if (MAP.onTop) {
					PS.color(PLAYER.X_POS, newY, 0xE6A644);
					PS.radius(PLAYER.X_POS, newY, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, otherY, 0x738F9B);
					PS.radius(PLAYER.X_POS, otherY, 25);
				}
				else {
					PS.color(PLAYER.X_POS, newY, 0xE6A644);
					PS.radius(PLAYER.X_POS, newY, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(PLAYER.X_POS, otherY, 0x738F9B);
					PS.radius(PLAYER.X_POS, otherY, 25);
				}
				PLAYER.Y_POS = newY;
				MAP.onTop = false;
			}
			else if (secondResult.r == 64 && secondResult.g == 164 && secondResult.b == 223) {
				if (MAP.onTOP) {
					PS.color(PLAYER.X_POS, newY, 0xE6A644);
					PS.radius(PLAYER.X_POS, newY, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, otherY, 0x786600);
				}
				else {
					PS.color(PLAYER.X_POS, newY, 0xE6A644);
					PS.radius(PLAYER.X_POS, newY, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(PLAYER.X_POS, otherY, 0x786600);
				}
				PS.audioPlay("fx_drip2");
				PLAYER.Y_POS = newY;
				MAP.onTop = false;
				
			}
			else if (secondResult.r == 125 && secondResult.g == 38 && secondResult.b == 205) {
				if (MAP.onTop) {
					PS.color(PLAYER.X_POS, newY, 0xE6A644);
					PS.radius(PLAYER.X_POS, newY, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, otherY, 0x785AB4);
					PS.radius(PLAYER.X_POS, otherY, 25);
				}
				else {
					PS.color(PLAYER.X_POS, newY, 0xE6A644);
					PS.radius(PLAYER.X_POS, newY, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(PLAYER.X_POS, otherY, 0x785AB4);
					PS.radius(PLAYER.X_POS, otherY, 25);
				}
				PLAYER.Y_POS = newY;
				MAP.pressedPlates += 1;
				MAP.checkGates();
				MAP.onTop = false;
			}
			else if (secondResult.r == 255 && secondResult.g == 0 && secondResult.b == 0) {
				if (MAP.onTop) {
					PS.color(PLAYER.X_POS, newY, 0xE6A644);
					PS.radius(PLAYER.X_POS, newY, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(PLAYER.X_POS, otherY, PS.COLOR_WHITE);
				}
				else {
					PS.color(PLAYER.X_POS, newY, 0xE6A644);
					PS.radius(PLAYER.X_POS, newY, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(PLAYER.X_POS, otherY, PS.COLOR_WHITE);
				}
				PS.audioPlay("fx_bang");
				PLAYER.Y_POS = newY;
				MAP.onTop = false;
			}

		}
		else if (result.r == 255 && result.g == 0 && result.b == 0) {
			PS.color(PLAYER.X_POS, newY, 0xE6A644);
			PLAYER.die(1, PLAYER.X_POS, newY);
			MAP.buildFromFile(MAP.currentMap);
		}
		else if (result.r == 64 && result.g == 164 && result.b == 223) {
			PS.color(PLAYER.X_POS, newY, 0xE6A644);
			PLAYER.die(2, PLAYER.X_POS, newY);
			MAP.buildFromFile(MAP.currentMap);
		}
		else if (result.r == 120 && result.g == 90 && result.b == 180) {
			var otherY;
			if (direction == 1) {
				otherY = newY-1;
			}
			else {
				otherY = newY+1;
			}
			var secondResult = PS.unmakeRGB(PS.color(PLAYER.X_POS, otherY), {});
			if (secondResult.r == 255 && secondResult.g == 255 && secondResult.b == 255) {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(PLAYER.X_POS, otherY, 0x738F9B);
				PS.radius(PLAYER.X_POS, otherY, 25);
				PLAYER.Y_POS = newY;
				MAP.onTop = true;
				MAP.pressedPlates -= 1;
				MAP.checkGates();
			}
			else if (secondResult.r == 64 && secondResult.g == 164 && secondResult.b == 223) {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(PLAYER.X_POS, otherY, 0x786600);
				PLAYER.Y_POS = newY;
				MAP.onTop = true;
				MAP.pressedPlates -= 1;
				MAP.checkGates();
			}
			else if (secondResult.r == 125 && secondResult.g == 38 && secondResult.b == 205) {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(PLAYER.X_POS, otherY, 0x785AB4);
				PS.radius(PLAYER.X_POS, otherY, 25);
				PLAYER.Y_POS = newY;
				MAP.pressedPlates += 1;
				MAP.checkGates();
				MAP.onTop = true;
				MAP.pressedPlates -= 1;
				MAP.checkGates();
			}
			else if (secondResult.r == 255 && secondResult.g == 0 && secondResult.b == 0) {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(PLAYER.X_POS, otherY, PS.COLOR_WHITE);
				PLAYER.Y_POS = newY;
				MAP.onTop = true;
				MAP.pressedPlates -= 1;
				MAP.checkGates();
			}
		}
		
	},
	
	moveHorizontally : function(direction) {
		var newX;
		if (direction == 1) {
			newX = PLAYER.X_POS-1;
		}
		else {
			newX = PLAYER.X_POS+1;
		}
		var result = PS.unmakeRGB(PS.color(newX, PLAYER.Y_POS), {});
		if (result.r == 255 && result.g == 255 && result.b == 255 || result.r == 120 && result.g == 102 && result.b == 0) {
			if (result.r == 120 && result.g == 102 && result.b == 0) {
				PS.audioPlay("perc_shaker");
			}
			if (MAP.onTop) {
				PS.color(newX, PLAYER.Y_POS, 0xE6A644);
				PS.radius(newX, PLAYER.Y_POS, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
				MAP.onTop = false;
			}
			else {
				PS.color(newX, PLAYER.Y_POS, 0xE6A644);
				PS.radius(newX, PLAYER.Y_POS, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			}
			PLAYER.X_POS = newX;
		}
		else if (result.r == 125 && result.g == 38 && result.b == 205) {
			MAP.onTop = true;
			PS.color(newX, PLAYER.Y_POS, 0xE6A644);
			PS.radius(newX, PLAYER.Y_POS, 50);
			PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
			PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			PLAYER.X_POS = newX;
		}
		else if (result.r == 255 && result.g == 215 && result.b == 0) {
			if (MAP.currentMap < 7) {
				PS.audioPlay("fx_coin7");
				MAP.currentMap += 1;
				PS.color(newX, PLAYER.Y_POS, 0xE6A644);
				PS.radius(newX, PLAYER.Y_POS, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				//PS.statusText("YOU WON!");
				MAP.buildFromFile(MAP.currentMap);
			}
			else {
				PS.audioPlay("fx_tada");
				PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
				PS.statusText("YOU ESCAPED! Press R to Play Again!");
				MAP.currentMap = 1;
			}
				
		}
		else if (result.r == 115 && result.g == 143 && result.b == 155) {
			var otherX;
			if (direction == 1) {
				otherX = newX - 1;
			}
			else {
				otherX = newX + 1;
			}
			var secondResult = PS.unmakeRGB(PS.color(otherX, PLAYER.Y_POS), {});
			if (secondResult.r == 255 && secondResult.g == 255 && secondResult.b == 255) {
				if (MAP.onTop) {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
					PS.color(otherX, PLAYER.Y_POS, 0x738F9B);
					PS.radius(otherX, PLAYER.Y_POS, 25);
				}
				else {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(otherX, PLAYER.Y_POS, 0x738F9B);
					PS.radius(otherX, PLAYER.Y_POS, 25);
				}
				PLAYER.X_POS = newX;
				MAP.onTop = false;
			}
			else if (secondResult.r == 64 && secondResult.g == 164 && secondResult.b == 223) {
				if (MAP.onTop) {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
					PS.color(otherX, PLAYER.Y_POS, 0x786600);
				}
				else {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(otherX, PLAYER.Y_POS, 0x786600);
				}
				PS.audioPlay("fx_drip2");
				PLAYER.X_POS = newX;
				MAP.onTop = false;
			}
			else if (secondResult.r == 125 && secondResult.g == 38 && secondResult.b == 205) {
				if (MAP.onTop) {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
					PS.color(otherX, PLAYER.Y_POS, 0x785AB4);
					PS.radius(otherX, PLAYER.Y_POS, 25);
				}
				else {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(otherX, PLAYER.Y_POS, 0x785AB4);
					PS.radius(otherX, PLAYER.Y_POS, 25);
				}
				PLAYER.X_POS = newX;
				MAP.pressedPlates += 1;
				MAP.checkGates();
				MAP.onTop = false;
			}
			else if (secondResult.r == 255 && secondResult.g == 0 && secondResult.b == 0) {
				if (MAP.onTop) {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
					PS.color(otherX, PLAYER.Y_POS, PS.COLOR_WHITE);
				}
				else {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(otherX, PLAYER.Y_POS, PS.COLOR_WHITE);
				}
				PS.audioPlay("fx_bang");
				PLAYER.X_POS = newX;
				MAP.onTop = false;
			}
		}
		else if (result.r == 255 && result.g == 0 && result.b == 0) {
			PS.color(newX, PLAYER.Y_POS, 0xE6A644);
			PLAYER.die(1, newX, PLAYER.Y_POS);
			MAP.buildFromFile(MAP.currentMap);
		}
		else if (result.r == 64 && result.g == 164 && result.b == 223) {
			PS.color(newX, PLAYER.Y_POS, 0xE6A644);
			PLAYER.die(2, newX, PLAYER.Y_POS);
			MAP.buildFromFile(MAP.currentMap);
		}
		
		else if (result.r == 120 && result.g == 90 && result.b == 180) {
				var otherX;
			if (direction == 1) {
				otherX = newX - 1;
			}
			else {
				otherX = newX + 1;
			}
			var secondResult = PS.unmakeRGB(PS.color(otherX, PLAYER.Y_POS), {});
			if (secondResult.r == 255 && secondResult.g == 255 && secondResult.b == 255) {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(otherX, PLAYER.Y_POS, 0x738F9B);
					PS.radius(otherX, PLAYER.Y_POS, 25);
					MAP.onTop = true;
					PLAYER.X_POS = newX;
					MAP.pressedPlates -= 1;
					MAP.checkGates();
			}
			else if (secondResult.r == 64 && secondResult.g == 164 && secondResult.b == 223) {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(otherX, PLAYER.Y_POS, 0x786600);
					PLAYER.X_POS = newX;
					MAP.onTop = true;
					MAP.pressedPlates -= 1;
					MAP.checkGates();
			}
			else if (secondResult.r == 125 && secondResult.g == 38 && secondResult.b == 205) {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
					PS.color(otherX, PLAYER.Y_POS, 0x785AB4);
					PS.radius(otherX, PLAYER.Y_POS, 25);
					PLAYER.X_POS = newX;
					MAP.pressedPlates += 1;
					MAP.checkGates();
					MAP.onTop = true;
					MAP.pressedPlates -= 1;
					MAP.checkGates();
			}
			else if (secondResult.r == 255 && secondResult.g == 0 && secondResult.b == 0) {
					PS.color(newX, PLAYER.Y_POS, 0xE6A644);
					PS.radius(newX, PLAYER.Y_POS, 50);
					PS.color(PLAYER.X_POS, PLAYER.Y_POS, 0x7D26CD);
					PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 50);
					PS.color(otherX, PLAYER.Y_POS, PS.COLOR_WHITE);
					PLAYER.X_POS = newX;
					MAP.onTop = true;
					MAP.pressedPlates -= 1;
					MAP.checkGates();
				}
				
		}
	},
	
	die : function(typeOfDeath, x, y) {
		if (typeOfDeath == 1) {
			PS.audioPlay("fx_bang");
		}
		else if (typeOfDeath == 2) {
			MAP.myTimer = PS.timerStart(10, PLAYER.playExplosion);
		}
	},
	
	playExplosion : function() {
		if (MAP.anim == 1) {
			PS.color(PS.ALL, PS.ALL, 0xFFFFFF);
			PS.radius(PS.ALL, PS.ALL, 0);
			PS.borderColor(PS.ALL, PS.ALL, 0);
		}
		if (MAP.anim < 4) {
			if (MAP.anim == 1) {
			for (var i=0;i<8;i++){
				for (var j=0;j<32;j++)
				{
					PS.color(j, i, 0x40A4DF);
				}
			}
			}
			else if(MAP.anim == 2) {
				for (var i=8;i<16;i++){
					for (var j=0;j<32;j++)
					{
						PS.color(j, i, 0x40A4DF);
					}
				}
			}
			else if(MAP.anim == 3) {
				for (var i=16;i<24;i++){
					for (var j=0;j<32;j++)
					{
						PS.color(j, i, 0x40A4DF);
					}
				}
			}
			else if(MAP.anim == 4) {
				for (var i=24;i<32;i++){
					for (var j=0;j<32;j++)
					{
						PS.color(j, i, 0x40A4DF);
					}
				}
			}
			PS.audioPlay("fx_drip2");
			MAP.anim += 1;
		}
		else {
			PS.timerStop(MAP.myTimer);
			MAP.anim = 0;
			MAP.buildFromFile(MAP.currentMap);
		}
	},
	
};

// All of the functions below MUST exist, or the engine will complain!

// PS.init( system, options )
// Initializes the game
// This function should normally begin with a call to PS.gridSize( x, y )
// where x and y are the desired initial dimensions of the grid
// [system] = an object containing engine and platform information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.init = function( system, options ) {
	"use strict";

	// Use PS.gridSize( x, y ) to set the grid to
	// the initial dimensions you want (32 x 32 maximum)
	// Do this FIRST to avoid problems!
	// Otherwise you will get the default 8x8 grid

	PS.gridSize( 32, 32 );
	PS.border(PS.ALL, PS.ALL, 0);
	PS.statusText("Arrow keys to move!");
	PS.audioLoad("fx_bang");
	PS.audioLoad("fx_drip2");
	PS.audioLoad("fx_swoosh");
	PS.audioLoad("fx_coin7");
	MAP.MAPS.push(MAP.MAP1);
	MAP.MAPS.push(MAP.MAP2);
	MAP.MAPS.push(MAP.MAP3);
	MAP.MAPS.push(MAP.MAP4);
	MAP.MAPS.push(MAP.MAP5);
	MAP.MAPS.push(MAP.MAP6);
	MAP.MAPS.push(MAP.MAP7);
    MAP.MAPS.push(MAP.MAP8);
	MAP.MAPS.push(MAP.MAP9);
	MAP.MAPS.push(MAP.MAP10);
    MAP.MAPS.push(MAP.MAP11);
	MAP.buildFromFile(MAP.currentMap);
	
	// Add any other initialization code you need here
};

// PS.touch ( x, y, data, options )
// Called when the mouse button is clicked on a bead, or when a bead is touched
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.touch = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches over a bead
};

// PS.release ( x, y, data, options )
// Called when the mouse button is released over a bead, or when a touch is lifted off a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.release = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead
};

// PS.enter ( x, y, button, data, options )
// Called when the mouse/touch enters a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.enter = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead
};

// PS.exit ( x, y, data, options )
// Called when the mouse cursor/touch exits a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.exit = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead
};

// PS.exitGrid ( options )
// Called when the mouse cursor/touch exits the grid perimeter
// It doesn't have to do anything
// [options] = an object with optional parameters; see documentation for details

PS.exitGrid = function( options ) {
	"use strict";

	// Uncomment the following line to verify operation
	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid
};

// PS.keyDown ( key, shift, ctrl, options )
// Called when a key on the keyboard is pressed
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F1
// [shift] = true if shift key is held down, else false
// [ctrl] = true if control key is held down, else false
// [options] = an object with optional parameters; see documentation for details

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	//	PS.debug( "DOWN: key = " + key + ", shift = " + shift + "\n" );

	// Add code here for when a key is pressed
};

// PS.keyUp ( key, shift, ctrl, options )
// Called when a key on the keyboard is released
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F12
// [shift] = true if shift key is held down, false otherwise
// [ctrl] = true if control key is held down, false otherwise
// [options] = an object with optional parameters; see documentation for details

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	//PS.debug( "PS.keyUp(): key = " + key + ", shift = " + shift + ", ctrl = " + ctrl + "\n" );
	
	switch(key) {
		case 1005:
			PLAYER.moveHorizontally(1);
			break;
		case 1006:
			PLAYER.moveVertically(1);
			break;
		case 1007:
			PLAYER.moveHorizontally(2);
			break;
		case 1008:
			PLAYER.moveVertically(2);
			break;
		case 114:
			MAP.buildFromFile(MAP.currentMap);
			break;		
		case 49:
			MAP.buildFromFile(1);
			MAP.currentMap = 1;
			break;
		case 50:
			MAP.buildFromFile(2);
			MAP.currentMap = 2;
			break;
		case 51:
			MAP.buildFromFile(3);
			MAP.currentMap = 3;
			break;
		case 52:
			MAP.buildFromFile(4);
			MAP.currentMap = 4;
			break;
		case 53:
			MAP.buildFromFile(5);
			MAP.currentMap = 5;
			break;
		case 54:
			MAP.buildFromFile(6);
			MAP.currentMap = 6;
			break;
		case 55:
			MAP.buildFromFile(7);
			MAP.currentMap = 7;
			break;
		case 56:
            MAP.buildFromFile(8);
            MAP.currentMap = 8;
            break;
        case 57:
            MAP.buildFromFile(9);
            MAP.currentMap = 9;
            break;
        case 48:
            MAP.buildFromFile(10);
            MAP.currentMap = 10;
            break;	
		default:
			break;
	}
	

	// Add code here for when a key is released
};

// PS.swipe ( data, options )
// Called when a mouse/finger swipe across the grid is detected
// It doesn't have to do anything
// [data] = an object with swipe information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.swipe = function( data, options ) {
	"use strict";

	// Uncomment the following block to inspect parameters

	/*
	 var len, i, ev;
	 PS.debugClear();
	 PS.debug( "PS.swipe(): start = " + data.start + ", end = " + data.end + ", dur = " + data.duration + "\n" );
	 len = data.events.length;
	 for ( i = 0; i < len; i += 1 ) {
	 ev = data.events[ i ];
	 PS.debug( i + ": [x = " + ev.x + ", y = " + ev.y + ", start = " + ev.start + ", end = " + ev.end +
	 ", dur = " + ev.duration + "]\n");
	 }
	 */

	// Add code here for when an input event is detected
};

// PS.input ( sensors, options )
// Called when an input device event (other than mouse/touch/keyboard) is detected
// It doesn't have to do anything
// [sensors] = an object with sensor information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.input = function( sensors, options ) {
	"use strict";

	// Uncomment the following block to inspect parameters
	/*
	PS.debug( "PS.input() called\n" );
	var device = sensors.wheel; // check for scroll wheel
	if ( device )
	{
		PS.debug( "sensors.wheel = " + device + "\n" );
	}
	*/
	
	// Add code here for when an input event is detected
};

