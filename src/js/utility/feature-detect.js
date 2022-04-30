export function canUseCssVariables() {
  return window.CSS && CSS.supports("color", "var(--test-var)");
}
