'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent } from 'react';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import frLocale from 'i18n-iso-countries/langs/fr.json';
import deLocale from 'i18n-iso-countries/langs/de.json';
import esLocale from 'i18n-iso-countries/langs/es.json';
import zhLocale from 'i18n-iso-countries/langs/zh.json';

countries.registerLocale(enLocale);
countries.registerLocale(frLocale);
countries.registerLocale(deLocale);
countries.registerLocale(esLocale);
countries.registerLocale(zhLocale);

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    // Replace the locale part of the path
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const locales = [
    { code: 'en', name: countries.getName('US', 'en') || 'English' },
    { code: 'fr', name: countries.getName('FR', 'fr') || 'Français' },
    { code: 'de', name: countries.getName('DE', 'de') || 'Deutsch' },
    { code: 'es', name: countries.getName('ES', 'es') || 'Español' },
    { code: 'zh', name: countries.getName('CN', 'zh') || '中文' },
  ];

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="bg-transparent text-gray-700 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    >
      {locales.map((loc) => (
        <option key={loc.code} value={loc.code}>
          {loc.name}
        </option>
      ))}
    </select>
  );
}
