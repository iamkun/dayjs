export const pascalCase = (n: string) =>
  n.replace(/(^\w|-\w)/g, (s) => s.replace(/-/, '').toUpperCase())
