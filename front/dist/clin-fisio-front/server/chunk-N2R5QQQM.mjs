import './polyfills.server.mjs';
import {
  MatTooltip,
  MatTooltipModule,
  ThemeService
} from "./chunk-DSQD7FQF.mjs";
import {
  AuthService
} from "./chunk-IVNIGKHX.mjs";
import {
  DomPortalOutlet,
  OverlayConfig,
  OverlayModule,
  TemplatePortal,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-LTNDX77H.mjs";
import {
  CdkScrollableModule,
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  FocusKeyManager,
  FocusMonitor,
  LEFT_ARROW,
  MatButton,
  MatButtonModule,
  MatIconButton,
  MatRipple,
  MatRippleModule,
  RIGHT_ARROW,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  SPACE,
  ScrollDispatcher,
  UP_ARROW,
  ViewportRuler,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  _getEventTarget,
  _getShadowRoot,
  hasModifierKey,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader
} from "./chunk-662BIMSJ.mjs";
import {
  ApplicationRef,
  BidiModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directionality,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Injector,
  Input,
  MatIcon,
  MatIconModule,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  afterNextRender,
  booleanAttribute,
  computed,
  filter,
  inject,
  merge,
  of,
  setClassMetadata,
  signal,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RXIW7MXB.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-T2KOBY73.mjs";

// node_modules/@angular/material/fesm2022/menu.mjs
var _c0 = ["mat-menu-item", ""];
var _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "polygon", 3);
    \u0275\u0275elementEnd();
  }
}
var _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domListener("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closed.emit("click"));
    })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationStart($event.animationName));
    })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    });
    \u0275\u0275domElementStart(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating());
    \u0275\u0275domProperty("id", ctx_r1.panelId);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
  _elementRef = inject(ElementRef);
  _document = inject(DOCUMENT);
  _focusMonitor = inject(FocusMonitor);
  _parentMenu = inject(MAT_MENU_PANEL, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  role = "menuitem";
  disabled = false;
  disableRipple = false;
  _hovered = new Subject();
  _focused = new Subject();
  _highlighted = false;
  _triggersSubmenu = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    this._parentMenu?.addItem?.(this);
  }
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static \u0275fac = function MatMenuItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenuItem,
    selectors: [["", "mat-menu-item", ""]],
    hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
    hostVars: 8,
    hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuItem_click_HostBindingHandler($event) {
          return ctx._checkDisabled($event);
        })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
          return ctx._handleMouseEnter();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
        \u0275\u0275classProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
      }
    },
    inputs: {
      role: "role",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
    },
    exportAs: ["matMenuItem"],
    attrs: _c0,
    ngContentSelectors: _c2,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
    template: function MatMenuItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "span", 0);
        \u0275\u0275projection(2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 1);
        \u0275\u0275conditionalCreate(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._triggersSubmenu ? 4 : -1);
      }
    },
    dependencies: [MatRipple],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
  _template = inject(TemplateRef);
  _appRef = inject(ApplicationRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _document = inject(DOCUMENT);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _portal;
  _outlet;
  _attached = new Subject();
  constructor() {
  }
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  detach() {
    if (this._portal?.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    this.detach();
    this._outlet?.dispose();
  }
  static \u0275fac = function MatMenuContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuContent,
    selectors: [["ng-template", "matMenuContent", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_CONTENT,
      useExisting: _MatMenuContent
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }], () => [], null);
})();
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: () => ({
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  })
});
var ENTER_ANIMATION = "_mat-menu-enter";
var EXIT_ANIMATION = "_mat-menu-exit";
var MatMenu = class _MatMenu {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _keyManager;
  _xPosition;
  _yPosition;
  _firstItemFocusRef;
  _exitFallbackTimeout;
  _animationsDisabled = _animationsDisabled();
  _allItems;
  _directDescendantItems = new QueryList();
  _classList = {};
  _panelAnimationState = "void";
  _animationDone = new Subject();
  _isAnimating = signal(false, ...ngDevMode ? [{
    debugName: "_isAnimating"
  }] : []);
  parentMenu;
  direction;
  overlayPanelClass;
  backdropClass;
  ariaLabel;
  ariaLabelledby;
  ariaDescribedby;
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  templateRef;
  items;
  lazyContent;
  overlapTrigger = false;
  hasBackdrop;
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = __spreadValues({}, this._classList);
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
    this._classList = newClassList;
  }
  _previousPanelClass;
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  closed = new EventEmitter();
  close = this.closed;
  panelId = inject(_IdGenerator).getId("mat-menu-panel-");
  constructor() {
    const defaultOptions = inject(MAT_MENU_DEFAULT_OPTIONS);
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusRef?.destroy();
    clearTimeout(this._exitFallbackTimeout);
  }
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  addItem(_item) {
  }
  removeItem(_item) {
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
  }
  focusFirstItem(origin = "program") {
    this._firstItemFocusRef?.destroy();
    this._firstItemFocusRef = afterNextRender(() => {
      const menuPanel = this._resolvePanel();
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    }, {
      injector: this._injector
    });
  }
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  setElevation(_depth) {
  }
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = __spreadProps(__spreadValues({}, this._classList), {
      ["mat-menu-before"]: posX === "before",
      ["mat-menu-after"]: posX === "after",
      ["mat-menu-above"]: posY === "above",
      ["mat-menu-below"]: posY === "below"
    });
    this._changeDetectorRef.markForCheck();
  }
  _onAnimationDone(state) {
    const isExit = state === EXIT_ANIMATION;
    if (isExit || state === ENTER_ANIMATION) {
      if (isExit) {
        clearTimeout(this._exitFallbackTimeout);
        this._exitFallbackTimeout = void 0;
      }
      this._animationDone.next(isExit ? "void" : "enter");
      this._isAnimating.set(false);
    }
  }
  _onAnimationStart(state) {
    if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
      this._isAnimating.set(true);
    }
  }
  _setIsOpen(isOpen) {
    this._panelAnimationState = isOpen ? "enter" : "void";
    if (isOpen) {
      if (this._keyManager.activeItemIndex === 0) {
        const menuPanel = this._resolvePanel();
        if (menuPanel) {
          menuPanel.scrollTop = 0;
        }
      }
    } else if (!this._animationsDisabled) {
      this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
    }
    if (this._animationsDisabled) {
      setTimeout(() => {
        this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
      });
    }
    this._changeDetectorRef.markForCheck();
  }
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  _resolvePanel() {
    let menuPanel = null;
    if (this._directDescendantItems.length) {
      menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
    }
    return menuPanel;
  }
  static \u0275fac = function MatMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenu,
    selectors: [["mat-menu"]],
    contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_MENU_CONTENT, 5)(dirIndex, MatMenuItem, 5)(dirIndex, MatMenuItem, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lazyContent = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allItems = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
      }
    },
    viewQuery: function MatMenu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function MatMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      }
    },
    inputs: {
      backdropClass: "backdropClass",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: [2, "overlapTrigger", "overlapTrigger", booleanAttribute],
      hasBackdrop: [2, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
      panelClass: [0, "class", "panelClass"],
      classList: "classList"
    },
    outputs: {
      closed: "closed",
      close: "close"
    },
    exportAs: ["matMenu"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_PANEL,
      useExisting: _MatMenu
    }])],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
    template: function MatMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
      }
    },
    styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{border-top-color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating()"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{border-top-color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n']
    }]
  }], () => [], {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var PANELS_TO_TRIGGERS = /* @__PURE__ */ new WeakMap();
var MatMenuTriggerBase = class _MatMenuTriggerBase {
  _canHaveBackdrop;
  _element = inject(ElementRef);
  _viewContainerRef = inject(ViewContainerRef);
  _menuItemInstance = inject(MatMenuItem, {
    optional: true,
    self: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _focusMonitor = inject(FocusMonitor);
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _scrollStrategy = inject(MAT_MENU_SCROLL_STRATEGY);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationsDisabled = _animationsDisabled();
  _portal;
  _overlayRef = null;
  _menuOpen = false;
  _closingActionsSubscription = Subscription.EMPTY;
  _menuCloseSubscription = Subscription.EMPTY;
  _pendingRemoval;
  _parentMaterialMenu;
  _parentInnerPadding;
  _openedBy = void 0;
  get _menu() {
    return this._menuInternal;
  }
  set _menu(menu) {
    if (menu === this._menuInternal) {
      return;
    }
    this._menuInternal = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
    this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu());
  }
  _menuInternal = null;
  constructor(_canHaveBackdrop) {
    this._canHaveBackdrop = _canHaveBackdrop;
    const parentMenu = inject(MAT_MENU_PANEL, {
      optional: true
    });
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
  }
  ngOnDestroy() {
    if (this._menu && this._ownsMenu(this._menu)) {
      PANELS_TO_TRIGGERS.delete(this._menu);
    }
    this._pendingRemoval?.unsubscribe();
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  get menuOpen() {
    return this._menuOpen;
  }
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  _triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this._menu);
  }
  _closeMenu() {
    this._menu?.close.emit();
  }
  _openMenu(autoFocus) {
    if (this._triggerIsAriaDisabled()) {
      return;
    }
    const menu = this._menu;
    if (this._menuOpen || !menu) {
      return;
    }
    this._pendingRemoval?.unsubscribe();
    const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
    PANELS_TO_TRIGGERS.set(menu, this);
    if (previousTrigger && previousTrigger !== this) {
      previousTrigger._closeMenu();
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    if (this._canHaveBackdrop) {
      overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this._triggersSubmenu() : menu.hasBackdrop;
    } else {
      overlayConfig.hasBackdrop = false;
    }
    if (!overlayRef.hasAttached()) {
      overlayRef.attach(this._getPortal(menu));
      menu.lazyContent?.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this._closeMenu());
    menu.parentMenu = this._triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    if (autoFocus) {
      menu.focusFirstItem(this._openedBy || "program");
    }
    this._setIsMenuOpen(true);
    if (menu instanceof MatMenu) {
      menu._setIsOpen(true);
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  _destroyMenu(reason) {
    const overlayRef = this._overlayRef;
    const menu = this._menu;
    if (!overlayRef || !this.menuOpen) {
      return;
    }
    this._closingActionsSubscription.unsubscribe();
    this._pendingRemoval?.unsubscribe();
    if (menu instanceof MatMenu && this._ownsMenu(menu)) {
      this._pendingRemoval = menu._animationDone.pipe(take(1)).subscribe(() => {
        overlayRef.detach();
        if (!PANELS_TO_TRIGGERS.has(menu)) {
          menu.lazyContent?.detach();
        }
      });
      menu._setIsOpen(false);
    } else {
      overlayRef.detach();
      menu?.lazyContent?.detach();
    }
    if (menu && this._ownsMenu(menu)) {
      PANELS_TO_TRIGGERS.delete(menu);
    }
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this._triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    this._setIsMenuOpen(false);
  }
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this._triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = createOverlayRef(this._injector, config);
      this._overlayRef.keydownEvents().subscribe((event) => {
        if (this._menu instanceof MatMenu) {
          this._menu._handleKeydown(event);
        }
      });
    }
    return this._overlayRef;
  }
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: createFlexibleConnectedPositionStrategy(this._injector, this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir || "ltr",
      disableAnimations: this._animationsDisabled
    });
  }
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        this._ngZone.run(() => {
          const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
          const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
          menu.setPositionClasses(posX, posY);
        });
      });
    }
  }
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this._triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  _menuClosingActions() {
    const outsideClicks = this._getOutsideClickStream(this._overlayRef);
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => this._menuOpen && active !== this._menuItemInstance)) : of();
    return merge(outsideClicks, parentClose, hover, detachments);
  }
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  _ownsMenu(menu) {
    return PANELS_TO_TRIGGERS.get(menu) === this;
  }
  _triggerIsAriaDisabled() {
    return booleanAttribute(this._element.nativeElement.getAttribute("aria-disabled"));
  }
  static \u0275fac = function MatMenuTriggerBase_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTriggerBase
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTriggerBase, [{
    type: Directive
  }], () => [{
    type: void 0
  }], null);
})();
var MatMenuTrigger = class _MatMenuTrigger extends MatMenuTriggerBase {
  _cleanupTouchstart;
  _hoverSubscription = Subscription.EMPTY;
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  menuData;
  restoreFocus = true;
  menuOpened = new EventEmitter();
  onMenuOpen = this.menuOpened;
  menuClosed = new EventEmitter();
  onMenuClose = this.menuClosed;
  constructor() {
    super(true);
    const renderer = inject(Renderer2);
    this._cleanupTouchstart = renderer.listen(this._element.nativeElement, "touchstart", (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    }, {
      passive: true
    });
  }
  triggersSubmenu() {
    return super._triggersSubmenu();
  }
  toggleMenu() {
    return this.menuOpen ? this.closeMenu() : this.openMenu();
  }
  openMenu() {
    this._openMenu(true);
  }
  closeMenu() {
    this._closeMenu();
  }
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTouchstart();
    this._hoverSubscription.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._element;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.backdropClick();
  }
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  _handleHover() {
    if (this.triggersSubmenu() && this._parentMaterialMenu) {
      this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe((active) => {
        if (active === this._menuItemInstance && !active.disabled && this._parentMaterialMenu?._panelAnimationState !== "void") {
          this._openedBy = "mouse";
          this._openMenu(false);
        }
      });
    }
  }
  static \u0275fac = function MatMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTrigger,
    selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-mdc-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
          return ctx._handleMousedown($event);
        })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
      }
    },
    inputs: {
      _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
      menu: [0, "matMenuTriggerFor", "menu"],
      menuData: [0, "matMenuTriggerData", "menuData"],
      restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
    },
    outputs: {
      menuOpened: "menuOpened",
      onMenuOpen: "onMenuOpen",
      menuClosed: "menuClosed",
      onMenuClose: "onMenuClose"
    },
    exportAs: ["matMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger"
    }]
  }], () => [], {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var MatContextMenuTrigger = class _MatContextMenuTrigger extends MatMenuTriggerBase {
  _point = {
    x: 0,
    y: 0,
    initialX: 0,
    initialY: 0,
    initialScrollX: 0,
    initialScrollY: 0
  };
  _triggerPressedControl = false;
  _rootNode;
  _document = inject(DOCUMENT);
  _viewportRuler = inject(ViewportRuler);
  _scrollDispatcher = inject(ScrollDispatcher);
  _scrollSubscription;
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  menuData;
  restoreFocus = true;
  disabled = false;
  menuOpened = new EventEmitter();
  menuClosed = new EventEmitter();
  constructor() {
    super(false);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._scrollSubscription?.unsubscribe();
  }
  _handleContextMenuEvent(event) {
    if (!this.disabled) {
      event.preventDefault();
      if (this.menuOpen) {
        this._initializePoint(event.clientX, event.clientY);
        this._updatePosition();
      } else {
        this._openContextMenu(event);
      }
    }
  }
  _destroyMenu(reason) {
    super._destroyMenu(reason);
    this._scrollSubscription?.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._point;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.outsidePointerEvents().pipe(skipWhile((event, index) => {
      if (event.type === "contextmenu") {
        return this._isWithinMenuOrTrigger(_getEventTarget(event));
      } else if (event.type === "auxclick") {
        if (index === 0) {
          return true;
        }
        this._rootNode ??= _getShadowRoot(this._element.nativeElement) || this._document;
        return this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(event.clientX, event.clientY));
      }
      return this._triggerPressedControl && index === 0 && event.ctrlKey;
    }));
  }
  _isWithinMenuOrTrigger(target) {
    if (!target) {
      return false;
    }
    const element = this._element.nativeElement;
    if (target === element || element.contains(target)) {
      return true;
    }
    const overlay = this._overlayRef?.hostElement;
    return overlay === target || !!overlay?.contains(target);
  }
  _openContextMenu(event) {
    if (event.button === 2) {
      this._openedBy = "mouse";
    } else {
      this._openedBy = event.button === 0 ? "keyboard" : void 0;
    }
    this._initializePoint(event.clientX, event.clientY);
    this._triggerPressedControl = event.ctrlKey;
    super._openMenu(true);
    this._scrollSubscription?.unsubscribe();
    this._scrollSubscription = this._scrollDispatcher.scrolled(0).subscribe(() => {
      const position = this._viewportRuler.getViewportScrollPosition();
      const point = this._point;
      point.y = point.initialY + (point.initialScrollY - position.top);
      point.x = point.initialX + (point.initialScrollX - position.left);
      this._updatePosition();
    });
  }
  _initializePoint(x, y) {
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    const point = this._point;
    point.x = point.initialX = x;
    point.y = point.initialY = y;
    point.initialScrollX = scrollPosition.left;
    point.initialScrollY = scrollPosition.top;
  }
  _updatePosition() {
    const overlayRef = this._overlayRef;
    if (overlayRef) {
      const positionStrategy = overlayRef.getConfig().positionStrategy;
      positionStrategy.setOrigin(this._point);
      overlayRef.updatePosition();
    }
  }
  static \u0275fac = function MatContextMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatContextMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatContextMenuTrigger,
    selectors: [["", "matContextMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-context-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatContextMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function MatContextMenuTrigger_contextmenu_HostBindingHandler($event) {
          return ctx._handleContextMenuEvent($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
        \u0275\u0275classProp("mat-context-menu-trigger-disabled", ctx.disabled);
      }
    },
    inputs: {
      menu: [0, "matContextMenuTriggerFor", "menu"],
      menuData: [0, "matContextMenuTriggerData", "menuData"],
      restoreFocus: [0, "matContextMenuTriggerRestoreFocus", "restoreFocus"],
      disabled: [2, "matContextMenuTriggerDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      menuOpened: "menuOpened",
      menuClosed: "menuClosed"
    },
    exportAs: ["matContextMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatContextMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[matContextMenuTriggerFor]",
      host: {
        "class": "mat-context-menu-trigger",
        "[class.mat-context-menu-trigger-disabled]": "disabled",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(contextmenu)": "_handleContextMenuEvent($event)"
      },
      exportAs: "matContextMenuTrigger"
    }]
  }], () => [], {
    menu: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerFor",
        required: true
      }]
    }],
    menuData: [{
      type: Input,
      args: ["matContextMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matContextMenuTriggerRestoreFocus"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerDisabled",
        transform: booleanAttribute
      }]
    }],
    menuOpened: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }]
  });
})();
var MatMenuModule = class _MatMenuModule {
  static \u0275fac = function MatMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatMenuModule,
    imports: [MatRippleModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
    exports: [BidiModule, CdkScrollableModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, OverlayModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
      exports: [BidiModule, CdkScrollableModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
    }]
  }], null, null);
})();

