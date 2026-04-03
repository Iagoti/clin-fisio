import {
  HttpClient,
  Injectable,
  PLATFORM_ID,
  environment,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-AXTQVTRC.js";

// src/app/core/auth/auth.service.ts
var TOKEN_KEY = "auth_token";
var USER_KEY = "auth_user";
function getJwtPayload(token) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3)
      return null;
    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(atob(base64).split("").map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
    return JSON.parse(json);
  } catch {
    return null;
  }
}
function isTokenExpired(token) {
  if (!token)
    return true;
  const payload = getJwtPayload(token);
  if (!payload?.exp)
    return true;
  const nowSec = Math.floor(Date.now() / 1e3);
  return payload.exp < nowSec;
}
var TP_USUARIO_ADMIN = 1;
var AuthService = class _AuthService {
  http;
  platformId = inject(PLATFORM_ID);
  isAuthenticated = signal(false, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  constructor(http) {
    this.http = http;
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token && isTokenExpired(token)) {
        this.logout();
      } else {
        this.isAuthenticated.set(!!token);
      }
    }
  }
  get storage() {
    return isPlatformBrowser(this.platformId) ? localStorage : null;
  }
  login(payload) {
    return this.http.post(`${environment.apiUrl}/auth/login`, payload).pipe(tap((res) => {
      this.storage?.setItem(TOKEN_KEY, res.token);
      this.storage?.setItem(USER_KEY, JSON.stringify({
        tpUsuario: res.tpUsuario,
        cdUsuario: res.cdUsuario,
        nmUsuario: res.nmUsuario
      }));
      this.isAuthenticated.set(true);
    }));
  }
  logout() {
    this.storage?.removeItem(TOKEN_KEY);
    this.storage?.removeItem(USER_KEY);
    this.isAuthenticated.set(false);
  }
  getToken() {
    const token = this.storage?.getItem(TOKEN_KEY) ?? null;
    if (token && isTokenExpired(token)) {
      this.logout();
      return null;
    }
    return token;
  }
  getCurrentUser() {
    const raw = this.storage?.getItem(USER_KEY);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  isAdmin() {
    const user = this.getCurrentUser();
    return user?.tpUsuario === TP_USUARIO_ADMIN;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-I5CDD5XV.js.map
