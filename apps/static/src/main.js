import { defineCustomElement } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import HelloWorld from "@repo/tsf-modules/HelloWorld";

const HelloWorldElement = defineCustomElement(HelloWorld);
customElements.define("hello-world", HelloWorldElement);
