import { defineCustomElement } from "vue";
import StaticOnlyComponent from "./components/StaticOnlyComponent.vue";
import HelloWorld from "@repo/tsf-modules/HelloWorld";
import Module1 from "@repo/tsf-modules/Module1";
import Module2 from "@repo/tsf-modules/Module2";

customElements.define("static-only-component", defineCustomElement(StaticOnlyComponent));
customElements.define("hello-world", defineCustomElement(HelloWorld));
customElements.define("module-1", defineCustomElement(Module1));
customElements.define("module-2", defineCustomElement(Module2));
