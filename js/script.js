//An RPG where the player creates a character, fights in random dungeons, and builds a castle to train. Maybe handles multiple characters.

//Character generation

class Creature{
    constructor(name, job, level, hp, xp){
        this.name = name
        this.job = job
        this.level = level
        this.hp = hp
        this.xp = xp
    }

}

class Character extends Creature{
    constructor(){

    }
}

//Dungeon creator - Create entire dungeon at once or as the character progresses through


//dungeon size
//room size
//room exits 

class Dungeon{
    constructor (size, type, level){
        this.size = size
        this.type = type
        this.level = level
    }
}


function roomRND(){

}



//Battle






