import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !['en', 'fr', 'de', 'es', 'zh'].includes(locale)) {
    // Only warn once for undefined locales, this is expected during hydration
    if (locale !== undefined) {
      console.warn(`Invalid locale: ${locale}, falling back to 'en'`);
    }
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
