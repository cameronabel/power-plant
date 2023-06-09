/**
 * Updates a state property by a given value.
 * 
 * @param {*} prop The property to be changed
 * @returns {function} f(value)(state)
 */
export function changeState (prop) {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

/**
 * Adds two numerical values.
 * @deprecated Just add the numbers, dork.
 * @param {Number} a the first number
 * @param {Number} b the second number
 * @returns {Number} the two numbers added together.
 * ## Whaaaa
 */
function addsTwo(a, b) {
  return a + b;
}

/**
 * Increments the soil value.
 */
export const feed = changeState("soil")(1);

/**
 * Increments the water value.
 */
export const hydrate = changeState("water")(1);

/**
 * Increases the soil value by 5.
 * @example const newState = stateControl(blueFood);
 */
export const blueFood = changeState("soil")(5)

/**
 * Increases water value by 5.
 */
export const superWater = changeState("water")(5);

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

// export const giveLight = changeState("light");
// export const greenFood = changeState("soil")(10)
// export const yuckyFood = changeState("soil")(-5)

window.onload = function() {

  document.getElementById('feed').onclick = function (){
    const newState = stateControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('show-state').onclick = function() {
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  }
}
