export function capitalize(string) {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function withoutPX(bias) {
  return bias ? +bias.replace('px', '') : 0;
}
