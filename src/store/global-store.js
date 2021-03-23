import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    debug: true,
    language: "de",
    maxZ: 205,
    openWindows: [],
    openWindowsStartMenu: [0, 0, 0, 0, 0],      // von welcher icon nummer wurde das fenster geöffnet
    openWindowsMenu: [0, 0, 0, 0, 0],           // welcher menüpunkt ist aktuell im fenster geöffnet
    scrollWindowsMenu: [1, 1, 1, 1, 1],         //kann man das aktuell gesetzte thema scrollen
    openWindowsLanguage: [0, 0, 0, 0, 0],       // welche Sprache ist aktuell 0: deutch, 1: englisch
    openWindowsMainMenuState: [0, 0, 0, 0, 0],  // welches hauptmenü ist gerade offen
    openWindowsBackState: [0, 0, 0, 0, 0],
    maxWindows: 3,
    iconLayerActive: true,
    impressumCanOpen: true,
    openImpressum: 0,
  },
  mutations: {
    setScrollableContentM(state, param) {
      var windowNr = param[0];
      var onoff = param[1];
      // console.log("setScrollableContentM", windowNr - 1, onoff);
      Vue.set(state.scrollWindowsMenu, windowNr - 1, onoff);
      // console.log("setScrollableContentM", state.scrollWindowsMenu);
    },
    setActiveImpressumM(state, impressumNumber) {
      // console.log("setActiveImpressumM", impressumNumber);
      state.openImpressum = impressumNumber;
      state.impressumCanOpen = false;
    },
    setImpressumCanNotOpenM(state) {
      // console.log("setImpressumCanOpenM");
      state.impressumCanOpen = false;
    },
    setImpressumCanOpenM(state) {
      // console.log("setImpressumCanNotOpenM");
      state.impressumCanOpen = true;
    },
    setActiveWindowM(state, iconNumber) {
      if (state.openWindows.length < state.maxWindows) {
        // console.log("store setActiveWindowM hinzugefügt");
        // state.openWindowsByNumbers.push(iconNumber);

        for (var i = 0; i < state.maxWindows; i++) {
          if (state.openWindowsStartMenu[i] == 0) {
            state.openWindows.push(i + 1);
            // console.log("setActiveWindowM", i);
            Vue.set(state.openWindowsMenu, i, parseInt(iconNumber));
            Vue.set(state.openWindowsStartMenu, i, parseInt(iconNumber));
            // console.log("geändert:", state.openWindowsStartMenu);
            break;
          }
        }
      }
      // wenn maximale fensterzahl erreicht ist
      if (state.openWindows.length < state.maxWindows) {
        state.iconLayerActive = true;
      } else {
        state.iconLayerActive = false;
      }
    },
    closeImpressum(state) {
      state.impressumCanOpen = true;
    },
    closeWindowByIDM(state, windowNr) {
      // console.log("closeWindowByIDM in store", windowNr);
      // Vue.set(openWindowsMainMenuState, windowNr - 1, 0);
      Vue.set(state.openWindowsStartMenu, windowNr - 1, 0);
      Vue.set(state.openWindowsMenu, windowNr - 1, 0);
      const pos = state.openWindows.indexOf(windowNr);
      // console.log("pos", pos);
      if (pos >= 0) {
        // state.openWindows.splice(pos,1);
        Vue.delete(state.openWindows, pos);
        console.log("closeWindowByIDM state.openWindows", state.openWindows);
      }
      // wenn maximale fensterzahl erreicht ist
      if (state.openWindows.length < state.maxWindows) {
        state.iconLayerActive = true;
      } else {
        state.iconLayerActive = false;
      }
    },
    resetWindowByIDM(state, windowNr) {
      // console.log("resetWindowByIDM in store", windowNr);
      Vue.set(state.openWindowsMainMenuState, windowNr - 1, 0);
    },
    setZM(state) {
      // console.log("setZM in store commit");
      state.maxZ = state.maxZ + 1;
    },
    switchLanguageByIDM(state, windowNr) {
      // console.log("switchLanguageByIDM", windowNr);
      // state.language == "de" ? (state.language = "en") : (state.language = "de");
      if (state.openWindowsLanguage[windowNr - 1] == 1) {
        Vue.set(state.openWindowsLanguage, windowNr - 1, 0);
      } else {
        Vue.set(state.openWindowsLanguage, windowNr - 1, 1);
      }
    },
    switchMainMenuByIDM(state, windowNr) {
      console.log("switchMainMenuByIDM", windowNr);
      if (state.openWindowsMainMenuState[windowNr - 1] == 1) {
        Vue.set(state.openWindowsMainMenuState, windowNr - 1, 0);
      } else {
        Vue.set(state.openWindowsMainMenuState, windowNr - 1, 1);
      }
      // console.log("openWindowsMainMenuState", state.openWindowsMainMenuState.toString());
    },
    changeMenuByWindow(state, param) {
      console.log("changeMenuByWindow", param);
      var windowNr = param[0];
      var menuNr = param[1];
      // console.log("changeMenuByWindow", windowNr, menuNr);
      Vue.set(state.openWindowsMenu, windowNr - 1, menuNr);
      Vue.set(state.openWindowsMainMenuState, windowNr - 1, 0);
    },
    closeMainMenuWindow(state, windowNr) {
      console.log("closeMainMenuWindow", windowNr);
      Vue.set(state.openWindowsMainMenuState, windowNr - 1, 0);
    },
    switchBackByIDM(state, windowNr) {
      console.log("switchBackByIDM", windowNr);
      // state.language == "de" ? (state.language = "en") : (state.language = "de");
      if (state.openWindowsBackState[windowNr - 1] == 1) {
        Vue.set(state.openWindowsBackState, windowNr - 1, 0);
      } else {
        Vue.set(state.openWindowsBackState, windowNr - 1, 1);
      }
      // console.log("openWindowsMainMenuState", state.openWindowsBackState.toString());
    },
  },
  actions: {
    setScrollableContent({ commit }) {
      commit("setScrollableContentM");
    },
    closeWindowByID({ commit }) {
      console.log("closeWindowByID in store");
      commit("closeWindowByIDM");
    },
    resetWindowByID({ commit }) {
      console.log("resetWindowByID in store");
      commit("resetWindowByIDM");
    },
    setActiveWindow({ commit }) {
      commit("setActiveWindowM");
    },
    switchLanguageByID({ commit }) {
      // console.log("switchLanguage in store");
      commit("switchLanguageByIDM");
    },
    // resetAppTimeout({ commit }) {
    //   // console.log("resetAppTimeout in store");
    //   commit("resetAppTimeoutM"); // alles wieder auf anfang
    // },
    // setAppTimeout({ commit }) {
    //   console.log("setAppTimeout in store");
    //   commit("setAppTimeoutM"); // alles wieder auf anfang
    // },
    setAppLoaded({ commit }) {
      // console.log("setAppLoaded in store");
      commit("setAppLoadedM"); // alles wieder auf anfang
    },
    setZ({ commit }) {
      // console.log("setZ in store");
      commit("setZM");
    },
  },
  modules: {

  },
  getters: {
    isIconLayerActive(state) {
      // console.log("isIconLayerActive", state.isIconLayerActive);
      return state.iconLayerActive;
    },
    nextWindowCanOpen(state){
      for (var i = 0; i < state.maxWindows; i++) {
          if (state.openWindowsStartMenu[i] == 0) {
            return i+1;
          }
      }
    },
    getAppLoaded(state) {
      // console.log("getAppLoaded from store");
      return state.loaded;
    },
    getDebugFlag(state) {
      // console.log("getDebugFlag from store");
      return state.debug;
    },
    getAppMaxZ(state) {
      // state.maxZ = state.maxZ + 1;
      return state.maxZ;
    },
    getWindowCanOpen(state) {
      // console.log("getWindowCanOpen", state.openWindows.length);
      if (state.openWindows.length < state.maxWindows) {
        return true;
      } else {
        return false;
      }
    },
    getImpressumCanOpen(state) {
      // console.log("getWindowCanOpen", state.openWindows.length);
      return state.impressumCanOpen;
    },
    getOpenWindowsStartMenu(state) {
      // console.log("getOpenWindowsStartMenu", state.openWindowsStartMenu);
      const stateString = state.openWindowsStartMenu;
      return stateString.join("");
    },
    getOpenWindowsMenu(state) {
      // console.log("getOpenWindowsMenu", state.openWindowsMenu);
      const menuString = state.openWindowsMenu;
      return menuString.join("");
    },
    getOpenImpressum(state) {
      console.log("getOpenImpressum");
      return state.impressumCanOpen;
    },
    getOpenWindowsLanguage(state) {
      // console.log("getOpenWindowsLanguage", state.openWindowsLanguage);
      const languageString = state.openWindowsLanguage;
      return languageString.join("");
    },
    getOpenWindowsMainMenu(state) {
      // console.log("getOpenWindowsLanguage", state.openWindowsMainMenuState);
      const mainmenuString = state.openWindowsMainMenuState;
      return mainmenuString.join("");
    },
    getOpenWindowsBackState(state) {
      // console.log("getOpenWindowsBackState", state.openWindowsMainMenuState);
      const backstateString = state.openWindowsBackState;
      return backstateString.join("");
    },
    getScrollWindowsMenu(state) {
      // console.log("getScrollWindowsMenu", state.scrollWindowsMenu);
      const scrollWindowsString = state.scrollWindowsMenu;
      return scrollWindowsString.join("");
    },
  },
});
