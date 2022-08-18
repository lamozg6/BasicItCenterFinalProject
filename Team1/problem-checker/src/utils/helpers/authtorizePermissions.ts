export function authtorizePermissions(role): void {
  if (role !== 'admin') {
    throw new Error('Unauthorized to access this route');
  }
}
