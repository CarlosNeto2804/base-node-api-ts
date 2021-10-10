export function isRequired() {
  return process.env.NODE_ENV !== 'test';
}
