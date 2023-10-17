export const ACCES_VERIFIED = 'ACCESS_VERIFIED';

export function userAccess(texto: string) {
  return {
    type: ACCES_VERIFIED,
    payload: texto,
  };
}
