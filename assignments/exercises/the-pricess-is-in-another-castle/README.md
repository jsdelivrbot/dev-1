create a class for a player that has the following properties: 
name of type String
totalCoins of type Number
status of type String (options are Powered Up, Big,Small, and Dead)
star of type Boolean (Is a star active?)
setName of type function - sets name to "Mario" or "Luigi". Has a parameter called namePicked where you pass in "Mario" or "Luigi"
gotHit of type function - this is called whenever the player is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
gotPowerup of type function - called when a powerup is received and sets the status accordingly
gameActive of type Boolean, true by default, becomes false when status is Dead