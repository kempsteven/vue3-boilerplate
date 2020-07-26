import Vuex from "vuex";

// Storing in variable a context with all files in this folder
// ending with `.js`.
const requireContext = require.context("./global", false, /.*\.js$/);

const modules = {};

requireContext.keys().forEach(fileName => {
  // filter fullstops and extension
  const moduleName = fileName.replace(/(\.\/|\.js)/g, "");

  // create a dynamic object with all modules
  modules[moduleName] = {
    namespaced: true,
    ...requireContext(fileName).default
    // if you have exported the object with name in the module `js` file
    // e.g., export const name = {};
    // uncomment this line and comment the above
    // ...requireModule(fileName)[moduleName]
  };
});

export default Vuex.createStore({
  modules
});
