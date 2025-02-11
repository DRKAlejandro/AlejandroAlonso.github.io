import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"personalweb-9235b","appId":"1:967516979851:web:cac5914ca21e79b8e8ca8e","storageBucket":"personalweb-9235b.firebasestorage.app","apiKey":"AIzaSyAaRTZFmJ_XEmL4Z2tPORrERKh6ukM3oNs","authDomain":"personalweb-9235b.firebaseapp.com","messagingSenderId":"967516979851","measurementId":"G-SNZY07VS3C"})), provideAnalytics(() => getAnalytics()), ScreenTrackingService, provideFirestore(() => getFirestore())]
};
