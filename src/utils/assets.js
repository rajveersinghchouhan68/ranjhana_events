export function assetUrl(path) {
  const clean = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}
