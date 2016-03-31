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
	
	WIDTH: 9,
	HEIGHT: 10,
	GAME_OVER: false,
	
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
	
	moveUp : function() {
		var newY = PLAYER.Y_POS-1;
		var result = PS.unmakeRGB(PS.color(PLAYER.X_POS, newY), {});
		if (result.r == 255 && result.g == 255 && result.b == 255) {
			PS.color(PLAYER.X_POS, newY, 0xE6A644);
			PS.radius(PLAYER.X_POS, newY, 50);
			PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
			PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			PLAYER.Y_POS = newY;
		}
		else if (result.r == 255 && result.g == 215 && result.b == 0) {
			MAP.GAME_OVER = true;
			PS.color(PLAYER.X_POS, newY, 0xE6A644);
			PS.radius(PLAYER.X_POS, newY, 50);
			PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
			PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			PS.statusText("YOU WON!");
		}
		else if (result.r == 115 && result.g == 143 && result.b == 155) {
			var otherY = newY - 1;
			var secondResult = PS.unmakeRGB(PS.color(PLAYER.X_POS, otherY), {});
			if (!(secondResult.r == 255 && secondResult.g == 255 && secondResult.b == 255)) {
				
			}
			else {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(PLAYER.X_POS, otherY, 0x738F9B);
				PS.radius(PLAYER.X_POS, otherY, 25);
				PLAYER.Y_POS = newY;
			}
		}
	},
	
	moveDown : function() {
		var newY = PLAYER.Y_POS+1;
		var result = PS.unmakeRGB(PS.color(PLAYER.X_POS, newY), {});
		if (result.r == 255 && result.g == 255 && result.b == 255) {
			PS.color(PLAYER.X_POS, newY, 0xE6A644);
			PS.radius(PLAYER.X_POS, newY, 50);
			PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
			PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			PLAYER.Y_POS = newY;
		}
		else if (result.r == 255 && result.g == 215 && result.b == 0) {
			MAP.GAME_OVER = true;
			PS.color(PLAYER.X_POS, newY, 0xE6A644);
			PS.radius(PLAYER.X_POS, newY, 50);
			PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
			PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
			PS.statusText("YOU WON!");
		}
		else if (result.r == 115 && result.g == 143 && result.b == 155) {
			var otherY = newY + 1;
			var secondResult = PS.unmakeRGB(PS.color(PLAYER.X_POS, otherY), {});
			if (!(secondResult.r == 255 && secondResult.g == 255 && secondResult.b == 255)) {
				
			}
			else {
				PS.color(PLAYER.X_POS, newY, 0xE6A644);
				PS.radius(PLAYER.X_POS, newY, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(PLAYER.X_POS, otherY, 0x738F9B);
				PS.radius(PLAYER.X_POS, otherY, 25);
				PLAYER.Y_POS = newY;
			}
		}
	},
	
	moveLeft : function() {
		var newX = PLAYER.X_POS-1;
		var result = PS.unmakeRGB(PS.color(newX, PLAYER.Y_POS), {});
		if (result.r == 255 && result.g == 255 && result.b == 255) {
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
			var otherX = newX - 1;
			var secondResult = PS.unmakeRGB(PS.color(otherX, PLAYER.Y_POS), {});
			if (!(secondResult.r == 255 && secondResult.g == 255 && secondResult.b == 255)) {
				
			}
			else {
				PS.color(newX, PLAYER.Y_POS, 0xE6A644);
				PS.radius(newX, PLAYER.Y_POS, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(otherX, PLAYER.Y_POS, 0x738F9B);
				PS.radius(otherX, PLAYER.Y_POS, 25);
				PLAYER.X_POS = newX;
			}
		}
	},
	
	moveRight : function() {
		var newX = PLAYER.X_POS+1;
		var result = PS.unmakeRGB(PS.color(newX, PLAYER.Y_POS), {});
		if (result.r == 255 && result.g == 255 && result.b == 255) {
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
			var otherX = newX + 1;
			var secondResult = PS.unmakeRGB(PS.color(otherX, PLAYER.Y_POS), {});
			if (!(secondResult.r == 255 && secondResult.g == 255 && secondResult.b == 255)) {
				
			}
			else {
				PS.color(newX, PLAYER.Y_POS, 0xE6A644);
				PS.radius(newX, PLAYER.Y_POS, 50);
				PS.color(PLAYER.X_POS, PLAYER.Y_POS, PS.COLOR_WHITE);
				PS.radius(PLAYER.X_POS, PLAYER.Y_POS, 0);
				PS.color(otherX, PLAYER.Y_POS, 0x738F9B);
				PS.radius(otherX, PLAYER.Y_POS, 25);
				PLAYER.X_POS = newX;
			}
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
	
	PS.color(11, 11, 0x8C3313);
	PS.color(11, 12, 0x8C3313);
	PS.color(11, 13, 0x8C3313);
	PS.color(11, 14, 0x8C3313);
	PS.color(11, 15, 0x8C3313);
	PS.color(11, 16, 0x8C3313);
	PS.color(11, 17, 0x8C3313);
	PS.color(11, 18, 0x8C3313);
	PS.color(11, 19, 0x8C3313);
	PS.color(11, 20, 0x8C3313);
	
	PS.color(11, 11, 0x8C3313);
	PS.color(12, 11, 0x8C3313);
	PS.color(13, 11, 0x8C3313);
	PS.color(14, 11, 0x8C3313);
	PS.color(15, 11, 0x8C3313);
	PS.color(16, 11, 0x8C3313);
	PS.color(17, 11, 0x8C3313);
	PS.color(18, 11, 0x8C3313);
	PS.color(19, 11, 0x8C3313);
	
	PS.color(19, 11, 0x8C3313);
	PS.color(19, 12, 0x8C3313);
	PS.color(19, 13, 0x8C3313);
	PS.color(19, 14, 0x8C3313);
	PS.color(19, 15, 0x8C3313);
	PS.color(19, 16, 0x8C3313);
	PS.color(19, 17, 0x8C3313);
	PS.color(19, 18, 0x8C3313);
	PS.color(19, 19, 0x8C3313);
	PS.color(19, 20, 0x8C3313);

	PS.color(11, 20, 0x8C3313);
	PS.color(12, 20, 0x8C3313);
	PS.color(13, 20, 0x8C3313);
	PS.color(14, 20, 0x8C3313);
	PS.color(15, 20, 0x8C3313);
	PS.color(16, 20, 0x8C3313);
	PS.color(17, 20, 0x8C3313);
	PS.color(18, 20, 0x8C3313);
	PS.color(19, 20, 0x8C3313);
	
	PS.color(16, 12, 0x8C3313);
	PS.color(17, 12, 0x8C3313);
	PS.color(18, 12, 0x8C3313);
	
	PS.color(16, 13, 0x8C3313);
	PS.color(17, 13, 0x8C3313);
	PS.color(18, 13, 0x8C3313);
	PS.color(14, 13, 0x8C3313);
	PS.color(13, 13, 0x8C3313);
	PS.color(12, 13, 0xE6A644);
	PS.radius(12, 13, 50);
	PS.color(15, 13, 0x738F9B);
	PS.radius(15, 13, 25);
	
	PS.color(16, 14, 0x8C3313);
	PS.color(17, 14, 0x8C3313);
	PS.color(18, 14, 0x8C3313);
	PS.color(14, 14, 0x8C3313);
	PS.color(13, 14, 0x8C3313);	
	PS.color(12, 14, 0x8C3313);
	
	PS.color(17, 15, 0x8C3313);
	PS.color(18, 15, 0x8C3313);
	PS.color(14, 15, 0x8C3313);
	PS.color(13, 15, 0x8C3313);	
	PS.color(12, 15, 0x8C3313);
	
	PS.color(18, 16, 0x8C3313);
	PS.color(17, 16, 0x8C3313);	
	PS.color(12, 16, 0x8C3313);
	
	PS.color(17, 17, 0x8C3313);
	PS.color(18, 17, 0x8C3313);
	PS.color(16, 17, 0x8C3313);
	PS.color(15, 17, 0x8C3313);	
	
	PS.color(17, 18, 0x8C3313);
	PS.color(14, 18, 0x8C3313);
	PS.color(16, 18, 0x8C3313);
	PS.color(15, 18, 0x8C3313);
	PS.color(13, 18, 0x8C3313);
	PS.color(18, 18, 0xFFD700);
	PS.radius(18, 18, 50);
		

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
			PLAYER.moveLeft();
			PS.debug("Left Pressed!\n");
			break;
		case 1006:
			PLAYER.moveUp();
			PS.debug("Up Pressed!\n");
			break;
		case 1007:
			PLAYER.moveRight();
			PS.debug("Right Pressed!\n");
			break;
		case 1008:
			PLAYER.moveDown();
			PS.debug("Down Pressed!\n");
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

