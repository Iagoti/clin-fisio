import {
  AuthService
} from "./chunk-I5CDD5XV.js";
import {
  CommonModule,
  Component,
  MatIcon,
  MatIconModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-AXTQVTRC.js";

// src/app/pages/dashboard/dashboard-home/dashboard-home.ts
var DashboardHomeComponent = class _DashboardHomeComponent {
  auth = inject(AuthService);
  user = this.auth.getCurrentUser();
  static \u0275fac = function DashboardHomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardHomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardHomeComponent, selectors: [["app-dashboard-home"]], decls: 10, vars: 1, consts: [[1, "dashboard-home"], [1, "page-title", "text-slate-800", "dark:text-slate-100"], [1, "!text-emerald-600", "dark:!text-emerald-400"], [1, "welcome", "text-slate-500", "dark:text-slate-400"], [1, "text-slate-700", "dark:text-slate-200"]], template: function DashboardHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Ol\xE1, ");
      \u0275\u0275elementStart(7, "strong", 4);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, ". Bem-vindo ao Clin Fisio.");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate((ctx.user == null ? null : ctx.user.nmUsuario) ?? "usu\xE1rio");
    }
  }, dependencies: [CommonModule, MatIconModule, MatIcon], styles: ["\n\n.dashboard-home[_ngcontent-%COMP%] {\n  max-width: 48rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.page-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.welcome[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=dashboard-home.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardHomeComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-home", standalone: true, imports: [CommonModule, MatIconModule], template: `<div class="dashboard-home">
  <h1 class="page-title text-slate-800 dark:text-slate-100">
    <mat-icon class="!text-emerald-600 dark:!text-emerald-400">dashboard</mat-icon>
    Dashboard
  </h1>
  <p class="welcome text-slate-500 dark:text-slate-400">Ol\xE1, <strong class="text-slate-700 dark:text-slate-200">{{ user?.nmUsuario ?? 'usu\xE1rio' }}</strong>. Bem-vindo ao Clin Fisio.</p>
</div>
`, styles: ["/* src/app/pages/dashboard/dashboard-home/dashboard-home.scss */\n.dashboard-home {\n  max-width: 48rem;\n}\n.page-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.page-title mat-icon {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.welcome {\n  margin: 0;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=dashboard-home.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardHomeComponent, { className: "DashboardHomeComponent", filePath: "src/app/pages/dashboard/dashboard-home/dashboard-home.ts", lineNumber: 13 });
})();
export {
  DashboardHomeComponent
};
//# sourceMappingURL=chunk-PDZYNCNS.js.map
