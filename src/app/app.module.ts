import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { SettingPage } from '../pages/setting/setting';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { DqData } from '../providers/dq-data';
import { AuthInterceptor } from '../interceptor/auth-interceptor';
import { AuthService } from '../interceptor/auth-service';
import { Toast} from '../utils/toast';
import { PasswordPage } from '../pages/setting/password/password';
import { HomePage } from '../pages/home/home';
import { ArticlesDetailPage } from '../pages/articles-detail/articles-detail';
import { SafeHtmlPipe } from '../pipe/SafeHtmlPipe';
import { PostListPage } from '../pages/post-list/post-list';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { ElasticDirective } from '../directives/elastic/elastic';

import { FileTransfer } from '@ionic-native/file-transfer';




import { Camera } from '@ionic-native/camera';
import { MatchPage } from '../pages/match/match';

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SettingPage,
    SupportPage,
    PasswordPage,
    HomePage,
    ArticlesDetailPage,
    SafeHtmlPipe,
    PostListPage,
    PostDetailPage,
    ElasticDirective,
    MatchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    SettingPage,
    TutorialPage,
    SupportPage,
    PasswordPage,
    HomePage,
    ArticlesDetailPage,
    PostListPage,
    PostDetailPage,
    MatchPage
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    DqData,
    InAppBrowser,
    AuthService,
    Toast,
    SplashScreen,
    Camera,
    FileTransfer
  ],
  exports: [
    ElasticDirective
  ]
})
export class AppModule { }
