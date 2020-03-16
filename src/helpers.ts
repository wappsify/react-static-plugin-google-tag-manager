import { CookieRestriction } from './types';

export const checkCookieRestriction = (
  restriction: CookieRestriction
): boolean => {
  if (!restriction) {
    return true;
  }

  return (
    typeof document !== 'undefined' &&
    getCookie(restriction.cookieName) === restriction.value
  );
};

export const getCookie = (cookieName: string): string => {
  if (typeof 'document' === 'undefined') {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + cookieName + '=');
    if (parts.length == 2)
      return parts
        .pop()
        .split(';')
        .shift();
  }
};
