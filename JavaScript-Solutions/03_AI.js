/**
 * @author yetty
 * @since 24.10.2021
 */
let knightIsAwake = false;
let archerIsAwake = true;
let prisonerIsAwake = false;
let petDogIsPresent = false;

function canExecuteFastAttack(knightIsAwake) {
    //if(knightIsAwake) return false;
    //else return true;
    return !knightIsAwake;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    //if(knightIsAwake || archerIsAwake || prisonerIsAwake) return true;
    //else return false;
    return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    //if(!archerIsAwake && prisonerIsAwake) return true;
    //else return false;
    return !archerIsAwake && prisonerIsAwake;
}

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    //if(petDogIsPresent && !archerIsAwake) return true;
    //else if(!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake) return true;
    //else return false;
    return (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}