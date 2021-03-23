// define a mixin object
export default {
  methods: {},

  computed: {
    getLanguageID() {
      // console.log("getLanguageID");
      const languageString = this.$store.getters.getOpenWindowsLanguage;
      const languageNr = languageString.charAt(this.idNr - 1);
      if (languageNr == "0") {
        return 0;
      } else {
        return 1;
      }
    },
    getLanguage() {
      // console.log("getLanguage");
      const languageString = this.$store.getters.getOpenWindowsLanguage;
      const languageNr = languageString.charAt(this.idNr - 1);
      if (languageNr == "0") {
        return "de";
      } else {
        return "en";
      }
    },
    isMainMenuOpen() {
      // console.log("getMainMenuOpen computed fensternr", this.idNr);
      const mainmenuString = this.$store.getters.getOpenWindowsMainMenu;
      // console.log("mainmenuString", mainmenuString);
      const mainmenuNr = mainmenuString.charAt(this.idNr - 1);

      if (mainmenuNr == "0") {
        // console.log("mainmenuNr", mainmenuNr);
        // this.setOpen(false)
        return false;
      } else {
        // console.log("mainmenuNr", mainmenuNr);
        // this.setOpen(true)
        // this.fillMenu();
        return true;
      }
    },
  },
};
