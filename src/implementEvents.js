function implementEvents(obj) {

    var dynObject = this.phsim.getObjectByName(obj.id);
    var emulatorInstance = this;

    // Score events

    if(obj.events.score.onsensor) {

        let f = function(){
            emulatorInstance.currentGame.score++;
        };

        obj.on("sensor",f);

    }

    if(obj.events.score.oncrush) {
        
        obj.on("crush",function(){
            emulatorInstance.currentGame.score++;
        });

    }

    if(obj.events.score.onclone) {

        obj.on("clone",function(){
            emulatorInstance.currentGame.score++;
        });
        
    }

    if(obj.events.score.onboundsout) {

        obj.on("boundsout",function(){
            emulatorInstance.currentGame.score++;
        });
        
    }

    // Penalty events

    if(obj.events.penalty.onsensor) {

        let f = function(){
            emulatorInstance.currentGame.penalty++;
        };

        obj.on("sensor",f);

    }

    if(obj.events.penalty.oncrush) {
        
        obj.on("crush",function(){
            emulatorInstance.currentGame.penalty++;
        });

    }

    if(obj.events.penalty.onclone) {

        obj.on("clone",function(){
            emulatorInstance.currentGame.penalty++;
        });
        
    }

    if(obj.events.penalty.onboundsout) {

        obj.on("boundsout",function(){
            emulatorInstance.currentGame.penalty++;
        });
        
    }

    // Lose Life

    if(obj.events.loseLife.onsensor) {

        let f = function(){
            emulatorInstance.currentGame.lives--;
        };

        obj.on("sensor",f);

    }

    if(obj.events.loseLife.oncrush) {
        
        obj.on("crush",function(){
            emulatorInstance.currentGame.lives--;
        });

    }

    if(obj.events.loseLife.onclone) {

        obj.on("clone",function(){
            emulatorInstance.currentGame.lives--;
        });
        
    }

    if(obj.events.loseLife.onboundsout) {

        obj.on("boundsout",function(){
            emulatorInstance.currentGame.lives--;
        });
        
    }

    // Add Life

    if(obj.events.addLife.onsensor) {

        let f = function(){
            emulatorInstance.currentGame.lives++;
        };

        obj.on("sensor",f);

    }

    if(obj.events.addLife.oncrush) {
        
        obj.on("crush",function(){
            emulatorInstance.currentGame.lives++;
        });

    }

    if(obj.events.addLife.onclone) {

        obj.on("clone",function(){
            emulatorInstance.currentGame.lives++;
        });
        
    }

    if(obj.events.addLife.onboundsout) {

        obj.on("boundsout",function(){
            emulatorInstance.currentGame.lives++;
        });
        
    }

    // Add Life

    if(obj.events.unlock.onsensor) {

        let f = function(){
            emulatorInstance.currentGame.lives++;
        };

        obj.on("sensor",f);

    }

    if(obj.events.unlock.oncrush) {
        
        obj.on("crush",function(){
            emulatorInstance.currentGame.lives++;
        });

    }

    if(obj.events.unlock.onclone) {

        obj.on("clone",function(){
            emulatorInstance.currentGame.lives++;
        });
        
    }

    if(obj.events.unlock.onboundsout) {

        obj.on("boundsout",function(){
            emulatorInstance.currentGame.lives++;
        });
        
    }

    this.phsim.on("collisionstart",function(){
        if(this.inSensorCollision(dynObject)) {
            obj.callEventClass("sensor",emulatorInstance,{});
        }
    });

}

module.exports = implementEvents;