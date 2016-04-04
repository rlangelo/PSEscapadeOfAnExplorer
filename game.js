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
	
	MAP2: [["#","#","#","#","#","#","#","_","_","#","_","_","#","#","#","#","#","#","#"], ["#","_","_","_","_","_","#","_","#","_","#","_","#","_","_","_","_","_","#"], ["#","_","~","_","~","_","#","#","_","_","_","#","#","_","B","b","B","_","#"], ["#","_","_","S","_","_","B","_","_","_","_","_","|","_", "b","X","b","_","#"],
	["#","_","~","_","~","_","#","#","#","o","#","#","#","_","B","b","B","_","#"],
	["#","_","_","_","_","_","#","_","#","#","#","_","#","_","_","_","_","_","#"],
	["#","#","#","#","#","#","#","_","_","#","_","_","#","#","#","#","#","#","#"]],
	
	MAPS: [],
	
	currentMap: 1,
	WIDTH: 0,
	HEIGHT: 0,
	GAME_OVER: false,
	myTimer: 0,
	anim: 0,
	numOfPlates: 0,
	pressedPlates: 0,
	
	buildFromFile : function(mapNumber) {
		PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
		PS.border(PS.ALL, PS.ALL, 0);
		switch(mapNumber) {
			case 1:
				MAP.WIDTH = MAP.MAP1[0].length;
				MAP.HEIGHT = MAP.MAP1.length;
				break;
			case 2:
				MAP.WIDTH = MAP.MAP2[0].length;
				MAP.HEIGHT = MAP.MAP2.length;
				break;
			case 3:
				MAP.WIDTH = MAP.MAP3[0].length;
				MAP.HEIGHT = MAP.MAP3.length;
				break;
			case 4:
				MAP.WIDTH = MAP.MAP4[0].length;
				MAP.HEIGHT = MAP.MAP4.length;
				break;
			case 5:
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
			var color;
			for (var i = 0; i<MAP.HEIGHT;i++) {
				for (var j = 0; j<MAP.WIDTH;j++) {
					switch(MAP.MAPS[mapNumber-1][i][j]) {
						case "#":
							PS.color(j, i, 0x8C3313);
							break;
						case "_":
							PS.color(j, i, PS.COLOR_WHITE);
							break;
						case "S":
							PS.color(j, i, 0xE6A644);
							PS.radius(j, i, 50);
							PLAYER.X_POS = j;
							PLAYER.Y_POS = i;
							break;
						case "B":
							PS.color(j, i, 0x738F9B);
							PS.radius(j, i, 25);
							break;
						case "X":
							PS.color(j, i, 0xFFD700);
							PS.radius(j, i, 50);
							break;
						case "~":
							PS.color(j, i, 0x40A4DF);
							break;
						case "o":
							PS.color(j, i, 0x7D26CD);
							PS.radius(j, i, 50);
							MAP.numOfPlates += 1;
							break;
						case "|":
							PS.color(j, i, 0x7D26CE);
							break;
						case "b":
							PS.color(j, i, 0xFF0000);
							PS.radius(j, i, 50);
							break;
						default:
							break;
					}
				}
			}
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
					}
				}
			}
		}
		
	},
	
};

var GRID = {
	
	MIDDLE: 11,
		
};

var EXIT = {
	
	X_POS: 18,
	Y_POS: 18,
	
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
		if (result.r == 255 && result.g == 255 && result.b == 255 || result.r == 120 && result.g == 72 && result.b == 0) {
			PS.color(PLAYER.X_POS, newY, 0xE6A644);
			PS.radius(PLAYER.X_POS, newY, 50);
			PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
			PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			PLAYER.Y_POS = newY;
		}
		else if (result.r == 255 && result.g == 215 && result.b == 0) {
			if (MAP.currentMap < 11) {
				MAP.currentMap += 1;
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				//PS.statusText("YOU WON!");
				MAP.buildFromFile(MAP.currentMap);
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
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(PLAYER.X_POS, otherY, 0x738F9B);
				PS.radius(PLAYER.X_POS, otherY, 25);
				PLAYER.Y_POS = newY;
			}
			else if (secondResult.r == 64 && secondResult.g == 164 && secondResult.b == 223) {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(PLAYER.X_POS, otherY, 0x784800);
				PLAYER.Y_POS = newY;
			}
			else if (secondResult.r == 125 && secondResult.g == 38 && secondResult.b == 205) {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(PLAYER.X_POS, otherY, 0x785AB4);
				PLAYER.Y_POS = newY;
				MAP.pressedPlates += 1;
				MAP.checkGates();
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
		if (result.r == 255 && result.g == 255 && result.b == 255 || result.r == 120 && result.g == 72 && result.b == 0) {
			PS.color(newX, PLAYER.Y_POS, 0xE6A644);
			PS.radius(newX, PLAYER.Y_POS, 50);
			PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
			PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			PLAYER.X_POS = newX;
		}
		else if (result.r == 255 && result.g == 215 && result.b == 0) {
			MAP.GAME_OVER = true;
			PS.color(newX, PLAYER.Y_POS, 0xE6A644);
			PS.radius(newX, PLAYER.Y_POS, 50);
			PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
			PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			PS.statusText("YOU WON!");
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
				PS.color(newX, PLAYER.Y_POS, 0xE6A644);
				PS.radius(newX, PLAYER.Y_POS, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(otherX, PLAYER.Y_POS, 0x738F9B);
				PS.radius(otherX, PLAYER.Y_POS, 25);
				PLAYER.X_POS = newX;
			}
			else if (secondResult.r == 64 && secondResult.g == 164 && secondResult.b == 223) {
				PS.color(newX, PLAYER.Y_POS, 0xE6A644);
				PS.radius(newX, PLAYER.Y_POS, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(otherX, PLAYER.Y_POS, 0x784800);
				PLAYER.X_POS = newX;
			}
			else if (secondResult.r == 125 && secondResult.g == 38 && secondResult.b == 205) {
				PS.color(newX, PLAYER.Y_POS, 0xE6A644);
				PS.radius(newX, PLAYER.Y_POS, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(otherX, PLAYER.Y_POS, 0x785AB4);
				PLAYER.X_POS = newX;
				MAP.pressedPlates += 1;
				MAP.checkGates();
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
		if (MAP.anim < 5) {
			PS.audioPlay("fx_drip2");
			MAP.anim += 1;
		}
		else {
			PS.timerStop(MAP.myTimer);
			MAP.anim = 0;
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
	PS.statusText("GET TO THE EXIT!");
	PS.audioLoad("fx_bang");
	PS.audioLoad("fx_drip2");
	MAP.MAPS.push(MAP.MAP1);
	MAP.MAPS.push(MAP.MAP2);
	MAP.buildFromFile(2);
	//MAP.build();
	
	
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
	
	if (!MAP.GAME_OVER) {
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
		default:
			break;
	}
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

