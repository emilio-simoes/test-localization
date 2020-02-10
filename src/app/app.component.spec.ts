import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { L10nConfig, L10nIntlModule, L10nLoader, L10nTranslationModule } from 'angular-l10n';
import { AppComponent } from './app.component';
import { l10nConfig } from './l1n-config';

const mockAsset = {
  en: {
    title: 'Angular localization',
    subtitle: 'It\'s a small world',
    userNotifications: '{{ user }}, you have {{ NoMessages }} new messages',
    insert: 'Insert',
    select: 'Select',
    strongTitle: '<strong>Angular localization</strong>',
    strongSubtitle: '<strong>It\'s a small world</ strong >'
  },
  it: {
    title: 'Localizzazione in Angular',
    subtitle: 'Il mondo è piccolo',
    userNotifications: '{{ user }}, tu hai {{ NoMessages }} nuovi messaggi',
    insert: 'Inserisci',
    select: 'Seleziona',
    strongTitle: '<strong>Localizzazione in Angular</strong>',
    strongSubtitle: '<strong>Il mondo è piccolo</strong>'
  }
};

const config: L10nConfig = {
  format: 'language',
  providers: [
    {
      name: 'asset',
      asset: mockAsset
    }
  ],
  keySeparator: '.',
  defaultLocale: { language: 'en' },
  schema: [
    { locale: { language: 'en' } }
  ]
};

describe('AppComponent', () => {
  let fixture;
  let app;
  let loader;

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        L10nTranslationModule.forRoot(l10nConfig),
        L10nIntlModule
      ],
      declarations: [
        AppComponent
      ]
    }).createComponent(AppComponent);
    app = fixture.componentInstance;
    loader = TestBed.inject(L10nLoader);
    await loader.init();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
