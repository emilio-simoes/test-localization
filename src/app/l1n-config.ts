import { L10nConfig, L10nLoader } from 'angular-l10n';

const i18nAsset = {
  'en-US': {
    greeting: 'Hello world!',
    whoIAm: 'I am {{name}}'
  },
  'it-IT': {
    greeting: 'Ciao mondo!',
    whoIAm: 'Sono {{name}}'
  }
};

export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [
    {
      name: 'app',
      asset: i18nAsset
    }
  ],
  cache: true,
  keySeparator: '.',
  defaultLocale: {
    language: 'en-US',
    currency: 'USD'
  },
  schema: [
    {
      locale: {
        language: 'en-US',
        currency: 'USD'
      },
      dir: 'ltr',
      text: 'United States'
    },
    {
      locale: {
        language: 'it-IT',
        currency: 'EUR'
      },
      dir: 'ltr',
      text: 'Italia'
    }
  ]
};

export function initL10n(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}
