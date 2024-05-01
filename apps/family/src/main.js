import { defineCustomElement } from "vue";
import HelloWorld from "@repo/tsf-modules/HelloWorld";
import Module2 from "@repo/tsf-modules/Module2";

customElements.define("hello-world", defineCustomElement(HelloWorld));
customElements.define("module-2", defineCustomElement(Module2));
