import './polyfills.server.mjs';
import {
  AuthService
} from "./chunk-IVNIGKHX.mjs";
import {
  CommonModule,
  Component,
  MatIcon,
  MatIconModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RXIW7MXB.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/pages/perfil/perfil.ts
function PerfilComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.user.nmUsuario);
  }
}
var PerfilComponent = class _PerfilComponent {
  auth = inject(AuthService);
  user = this.auth.getCurrentUser();
  static \u0275fac = function PerfilComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PerfilComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilComponent, selectors: [["app-perfil"]], decls: 8, vars: 1, consts: [[1, "perfil-page"], [1, "page-title", "text-slate-800", "dark:text-slate-100"], [1, "!text-emerald-600", "dark:!text-emerald-400"], [1, "page-description", "text-slate-500", "dark:text-slate-400"], [1, "text-slate-600", "dark:text-slate-300", "text-sm", "mt-2"]], template: function PerfilComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Meu perfil ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Edite suas informa\xE7\xF5es. (P\xE1gina em constru\xE7\xE3o.)");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, PerfilComponent_Conditional_7_Template, 2, 1, "p", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.user ? 7 : -1);
    }
  }, dependencies: [CommonModule, MatIconModule, MatIcon], styles: ["\n\n.perfil-page[_ngcontent-%COMP%] {\n  max-width: 48rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.page-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.page-description[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n}\n/*# sourceMappingURL=perfil.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilComponent, [{
    type: Component,
    args: [{ selector: "app-perfil", standalone: true, imports: [CommonModule, MatIconModule], template: '<div class="perfil-page">\n  <h1 class="page-title text-slate-800 dark:text-slate-100">\n    <mat-icon class="!text-emerald-600 dark:!text-emerald-400">person</mat-icon>\n    Meu perfil\n  </h1>\n  <p class="page-description text-slate-500 dark:text-slate-400">Edite suas informa\xE7\xF5es. (P\xE1gina em constru\xE7\xE3o.)</p>\n  @if (user) {\n    <p class="text-slate-600 dark:text-slate-300 text-sm mt-2">{{ user.nmUsuario }}</p>\n  }\n</div>\n', styles: ["/* src/app/pages/perfil/perfil.scss */\n.perfil-page {\n  max-width: 48rem;\n}\n.page-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.page-title mat-icon {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.page-description {\n  margin: 0;\n  font-size: 0.9375rem;\n}\n/*# sourceMappingURL=perfil.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilComponent, { className: "PerfilComponent", filePath: "src/app/pages/perfil/perfil.ts", lineNumber: 13 });
})();
export {
  PerfilComponent
};
//# sourceMappingURL=chunk-VDHS6EBZ.mjs.map
