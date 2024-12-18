import Vue from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// import './assets/main.css'
import "./style.css";

/* add icons to the library */
library.add(faShoppingCart);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
