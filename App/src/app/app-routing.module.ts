import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
	{ path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule) },
	{ path: 'action-sheet', loadChildren: () => import('./blocks/actionsheet/pages/home/action-sheet.module').then(m => m.ActionSheetPageModule) },
	{ path: 'ad-mob-free', loadChildren: () => import('./blocks/admobfree/pages/home/ad-mob-free.module').then(m => m.AdMobFreePageModule) },
	{ path: 'ad-mob-plus', loadChildren: () => import('./blocks/admobplus/pages/home/ad-mob-plus.module').then(m => m.AdMobPlusPageModule) },
	{ path: 'ad-mob-pro', loadChildren: () => import('./blocks/admobpro/pages/home/ad-mob-pro.module').then(m => m.AdMobProPageModule) },
	{ path: 'adjust', loadChildren: () => import('./blocks/adjust/pages/home/adjust.module').then(m => m.AdjustPageModule) },
	{ path: 'admob', loadChildren: () => import('./blocks/admob/pages/home/admob.module').then(m => m.AdmobPageModule) },
	{ path: 'app-launcher', loadChildren: () => import('./blocks/applauncher/pages/home/app-launcher.module').then(m => m.AppLauncherPageModule) },
	{ path: 'app-minimize', loadChildren: () => import('./blocks/appminimize/pages/home/app-minimize.module').then(m => m.AppMinimizePageModule) },
	{ path: 'app-preferences', loadChildren: () => import('./blocks/apppreferences/pages/home/app-preferences.module').then(m => m.AppPreferencesPageModule) },
	{ path: 'app-rate', loadChildren: () => import('./blocks/apprate/pages/home/app-rate.module').then(m => m.AppRatePageModule) },
	{ path: 'app-update', loadChildren: () => import('./blocks/appupdate/pages/home/app-update.module').then(m => m.AppUpdatePageModule) },
	{ path: 'app-version', loadChildren: () => import('./blocks/appversion/pages/home/app-version.module').then(m => m.AppVersionPageModule) },
	{ path: 'autostart', loadChildren: () => import('./blocks/autostart/pages/home/autostart.module').then(m => m.AutostartPageModule) },
	{ path: 'ble', loadChildren: () => import('./blocks/ble/pages/home/ble.module').then(m => m.BLEPageModule) },
	{ path: 'background-fetch', loadChildren: () => import('./blocks/backgroundfetch/pages/home/background-fetch.module').then(m => m.BackgroundFetchPageModule) },
	{ path: 'background-geolocation', loadChildren: () => import('./blocks/backgroundgeolocation/pages/home/background-geolocation.module').then(m => m.BackgroundGeolocationPageModule) },
	{ path: 'background-mode', loadChildren: () => import('./blocks/backgroundmode/pages/home/background-mode.module').then(m => m.BackgroundModePageModule) },
	{ path: 'backlight', loadChildren: () => import('./blocks/backlight/pages/home/backlight.module').then(m => m.BacklightPageModule) },
	{ path: 'badge', loadChildren: () => import('./blocks/badge/pages/home/badge.module').then(m => m.BadgePageModule) },
	{ path: 'barcode-scanner', loadChildren: () => import('./blocks/barcodescanner/pages/home/barcode-scanner.module').then(m => m.BarcodeScannerPageModule) },
	{ path: 'base64-to-gallery', loadChildren: () => import('./blocks/base64togallery/pages/home/base64-to-gallery.module').then(m => m.Base64ToGalleryPageModule) },
	{ path: 'base64', loadChildren: () => import('./blocks/base64/pages/home/base64.module').then(m => m.Base64PageModule) },
	{ path: 'battery-status', loadChildren: () => import('./blocks/batterystatus/pages/home/battery-status.module').then(m => m.BatteryStatusPageModule) },
	{ path: 'bio-catch', loadChildren: () => import('./blocks/biocatch/pages/home/bio-catch.module').then(m => m.BioCatchPageModule) },
	{ path: 'biometric-wrapper', loadChildren: () => import('./blocks/biometricwrapper/pages/home/biometric-wrapper.module').then(m => m.BiometricWrapperPageModule) },
	{ path: 'blink-id', loadChildren: () => import('./blocks/blinkid/pages/home/blink-id.module').then(m => m.BlinkIdPageModule) },
	{ path: 'blink-up', loadChildren: () => import('./blocks/blinkup/pages/home/blink-up.module').then(m => m.BlinkUpPageModule) },
	{ path: 'bluetooth-serial', loadChildren: () => import('./blocks/bluetoothserial/pages/home/bluetooth-serial.module').then(m => m.BluetoothSerialPageModule) },
	{ path: 'bluetooth-le', loadChildren: () => import('./blocks/bluetoothle/pages/home/bluetooth-le.module').then(m => m.BluetoothLEPageModule) },
	{ path: 'calendar', loadChildren: () => import('./blocks/calendar/pages/home/calendar.module').then(m => m.CalendarPageModule) },
	{ path: 'camera-preview', loadChildren: () => import('./blocks/camerapreview/pages/home/camera-preview.module').then(m => m.CameraPreviewPageModule) },
	{ path: 'camera', loadChildren: () => import('./blocks/camera/pages/home/camera.module').then(m => m.CameraPageModule) },
	{ path: 'card-io', loadChildren: () => import('./blocks/cardio/pages/home/card-io.module').then(m => m.CardIOPageModule) },
	{ path: 'chooser', loadChildren: () => import('./blocks/chooser/pages/home/chooser.module').then(m => m.ChooserPageModule) },
	{ path: 'contacts', loadChildren: () => import('./blocks/contacts/pages/home/contacts.module').then(m => m.ContactsPageModule) },
	{ path: 'couchbase-lite', loadChildren: () => import('./blocks/couchbaselite/pages/home/couchbase-lite.module').then(m => m.CouchbaseLitePageModule) },
	{ path: 'crop', loadChildren: () => import('./blocks/crop/pages/home/crop.module').then(m => m.CropPageModule) },
	{ path: 'dbmeter', loadChildren: () => import('./blocks/dbmeter/pages/home/dbmeter.module').then(m => m.DBMeterPageModule) },
	{ path: 'date-picker', loadChildren: () => import('./blocks/datepicker/pages/home/date-picker.module').then(m => m.DatePickerPageModule) },
	{ path: 'deeplinks', loadChildren: () => import('./blocks/deeplinks/pages/home/deeplinks.module').then(m => m.DeeplinksPageModule) },
	{ path: 'device-accounts', loadChildren: () => import('./blocks/deviceaccounts/pages/home/device-accounts.module').then(m => m.DeviceAccountsPageModule) },
	{ path: 'device-feedback', loadChildren: () => import('./blocks/devicefeedback/pages/home/device-feedback.module').then(m => m.DeviceFeedbackPageModule) },
	{ path: 'device-motion', loadChildren: () => import('./blocks/devicemotion/pages/home/device-motion.module').then(m => m.DeviceMotionPageModule) },
	{ path: 'device-orientation', loadChildren: () => import('./blocks/deviceorientation/pages/home/device-orientation.module').then(m => m.DeviceOrientationPageModule) },
	{ path: 'devicee-magnetometer', loadChildren: () => import('./blocks/deviceemagnetometer/pages/home/devicee-magnetometer.module').then(m => m.DeviceeMagnetometerPageModule) },
	{ path: 'device', loadChildren: () => import('./blocks/device/pages/home/device.module').then(m => m.DevicePageModule) },
	{ path: 'document-viewer', loadChildren: () => import('./blocks/documentviewer/pages/home/document-viewer.module').then(m => m.DocumentViewerPageModule) },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
