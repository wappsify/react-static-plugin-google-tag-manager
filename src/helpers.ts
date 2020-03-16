import { CookieRestriction } from './types';

export const checkCookieRestriction = (
  restriction: CookieRestriction
): boolean => {
  if (!restriction) {
    return true;
  }

  return (
    typeof document !== 'undefined' &&
    getCookieValue(restriction.cookieName) === restriction.value
  );
};

export const getCookieValue = (cookieName: string): string | boolean => {
  const value = document.cookie.match(
    '(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)'
  );
  return value ? value.pop() : '';
};