// src/app/pages/dashboard/dashboard.ts
var _c02 = () => ({ exact: true });
function DashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "mat-icon");
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Usu\xE1rios");
    \u0275\u0275elementEnd()();
  }
}
var DashboardComponent = class _DashboardComponent {
  auth = inject(AuthService);
  theme = inject(ThemeService);
  user = computed(() => this.auth.getCurrentUser(), ...ngDevMode ? [{ debugName: "user" }] : []);
  isAdmin = computed(() => this.auth.isAdmin(), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  toggleTheme() {
    this.theme.toggle();
  }
  logout() {
    this.auth.logout();
    window.location.href = "/login";
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 47, vars: 8, consts: [["userMenu", "matMenu"], [1, "dashboard-layout", "min-h-screen", "bg-slate-50", "dark:bg-slate-950"], [1, "sidebar", "bg-white", "dark:bg-slate-900", "border-r", "border-slate-200", "dark:border-slate-700"], [1, "sidebar-header", "border-b", "border-slate-200", "dark:border-slate-700"], [1, "logo", "text-slate-800", "dark:text-slate-100"], [1, "!text-emerald-600", "dark:!text-emerald-400"], [1, "sidebar-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item", "text-slate-600", "dark:text-slate-300", "hover:bg-slate-100", "dark:hover:bg-slate-800", 3, "routerLinkActiveOptions"], ["routerLink", "/dashboard/usuarios", "routerLinkActive", "active", 1, "nav-item", "text-slate-600", "dark:text-slate-300", "hover:bg-slate-100", "dark:hover:bg-slate-800"], [1, "sidebar-footer", "border-t", "border-slate-200", "dark:border-slate-700"], [1, "user-info"], [1, "user-name", "text-slate-800", "dark:text-slate-100"], ["mat-icon-button", "", "type", "button", "matTooltip", "Sair", 3, "click"], [1, "main-content"], [1, "top-bar", "bg-white", "dark:bg-slate-900", "border-b", "border-slate-200", "dark:border-slate-700"], [1, "top-bar-actions"], ["mat-icon-button", "", "type", "button", 1, "text-slate-600", "dark:text-slate-300", 3, "click", "matTooltip"], ["mat-button", "", "matTooltip", "Menu do usu\xE1rio", 1, "user-menu-trigger", "text-slate-700", "dark:text-slate-200", 3, "matMenuTriggerFor"], [1, "dropdown-icon"], ["xPosition", "before", "yPosition", "below", 1, "user-menu"], ["mat-menu-item", "", "routerLink", "/dashboard/perfil"], ["mat-menu-item", "", 3, "click"], [1, "main-body"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "aside", 2)(2, "div", 3)(3, "div", 4)(4, "mat-icon", 5);
      \u0275\u0275text(5, "spa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "Clin Fisio");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "nav", 6)(9, "a", 7)(10, "mat-icon");
      \u0275\u0275text(11, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "In\xEDcio");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, DashboardComponent_Conditional_14_Template, 5, 0, "a", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "span", 11);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275elementStart(20, "mat-icon");
      \u0275\u0275text(21, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "main", 13)(23, "header", 14)(24, "div", 15)(25, "button", 16);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_25_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleTheme());
      });
      \u0275\u0275elementStart(26, "mat-icon");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 17)(29, "span");
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-icon", 18);
      \u0275\u0275text(32, "expand_more");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "mat-menu", 19, 0)(35, "button", 20)(36, "mat-icon");
      \u0275\u0275text(37, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "Editar perfil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "button", 21);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_40_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275elementStart(41, "mat-icon");
      \u0275\u0275text(42, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Sair do sistema");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 22);
      \u0275\u0275element(46, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_7_0;
      const userMenu_r2 = \u0275\u0275reference(34);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c02));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isAdmin() ? 14 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(((tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.nmUsuario) ?? "Usu\xE1rio");
      \u0275\u0275advance(7);
      \u0275\u0275property("matTooltip", ctx.theme.theme() === "dark" ? "Tema claro" : "Tema escuro");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.theme.theme() === "dark" ? "light_mode" : "dark_mode");
      \u0275\u0275advance();
      \u0275\u0275property("matMenuTriggerFor", userMenu_r2);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Bem-vindo, ", ((tmp_7_0 = ctx.user()) == null ? null : tmp_7_0.nmUsuario) ?? "Usu\xE1rio");
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatIcon,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatTooltipModule,
    MatTooltip
  ], styles: ["\n\n.dashboard-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 16rem;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 1.25rem 1rem;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  font-size: 1.125rem;\n}\n.logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  margin: 0 0.5rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgb(236, 253, 245);\n  color: rgb(4, 120, 87);\n}\n.dark[_nghost-%COMP%]   .nav-item.active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: rgb(52, 211, 153);\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.top-bar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  min-height: 4.3rem;\n  padding: 0 1.5rem;\n}\n.top-bar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.top-bar-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(4, 120, 87);\n}\n.user-menu-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 500;\n}\n.user-menu-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:first-child {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.user-menu-trigger[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-left: 0.25rem;\n}\n.user-welcome[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 500;\n}\n.user-welcome[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.main-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=dashboard.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      CommonModule,
      RouterModule,
      RouterOutlet,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatTooltipModule
    ], template: `<div class="dashboard-layout min-h-screen bg-slate-50 dark:bg-slate-950">
  <aside class="sidebar bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700">
    <div class="sidebar-header border-b border-slate-200 dark:border-slate-700">
      <div class="logo text-slate-800 dark:text-slate-100">
        <mat-icon class="!text-emerald-600 dark:!text-emerald-400">spa</mat-icon>
        <span>Clin Fisio</span>
      </div>
    </div>

    <nav class="sidebar-nav">
      <a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-item text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
        <mat-icon>dashboard</mat-icon>
        <span>In\xEDcio</span>
      </a>
      @if (isAdmin()) {
        <a routerLink="/dashboard/usuarios" routerLinkActive="active" class="nav-item text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
          <mat-icon>people</mat-icon>
          <span>Usu\xE1rios</span>
        </a>
      }
    </nav>

    <div class="sidebar-footer border-t border-slate-200 dark:border-slate-700">
      <div class="user-info">
        <span class="user-name text-slate-800 dark:text-slate-100">{{ user()?.nmUsuario ?? 'Usu\xE1rio' }}</span>
      </div>
      <button mat-icon-button type="button" (click)="logout()" matTooltip="Sair">
        <mat-icon>logout</mat-icon>
      </button>
    </div>
  </aside>

  <main class="main-content">
    <header class="top-bar bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <div class="top-bar-actions">
        <button
          mat-icon-button
          type="button"
          (click)="toggleTheme()"
          [matTooltip]="theme.theme() === 'dark' ? 'Tema claro' : 'Tema escuro'"
          class="text-slate-600 dark:text-slate-300"
        >
          <mat-icon>{{ theme.theme() === 'dark' ? 'light_mode' : 'dark_mode' }}</mat-icon>
        </button>
        <button
          mat-button
          [matMenuTriggerFor]="userMenu"
          class="user-menu-trigger text-slate-700 dark:text-slate-200"
          matTooltip="Menu do usu\xE1rio"
        >
        <span>Bem-vindo, {{ user()?.nmUsuario ?? 'Usu\xE1rio' }}</span>
        <mat-icon class="dropdown-icon">expand_more</mat-icon>
        </button>
      </div>
      <mat-menu #userMenu="matMenu" class="user-menu" xPosition="before" yPosition="below">
        <button mat-menu-item routerLink="/dashboard/perfil">
          <mat-icon>edit</mat-icon>
          <span>Editar perfil</span>
        </button>
        <button mat-menu-item (click)="logout()">
          <mat-icon>logout</mat-icon>
          <span>Sair do sistema</span>
        </button>
      </mat-menu>
    </header>
    <div class="main-body">
      <router-outlet />
    </div>
  </main>
</div>
`, styles: ["/* src/app/pages/dashboard/dashboard.scss */\n.dashboard-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar {\n  width: 16rem;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-header {\n  padding: 1.25rem 1rem;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  font-size: 1.125rem;\n}\n.logo mat-icon {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.sidebar-nav {\n  flex: 1;\n  padding: 0.75rem 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  margin: 0 0.5rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item mat-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.nav-item.active {\n  background: rgb(236, 253, 245);\n  color: rgb(4, 120, 87);\n}\n:host-context(.dark) .nav-item.active {\n  background: rgba(16, 185, 129, 0.1);\n  color: rgb(52, 211, 153);\n}\n.sidebar-footer {\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.user-info {\n  min-width: 0;\n}\n.user-name {\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.main-content {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.top-bar {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  min-height: 4.3rem;\n  padding: 0 1.5rem;\n}\n.top-bar-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.top-bar-actions span {\n  color: rgb(4, 120, 87);\n}\n.user-menu-trigger {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 500;\n}\n.user-menu-trigger mat-icon:first-child {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.user-menu-trigger .dropdown-icon {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-left: 0.25rem;\n}\n.user-welcome {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 500;\n}\n.user-welcome mat-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.main-body {\n  flex: 1;\n  min-width: 0;\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 26 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-N2R5QQQM.mjs.map
