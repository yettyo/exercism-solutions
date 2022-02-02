/**
 * @author yetty
 * @since 02.02.2022
 */

function cookingStatus(timer) {
    if(timer == 0) return 'Lasagna is done.';
    else if(timer > 0) return 'Not done, please wait.';
    else if(timer == '' || timer == null || timer == undefined) return 'You forgot to set the timer';
    else return 'something is very wrong, how did we get here?';
}

function preparationTime(layrays, avgPrepTime) {
        var layerCount = layrays.length;
        if(avgPrepTime === undefined) return layerCount * 2;
        else return layerCount * avgPrepTime;
}

function quantities(layrays) {
    var sauceCount = 0;
    var noodleCount= 0;
    for(let i = 0; i < layrays.length; i++) {
        if(layrays[i] == 'sauce') {
            sauceCount += 0.2;
        }
        if(layrays[i] == 'noodles') {
            noodleCount += 50;
        }
    }
    const ingredients = {
        noodles: noodleCount,
        sauce: sauceCount,
    };
    
    return ingredients;
}

function addSecretIngredient(array1, array2) {
    var element = array1[array1.length-1];
    array2.push(element);
}

const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
};

function scaleRecipe(recipe, number) {
    const requiredRecipe = {
        ...recipe
    };
    for(let key in requiredRecipe) {
        if(typeof requiredRecipe[key] == 'number') {
            requiredRecipe[key] = requiredRecipe[key] / 2 * number;
        }
    }
    return requiredRecipe;
}

const friendsList = ['sauce', 'noodles', 'béchamel', 'marjoram'];
const myList = ['sauce', 'noodles', 'meat', 'tomatoes'];
addSecretIngredient(friendsList, myList);