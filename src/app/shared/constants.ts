export enum ShowcaseComponents {
    AUTOCOMPLETE = "autocomplete",
    BADGE = "badge",
    BOTTOM_SHEET = "bottom-sheet",
    BUTTON = "button",
    BUTTON_TOGGLE = "button-toggle",
    CARD = "card",
    CHECKBOX = "checkbox",
    CHIPS = "chips",
    EXPANSION_PANEL = "expansion-panel",
    GRID_LIST = "grid-list",
    ICON = "icon",
    INPUT = "input",
    LIST = "list",
    MENU = "menu",
    PAGINATOR = "paginator",
    PROGRESS_BAR = "progress-bar",
    PROGRESS_SPINNER = "progress-spinner",
    RADIO_BUTTON = "radio-button",
    RIPPLES = "ripples",
    SELECT = "select",
    SIDENAV = "sidenav",
    SLIDE_TOGGLE = "slide-toggle",
    SLIDER = "slider",
    SNACKBAR = "snackbar",
    SORT_HEADER = "sort-header",
    STEPPER = "stepper",
    TABLE = "table",
    TABS = "tabs",
    TOOLBAR = "toolbar",
    TOOLTIP = "tooltip",
    TREE = "tree",
};

export interface ShowcaseComponentStatus {
    id: ShowcaseComponents,
    available: boolean,
};

export const SHOWCASE_COMPONENTS_STATUS: ShowcaseComponentStatus[] = [
    { id: ShowcaseComponents.AUTOCOMPLETE, available: true },
    { id: ShowcaseComponents.BADGE, available: true },
    { id: ShowcaseComponents.BOTTOM_SHEET, available: true },
    { id: ShowcaseComponents.BUTTON_TOGGLE, available: true },
    { id: ShowcaseComponents.BUTTON, available: true },
    { id: ShowcaseComponents.CARD, available: true },
    { id: ShowcaseComponents.CHECKBOX, available: true },
    { id: ShowcaseComponents.CHIPS, available: true },
    { id: ShowcaseComponents.EXPANSION_PANEL, available: true },
    { id: ShowcaseComponents.GRID_LIST, available: true },
    { id: ShowcaseComponents.ICON, available: false },
    { id: ShowcaseComponents.INPUT, available: false },
    { id: ShowcaseComponents.LIST, available: false },
    { id: ShowcaseComponents.MENU, available: false },
    { id: ShowcaseComponents.PAGINATOR, available: false },
    { id: ShowcaseComponents.PROGRESS_BAR, available: false },
    { id: ShowcaseComponents.PROGRESS_SPINNER, available: false },
    { id: ShowcaseComponents.RADIO_BUTTON, available: false },
    { id: ShowcaseComponents.RIPPLES, available: false },
    { id: ShowcaseComponents.SELECT, available: false },
    { id: ShowcaseComponents.SIDENAV, available: false },
    { id: ShowcaseComponents.SLIDE_TOGGLE, available: false },
    { id: ShowcaseComponents.SLIDER, available: true },
    { id: ShowcaseComponents.SNACKBAR, available: false },
    { id: ShowcaseComponents.SORT_HEADER, available: false },
    { id: ShowcaseComponents.STEPPER, available: true },
    { id: ShowcaseComponents.TABLE, available: false },
    { id: ShowcaseComponents.TABS, available: true },
    { id: ShowcaseComponents.TOOLBAR, available: true },
    { id: ShowcaseComponents.TOOLTIP, available: false },
    { id: ShowcaseComponents.TREE, available: false },
]