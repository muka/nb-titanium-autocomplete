/**
* @extends Titanium.Module
* @since 0.1
*/
Titanium.API = {
};

/**
* Logs messages with a `debug` severity-level.
* @param {Array<String>|String} message Message to log. Accepts an array on iOS only.
*/
Titanium.API.debug = function(message) {};

/**
* Logs messages with an `error` severity-level.
* @param {Array<String>|String} message Message to log. Accepts an array on iOS only.
*/
Titanium.API.error = function(message) {};

/**
* Logs messages with an `info` severity-level.
* @param {Array<String>|String} message Message to log. Accepts an array on iOS only.
*/
Titanium.API.info = function(message) {};

/**
* Logs messages with the specified severity-level.
* @param {String} level Log level. One of `info`, `warn`, `error`, `debug` and `trace`. If the value is not recognized, an info-level message prefixed with the value is logged.
* @param {Array<String>|String} message Message to log. Accepts an array on iOS only.
*/
Titanium.API.log = function(level, message) {};

/**
* Logs messages with a `timestamp` severity-level, prefixed with a timestamp float number representing the number of seconds since January 1st, 2001.
* @param {Array<String>|String} message Message to log. Accepts an array on iOS only.
*/
Titanium.API.timestamp = function(message) {};

/**
* Logs messages with a `trace` severity-level.
* @param {Array<String>|String} message Message to log. Accepts an array on iOS only.
*/
Titanium.API.trace = function(message) {};

/**
* Logs messages with a `warn` severity-level.
* @param {Array<String>|String} message Message to log. Accepts an array on iOS only.
*/
Titanium.API.warn = function(message) {};

/**
* @extends Titanium.Module
* @since 0.1
* @fires Titanium.Accelerometer#update
*/
Titanium.Accelerometer = {
};

/**
* Fired when the accelerometer changes.
* @event Titanium.Accelerometer#update
* @type {Object}
* @type undefined timestamp Reference timestamp since the previous change. This is not a valid timestamp and should simply be used to determine the number of milliseconds between events.
* @type undefined y Current `y` axis of the device.
* @type undefined x Current `x` axis of the device.
* @type undefined z Current `z` axis of the device.
*/
/**
* @extends Titanium.Module
* @since 0.1
*/
Titanium.Analytics = {
  /**
  * JSON representation of the last analytics event generated.
  * @type String
  * @requires android, iphone, ipad
  */
  lastEvent: null,
};

/**
* Sends a generic event for this application session.**Not displayed in Analytics UI**.
* @deprecated since 2.0.0 removed 3.3.0
* @param {String} type Event type.
* @param {String} name Event name.
* @param {Object} data Extra data related to the event. Must be serializable as JSON.
*/
Titanium.Analytics.addEvent = function(type, name, data) {};

/**
* Sends a feature event for this application session.
* @param {String} name Event name, displayed in Analytics UI.
* @param {Object} data Extra data related to the event, **not displayed in Analytics UI**. The object must be serializable as JSON.
*/
Titanium.Analytics.featureEvent = function(name, data) {};

/**
* Sets a list of events that will not be sent to the analytics server.
* @since 4.1.0
* @param {Array<String>} events List of events to be filtered.
*/
Titanium.Analytics.filterEvents = function(events) {};

/**
* Sends a navigation event for this application session. **Not displayed in Analytics UI**.
* @param {String} from String describing the location the user navigated from.
* @param {String} to String describing the location the user navigated to.
* @param {String} name Event name.
* @param {Object} data Extra data related to the event. The object must be serializable as JSON.
*/
Titanium.Analytics.navEvent = function(from, to, name, data) {};

/**
* Sends a settings event for this application session.**Not displayed in Analytics UI**.
* @deprecated since 2.0.0 removed 3.3.0
* @param {String} name Event name.
* @param {Object} data Extra data related to the event. Must be serializable as JSON.
*/
Titanium.Analytics.settingsEvent = function(name, data) {};

/**
* Send a timed event for this application session.**Not displayed in Analytics UI**.
* @deprecated since 2.0.0 removed 3.3.0
* @param {String} name Event name.
* @param {Date} start Event start as a Date object.
* @param {Date} stop Event end as a Date object.
* @param {Number} duration Event duration.
* @param {Object} data Extra data related to the event. Must be serializable as JSON.
*/
Titanium.Analytics.timedEvent = function(name, start, stop, duration, data) {};

/**
* Sends a user event for this application session. **Not displayed in Analytics UI**.
* @deprecated since 2.0.0 removed 3.3.0
* @param {String} name Event name.
* @param {Object} data Extra data related to the event. Must be serializable as JSON.
*/
Titanium.Analytics.userEvent = function(name, data) {};

/**
* @extends Titanium.Proxy
* @since 3.0
* @requires android
*/
Titanium.Android.ActionBar = {
  /**
  * The background image for the action bar, specified as a local file path or URL.
  * @type String
  */
  backgroundImage: null,
  /**
  * Displays an "up" affordance on the "home" area of the action bar.
  * @type Boolean
  */
  displayHomeAsUp: null,
  /**
  * Enable or disable the "home" button in the corner of the action bar.
  * @type Boolean
  */
  homeButtonEnabled: null,
  /**
  * Sets the application icon displayed in the "home" area of the action bar, specified as a local file path or URL.
  * @type String
  */
  icon: null,
  /**
  * Sets the application logo displayed in the "home" area of the action bar, specified as a local file path or URL.
  * @type String
  */
  logo: null,
  /**
  * Controls the navigation mode.
  * @type Number
  */
  navigationMode: null,
  /**
  * Callback function called when the home icon is clicked.
  * @type Callback
  */
  onHomeIconItemSelected: null,
  /**
  * Sets the subtitle of the action bar.
  * @type String
  */
  subtitle: null,
  /**
  * Sets the title of the action bar.
  * @type String
  */
  title: null,
};

/**
* Hides the action bar if it is currently showing.
*/
Titanium.Android.ActionBar.hide = function() {};

/**
* Shows or hides the action bar home icon
* @since 3.3.0
* @param {Boolean} show Boolean to show or hide action bar home icon
*/
Titanium.Android.ActionBar.setDisplayShowHomeEnabled = function(show) {};

/**
* Shows or hides the action bar title/subtitle
* @since 3.3.0
* @param {Boolean} show Boolean to show or hide action bar title/subtitle
*/
Titanium.Android.ActionBar.setDisplayShowTitleEnabled = function(show) {};

/**
* Shows the action bar if it is currently hidden.
*/
Titanium.Android.ActionBar.show = function() {};

/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
* @fires Titanium.Android.Activity#create
* @fires Titanium.Android.Activity#destroy
* @fires Titanium.Android.Activity#newIntent
* @fires Titanium.Android.Activity#newintent
* @fires Titanium.Android.Activity#pause
* @fires Titanium.Android.Activity#resume
* @fires Titanium.Android.Activity#start
* @fires Titanium.Android.Activity#stop
* @fires Titanium.Android.Activity#userleavehint
*/
Titanium.Android.Activity = {
  /**
  * The action bar for this activity.
  * @type Titanium.Android.ActionBar
  */
  actionBar: null,
  /**
  * The `Intent` that was used to start this Activity.
  * @type Titanium.Android.Intent
  */
  intent: null,
  /**
  * Callback function called when the Android activity is created.
  * @type Callback<Object>
  */
  onCreate: null,
  /**
  * Callback function called to initially create an Android options menufor this Activity when the user presses the **Menu** button.
  * @type Callback<Object>
  */
  onCreateOptionsMenu: null,
  /**
  * Callback function called when the Android activity is destroyed.
  * @type Callback<Object>
  */
  onDestroy: null,
  /**
  * Callback function called when the Android activity is paused.
  * @type Callback<Object>
  */
  onPause: null,
  /**
  * Callback function called to prepare an options menu for display when the user pressesthe **Menu** button. 
  * @type Callback<Object>
  */
  onPrepareOptionsMenu: null,
  /**
  * Callback function called when the Android activity is restarted.
  * @type Callback<Object>
  */
  onRestart: null,
  /**
  * Callback function called when the Android activity is resumed.
  * @type Callback<Object>
  */
  onResume: null,
  /**
  * Callback function called when the Android activity is started.
  * @type Callback<Object>
  */
  onStart: null,
  /**
  * Callback function called when the Android activity is stopped.
  * @type Callback<Object>
  */
  onStop: null,
  /**
  * Specifies a specific orientation for this activity.
  * @type Number
  */
  requestedOrientation: null,
};

/**
* Closes this activity.
*/
Titanium.Android.Activity.finish = function() {};

/**
* Gets an Android or Application string using the specified Resource ID and optional format arguments.
* @param {Number} resourceId Resource ID from the Application or Android.
* @param {Object} format Optional format arguments for the String resource. May be repeated.
*/
Titanium.Android.Activity.getString = function(resourceId, format) {};

/**
* Declares that the option menu has changed and should be recreated.
* @since 3.0.0
*/
Titanium.Android.Activity.invalidateOptionsMenu = function() {};

/**
* Sets the requested Activity orientation.
* @param {Number} orientation Orientation mode for the activity.
*/
Titanium.Android.Activity.setRequestedOrientation = function(orientation) {};

/**
* Sets the result of this activity using an `Intent`.
* @param {Number} resultCode Result code for this activity.
* @param {Titanium.Android.Intent} intent An optional `Intent` with extra result data.
*/
Titanium.Android.Activity.setResult = function(resultCode, intent) {};

/**
* Starts a new activity, using the passed in `Intent` as the description.
* @param {Titanium.Android.Intent} intent Description of the activity to start.
*/
Titanium.Android.Activity.startActivity = function(intent) {};

/**
* The same as `startActivity`, but also accepts a callback function for handling the result of the started Activity.
* @param {Titanium.Android.Intent} intent Description of the activity to start.
* @param {Callback<ActivityResult>} callback Callback function to be executed when the activity sets result. Seeexamples.
*/
Titanium.Android.Activity.startActivityForResult = function(intent, callback) {};

/**
* Programmatically opens the options menu.
* @since 3.0.0
*/
Titanium.Android.Activity.openOptionsMenu = function() {};

/**
* Broadcast the passed in `Intent` to all `BroadcastReceiver`s.
* @since 3.2.0
* @param {Titanium.Android.Intent} intent Description of the broadcast.
*/
Titanium.Android.Activity.sendBroadcast = function(intent) {};

/**
* Broadcast the passed in `Intent` to all `BroadcastReceiver`s with an optional permission.
* @since 3.2.0
* @param {Titanium.Android.Intent} intent Description of the broadcast.
* @param {String} receiverPermission Name of the permission that the receiver should hold in order to receive the broadcast.
*/
Titanium.Android.Activity.sendBroadcastWithPermission = function(intent, receiverPermission) {};
/**
* Fired from the activity's `onCreate` method.
* @event Titanium.Android.Activity#create
* @type {Object}
*/
/**
* Fired from the activity's `onDestroy` method.
* @event Titanium.Android.Activity#destroy
* @type {Object}
*/
/**
* Fired when the activity is already running and certain flags are set in its intent.
* @event Titanium.Android.Activity#newIntent
* @type {Object}
* @type Titanium.Android.Intent intent The `Intent` passed to the native `onNewIntent` method.
*/
/**
* Fired when the activity is already running and certain flags are set in its intent.
* @event Titanium.Android.Activity#newintent
* @type {Object}
* @type Titanium.Android.Intent intent The `Intent` passed to the native `onNewIntent` method.
*/
/**
* Fired when the activity is paused.
* @event Titanium.Android.Activity#pause
* @type {Object}
*/
/**
* Fired when the activity is resumed.
* @event Titanium.Android.Activity#resume
* @type {Object}
*/
/**
* Fired when the activity is started.
* @event Titanium.Android.Activity#start
* @type {Object}
*/
/**
* Fired when the activity is stopped.
* @event Titanium.Android.Activity#stop
* @type {Object}
*/
/**
* Fired when the activity is about to go into the background as a result of user choice.
* @event Titanium.Android.Activity#userleavehint
* @type {Object}
*/
/**
*/
ActivityResult = {
  /**
  * Unique, automatically generated integer request code.
  * @type Number
  */
  requestCode: null,
  /**
  * Integer result code that the started activity passed to[setResult](Titanium.Android.Activity.setResult).
  * @type Number
  */
  resultCode: null,
  /**
  * Intent that can contain data returned to the caller. Data can be attached tothe intent as "extras").
  * @type Titanium.Android.Intent
  */
  intent: null,
};


/**
* @extends Titanium.Module
* @since 1.5
* @requires android
*/
Titanium.Android = {
  /**
  * User switched airplane mode on or off.
  * @type String
  */
  ACTION_AIRPLANE_MODE_CHANGED: null,
  /**
  * List all applications.
  * @type String
  */
  ACTION_ALL_APPS: null,
  /**
  * Handle an incoming phone call.
  * @type String
  */
  ACTION_ANSWER: null,
  /**
  * Used to indicate that the data is an attachment.
  * @type String
  */
  ACTION_ATTACH_DATA: null,
  /**
  * Listen to battery state change status.
  * @type String
  */
  ACTION_BATTERY_CHANGED: null,
  /**
  * Indicates low battery condition on the device.
  * @type String
  */
  ACTION_BATTERY_LOW: null,
  /**
  * Inidicates the battery is now okay after being low.
  * @type String
  */
  ACTION_BATTERY_OKAY: null,
  /**
  * Indicates the system has finished booting.
  * @type String
  */
  ACTION_BOOT_COMPLETED: null,
  /**
  * Show activity for reporting a bug.
  * @type String
  */
  ACTION_BUG_REPORT: null,
  /**
  * Perform a call to someone specified by the `data` property.
  * @type String
  */
  ACTION_CALL: null,
  /**
  * User pressed the call button.
  * @type String
  */
  ACTION_CALL_BUTTON: null,
  /**
  * The camera button was pressed.
  * @type String
  */
  ACTION_CAMERA_BUTTON: null,
  /**
  * Display an activity chooser.
  * @type String
  */
  ACTION_CHOOSER: null,
  /**
  * User dismissed a temporary system dialog, such as the notification drawer or recent-app drawer.
  * @type String
  */
  ACTION_CLOSE_SYSTEM_DIALOGS: null,
  /**
  * The device's configuration changed.
  * @type String
  */
  ACTION_CONFIGURATION_CHANGED: null,
  /**
  * Create a shortcut.
  * @type String
  */
  ACTION_CREATE_SHORTCUT: null,
  /**
  * Date changed.
  * @type String
  */
  ACTION_DATE_CHANGED: null,
  /**
  * Default action, which is `Titanium.Android.ACTION_VIEW`
  * @type String
  */
  ACTION_DEFAULT: null,
  /**
  * Delete the data specified by the Intent's `data` property.
  * @type String
  */
  ACTION_DELETE: null,
  /**
  * Indicates a low memory condition on the device.
  * @type String
  */
  ACTION_DEVICE_STORAGE_LOW: null,
  /**
  * Dial a number specified by the Intent's `data` property.
  * @type String
  */
  ACTION_DIAL: null,
  /**
  * Provide editable access to the data specified by the Intent's `data` property.
  * @type String
  */
  ACTION_EDIT: null,
  /**
  * Allow the user to select a particular kind of data specified by the Intent's `type` property.
  * @type String
  */
  ACTION_GET_CONTENT: null,
  /**
  * GTalk connection has been established.
  * @type String
  */
  ACTION_GTALK_SERVICE_CONNECTED: null,
  /**
  * GTalk connections has been disconnected.
  * @type String
  */
  ACTION_GTALK_SERVICE_DISCONNECTED: null,
  /**
  * A wired headset has been plugged in or unplugged.
  * @type String
  */
  ACTION_HEADSET_PLUG: null,
  /**
  * An input method has been changed.
  * @type String
  */
  ACTION_INPUT_METHOD_CHANGED: null,
  /**
  * Insert an empty item into the given container.
  * @type String
  */
  ACTION_INSERT: null,
  /**
  * Pick an existing item or insert an empty item, then edit it.
  * @type String
  */
  ACTION_INSERT_OR_EDIT: null,
  /**
  * Start as the main entry point.
  * @type String
  */
  ACTION_MAIN: null,
  /**
  * Indicates low memory condition notification acknowledged by user and package management should be started.
  * @type String
  */
  ACTION_MANAGE_PACKAGE_STORAGE: null,
  /**
  * External media was removed from SD card slot, but mount point was not unmounted.
  * @type String
  */
  ACTION_MEDIA_BAD_REMOVAL: null,
  /**
  * The media button was pressed.
  * @type String
  */
  ACTION_MEDIA_BUTTON: null,
  /**
  * External media is present and being disk-checked
  * @type String
  */
  ACTION_MEDIA_CHECKING: null,
  /**
  * User has expressed the desire to remove the external storage media.
  * @type String
  */
  ACTION_MEDIA_EJECT: null,
  /**
  * External media is present and mounted at its mount point.
  * @type String
  */
  ACTION_MEDIA_MOUNTED: null,
  /**
  * External media is present, but is using an incompatible filesystem or is blank.
  * @type String
  */
  ACTION_MEDIA_NOFS: null,
  /**
  * External media has been removed.
  * @type String
  */
  ACTION_MEDIA_REMOVED: null,
  /**
  * The media scanner has finished scanning a directory.
  * @type String
  */
  ACTION_MEDIA_SCANNER_FINISHED: null,
  /**
  * Request the media scanner to scan a file and add it to the media database.
  * @type String
  */
  ACTION_MEDIA_SCANNER_SCAN_FILE: null,
  /**
  * The media scanner has started scanning a directory.
  * @type String
  */
  ACTION_MEDIA_SCANNER_STARTED: null,
  /**
  * External media is unmounted because it is being shared via USB mass storage.
  * @type String
  */
  ACTION_MEDIA_SHARED: null,
  /**
  * Corresponds to the Android `Intent.ACTION_MEDIA_UNMOUNTABLE` constant.
  * @type String
  */
  ACTION_MEDIA_UNMOUNTABLE: null,
  /**
  * External media is present, but not mounted at its mount point.
  * @type String
  */
  ACTION_MEDIA_UNMOUNTED: null,
  /**
  * An outgoing call is about to be placed.
  * @type String
  */
  ACTION_NEW_OUTGOING_CALL: null,
  /**
  * A new application package has been installed on the device.
  * @type String
  */
  ACTION_PACKAGE_ADDED: null,
  /**
  * An existing application package has been changed.
  * @type String
  */
  ACTION_PACKAGE_CHANGED: null,
  /**
  * The user has cleared the data of a package.
  * @type String
  */
  ACTION_PACKAGE_DATA_CLEARED: null,
  /**
  * Trigger the download and eventual installation of a package.
  * @type String
  */
  ACTION_PACKAGE_INSTALL: null,
  /**
  * An existing application package has been removed from the device.
  * @type String
  */
  ACTION_PACKAGE_REMOVED: null,
  /**
  * A new version of an application package has been installed, replacing an existing version that was previously installed.
  * @type String
  */
  ACTION_PACKAGE_REPLACED: null,
  /**
  * The user has restarted a package, and all of its processes have been killed.
  * @type String
  */
  ACTION_PACKAGE_RESTARTED: null,
  /**
  * Pick an item from the directory indicated by the Intent's `data` property.
  * @type String
  */
  ACTION_PICK: null,
  /**
  * Pick an activity given an intent.
  * @type String
  */
  ACTION_PICK_ACTIVITY: null,
  /**
  * External power has been connected to the device.
  * @type String
  */
  ACTION_POWER_CONNECTED: null,
  /**
  * External power has been disconnected from the device.
  * @type String
  */
  ACTION_POWER_DISCONNECTED: null,
  /**
  * Show power usage information to the user.
  * @type String
  */
  ACTION_POWER_USAGE_SUMMARY: null,
  /**
  * Content provider published new events or items.
  * @type String
  */
  ACTION_PROVIDER_CHANGED: null,
  /**
  * Device rebooted.
  * @type String
  */
  ACTION_REBOOT: null,
  /**
  * Run the data.
  * @type String
  */
  ACTION_RUN: null,
  /**
  * Sent when the device goes to sleep and becomes non-interactive.
  * @type String
  */
  ACTION_SCREEN_OFF: null,
  /**
  * Sent when the device wakes up and becomes interactive.
  * @type String
  */
  ACTION_SCREEN_ON: null,
  /**
  * Perform a search.
  * @type String
  */
  ACTION_SEARCH: null,
  /**
  * Start action associated with long pressing on the search key.
  * @type String
  */
  ACTION_SEARCH_LONG_PRESS: null,
  /**
  * Deliver data to another activity.
  * @type String
  */
  ACTION_SEND: null,
  /**
  * Deliver data to the recipient specified by the Intent's `data` property.
  * @type String
  */
  ACTION_SENDTO: null,
  /**
  * Deliver multiple data to another activity.
  * @type String
  */
  ACTION_SEND_MULTIPLE: null,
  /**
  * Show settings for choosing the system wallpaper.
  * @type String
  */
  ACTION_SET_WALLPAPER: null,
  /**
  * Device is shutting down.
  * @type String
  */
  ACTION_SHUTDOWN: null,
  /**
  * Perform data synchronization.
  * @type String
  */
  ACTION_SYNC: null,
  /**
  * Start the platform-defined tutorial.
  * @type String
  */
  ACTION_SYSTEM_TUTORIAL: null,
  /**
  * The time was set.
  * @type String
  */
  ACTION_TIME_CHANGED: null,
  /**
  * The current time changed.  Sent every minute.
  * @type String
  */
  ACTION_TIME_TICK: null,
  /**
  * A user ID was removed from the system.
  * @type String
  */
  ACTION_UID_REMOVED: null,
  /**
  * The device has entered USB Mass Storage mode.
  * @type String
  */
  ACTION_UMS_CONNECTED: null,
  /**
  * The device has exited USB Mass Storage mode.
  * @type String
  */
  ACTION_UMS_DISCONNECTED: null,
  /**
  * Sent when the user is present after device wakes up.
  * @type String
  */
  ACTION_USER_PRESENT: null,
  /**
  * Display data to the user.
  * @type String
  */
  ACTION_VIEW: null,
  /**
  * Start voice command.
  * @type String
  */
  ACTION_VOICE_COMMAND: null,
  /**
  * The current system wallpaper has changed.
  * @type String
  */
  ACTION_WALLPAPER_CHANGED: null,
  /**
  * Perform a web search.
  * @type String
  */
  ACTION_WEB_SEARCH: null,
  /**
  * Set if the activity should be considered as an alternative action to the data the user is currently viewing.
  * @type String
  */
  CATEGORY_ALTERNATIVE: null,
  /**
  * Activity can browse the Internet.
  * @type String
  */
  CATEGORY_BROWSABLE: null,
  /**
  * Activity should be used as the default action to perform on a piece of data.
  * @type String
  */
  CATEGORY_DEFAULT: null,
  /**
  * Activity is in the development preference panel.
  * @type String
  */
  CATEGORY_DEVELOPMENT_PREFERENCE: null,
  /**
  * Activity can run inside a parent activity.
  * @type String
  */
  CATEGORY_EMBED: null,
  /**
  * To be used as test code for framework instrumentation tests.
  * @type String
  */
  CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST: null,
  /**
  * Home activity, the first activity that is displayed when the device boots.
  * @type String
  */
  CATEGORY_HOME: null,
  /**
  * Provides information about the package it is in.
  * @type String
  */
  CATEGORY_INFO: null,
  /**
  * Activity is in the device's launcher.
  * @type String
  */
  CATEGORY_LAUNCHER: null,
  /**
  * This activity may be exercised by the monkey or other automated test tools.
  * @type String
  */
  CATEGORY_MONKEY: null,
  /**
  * Activity can open raw `file://` or `scheme://` URIs.
  * @type String
  */
  CATEGORY_OPENABLE: null,
  /**
  * This activity is a preference panel.
  * @type String
  */
  CATEGORY_PREFERENCE: null,
  /**
  * To be used as a sample code example (not part of the normal user experience).
  * @type String
  */
  CATEGORY_SAMPLE_CODE: null,
  /**
  * Activity should be considered as an alternative selection action to the data the userhas currently selected.
  * @type String
  */
  CATEGORY_SELECTED_ALTERNATIVE: null,
  /**
  * Activity to be used in a tab activity.
  * @type String
  */
  CATEGORY_TAB: null,
  /**
  * To be used as a test (not part of the normal user experience).
  * @type String
  */
  CATEGORY_TEST: null,
  /**
  * To be used as a unit test (run through the Test Harness).
  * @type String
  */
  CATEGORY_UNIT_TEST: null,
  /**
  * Integer indicating how many pending alarms are being delivered with the intent.
  * @type String
  */
  EXTRA_ALARM_COUNT: null,
  /**
  * String array containing e-mail addresses for blind carbon copying.
  * @type String
  */
  EXTRA_BCC: null,
  /**
  * String array containing e-mail addresses for carbon copying.
  * @type String
  */
  EXTRA_CC: null,
  /**
  * Boolean indicating full uninstall (true) or partial uninstall (false).
  * @type String
  */
  EXTRA_DATA_REMOVED: null,
  /**
  * Boolean indicating to restart the application or not.
  * @type String
  */
  EXTRA_DONT_KILL_APP: null,
  /**
  * String array containing e-mail addresses.
  * @type String
  */
  EXTRA_EMAIL: null,
  /**
  * An Intent describing the choices you would like shown.
  * @type String
  */
  EXTRA_INTENT: null,
  /**
  * A KeyEvent object containing the event that triggered the creation of the Intent it is in.
  * @type String
  */
  EXTRA_KEY_EVENT: null,
  /**
  * String holding the phone number to call or number that was called.
  * @type String
  */
  EXTRA_PHONE_NUMBER: null,
  /**
  * Boolean indicating if the package is being replaced.
  * @type String
  */
  EXTRA_REPLACING: null,
  /**
  * Bitmap icon.
  * @type String
  */
  EXTRA_SHORTCUT_ICON: null,
  /**
  * Resource of the shortcut.
  * @type String
  */
  EXTRA_SHORTCUT_ICON_RESOURCE: null,
  /**
  * Intent of a shortcut.
  * @type String
  */
  EXTRA_SHORTCUT_INTENT: null,
  /**
  * Name of the shortcut.
  * @type String
  */
  EXTRA_SHORTCUT_NAME: null,
  /**
  * URI containing the stream data.
  * @type String
  */
  EXTRA_STREAM: null,
  /**
  * Subject line of a message.
  * @type String
  */
  EXTRA_SUBJECT: null,
  /**
  * Initial data to place in a newly created record.
  * @type String
  */
  EXTRA_TEMPLATE: null,
  /**
  * Corresponds to the Android `Intent.EXTRA_TEXT` constant.
  * @type String
  */
  EXTRA_TEXT: null,
  /**
  * Corresponds to the Android `Intent.EXTRA_TITLE` constant.
  * @type String
  */
  EXTRA_TITLE: null,
  /**
  * UID of the assigned packaged.
  * @type String
  */
  EXTRA_UID: null,
  /**
  * Not used.
  * @type Number
  */
  FILL_IN_ACTION: null,
  /**
  * Not used.
  * @type Number
  */
  FILL_IN_CATEGORIES: null,
  /**
  * Not used.
  * @type Number
  */
  FILL_IN_COMPONENT: null,
  /**
  * Not used.
  * @type Number
  */
  FILL_IN_DATA: null,
  /**
  * Not used.
  * @type Number
  */
  FILL_IN_PACKAGE: null,
  /**
  * If activity is already running, bring it to the foreground.
  * @type Number
  */
  FLAG_ACTIVITY_BROUGHT_TO_FRONT: null,
  /**
  * If the activity is present, removes any activities on top of it to make it the foreground activity.
  * @type Number
  */
  FLAG_ACTIVITY_CLEAR_TOP: null,
  /**
  * Corresponds to the Android `Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET` constant.
  * @type Number
  */
  FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET: null,
  /**
  * Exclude the activity from recently launched activities.
  * @type Number
  */
  FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS: null,
  /**
  * Return result to the original calling activity.
  * @type Number
  */
  FLAG_ACTIVITY_FORWARD_RESULT: null,
  /**
  * Activity was launched from history.
  * @type Number
  */
  FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY: null,
  /**
  * Start the activity as a new task even if it exists.
  * @type Number
  */
  FLAG_ACTIVITY_MULTIPLE_TASK: null,
  /**
  * Activity will be the start of a new task (collection of activities).
  * @type Number
  */
  FLAG_ACTIVITY_NEW_TASK: null,
  /**
  * Prevent transition animation.
  * @type Number
  */
  FLAG_ACTIVITY_NO_ANIMATION: null,
  /**
  * Do not keep the activity in the history stack.
  * @type Number
  */
  FLAG_ACTIVITY_NO_HISTORY: null,
  /**
  * Disables the [onUserLeaveHint()](http://developer.android.com/reference/android/app/Activity.html#onUserLeaveHint()) callback.
  * @type Number
  */
  FLAG_ACTIVITY_NO_USER_ACTION: null,
  /**
  * Corresponds to the Android `Intent.FLAG_ACTIVITY_PREVIOUS_IS_TOP` constant.
  * @type Number
  */
  FLAG_ACTIVITY_PREVIOUS_IS_TOP: null,
  /**
  * If the activity already exists, place it at the top of the history stack.
  * @type Number
  */
  FLAG_ACTIVITY_REORDER_TO_FRONT: null,
  /**
  * If the task already exists, resets the task to its initial state.
  * @type Number
  */
  FLAG_ACTIVITY_RESET_TASK_IF_NEEDED: null,
  /**
  * Do not launch the activity if it is already running.
  * @type Number
  */
  FLAG_ACTIVITY_SINGLE_TOP: null,
  /**
  * Enable a log message to print out the resolution of the intent.
  * @type Number
  */
  FLAG_DEBUG_LOG_RESOLUTION: null,
  /**
  * Indicates the intent is coming from a background operation.
  * @type Number
  */
  FLAG_FROM_BACKGROUND: null,
  /**
  * Grant read permission on the URI in the Intent's data or clipboard.
  * @type Number
  */
  FLAG_GRANT_READ_URI_PERMISSION: null,
  /**
  * Grants write permission on the URI in the Intent's data or clipboard.
  * @type Number
  */
  FLAG_GRANT_WRITE_URI_PERMISSION: null,
  /**
  * When sending a broadcast, only registered receivers will be called.
  * @type Number
  */
  FLAG_RECEIVER_REGISTERED_ONLY: null,
  /**
  * Cancel the current pending intent before creating a new one.
  * @type Number
  */
  FLAG_CANCEL_CURRENT: null,
  /**
  * If the current intent does not exist, do not create it.
  * @type Number
  */
  FLAG_NO_CREATE: null,
  /**
  * The pending intent can only be used once.
  * @type Number
  */
  FLAG_ONE_SHOT: null,
  /**
  * If the current pending intent already exists, only update the current intent's extra data.
  * @type Number
  */
  FLAG_UPDATE_CURRENT: null,
  /**
  * Notification category indicating an alarm or timer.
  * @type String
  */
  CATEGORY_ALARM: null,
  /**
  * Notification category indicating an incoming call (voice or video) or similar synchronouscommunication request.
  * @type String
  */
  CATEGORY_CALL: null,
  /**
  * Notification category indicating an asynchronous bulk message (email).
  * @type String
  */
  CATEGORY_EMAIL: null,
  /**
  * Notification category indicating an error in background operation or authentication status.
  * @type String
  */
  CATEGORY_ERROR: null,
  /**
  * Notification category indicating a calendar event.
  * @type String
  */
  CATEGORY_EVENT: null,
  /**
  * Notification category indicating an incoming direct message (SMS, instant message, etc.).
  * @type String
  */
  CATEGORY_MESSAGE: null,
  /**
  * Notification category indicating the progress of a long-running background operation.
  * @type String
  */
  CATEGORY_PROGRESS: null,
  /**
  * Notification category indicating a promotion or advertisement.
  * @type String
  */
  CATEGORY_PROMO: null,
  /**
  * Notification category indicating a specific, timely recommendation for a single thing.
  * @type String
  */
  CATEGORY_RECOMMENDATION: null,
  /**
  * Notification category for a running background service.
  * @type String
  */
  CATEGORY_SERVICE: null,
  /**
  * Notification category for a social network or sharing update.
  * @type String
  */
  CATEGORY_SOCIAL: null,
  /**
  * Notification category indicating ongoing information about device or contextual status.
  * @type String
  */
  CATEGORY_STATUS: null,
  /**
  * Notification category indicating media transport control for playback.
  * @type String
  */
  CATEGORY_TRANSPORT: null,
  /**
  * Use all default settings for a notification; see[Notification.defaults](Titanium.Android.Notification.defaults).
  * @type Number
  */
  DEFAULT_ALL: null,
  /**
  * Use the default light settings for a notification; see[Notification.defaults](Titanium.Android.Notification.defaults).
  * @type Number
  */
  DEFAULT_LIGHTS: null,
  /**
  * Use the default sound settings for a notification; see[Notification.defaults](Titanium.Android.Notification.defaults).
  * @type Number
  */
  DEFAULT_SOUND: null,
  /**
  * Use the default vibration settings for a notification; see[Notification.defaults](Titanium.Android.Notification.defaults).
  * @type Number
  */
  DEFAULT_VIBRATE: null,
  /**
  * Cancel the notification when it is clicked by the user.
  * @type Number
  */
  FLAG_AUTO_CANCEL: null,
  /**
  * Repeat audio until the notification is cancelled or the notification windowis opened.
  * @type Number
  */
  FLAG_INSISTENT: null,
  /**
  * Do not cancel the notification when the user clicks the Clear All button.
  * @type Number
  */
  FLAG_NO_CLEAR: null,
  /**
  * Specifies that a notification is in reference to something that is ongoing, like a phone call.
  * @type Number
  */
  FLAG_ONGOING_EVENT: null,
  /**
  * Play an alert (sound, lights, and/or vibration) once each time the notification is sent, even if it has not been canceled before that.
  * @type Number
  */
  FLAG_ONLY_ALERT_ONCE: null,
  /**
  * Use LED lights to alert the user to the notification.
  * @type Number
  */
  FLAG_SHOW_LIGHTS: null,
  /**
  * Use for urgent or time-critical notifications, for example, turn-by-turn directions oremergency alerts.
  * @type Number
  */
  PRIORITY_MAX: null,
  /**
  * Use for high priority notifications like real-time chat messages.
  * @type Number
  */
  PRIORITY_HIGH: null,
  /**
  * Default priority if it does no fit into another priority category.
  * @type Number
  */
  PRIORITY_DEFAULT: null,
  /**
  * Use for low priority notifications like software updates.
  * @type Number
  */
  PRIORITY_LOW: null,
  /**
  * Use for expired events.
  * @type Number
  */
  PRIORITY_MIN: null,
  /**
  * Shows basic information about the notification.
  * @type Number
  */
  VISIBILITY_PRIVATE: null,
  /**
  * Shows the notification's full content on the lockscreen. This is the system default if visibility is left unspecified.
  * @type Number
  */
  VISIBILITY_PUBLIC: null,
  /**
  * Shows the most minimal information of the notification on the lockscreen.
  * @type Number
  */
  VISIBILITY_SECRET: null,
  /**
  * Not used.
  * @type Number
  */
  PENDING_INTENT_FOR_ACTIVITY: null,
  /**
  * Not used.
  * @type Number
  */
  PENDING_INTENT_FOR_BROADCAST: null,
  /**
  * Not used.
  * @type Number
  */
  PENDING_INTENT_FOR_SERVICE: null,
  /**
  * Not used.
  * @type Number
  */
  PENDING_INTENT_MAX_VALUE: null,
  /**
  * Accessor for Android system resources.
  * @type Titanium.Android.R
  */
  R: null,
  /**
  * Used with [setResult](Titanium.Android.Activity.setResult) to specify thatan activity was canceled.
  * @type Number
  */
  RESULT_CANCELED: null,
  /**
  * Used with [setResult](Titanium.Android.Activity.setResult) to specify auser-defined result.
  * @type Number
  */
  RESULT_FIRST_USER: null,
  /**
  * Used with [setResult](Titanium.Android.Activity.setResult) to specify thatan activity succeeded.
  * @type Number
  */
  RESULT_OK: null,
  /**
  * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) tospecify the activity should run in the same orientation as the activity behind itin the activity stack.
  * @type Number
  */
  SCREEN_ORIENTATION_BEHIND: null,
  /**
  * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) tospecify a landscape screen orientation.
  * @type Number
  */
  SCREEN_ORIENTATION_LANDSCAPE: null,
  /**
  * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) tospecify that the sensor should be ignored and the display should not rotate.
  * @type Number
  */
  SCREEN_ORIENTATION_NOSENSOR: null,
  /**
  * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) tospecify a portrait screen orientation.
  * @type Number
  */
  SCREEN_ORIENTATION_PORTRAIT: null,
  /**
  * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) tospecify that orientation should be determined by the orientation sensor.
  * @type Number
  */
  SCREEN_ORIENTATION_SENSOR: null,
  /**
  * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) tospecify that the system should use its default rules for determining the bestorientation.
  * @type Number
  */
  SCREEN_ORIENTATION_UNSPECIFIED: null,
  /**
  * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) tospecify that the system should use the user's preferred orientation.
  * @type Number
  */
  SCREEN_ORIENTATION_USER: null,
  /**
  * Always show this item as an action button in the action bar.
  * @type Number
  */
  SHOW_AS_ACTION_ALWAYS: null,
  /**
  * The action view can collapse to a normal menu item.
  * @type Number
  */
  SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: null,
  /**
  * Show this item as an action button if the system decides there is room for it.
  * @type Number
  */
  SHOW_AS_ACTION_IF_ROOM: null,
  /**
  * Never display this item as an action button in the action bar.
  * @type Number
  */
  SHOW_AS_ACTION_NEVER: null,
  /**
  * When this item is in the action bar, always show it with a text label.
  * @type Number
  */
  SHOW_AS_ACTION_WITH_TEXT: null,
  /**
  * Standard Action Bar navigation mode
  * @type Number
  */
  NAVIGATION_MODE_STANDARD: null,
  /**
  * Action Bar tab navigation mode
  * @type Number
  */
  NAVIGATION_MODE_TABS: null,
  /**
  * A Service start mode indicating that if the host application is stopped by Android, the service should not be restarted automatically.
  * @type Number
  */
  START_NOT_STICKY: null,
  /**
  * A Service start mode indicating that if the host application is stopped by Android, the service should be restarted automatically and the original Intent re-sent.
  * @type Number
  */
  START_REDELIVER_INTENT: null,
  /**
  * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) torequest that the alarm stream type for notifications be used.
  * @type Number
  */
  STREAM_ALARM: null,
  /**
  * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that thedefault stream type for notifications be used.
  * @type Number
  */
  STREAM_DEFAULT: null,
  /**
  * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) torequest that the music stream type for notifications be used.
  * @type Number
  */
  STREAM_MUSIC: null,
  /**
  * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that thenotification stream type for notifications be used.
  * @type Number
  */
  STREAM_NOTIFICATION: null,
  /**
  * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that thering stream type for notifications be used.
  * @type Number
  */
  STREAM_RING: null,
  /**
  * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that thesystem stream type for notifications be used.
  * @type Number
  */
  STREAM_SYSTEM: null,
  /**
  * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that thevoice call stream type for notifications be used.
  * @type Number
  */
  STREAM_VOICE_CALL: null,
  /**
  * The URI scheme used for intent URIs.
  * @type Number
  */
  URI_INTENT_SCHEME: null,
  /**
  * Activity of the active context.
  * @type Titanium.Android.Activity
  */
  currentActivity: null,
  /**
  * Service in the active context.
  * @type Titanium.Android.Service
  */
  currentService: null,
};

/**
* Creates an activity chooser intent, used to allow the user to select a target activityfor an intent.
* @param {Titanium.Android.Intent} intent The intent to display a chooser for.
* @param {String} title Title to display on the chooser.
*/
Titanium.Android.createIntentChooser = function(intent, title) {};

/**
* Creates a [PendingIntent](Titanium.Android.PendingIntent) to be used inside a[Notification](Titanium.Android.Notification).
* @param {Dictionary<Titanium.Android.PendingIntent>} parameters Properties to set on the new object, including any defined by<Titanium.Android.PendingIntent>, except those marked not-creation or read-only.
*/
Titanium.Android.createPendingIntent = function(parameters) {};

/**
* Create a <Titanium.Android.Service> so you can start/stop it and listen for events from it.
* @param {Titanium.Android.Intent} intent An `Intent` created with [createServiceIntent](Titanium.Android.createServiceIntent),which specifies the service to be instantiated.
*/
Titanium.Android.createService = function(intent) {};

/**
* Create an `Intent` to be used to start a service.
* @param {ServiceIntentOptions} options Options for the Service.
*/
Titanium.Android.createServiceIntent = function(options) {};

/**
* Check on state of Service.
* @param {Titanium.Android.Intent} intent An `Intent` created with [createServiceIntent](Titanium.Android.createServiceIntent),which specifies the service to check.
*/
Titanium.Android.isServiceRunning = function(intent) {};

/**
* Registers broadcast receiver for the given actions
* @since 3.1.0
* @param {Titanium.Android.BroadcastReceiver} broadcastReceiver The broadcast receiver to register and handle the broadcast
* @param {Array<String>} actions The actions that the broadcast reciever will handle
*/
Titanium.Android.registerBroadcastReceiver = function(broadcastReceiver, actions) {};

/**
* Unregisters a broadcast receiver
* @since 3.1.0
* @param {Titanium.Android.BroadcastReceiver} broadcastReceiver The broadcast receiver to unregister.
*/
Titanium.Android.unregisterBroadcastReceiver = function(broadcastReceiver) {};

/**
* Starts a simple service.
* @param {Titanium.Android.Intent} intent An `Intent` created with [createServiceIntent](Titanium.Android.createServiceIntent),which specifies the service to start.
*/
Titanium.Android.startService = function(intent) {};

/**
* Stop a simple service that was started with `startService`.
* @param {Titanium.Android.Intent} intent An `Intent` created with [createServiceIntent](Titanium.Android.createServiceIntent),which specifies the service to stop.
*/
Titanium.Android.stopService = function(intent) {};

/**
* Create an `Intent` to be used in a broadcast.
* @since 3.2.0
* @param {Dictionary<Titanium.Android.Intent>} parameters Properties to set on the new object, including any defined by<Titanium.Android.Intent>, except those marked not-creation or read-only.
*/
Titanium.Android.createBroadcastIntent = function(parameters) {};

/**
*/
ServiceIntentOptions = {
  /**
  * URL for the service's JavaScript.
  * @type String
  */
  url: null,
  /**
  * One of the `START_` constants from <Titanium.Android> to specify the "stickiness" of the Service when Android shuts down the host application.
  * @type Number
  */
  startMode: null,
};


/**
* @extends Titanium.Proxy
* @since 3.1.0
* @requires android
*/
Titanium.Android.BroadcastReceiver = {
  /**
  * The function called when a broadcast is received.
  * @type Callback<Object>
  */
  onReceived: null,
  /**
  * URL of the JavaScript file to handle the broadcast.
  * @type String
  */
  url: null,
};


/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.Android.Calendar.Alert = {
  /**
  * Date/time at which this alert alarm is set to trigger.
  * @type Date
  */
  alarmTime: null,
  /**
  * Start date/time for the corresponding event.
  * @type Date
  */
  begin: null,
  /**
  * End date/time for the corresponding event.
  * @type Date
  */
  end: null,
  /**
  * Identifier of the event for which this alert is set.
  * @type Number
  */
  eventId: null,
  /**
  * Identifier of this alert.
  * @type String
  */
  id: null,
  /**
  * Reminder notice period in minutes, that determines how long prior to the event this alert should trigger.
  * @type Number
  */
  minutes: null,
  /**
  * The current state of the alert.
  * @type Number
  */
  state: null,
};


/**
* @extends Titanium.Module
* @since 1.5
* @requires android
*/
Titanium.Android.Calendar = {
  /**
  * Reminder alert delivery method.
  * @type Number
  */
  METHOD_ALERT: null,
  /**
  * Reminder default delivery method.
  * @type Number
  */
  METHOD_DEFAULT: null,
  /**
  * Reminder email delivery method.
  * @type Number
  */
  METHOD_EMAIL: null,
  /**
  * Reminder SMS delivery method.
  * @type Number
  */
  METHOD_SMS: null,
  /**
  * Alert dismissed state.
  * @type Number
  */
  STATE_DISMISSED: null,
  /**
  * Alert fired state.
  * @type Number
  */
  STATE_FIRED: null,
  /**
  * Alert scheduled status.
  * @type Number
  */
  STATE_SCHEDULED: null,
  /**
  * Event canceled status.
  * @type Number
  */
  STATUS_CANCELED: null,
  /**
  * Event confirmed status.
  * @type Number
  */
  STATUS_CONFIRMED: null,
  /**
  * Event tentative status.
  * @type Number
  */
  STATUS_TENTATIVE: null,
  /**
  * Event confidential visibility.
  * @type Number
  */
  VISIBILITY_CONFIDENTIAL: null,
  /**
  * Event default visibility.
  * @type Number
  */
  VISIBILITY_DEFAULT: null,
  /**
  * Event private visibility.
  * @type Number
  */
  VISIBILITY_PRIVATE: null,
  /**
  * Event public visibility.
  * @type Number
  */
  VISIBILITY_PUBLIC: null,
  /**
  * All alerts in selected calendars.
  * @type Array<Titanium.Android.Calendar.Alert>
  */
  allAlerts: null,
  /**
  * All calendars known to the native calendar app.
  * @type Array<Titanium.Android.Calendar.Calendar>
  */
  allCalendars: null,
  /**
  * All calendars selected within the native calendar app, which may be a subset of `allCalendars`. 
  * @type Array<Titanium.Android.Calendar.Calendar>
  */
  selectableCalendars: null,
};

/**
* Gets the calendar with the specified identifier.
* @param {Number} id Integer identifier of the calendar.
*/
Titanium.Android.Calendar.getCalendarById = function(id) {};

/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.Android.Calendar.Calendar = {
  /**
  * Indicates whether this calendar is hidden.
  * @type Boolean
  */
  hidden: null,
  /**
  * Identifier of this calendar.
  * @type String
  */
  id: null,
  /**
  * Display name of this calendar.
  * @type String
  */
  name: null,
  /**
  * Indicates whether the calendar is selected.
  * @type Boolean
  */
  selected: null,
};

/**
* Creates an event in this calendar.
* @param {Dictionary<Titanium.Android.Calendar.Event>} properties Properties of the event
*/
Titanium.Android.Calendar.Calendar.createEvent = function(properties) {};

/**
* Gets the event with the specified identifier.
* @param {Number} id Identifier of the event.
*/
Titanium.Android.Calendar.Calendar.getEventById = function(id) {};

/**
* Gets events that occur between two dates.
* @param {Date} date1 Start date.
* @param {Date} date2 End date.
*/
Titanium.Android.Calendar.Calendar.getEventsBetweenDates = function(date1, date2) {};

/**
* Gets events that occur on a specified date.
* @param {Number} year Year of the events.
* @param {Number} month Month of the events, as a zero-based integer with January at 0 and December at 11.
* @param {Number} day Day of the month of the events.
*/
Titanium.Android.Calendar.Calendar.getEventsInDate = function(year, month, day) {};

/**
* Gets events that occur during a specified month.
* @param {Number} year Year of the events.
* @param {Number} month Month of the events, as a zero-based integer with January at 0 and December at 11.
*/
Titanium.Android.Calendar.Calendar.getEventsInMonth = function(year, month) {};

/**
* Gets all events that occur during a specified year.
* @param {Number} year Year of the events.
*/
Titanium.Android.Calendar.Calendar.getEventsInYear = function(year) {};

/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.Android.Calendar.Event = {
  /**
  * Existing alerts for this event.
  * @type Array<Titanium.Android.Calendar.Alert>
  */
  alerts: null,
  /**
  * Indicates whether this event is all day.
  * @type Boolean
  */
  allDay: null,
  /**
  * Start date/time of this event.
  * @type Date
  */
  begin: null,
  /**
  * Description of this event.
  * @type String
  */
  description: null,
  /**
  * End date/time of this event.
  * @type Date
  */
  end: null,
  /**
  * Extended properties of this event.
  * @type Dictionary
  */
  extendedProperties: null,
  /**
  * Indicates whether an alarm is scheduled for this event.
  * @type Boolean
  */
  hasAlarm: null,
  /**
  * Indicates whether [extendedProperties](Titanium.Android.Calendar.Event.extendedProperties) exists for this event.
  * @type Boolean
  */
  hasExtendedProperties: null,
  /**
  * Identifier of this event.
  * @type String
  */
  id: null,
  /**
  * Location of this event.
  * @type String
  */
  location: null,
  /**
  * Existing reminders for this event.
  * @type Array<Titanium.Android.Calendar.Reminder>
  */
  reminders: null,
  /**
  * Status of this event.
  * @type Number
  */
  status: null,
  /**
  * Title of this event.
  * @type String
  */
  title: null,
  /**
  * Visibility of this event.
  * @type Number
  */
  visibility: null,
};

/**
* Creates an alert for this event.
* @param {Dictionary<Titanium.Android.Calendar.Alert>} data Properties for the alert.
*/
Titanium.Android.Calendar.Event.createAlert = function(data) {};

/**
* Creates a reminder for this event.
* @param {Dictionary<Titanium.Android.Calendar.Reminder>} data Properties for the reminder.
*/
Titanium.Android.Calendar.Event.createReminder = function(data) {};

/**
* Gets the value of the specified extended property.
* @param {String} name Name of an existing extended property.
*/
Titanium.Android.Calendar.Event.getExtendedProperty = function(name) {};

/**
* Sets the value of the specified extended property.
* @param {String} name Property name.
* @param {String} value Property value.
*/
Titanium.Android.Calendar.Event.setExtendedProperty = function(name, value) {};

/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.Android.Calendar.Reminder = {
  /**
  * Identifier of this reminder.
  * @type String
  */
  id: null,
  /**
  * Method by which this reminder will be delivered.
  * @type Number
  */
  method: null,
  /**
  * Reminder notice period in minutes, that determines how long prior to the event this reminder should trigger.
  * @type Number
  */
  minutes: null,
};


/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.Android.Intent = {
  /**
  * The action associated with this intent.
  * @type String
  */
  action: null,
  /**
  * The Java class name of the activity associated with this intent([packageName](Titanium.Android.Intent.packageName) must also be set).
  * @type String
  */
  className: null,
  /**
  * The Intent's Data URI.
  * @type String
  */
  data: null,
  /**
  * Intent flags.
  * @type Number
  */
  flags: null,
  /**
  * The fully-qualified Java package name of the activity.
  * @type String
  */
  packageName: null,
  /**
  * The MIME type for this Intent.
  * @type String
  */
  type: null,
  /**
  * The URL to a Titanium JavaScript Activity.
  * @type String
  */
  url: null,
};

/**
* Adds a category to this Intent.
* @param {String} name The category name.
*/
Titanium.Android.Intent.addCategory = function(name) {};

/**
* Adds to the existing flags on the `Intent`.
* @param {Number} flags Bitwise OR of the flags to add to the existing set.
*/
Titanium.Android.Intent.addFlags = function(flags) {};

/**
* Get a <Titanium.Blob> property from this `Intent`.
* @since 2.1.0
* @param {String} name The <Titanium.Blob> extra to get, most commonly <Titanium.Android.EXTRA_STREAM>.
*/
Titanium.Android.Intent.getBlobExtra = function(name) {};

/**
* Get a boolean property from this Intent.
* @param {String} name Property to get.
*/
Titanium.Android.Intent.getBooleanExtra = function(name) {};

/**
* Get the Data URI from this `Intent`.
*/
Titanium.Android.Intent.getData = function() {};

/**
* Get a double property from this `Intent`.
* @param {String} name Property to get.
*/
Titanium.Android.Intent.getDoubleExtra = function(name) {};

/**
* Get an integer property from this `Intent`.
* @param {String} name Property to get.
*/
Titanium.Android.Intent.getIntExtra = function(name) {};

/**
* Get a long property from this `Intent`.
* @param {String} name Property to get.
*/
Titanium.Android.Intent.getLongExtra = function(name) {};

/**
* Get a string property from this `Intent`.
* @param {String} name Property to get.
*/
Titanium.Android.Intent.getStringExtra = function(name) {};

/**
* Returns `true` if this `Intent` has the specified property.
* @param {String} name Property name to check for.
*/
Titanium.Android.Intent.hasExtra = function(name) {};

/**
* Puts an extra property on this `Intent`.
* @param {String} name Name of the property to add.
* @param {Object} value Property value to set.
*/
Titanium.Android.Intent.putExtra = function(name, value) {};

/**
* Put a URI property on this `Intent` (useful for <Titanium.Android.EXTRA_STREAM>).
* @param {String} name The property name.
* @param {String} value The URI, as a string.
*/
Titanium.Android.Intent.putExtraUri = function(name, value) {};

/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.Android.Menu = {
  /**
  * Array of menu items in this menu.
  * @type Array<Titanium.Android.MenuItem>
  */
  items: null,
};

/**
* Creates a <Titanium.Android.MenuItem> from the passed creation options.
* @param {Object} options Creation options. Supported options are[itemId](Titanium.Android.MenuItem.itemId),[groupId](Titanium.Android.MenuItem.groupId),[title](Titanium.Android.MenuItem.title),[order](Titanium.Android.MenuItem.order),[actionView](Titanium.Android.MenuItem.actionView),[checkable](Titanium.Android.MenuItem.checkable),[checked](Titanium.Android.MenuItem.checked),[enabled](Titanium.Android.MenuItem.enabled),[icon](Titanium.Android.MenuItem.icon),[showAsAction](Titanium.Android.MenuItem.showAsAction),[titleCondensed](Titanium.Android.MenuItem.titleCondensed), and[visible](Titanium.Android.MenuItem.visible).
*/
Titanium.Android.Menu.add = function(options) {};

/**
* Clears all items from this menu.
*/
Titanium.Android.Menu.clear = function() {};

/**
* Closes the menu, if visible.
*/
Titanium.Android.Menu.close = function() {};

/**
* Locates a [MenuItem](Titanium.Android.MenuItem) in this menu, by item ID or reference.
* @param {Number|Titanium.Android.MenuItem} item Integer [itemId](Titanium.Android.MenuItem.itemId) or a reference to a `MenuItem` object.
*/
Titanium.Android.Menu.findItem = function(item) {};

/**
* Returns the [MenuItem](Titanium.Android.MenuItem) at a specific index.
* @param {Number} index Index of the menu item to return.
*/
Titanium.Android.Menu.getItem = function(index) {};

/**
* Returns `true` if this menu has visible items.
*/
Titanium.Android.Menu.hasVisibleItems = function() {};

/**
* Removes all menu items with the specified[groupId](Titanium.Android.MenuItem.groupId).
* @param {Number} groupId Group ID of items to remove.
*/
Titanium.Android.Menu.removeGroup = function(groupId) {};

/**
* Removes a specific [MenuItem](Titanium.Android.MenuItem) identified by its[itemId](Titanium.Android.MenuItem.itemId).
* @param {Number} itemId Item ID of item to remove.
*/
Titanium.Android.Menu.removeItem = function(itemId) {};

/**
* Enables or disables a group of menu items identified by a[groupId](Titanium.Android.MenuItem.groupId).
* @param {Number} groupId ID of the group to enable or disable.
* @param {Boolean} enabled True to enable the specified group, false to disable it.
*/
Titanium.Android.Menu.setGroupEnabled = function(groupId, enabled) {};

/**
* Shows or hides a group of menu items identified by a[groupId](Titanium.Android.MenuItem.groupId).
* @param {Number} groupId Group ID to enable or disable.
* @param {Boolean} visible True to show the group, false to hide it.
*/
Titanium.Android.Menu.setGroupVisible = function(groupId, visible) {};

/**
* Number of items in this menu.
*/
Titanium.Android.Menu.size = function() {};

/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
* @fires Titanium.Android.MenuItem#click
* @fires Titanium.Android.MenuItem#expand
* @fires Titanium.Android.MenuItem#collapse
*/
Titanium.Android.MenuItem = {
  /**
  * Custom view that replaces the default menu item button.
  * @type Titanium.UI.View
  */
  actionView: null,
  /**
  * True if this menu item's action view has been expanded.
  * @type Boolean
  */
  actionViewExpanded: null,
  /**
  * Determines if the item can be checked.
  * @type Boolean
  */
  checkable: null,
  /**
  * Determines if the item is checked.
  * @type Boolean
  */
  checked: null,
  /**
  * Determines if the item is enabled.
  * @type Boolean
  */
  enabled: null,
  /**
  * Group ID for this item.
  * @type Number
  */
  groupId: null,
  /**
  * Icon to display for the this menu item.
  * @type Number,String
  */
  icon: null,
  /**
  * Item ID for this item.
  * @type Number
  */
  itemId: null,
  /**
  * Integer used for controlling the category and sort order for menu items.
  * @type Number
  */
  order: null,
  /**
  * A set of flags that controls how this item appears in the action bar.
  * @type Number
  */
  showAsAction: null,
  /**
  * Title of the item.
  * @type String
  */
  title: null,
  /**
  * Shortened version of the item's title.
  * @type String
  */
  titleCondensed: null,
  /**
  * Determines whether the menu item is visible.
  * @type Boolean
  */
  visible: null,
};

/**
* Collapse the action view associated with this menu item.
* @since 3.0.0
*/
Titanium.Android.MenuItem.collapseActionView = function() {};

/**
* Expand the action view associated with this menu item.
* @since 3.0.0
*/
Titanium.Android.MenuItem.expandActionView = function() {};

/**
* Returns the [actionViewExpanded](Titanium.Android.MenuItem.actionViewExpanded) state of the menu item.
*/
Titanium.Android.MenuItem.isActionViewExpanded = function() {};

/**
* Returns the [checkable](Titanium.Android.MenuItem.checkable) state of the menu item.
*/
Titanium.Android.MenuItem.isCheckable = function() {};

/**
* Returns the [checked](Titanium.Android.MenuItem.checked) state of the menu item.
*/
Titanium.Android.MenuItem.isChecked = function() {};

/**
* Returns the [enabled](Titanium.Android.MenuItem.enabled) state of the menu item.
*/
Titanium.Android.MenuItem.isEnabled = function() {};

/**
* Returns the [visible](Titanium.Android.MenuItem.visible) state of the menu item.
*/
Titanium.Android.MenuItem.isVisible = function() {};

/**
* Sets the [checkable](Titanium.Android.MenuItem.checkable) state of the menu item.
* @param {Boolean} checkable True enable checking and unchecking this item, false to disable it.
*/
Titanium.Android.MenuItem.setCheckable = function(checkable) {};

/**
* Sets the [checked](Titanium.Android.MenuItem.checked) state of the menu item.
* @param {Boolean} enabled True to check the item, false to uncheck it.
*/
Titanium.Android.MenuItem.setChecked = function(enabled) {};

/**
* Sets the [enabled](Titanium.Android.MenuItem.enabled) state of the menu item.
* @param {Boolean} enabled True to enable item, false to disable it.
*/
Titanium.Android.MenuItem.setEnabled = function(enabled) {};

/**
* Sets the [visible](Titanium.Android.MenuItem.visible) state of the menu item.
* @param {Boolean} visible True to show the item, false to hide it.
*/
Titanium.Android.MenuItem.setVisible = function(visible) {};
/**
* Fired when the user clicks the menu item.
* @event Titanium.Android.MenuItem#click
* @type {Object}
*/
/**
* Fired when the action view has been expanded.
* @event Titanium.Android.MenuItem#expand
* @type {Object}
*/
/**
* Fired when the action view has been collapsed.
* @event Titanium.Android.MenuItem#collapse
* @type {Object}
*/
/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.Android.Notification = {
  /**
  * The audio stream type to use when playing the sound.
  * @type Number
  */
  audioStreamType: null,
  /**
  * Sets the notification's category.
  * @type String
  */
  category: null,
  /**
  * The `PendingIntent` to execute when the expanded status entry is clicked.
  * @type Titanium.Android.PendingIntent
  */
  contentIntent: null,
  /**
  * Description text of the notification.
  * @type String
  */
  contentText: null,
  /**
  * Title of the notification.
  * @type String
  */
  contentTitle: null,
  /**
  * Custom layout to display in the notification.
  * @type Titanium.Android.RemoteViews
  */
  contentView: null,
  /**
  * Specifies which values should be taken from the defaults.
  * @type Number
  */
  defaults: null,
  /**
  * The `PendingIntent` to execute when the status entry is deleted by the user with the "Clear All Notifications" button.
  * @type Titanium.Android.PendingIntent
  */
  deleteIntent: null,
  /**
  * Set of flags for the notification.
  * @type Number
  */
  flags: null,
  /**
  * Notification icon, specified as an Android resource ID, or a local URL to a density-specific image.
  * @type Number,String
  */
  icon: null,
  /**
  * The color for the LED to blink.
  * @type Number
  */
  ledARGB: null,
  /**
  * The number of milliseconds for the LED to be off while it's flashing.
  * @type Number
  */
  ledOffMS: null,
  /**
  * The number of milliseconds for the LED to be on while it's flashing.
  * @type Number
  */
  ledOnMS: null,
  /**
  * The number of events that this notification represents.
  * @type Number
  */
  number: null,
  /**
  * Sets the priority of the notification.
  * @type Number
  */
  priority: null,
  /**
  * A URL to the sound to play.
  * @type String
  */
  sound: null,
  /**
  * Text to scroll across the screen when this item is added to the status bar.
  * @type String
  */
  tickerText: null,
  /**
  * Allows user to conceal private information of the notification on the lockscreen.
  * @type Number
  */
  visibility: null,
  /**
  * The timestamp for the notification (defaults to the current time).
  * @type Date,Number
  */
  when: null,
};

/**
* Sets the latest event info using the built-in notification view for this notification.
* @param {String} contentTitle Title to display when the notification is expanded.
* @param {String} contentText Text to display when the notification is expanded.
* @param {Titanium.Android.PendingIntent} contentIntent Intent to launch when the user clicks on the notification.
*/
Titanium.Android.Notification.setLatestEventInfo = function(contentTitle, contentText, contentIntent) {};

/**
* @extends Titanium.Module
* @since 1.5
* @requires android
*/
Titanium.Android.NotificationManager = {
  /**
  * Use <Titanium.Android.DEFAULT_ALL> instead.
  * @type Number
  */
  DEFAULT_ALL: null,
  /**
  * Use <Titanium.Android.DEFAULT_LIGHTS> instead.
  * @type Number
  */
  DEFAULT_LIGHTS: null,
  /**
  * Use <Titanium.Android.DEFAULT_SOUND> instead.
  * @type Number
  */
  DEFAULT_SOUND: null,
  /**
  * Use <Titanium.Android.DEFAULT_VIBRATE> instead.
  * @type Number
  */
  DEFAULT_VIBRATE: null,
  /**
  * Use <Titanium.Android.FLAG_AUTO_CANCEL> instead.
  * @type Number
  */
  FLAG_AUTO_CANCEL: null,
  /**
  * Use <Titanium.Android.FLAG_INSISTENT> instead.
  * @type Number
  */
  FLAG_INSISTENT: null,
  /**
  * Use <Titanium.Android.FLAG_NO_CLEAR> instead.
  * @type Number
  */
  FLAG_NO_CLEAR: null,
  /**
  * Use <Titanium.Android.FLAG_ONGOING_EVENT> instead.
  * @type Number
  */
  FLAG_ONGOING_EVENT: null,
  /**
  * Use <Titanium.Android.FLAG_ONLY_ALERT_ONCE> instead.
  * @type Number
  */
  FLAG_ONLY_ALERT_ONCE: null,
  /**
  * Use <Titanium.Android.FLAG_SHOW_LIGHTS> instead.
  * @type Number
  */
  FLAG_SHOW_LIGHTS: null,
  /**
  * Use <Titanium.Android.STREAM_DEFAULT> instead.
  * @type Number
  */
  STREAM_DEFAULT: null,
};

/**
* Cancels a previously displayed notification.
* @param {Number} id The ID passed to [notify](Titanium.Android.NotificationManager.notify).
*/
Titanium.Android.NotificationManager.cancel = function(id) {};

/**
* Cancels all previously displayed notifications.
*/
Titanium.Android.NotificationManager.cancelAll = function() {};

/**
* Adds a persistent notification to the status bar.
* @param {Number} id An ID that may be used to cancel a shown notification.
* @param {Titanium.Android.Notification} notification Notification to display.
*/
Titanium.Android.NotificationManager.notify = function(id, notification) {};

/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.Android.PendingIntent = {
  /**
  * Flags used for creating the Pending Intent.
  * @type Number
  */
  flags: null,
  /**
  * The intent data to pass to the [Activity](Titanium.Android.Activity) launched by this `PendingIntent`.
  * @type Titanium.Android.Intent
  */
  intent: null,
  /**
  * If this property is true, flag <Titanium.Android.FLAG_UPDATE_CURRENT> will beappended to `flags` automatically. Default value is true.
  * @type Boolean
  */
  updateCurrentIntent: null,
};


/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.Android.R = {
  /**
  * Animation resources. See [R.anim](http://developer.android.com/reference/android/R.anim.html) in the Android Developer Reference.
  * @type Object
  */
  anim: null,
  /**
  * Array resources. See [R.array](http://developer.android.com/reference/android/R.array.html)in the Android Developer Reference.
  * @type Object
  */
  array: null,
  /**
  * Attribute resources. See [R.attr](http://developer.android.com/reference/android/R.attr.html)in the Android Developer Reference.
  * @type Object
  */
  attr: null,
  /**
  * Color resources. See [R.color](http://developer.android.com/reference/android/R.color.html)in the Android Developer Reference.
  * @type Object
  */
  color: null,
  /**
  * Dimension resources.  See [http://developer.android.com/reference/android/R.dimen.html](http://developer.android.com/reference/android/R.dimen.html)in the Android Developer Reference.
  * @type Object
  */
  dimen: null,
  /**
  * Drawable resources. See [R.drawable](http://developer.android.com/reference/android/R.drawable.html)in the Android Developer Reference.
  * @type Object
  */
  drawable: null,
  /**
  * ID resources.  See [R.id](http://developer.android.com/reference/android/R.id.html)in the Android Developer Reference.
  * @type Object
  */
  id: null,
  /**
  * Integer resources. See [R.integer](http://developer.android.com/reference/android/R.integer.html)in the Android Developer Reference.
  * @type Object
  */
  integer: null,
  /**
  * Layout resources. See [R.layout](http://developer.android.com/reference/android/R.layout.html)in the Android Developer Reference.
  * @type Object
  */
  layout: null,
  /**
  * String resources. See [R.string](http://developer.android.com/reference/android/R.string.html)in the Android Developer Reference.
  * @type Object
  */
  string: null,
  /**
  * Style resources. See [R.style](http://developer.android.com/reference/android/R.style.html)in the Android Developer Reference.
  * @type Object
  */
  style: null,
  /**
  * Styleable reosurces. See [R.styleable](http://developer.android.com/reference/android/R.styleable.html)in the Android Developer Reference.
  * @type Object
  */
  styleable: null,
};


/**
* @extends Titanium.Proxy
* @since 1.6
* @requires android
*/
Titanium.Android.RemoteViews = {
  /**
  * Android layout resource ID for the view to display. Required.
  * @type Number
  */
  layoutId: null,
  /**
  * Package name that the resource ID lives in. Optional.
  * @type String
  */
  packageName: null,
};

/**
* Calls a method taking a single `boolean` argument on a view in the remote viewhierarchy.  See Android's documentation for[setBoolean](http://developer.android.com/reference/android/widget/RemoteViews.html#setBoolean(int, java.lang.String, boolean)).
* @param {Number} viewId Resource ID of the view to invoke the method on.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {String} methodName Name of the method to call.
* @param {Boolean} value Value to pass to the method.
*/
Titanium.Android.RemoteViews.setBoolean = function(viewId, methodName, value) {};

/**
* Sets the base time, format string, and started flag for a chronometerin the remote view hierarchy.
* @param {Number} viewId Resource ID of the Chronometer to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {Date} base Time at which the timer would have read 0:00.
* @param {String} format Chronometer format string, or `null` to simply display the timer value.
* @param {Boolean} started True if you want the clock to be started, false if not.
*/
Titanium.Android.RemoteViews.setChronometer = function(viewId, base, format, started) {};

/**
* Calls a method taking a single `double` argument on a view in the remote viewhierarchy.
* @param {Number} viewId Resource ID of the view to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {String} methodName Name of the method to call.
* @param {Number} value Value to pass to the method.
*/
Titanium.Android.RemoteViews.setDouble = function(viewId, methodName, value) {};

/**
* Sets the image for an image view in the remote view hierarchy using an Android drawable resource.
* @param {Number} viewId Resource ID of the `ImageView` to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {Number} srcId Resource ID of the new image.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
*/
Titanium.Android.RemoteViews.setImageViewResource = function(viewId, srcId) {};

/**
* Sets the image for an image view in the remote view hierarchy using a URI.
* @param {Number} viewId Resource ID of the `ImageView` to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {String} uri URI of the image (both Android and Titanium URLs are supported).
*/
Titanium.Android.RemoteViews.setImageViewUri = function(viewId, uri) {};

/**
* Calls a method taking a single `int` argument on a view in the remote view hierarchy.
* @param {Number} viewId Resource ID of the view to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {String} methodName Name of the method to call.
* @param {Number} value Value to pass to the method.
*/
Titanium.Android.RemoteViews.setInt = function(viewId, methodName, value) {};

/**
* Launches a <Titanium.Android.PendingIntent> when the specified view is clicked.
* @param {Number} viewId Resource ID of the view to add a click listener to.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {Titanium.Android.PendingIntent} pendingIntent The `PendingIntent` to execute when this view is clicked.
*/
Titanium.Android.RemoteViews.setOnClickPendingIntent = function(viewId, pendingIntent) {};

/**
* Sets the progress, max value, and indeterminate flag of a progress bar in theremote view hierarchy.
* @param {Number} viewId Resource ID of the progress bar to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {Number} max The new maximum value of the progress bar.
* @param {Number} progress The new progress value of the progress bar (from 0..`max`).
* @param {Boolean} indeterminate Determines whether the progress bar is indeterminate.If `true`, the progress bar displays an infinite looping animation.
*/
Titanium.Android.RemoteViews.setProgressBar = function(viewId, max, progress, indeterminate) {};

/**
* Calls a method taking a single String argument on a view in the remote viewhierarchy.
* @param {Number} viewId Resource ID of the view to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {String} methodName Name of the method to call.
* @param {String} value String to pass to the method.
*/
Titanium.Android.RemoteViews.setString = function(viewId, methodName, value) {};

/**
* Sets the text color of a view in the remote view hierarchy.
* @param {Number} viewId Resource ID of the view to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {Number} color Color as an integer.
*/
Titanium.Android.RemoteViews.setTextColor = function(viewId, color) {};

/**
* Sets the text of a text view in the remote view hierarchy.
* @param {Number} viewId Resource ID of the text view to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {String} text New text for the text view.
*/
Titanium.Android.RemoteViews.setTextViewText = function(viewId, text) {};

/**
* Calls a method taking one URI on a view in the remote view hierarchy.
* @param {Number} viewId Resource ID of the view to update.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {String} methodName Name of the method to call.
* @param {String} value URI (as a string) to pass to the method.
*/
Titanium.Android.RemoteViews.setUri = function(viewId, methodName, value) {};

/**
* Sets the visibility of a view in the remote view hierarchy.
* @param {Number} viewId Resource ID of the view to show or hide.Application-specific resource IDs can be specified using <Titanium.App.Android.R>.
* @param {Number} visibility The visibility. Either `0` (VISIBLE), `4` (INVISIBLE) or `8` (GONE).
*/
Titanium.Android.RemoteViews.setViewVisibility = function(viewId, visibility) {};

/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
* @fires Titanium.Android.Service#pause
* @fires Titanium.Android.Service#resume
* @fires Titanium.Android.Service#start
* @fires Titanium.Android.Service#stop
* @fires Titanium.Android.Service#taskremoved
*/
Titanium.Android.Service = {
  /**
  * The intent used to start or bind to the Service.
  * @type Titanium.Android.Intent
  */
  intent: null,
  /**
  * A service can be started more than once -- this number (based on an incrementing integer)indicates which "start number" in the sequence the current service instance is.
  * @type Number
  */
  serviceInstanceId: null,
};

/**
* Starts the Service.
*/
Titanium.Android.Service.start = function() {};

/**
* Stops this running instance of the Service.
*/
Titanium.Android.Service.stop = function() {};
/**
* For Javascript-based services that you create, `pause` fires after each time the JavaScriptcode executes.
* @event Titanium.Android.Service#pause
* @type {Object}
* @type undefined iteration Incrementing integer indicating which iteration of an interval-based Service is pausing.For example, if you have an interval-based Service running every 10 seconds, iteration3 would occur at about 30 seconds after you start the instance (assuming your servicecode runs quickly).
*/
/**
* For JavaScript-based Services which you create, `resume` fires each time the JavaScriptcode executes.
* @event Titanium.Android.Service#resume
* @type {Object}
* @type undefined iteration Incrementing integer indicating which iteration of an interval-based Service is pausing.For example, if you have an interval-based Service running every 10 seconds, iteration3 would occur at about 30 seconds after you start the instance (assuming your servicecode runs quickly).
*/
/**
* Fired when the bound service instance starts.
* @event Titanium.Android.Service#start
* @type {Object}
*/
/**
* Fired when the bound service instance stops.
* @event Titanium.Android.Service#stop
* @type {Object}
*/
/**
* Fired when the task that comes from the service's application has been removed.
* @event Titanium.Android.Service#taskremoved
* @type {Object}
*/
/**
* @extends Titanium.Module
* @since 1.5
* @requires android
*/
Titanium.App.Android = {
  /**
  * The `R` namespace for application resources.
  * @type Titanium.App.Android.R
  */
  R: null,
  /**
  * The version number of the application. 
  * @type Number
  */
  appVersionCode: null,
  /**
  * The version name of the application. 
  * @type String
  */
  appVersionName: null,
  /**
  * Return the intent that was used to launch the application. 
  * @type Titanium.Android.Intent
  */
  launchIntent: null,
};


/**
* @extends Titanium.Proxy
* @since 1.5
* @requires android
*/
Titanium.App.Android.R = {
};


/**
* @extends Titanium.Module
* @since 0.1
* @fires Titanium.App#accessibilitychanged
* @fires Titanium.App#memorywarning
* @fires Titanium.App#pause
* @fires Titanium.App#paused
* @fires Titanium.App#proximity
* @fires Titanium.App#uncaughtException
* @fires Titanium.App#resume
* @fires Titanium.App#resumed
* @fires Titanium.App#keyboardFrameChanged
* @fires Titanium.App#keyboardframechanged
* @fires Titanium.App#significanttimechange
*/
Titanium.App = {
  /**
  * Convenience constant for system event "accessibilityannouncement".
  * @type String
  * @requires android, iphone, ipad
  */
  EVENT_ACCESSIBILITY_ANNOUNCEMENT: null,
  /**
  * Convenience constant for system event "accessibilitychanged".
  * @type String
  * @requires android, iphone, ipad
  */
  EVENT_ACCESSIBILITY_CHANGED: null,
  /**
  * Indicates whether Accessibility is enabled by the system.
  * @type Boolean
  */
  accessibilityEnabled: null,
  /**
  * Indicates whether Analytics is enabled, determined by `tiapp.xml`.
  * @type Boolean
  */
  analytics: null,
  /**
  * Application copyright statement, determined by `tiapp.xml`.
  * @type String
  */
  copyright: null,
  /**
  * Build type that reflects how the application was packaged; either `test`, `development` or `production`.
  * @type String
  */
  deployType: null,
  /**
  * Application description, determined by `tiapp.xml`.
  * @type String
  */
  description: null,
  /**
  * Application globally-unique ID, determined by `tiapp.xml`.
  * @type String
  */
  guid: null,
  /**
  * Shows the application's splash screen on app resume.
  * @type Boolean
  * @requires iphone, ipad
  */
  forceSplashAsSnapshot: null,
  /**
  * Application ID, from `tiapp.xml`.
  * @type String
  */
  id: null,
  /**
  * The install ID for this application.
  * @type String
  * @requires iphone, ipad
  */
  installId: null,
  /**
  * Determines whether the screen is locked when the device is idle.
  * @type Boolean
  * @requires iphone, ipad
  */
  idleTimerDisabled: null,
  /**
  * Application name, determined by `tiapp.xml`.
  * @type String
  */
  name: null,
  /**
  * Determines whether proximity detection is enabled.
  * @type Boolean
  * @requires iphone, ipad, android
  */
  proximityDetection: null,
  /**
  * Indicates the state of the device's proximity sensor, according to the <Titanium.App.proximity> event.
  * @type Boolean
  * @requires iphone, android
  */
  proximityState: null,
  /**
  * Prevents network activity indicator from being displayed.
  * @type Boolean
  * @requires iphone, ipad
  */
  disableNetworkActivityIndicator: null,
  /**
  * Application publisher, from `tiapp.xml`.
  * @type String
  */
  publisher: null,
  /**
  * Unique session identifier for the current continuous run of the application.
  * @type String
  */
  sessionId: null,
  /**
  * Application URL, from `tiapp.xml`.
  * @type String
  */
  url: null,
  /**
  * Application version, from `tiapp.xml`.
  * @type String
  */
  version: null,
  /**
  * Indicates whether or not the soft keyboard is visible.
  * @type Boolean
  * @requires iphone, ipad
  */
  keyboardVisible: null,
};

/**
* Fire a system-level event such as <Titanium.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT>.
* @since 3.0.0
* @param {String} eventName The name of the event to fire.
* @param {Object} param A parameter to be passed to the system event.
*/
Titanium.App.fireSystemEvent = function(eventName, param) {};

/**
* Returns the arguments passed to the application on startup.
*/
Titanium.App.getArguments = function() {};
/**
* Fired by the system when the device's accessibility service is turned on or off.
* @event Titanium.App#accessibilitychanged
* @type {Object}
* @type Boolean enabled Whether accessibility is now enabled or disabled.
*/
/**
* Fired when the app receives a warning from the operating system about low memory availability.
* @event Titanium.App#memorywarning
* @type {Object}
*/
/**
* Fired when the application transitions from active to inactive state on a multitasked system.
* @event Titanium.App#pause
* @type {Object}
*/
/**
* Fired when the application transitions to the background on a multitasked system.
* @event Titanium.App#paused
* @type {Object}
*/
/**
* Fired when the proximity sensor changes state.
* @event Titanium.App#proximity
* @type {Object}
* @type undefined state Proximity state value.
*/
/**
* Fired when an uncaught JavaScript exception occurs.
* @event Titanium.App#uncaughtException
* @type {Object}
* @type undefined message The error message.
* @type undefined line The line where the error occurred.
* @type undefined sourceId A unique identification for the source file.
* @requires iphone, ipad
* @type undefined type The type of error.
* @requires iphone, ipad
* @type undefined sourceURL The URL to the source file.
* @requires iphone, ipad
* @type undefined backtrace The backtrace of function calls when the error occurred.
* @requires iphone, ipad
* @type undefined title The title for the error.
* @requires android
* @type undefined sourceName The name of the source file.
* @requires android
* @type undefined lineSource The line source reference.
* @requires android
* @type undefined lineOffset The offset on the line where the error occurred.
* @requires android
*/
/**
* Fired when the application returns to the foreground on a multitasked system.
* @event Titanium.App#resume
* @type {Object}
*/
/**
* Fired when the application returns to the foreground.
* @event Titanium.App#resumed
* @type {Object}
*/
/**
* Fired when the soft keyboard is presented, on and off the screen.
* @event Titanium.App#keyboardFrameChanged
* @type {Object}
*/
/**
* Fired when the soft keyboard is presented, on and off the screen.
* @event Titanium.App#keyboardframechanged
* @type {Object}
* @type Dictionary keyboardFrame A dictionary with keys x, y, width and height representing the frame of keyboard on screen.
* @type Number animationDuration The duration of the keyboard animation. This parameter is only available on Titanium SDK 4.0.0 and later.
*/
/**
* Fired when there is a significant change in the time.
* @event Titanium.App#significanttimechange
* @type {Object}
*/
/**
*/
launchOptions = {
  /**
  * This key indicates that the application was launched in order to openthe specified URL.
  * @type String
  */
  url: null,
  /**
  * This key indicates that the application was launched by anotherapplication with the specified bundle ID.
  * @type String
  */
  source: null,
  /**
  * If set to `true`, this key indicates that the application was launched in response to anincoming location event.
  * @type Boolean
  */
  launchOptionsLocationKey: null,
};


/**
* @extends Titanium.Module
* @since 0.5
* @fires Titanium.App.Properties#change
*/
Titanium.App.Properties = {
};

/**
* Returns the value of a property as a boolean data type.
* @param {String} property Name of property.
* @param {Boolean} defaultVal Default value to return if property does not exist.
*/
Titanium.App.Properties.getBool = function(property, defaultVal) {};

/**
* Returns the value of a property as a double (double-precision, floating point) data type.
* @param {String} property Name of property.
* @param {Number} defaultVal Default value to return if property does not exist.
*/
Titanium.App.Properties.getDouble = function(property, defaultVal) {};

/**
* Returns the value of a property as an integer data type.
* @param {String} property Name of property.
* @param {Number} defaultVal Default value to return if property does not exist.
*/
Titanium.App.Properties.getInt = function(property, defaultVal) {};

/**
* Returns the value of a property as an array data type.
* @param {String} property Name of property.
* @param {Array<Object>} defaultVal Default value to return if property does not exist.
*/
Titanium.App.Properties.getList = function(property, defaultVal) {};

/**
* Returns the value of a property as an object.
* @param {String} property Name of property.
* @param {Object} defaultVal Default value to return if property does not exist.
*/
Titanium.App.Properties.getObject = function(property, defaultVal) {};

/**
* Returns the value of a property as a string data type.
* @param {String} property Name of property.
* @param {String} defaultVal Default value to return if property does not exist.
*/
Titanium.App.Properties.getString = function(property, defaultVal) {};

/**
* Indicates whether a property exists.
* @param {String} property Name of property.
*/
Titanium.App.Properties.hasProperty = function(property) {};

/**
* Returns an array of property names.
*/
Titanium.App.Properties.listProperties = function() {};

/**
* Removes a property if it exists, or does nothing otherwise.
* @param {String} property Name of property.
*/
Titanium.App.Properties.removeProperty = function(property) {};

/**
* Sets the value of a property as a boolean data type. The property will be created if it does not exist.
* @param {String} property Name of property.
* @param {Boolean} value Property value.
*/
Titanium.App.Properties.setBool = function(property, value) {};

/**
* Sets the value of a property as a double (double-precision, floating point) data type. The property will be created if it does not exist.
* @param {String} property Name of property.
* @param {Number} value Property value.
*/
Titanium.App.Properties.setDouble = function(property, value) {};

/**
* Sets the value of a property as an integer data type. The property will be created if it does not exist.
* @param {String} property Name of property.
* @param {Number} value Property value, within the range `-2,147,483,648` to `2,147,483,647`.
*/
Titanium.App.Properties.setInt = function(property, value) {};

/**
* Sets the value of a property as an array data type. The property will be created if it does not exist.
* @param {String} property Name of property.
* @param {Array<Object>} value Property value.
*/
Titanium.App.Properties.setList = function(property, value) {};

/**
* Sets the value of a property as an object data type. The property will be created if it does not exist.
* @param {String} property Name of property.
* @param {Object} value Property value.
*/
Titanium.App.Properties.setObject = function(property, value) {};

/**
* Sets the value of a property as a string data type. The property will be created if it does not exist.
* @param {String} property Name of property.
* @param {String} value Property value.
*/
Titanium.App.Properties.setString = function(property, value) {};
/**
* Fired when a property is changed.
* @event Titanium.App.Properties#change
* @type {Object}
*/
/**
* @extends Titanium.Proxy
* @since 1.5
* @requires iphone, ipad
*/
Titanium.App.iOS.BackgroundService = {
  /**
  * A local URL to a JavaScript file containing the code to run in the background.
  * @type String
  */
  url: null,
};

/**
* Stops the service from running during the current background session to conserve resources.
*/
Titanium.App.iOS.BackgroundService.stop = function() {};

/**
* Unregisters the background service.
*/
Titanium.App.iOS.BackgroundService.unregister = function() {};

/**
* @extends Titanium.Proxy
* @since 1.5
* @requires iphone, ipad
*/
Titanium.App.iOS.LocalNotification = {
};

/**
* Cancels the pending notification.
*/
Titanium.App.iOS.LocalNotification.cancel = function() {};

/**
* @extends Titanium.Proxy
* @since 4.3.0
* @requires iphone, ipad
* @fires Titanium.App.iOS.UserActivity#useractivitywillsave
* @fires Titanium.App.iOS.UserActivity#useractivitywascontinued
*/
Titanium.App.iOS.UserActivity = {
  /**
  * The activityType the user activity was created with.
  * @type String
  * @requires iphone, ipad
  */
  activityType: null,
  /**
  * An optional, user-visible title for this activity such as a document name or web page title.
  * @type String
  * @requires iphone, ipad
  */
  title: null,
  /**
  * The userInfo dictionary contains application-specific state needed to continue an activity on another device.
  * @type Dictionary
  * @requires iphone, ipad
  */
  userInfo: null,
  /**
  * When no suitable application is installed on a resuming device and the webPageURL is set the user activity will instead be continued in a web browser by loading this resource.
  * @type String
  * @requires iphone, ipad
  */
  webpageURL: null,
  /**
  * If set to true then this user activity will receive a useractivitywillsave event before being sent for continuation on another device.
  * @type Boolean
  * @requires iphone, ipad
  */
  needsSave: null,
  /**
  * An array of String keywords representing words or phrases that might help the user to find this activity in the application history.
  * @type Array<String>
  * @requires iphone, ipad
  */
  keyWords: null,
  /**
  * An array of String keys from the userInfo property which represent the minimal information about this user activity that should be stored for later restoration.
  * @type Array<String>
  * @requires iphone, ipad
  */
  requiredUserInfoKeys: null,
  /**
  * A local URL to a JavaScript file containing the code to run in the background.
  * @type Boolean
  * @requires iphone, ipad
  */
  eligibleForPublicIndexing: null,
  /**
  * Set to true if this user activity should be eligible for indexing for any user of this application
  * @type Boolean
  * @requires iphone, ipad
  */
  eligibleForSearch: null,
  /**
  * Set to true if this user activity should be eligible to be handed off to another device
  * @type Boolean
  * @requires iphone, ipad
  */
  eligibleForHandoff: null,
  /**
  * Absolute date after which this activity is no longer eligible to be indexed or handed off.
  * @type String
  * @requires iphone, ipad
  */
  expirationDate: null,
};

/**
* Marks the receiver as the activity currently in use by the user.
*/
Titanium.App.iOS.UserActivity.becomeCurrent = function() {};

/**
* Invalidate an activity when it's no longer eligible for continuation.
*/
Titanium.App.iOS.UserActivity.invalidate = function() {};

/**
* If this activity is the current activity, it should stop being so and set the current activity to nothing.
*/
Titanium.App.iOS.UserActivity.resignCurrent = function() {};
/**
* The user activity will be saved (to be continued or persisted). The receiver should update the activity with current activity state.
* @event Titanium.App.iOS.UserActivity#useractivitywillsave
* @type {Object}
* @type String activityType the activityType of the User Activity triggering the event
* @requires iphone, ipad
* @type String title The title of the User Activity if defined
* @requires iphone, ipad
* @type String webpageURL The webpageURL of the User Activity if defined
* @requires iphone, ipad
* @type Dictionary userInfo Dictionary object containing the userInfo data of the User Activity.
* @requires iphone, ipad
*/
/**
* The user activity was continued on another device.
* @event Titanium.App.iOS.UserActivity#useractivitywascontinued
* @type {Object}
* @type String activityType the activityType of the User Activity triggering the event
* @requires iphone, ipad
* @type String title The title of the User Activity if defined
* @requires iphone, ipad
* @type String webpageURL The webpageURL of the User Activity if defined
* @requires iphone, ipad
* @type Dictionary userInfo Dictionary object containing the userInfo data of the User Activity.
* @requires iphone, ipad
*/
/**
* @extends Titanium.App.Properties
* @since 4.0.0
* @requires iphone, ipad
*/
Titanium.App.iOS.UserDefaults = {
  /**
  * Sets the name of the suite to be used to access UserDefaults.
  * @type String
  */
  suiteName: null,
};


/**
* @extends Titanium.Proxy
* @since 3.4.0
* @requires iphone, ipad
*/
Titanium.App.iOS.UserNotificationAction = {
  /**
  * Selects how to activate the application.
  * @type Number
  */
  activationMode: null,
  /**
  * Set to true if the action requires the device to be unlocked.
  * @type Boolean
  */
  authenticationRequired: null,
  /**
  * Set to true if the action causes destructive behavior to the user's data or the application.
  * @type Boolean
  */
  destructive: null,
  /**
  * Identifier for this action. Used to identify the action the user pressed.
  * @type String
  */
  identifier: null,
  /**
  * Title of the button displayed in the notification.
  * @type String
  */
  title: null,
};


/**
* @extends Titanium.Proxy
* @since 3.4.0
* @requires iphone, ipad
*/
Titanium.App.iOS.UserNotificationCategory = {
  /**
  * Array of notification actions to associate with the group.
  * @type Array<Titanium.App.iOS.UserNotificationAction>
  */
  actionsForDefaultContext: null,
  /**
  * Array of notification actions to display for non-dialog-style notification.
  * @type Array<Titanium.App.iOS.UserNotificationAction>
  */
  actionsForMinimalContext: null,
  /**
  * Identifier for this category.
  * @type String
  */
  identifier: null,
};


/**
* @extends Titanium.Module
* @since 1.5
* @requires iphone, ipad
* @fires Titanium.App.iOS#notification
* @fires Titanium.App.iOS#localnotificationaction
* @fires Titanium.App.iOS#remotenotificationaction
* @fires Titanium.App.iOS#backgroundfetch
* @fires Titanium.App.iOS#silentpush
* @fires Titanium.App.iOS#backgroundtransfer
* @fires Titanium.App.iOS#downloadprogress
* @fires Titanium.App.iOS#downloadcompleted
* @fires Titanium.App.iOS#sessioncompleted
* @fires Titanium.App.iOS#sessioneventscompleted
* @fires Titanium.App.iOS#usernotificationsettings
* @fires Titanium.App.iOS#watchkitextensionrequest
* @fires Titanium.App.iOS#handoff
*/
Titanium.App.iOS = {
  /**
  * Convenience constant for system event "accessibilitylayoutchanged".
  * @type String
  */
  EVENT_ACCESSIBILITY_LAYOUT_CHANGED: null,
  /**
  * Convenience constant for system event "accessibilityscreenchanged".
  * @type String
  */
  EVENT_ACCESSIBILITY_SCREEN_CHANGED: null,
  /**
  * Use with [setMinimumBackgroundFetchInterval](Titanium.App.iOS.setMinimumBackgroundFetchInterval) method.Specifies the smallest fetch interval supported by the system.
  * @type Number
  */
  BACKGROUNDFETCHINTERVAL_MIN: null,
  /**
  * Use with [setMinimumBackgroundFetchInterval](Titanium.App.iOS.setMinimumBackgroundFetchInterval) method.Used to specify a fetch interval large enough to prevent fetch operations from occurring.
  * @type Number
  */
  BACKGROUNDFETCHINTERVAL_NEVER: null,
  /**
  * The application may not present any UI upon a notification being received.Use with the [types](UserNotificationSettings.types) property.
  * @type Number
  */
  USER_NOTIFICATION_TYPE_NONE: null,
  /**
  * The application may badge its icon upon a notification being received.Use with the [types](UserNotificationSettings.types) property.
  * @type Number
  */
  USER_NOTIFICATION_TYPE_BADGE: null,
  /**
  * The application may play a sound upon a notification being received.Use with the [types](UserNotificationSettings.types) property.
  * @type Number
  */
  USER_NOTIFICATION_TYPE_SOUND: null,
  /**
  * The application may display an alert upon a notification being received.Use with the [types](UserNotificationSettings.types) property.
  * @type Number
  */
  USER_NOTIFICATION_TYPE_ALERT: null,
  /**
  * The action will execute in background.  Use with the[activationMode](Titanium.App.iOS.UserNotificationAction.activationMode) property.
  * @type Number
  */
  USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND: null,
  /**
  * The action will launch the application and execute in the foreground.Use with the [activationMode](Titanium.App.iOS.UserNotificationAction.activationMode) property.
  * @type Number
  */
  USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND: null,
  /**
  * Notification types and user notification categories the application is registered to use(available on iOS 8 and later).
  * @type UserNotificationSettings
  */
  currentUserNotificationSettings: null,
  /**
  * Provides an Array of the NSUserActivityTypes keys defined within your Titanium project.(available on iOS 8 and later).
  * @type Array<string>
  */
  supportedUserActivityTypes: null,
  /**
  * Returns a URL to open the app's settings.
  * @type String
  */
  applicationOpenSettingsURL: null,
};

/**
* Creates and returns an instance of Titanium.App.iOS.UserDefaults.
* @since 4.0.0
* @param {Dictionary<Titanium.App.iOS.UserDefaults>} parameters Properties to set on a new object, including any defined by Titanium.App.iOS.UserDefaults except those marked not-creation or read-only.
*/
Titanium.App.iOS.createUserDefaults = function(parameters) {};

/**
* Cancels all scheduled local notifications.
*/
Titanium.App.iOS.cancelAllLocalNotifications = function() {};

/**
* Cancels a local notification.
* @param {Number|String} id Application-created ID of the local notification to cancel.To create an ID for the notification, set the `id` property in the `userInfo` dictionarypassed to the <Titanium.App.iOS.scheduleLocalNotification> method.
*/
Titanium.App.iOS.cancelLocalNotification = function(id) {};

/**
* Registers a service to run when the application is placed in the background.
* @param {Dictionary} params Parameters used to create the service. Must include a `url` property, to specify the local JavaScript file to execute when the application is placed in the background.
*/
Titanium.App.iOS.registerBackgroundService = function(params) {};

/**
* Registers the application to use the requested notification types and categories(for devices running iOS 8 or later).
* @since 3.4.0
* @param {UserNotificationSettings} params Parameters used to enroll the application in local notifications.
*/
Titanium.App.iOS.registerUserNotificationSettings = function(params) {};

/**
* Schedule a local notification.
* @param {NotificationParams} params Parameters used to create a notification.
*/
Titanium.App.iOS.scheduleLocalNotification = function(params) {};

/**
* Specifies the minimum amount of time that must elapse between background fetch operations.Available only on iOS 7 and later.
* @since 3.2.0
* @param {Number} fetchInterval The minimum number of seconds that must elapse before another background fetch can be initiated.This value is advisory only and does not indicate the exact amount of time expected betweenfetch operations.
*/
Titanium.App.iOS.setMinimumBackgroundFetchInterval = function(fetchInterval) {};

/**
* Marks the end of the app execution after initiating the download operation. Available only on iOS 7 and later.
* @since 3.2.0
* @param {String} handlerID Unique string identifer for the event (`backgroundfetch`, `silentpush` or `backgroundtransfer`)that initiated the background opertation mode.
*/
Titanium.App.iOS.endBackgroundHandler = function(handlerID) {};

/**
* Marks the end of an openParentApplication:reply execution by a WatchKit extension.Available only on iOS 8.2 and later.
* @deprecated since 4.3.0
* @since 4.1.0
* @param {String} handlerId Unique string identifer for the event (`watchkitextensionrequest`)that initiated from the WatchKit extension calling the openParentApplication:reply method.
* @param {Dictionary} userInfo Custom data object which will be passed in the reply method to your WatchKit extension.
*/
Titanium.App.iOS.sendWatchExtensionReply = function(handlerId, userInfo) {};
/**
* Fired when a local notification is received by the application.
* @event Titanium.App.iOS#notification
* @type {Object}
* @type String alertAction Alert button text ('View', by default) or slider text ('slide to unlock...', by default).
* @type String alertBody Alert message.
* @type String alertLaunchImage Image displayed instead of `Default.png` when launching the application.
* @type Number badge Application badge value.
* @type Date date Date and time when the notification was configured to fire.
* @type String sound Path to the sound file configured to play when the notification was fired.
* @type String timezone Timezone of the date when the notification was configured to fire.
* @type Dictionary userInfo Custom data object.
*/
/**
* Fired when a user selects an action for an interactive local notification.
* @event Titanium.App.iOS#localnotificationaction
* @type {Object}
* @type String alertAction Alert button text ('Open', by default) or slider text ('slide to unlock...', by default).
* @type String alertBody Alert message.
* @type String alertLaunchImage Image displayed instead of `Default.png` when launching the application.
* @type Number badge Application badge value.
* @type String category Identifier of the category of the interactive notification.
* @type Date date Date and time when the notification was configured to fire.
* @type String identifier Identifier of the action that was selected of the interactive notification.
* @type String sound Path to the sound file configured to play when the notification was fired.
* @type String timezone Timezone of the date when the notification was configured to fire.
* @type Dictionary userInfo Custom data object.
*/
/**
* Fired when a user selects an action for an interactive remote notification.
* @event Titanium.App.iOS#remotenotificationaction
* @type {Object}
* @type Dictionary data The payload passed to the Apple Push Notification Service.
* @type String category Identifier of the category of the interactive notification.
* @type String identifier Identifier of the action that was selected of the interactive notification.
*/
/**
* Fired when the application is woken up for a fetch operation. Available only on iOS 7 and later.
* @event Titanium.App.iOS#backgroundfetch
* @type {Object}
* @type String handlerId Unique string identifer for the `backgroundfetch` event. This identifier should be passed as the argumentto the [endBackgroundHandler](Titanium.App.iOS.endBackgroundHandler) method.
*/
/**
* Fired when the application is woken up by a silent remote notification. Available only on iOS 7 and later.
* @event Titanium.App.iOS#silentpush
* @type {Object}
* @type String handlerId Unique string identifer for the `silentpush` event. This identifier should be passed as the argumentto the [endBackgroundHandler](Titanium.App.iOS.endBackgroundHandler) method.
*/
/**
* Fired when the events related to a [urlSession](Modules.URLSession) are waiting to be processed.Available only on iOS 7 and later.
* @event Titanium.App.iOS#backgroundtransfer
* @type {Object}
* @type String handlerId Unique string identifer for the `backgroundtransfer` event. This identifier should be passed as the argumentto the [endBackgroundHandler](Titanium.App.iOS.endBackgroundHandler) method.
* @type String sessionId The identifier of the URL session requiring attention. If your app was just launched,you can use this identifier to create a new `urlSession` object that can receive the events.
*/
/**
* Fired periodically to inform the app about the download's progress of a [urlSession](Modules.URLSession).Available only on iOS 7 and later.
* @event Titanium.App.iOS#downloadprogress
* @type {Object}
* @type Number taskIdentifier The `urlSession` download task's identifer.
* @type Number bytesWritten The number of bytes transferred since the last time this event was fired.
* @type Number totalBytesWritten The total number of bytes transferred so far.
* @type Number totalBytesExpectedToWrite The expected length of the file, as provided by the Content-Length header. If thisheader was not provided, the value is zero.
*/
/**
* Fired to indicate that a [urlSession's](Modules.URLSession) download task has finished downloading.Available only on iOS 7 and later.
* @event Titanium.App.iOS#downloadcompleted
* @type {Object}
* @type Number taskIdentifier The `urlSession` download task's identifer.
* @type Titanium.Blob data The downloaded data as a Titanium.Blob object.
*/
/**
* Fired to indicate that a [urlSession](Modules.URLSession) task finished transferring data.Available only on iOS 7 and later.
* @event Titanium.App.iOS#sessioncompleted
* @type {Object}
* @type Number taskIdentifier The `urlSession` download task's identifer.
* @type Boolean success Indicates if the operation succeeded. Returns true if download succeeded, false otherwise.
* @type Number errorCode The error code of the error, if any (potentially system-dependent).
* @type String message A string containing the localized description of the error.
*/
/**
* Fired to indicate that all messages enqueued for a [urlSession](Modules.URLSession) have been delivered.Available only on iOS 7 and later.
* @event Titanium.App.iOS#sessioneventscompleted
* @type {Object}
*/
/**
* Fired when the user notification settings are registered (available for iOS 8 and later).
* @event Titanium.App.iOS#usernotificationsettings
* @type {Object}
* @type Array<Number> types Notification types the application is registered to use.
* @type Array<Titanium.App.iOS.UserNotificationCategory> categories Set of categories of user notification actions the application is registered to use.
*/
/**
* Fired when openParentApplication:reply is called from a WatchKit extension. Available only on iOS 8.2 and later.
* @event Titanium.App.iOS#watchkitextensionrequest
* @type {Object}
* @type String handlerId Unique string identifer for the `watchkitextensionrequest` event. This identifier should be passed an argumentto the [sendWatchExtensionReply](Titanium.App.iOS.sendWatchExtensionReply) method.
* @type Dictionary userInfo The payload passed to the openParentApplication:reply method from the WatchKit extension.
*/
/**
* Fired when iOS Handoff calls continueUserActivity. Available only on iOS 8.2 and later.
* @event Titanium.App.iOS#handoff
* @type {Object}
* @type String activityType Unique string identifer for handoff user activity. This identifier must be defined in your tiapp.xml file.
* @type String title The optional title provided to the handoff user activity.
* @type String webpageURL The optional webpageURL provided to the handoff user activity.
* @type Dictionary userInfo The optional userInfo provided to the handoff user activity.  The userInfo is a custom dictionary and can contain any information needed to create your handoff session.
*/
/**
* @since 1.7
* @requires iphone, ipad
*/
NotificationParams = {
  /**
  * Alert button text ('Open', by default) or slider text ('slide to unlock...', by default)to display.
  * @type String
  */
  alertAction: null,
  /**
  * Alert message to display.
  * @type String
  */
  alertBody: null,
  /**
  * Image to display instead of `Default.png` when launching the application.
  * @type String
  */
  alertLaunchImage: null,
  /**
  * Application badge value.
  * @type Number
  */
  badge: null,
  /**
  * String identifier of category of actions to be displayed for an interactivenotification (only for iOS 8 and above).
  * @type String
  */
  category: null,
  /**
  * Date and time for the notification to occur.
  * @type Date
  */
  date: null,
  /**
  * Interval to repeat the notification. One of `weekly`, `daily`, `yearly,` `monthly`.
  * @type String
  */
  repeat: null,
  /**
  * Path to the sound file to play when notification occurs, relative to the `Resources` folder.
  * @type String
  */
  sound: null,
  /**
  * Timezone of the date configured for the notification. If not set, the system timezone is used.
  * @type String
  */
  timezone: null,
  /**
  * Data to pass to the application with the notification event.
  * @type Dictionary
  */
  userInfo: null,
};


/**
* @since 3.4.0
* @requires iphone, ipad
*/
UserNotificationSettings = {
  /**
  * Notification types to use.
  * @type Array<Number>
  */
  types: null,
  /**
  * Set of categories of user notification actions required by the applicaiton to use.
  * @type Array<Titanium.App.iOS.UserNotificationCategory>
  */
  categories: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.Blob = {
  /**
  * File object represented by this blob, or `null` if this blob is notassociated with a file.
  * @type Titanium.Filesystem.File
  */
  file: null,
  /**
  * Length of this blob in bytes.
  * @type Number
  */
  length: null,
  /**
  * UTF-8 string representation of the data in this blob.
  * @type String
  */
  text: null,
  /**
  * Mime type of the data in this blob.
  * @type String
  */
  mimeType: null,
  /**
  * If this blob represents an image, this is the height of the image in pixels.
  * @type Number
  */
  height: null,
  /**
  * If this blob represents an image, this is the width of the image in pixels.
  * @type Number
  */
  width: null,
  /**
  * If this blob represents a [File](Titanium.Filesystem.File), this is the file URLthat represents it.
  * @type String
  */
  nativePath: null,
  /**
  * Size of the blob in pixels (for image blobs) or bytes (for all other blobs).
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  size: null,
};

/**
* Returns a string representation of this blob.
*/
Titanium.Blob.toString = function() {};

/**
* Appends the data from another blob to this blob.
* @param {Titanium.Blob} blob Blob to append to this blob.
*/
Titanium.Blob.append = function(blob) {};

/**
* Creates a new blob by cropping the underlying image to the specified dimensions.
* @since [object Object]
* @param {Dictionary<ImageAsCroppedDict>} options Image cropping options.
*/
Titanium.Blob.imageAsCropped = function(options) {};

/**
* Creates a new blob by resizing and scaling the underlying image to the specified dimensions.
* @since [object Object]
* @param {Number} width Width to resize this image to.
* @param {Number} height Height to resize this image to.
*/
Titanium.Blob.imageAsResized = function(width, height) {};

/**
* Returns a thumbnail version of the underlying image, optionally with a border and rounded corners.
* @since [object Object]
* @param {Number} size Size of the thumbnail, in either width or height.
* @param {Number} borderSize Width of the thumbnail's border.
* @param {Number} cornerRadius Radius of the thumbnail's corners.
*/
Titanium.Blob.imageAsThumbnail = function(size, borderSize, cornerRadius) {};

/**
* Returns a copy of the underlying image with an added alpha channel.
* @since [object Object]
*/
Titanium.Blob.imageWithAlpha = function() {};

/**
* Returns a copy of the underlying image with rounded corners added.
* @since [object Object]
* @param {Number} cornerSize Size of the rounded corners in pixels.
* @param {Number} borderSize Width of the border in pixels.
*/
Titanium.Blob.imageWithRoundedCorner = function(cornerSize, borderSize) {};

/**
* Returns a copy of the underlying image with an added transparent border.
* @since [object Object]
* @param {Number} size Width of the transparent border in pixels.
*/
Titanium.Blob.imageWithTransparentBorder = function(size) {};

/**
*/
ImageAsCroppedDict = {
  /**
  * Width to crop this image to.
  * @type Number
  */
  width: null,
  /**
  * Height to crop this image to.
  * @type Number
  */
  height: null,
  /**
  * Left coordinate of the cropped rectangle within the source image.
  * @type Number
  */
  x: null,
  /**
  * Top coordinate of the cropped rectangle within the source image.
  * @type Number
  */
  y: null,
};


/**
* @extends Titanium.IOStream
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
Titanium.BlobStream = {
};


/**
* @extends Titanium.Proxy
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
Titanium.Buffer = {
  /**
  * Length of the buffer in bytes.
  * @type Number
  */
  length: null,
  /**
  * Data to be encoded.
  * @type Number,String
  */
  value: null,
  /**
  * The type of data encoding to use with `value`.
  * @type String
  */
  type: null,
  /**
  * Byte order of this buffer.
  * @type Number
  */
  byteOrder: null,
};

/**
* Appends `sourceBuffer` to the this buffer.
* @param {Titanium.Buffer} sourceBuffer Buffer to append to this buffer.
* @param {Number} sourceOffset Offset to start reading buffer data from.If specified, `sourceLength` must also be specified.
* @param {Number} sourceLength Number of bytes to read from `sourceBuffer`.If specified, `sourceOffset` must also be specified.
*/
Titanium.Buffer.append = function(sourceBuffer, sourceOffset, sourceLength) {};

/**
* Inserts data from `sourceBuffer` into this buffer at `offset`.
* @param {Titanium.Buffer} sourceBuffer Buffer holding data to insert into this buffer.
* @param {Number} offset Offset in this buffer to insert the first byte copied from`sourceBuffer`.
* @param {Number} sourceOffset Offset in `sourceBuffer` of the first byte to insert.If specified, `sourceLength` must be specified as well.
* @param {Number} sourceLength Number of bytes to insert from `sourceBuffer`.If specified, `sourceOffset` must be specified as well.
*/
Titanium.Buffer.insert = function(sourceBuffer, offset, sourceOffset, sourceLength) {};

/**
* Copies data from `sourceBuffer` into the current buffer at `offset`.
* @param {Titanium.Buffer} sourceBuffer Buffer to copy data from.
* @param {Number} offset Offset in this buffer for the first byte of the copied data.
* @param {Number} sourceOffset Offset in `sourceBuffer` to copy data from.If specified, `sourceLength` must be specified as well.
* @param {Number} sourceLength Number of bytes to copy from `sourceBuffer`.If specified, `sourceOffset` must be specified as well.
*/
Titanium.Buffer.copy = function(sourceBuffer, offset, sourceOffset, sourceLength) {};

/**
* Creates a complete or partial copy of this buffer.
* @param {Number} offset Offset of first byte of this buffer to clone.If specified, `length` must be specified as well.
* @param {Number} length Number of bytes of data to clone.
*/
Titanium.Buffer.clone = function(offset, length) {};

/**
* Fills this buffer with the specified byte value.
* @param {Number} fillByte Byte to fill buffer with.
* @param {Number} offset Offset of the first byte to set to `fillByte`.
* @param {Number} length Number of bytes to fill.
*/
Titanium.Buffer.fill = function(fillByte, offset, length) {};

/**
* Clears this buffer's contents but does not change the size of the buffer.
*/
Titanium.Buffer.clear = function() {};

/**
* Releases the space allocated to the buffer, and sets its length to 0.
*/
Titanium.Buffer.release = function() {};

/**
* Converts this buffer to a String.
*/
Titanium.Buffer.toString = function() {};

/**
* Converts this buffer to a <Titanium.Blob>.
*/
Titanium.Buffer.toBlob = function() {};

/**
* @extends Titanium.IOStream
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
Titanium.BufferStream = {
};


/**
* @extends Titanium.Proxy
* @since [object Object]
* @requires android, iphone, ipad
*/
Titanium.Calendar.Alert = {
  /**
  * The absolute date for the alarm.
  * @type Date
  * @requires iphone, ipad
  */
  absoluteDate: null,
  /**
  * The offset from the start of an event, at which the alarm fires.
  * @type Number
  * @requires iphone, ipad
  */
  relativeOffset: null,
  /**
  * Date/time at which this alert alarm is set to trigger.
  * @type Date
  * @requires android
  */
  alarmTime: null,
  /**
  * Start date/time for the corresponding event.
  * @type Date
  * @requires android
  */
  begin: null,
  /**
  * End date/time for the corresponding event.
  * @type Date
  * @requires android
  */
  end: null,
  /**
  * Identifier of the event for which this alert is set.
  * @type Number
  */
  eventId: null,
  /**
  * Identifier of this alert.
  * @type String
  * @requires android
  */
  id: null,
  /**
  * Reminder notice period in minutes, that determines how long prior to the event this alert should trigger.
  * @type Number
  * @requires android
  */
  minutes: null,
  /**
  * The current state of the alert.
  * @type Number
  * @requires android
  */
  state: null,
};


/**
* @extends Titanium.Module
* @since [object Object]
* @requires android, iphone, ipad
* @fires Titanium.Calendar#change
*/
Titanium.Calendar = {
  /**
  * Reminder alert delivery method.
  * @type Number
  * @requires android
  */
  METHOD_ALERT: null,
  /**
  * Reminder default delivery method.
  * @type Number
  * @requires android
  */
  METHOD_DEFAULT: null,
  /**
  * Reminder email delivery method.
  * @type Number
  * @requires android
  */
  METHOD_EMAIL: null,
  /**
  * Reminder SMS delivery method.
  * @type Number
  * @requires android
  */
  METHOD_SMS: null,
  /**
  * Alert dismissed state.
  * @type Number
  * @requires android
  */
  STATE_DISMISSED: null,
  /**
  * Alert fired state.
  * @type Number
  * @requires android
  */
  STATE_FIRED: null,
  /**
  * Alert scheduled status.
  * @type Number
  * @requires android
  */
  STATE_SCHEDULED: null,
  /**
  * Event has no status.
  * @type Number
  * @requires iphone, ipad
  */
  STATUS_NONE: null,
  /**
  * Event canceled status.
  * @type Number
  * @requires android, iphone, ipad
  */
  STATUS_CANCELED: null,
  /**
  * Event confirmed status.
  * @type Number
  * @requires android, iphone, ipad
  */
  STATUS_CONFIRMED: null,
  /**
  * Event tentative status.
  * @type Number
  * @requires android, iphone, ipad
  */
  STATUS_TENTATIVE: null,
  /**
  * Availability settings are not supported by the event's calendar.
  * @type Number
  * @requires iphone, ipad
  */
  AVAILABILITY_NOTSUPPORTED: null,
  /**
  * Event has a busy availability setting.
  * @type Number
  * @requires iphone, ipad
  */
  AVAILABILITY_BUSY: null,
  /**
  * Event has a free availability setting.
  * @type Number
  * @requires iphone, ipad
  */
  AVAILABILITY_FREE: null,
  /**
  * Event has a tentative availability setting.
  * @type Number
  * @requires iphone, ipad
  */
  AVAILABILITY_TENTATIVE: null,
  /**
  * Event has a tentative availability setting.
  * @type Number
  * @requires iphone, ipad
  */
  AVAILABILITY_UNAVAILABLE: null,
  /**
  * A [eventsAuthorization](Titanium.Calendar.eventsAuthorization) value indicating that the application is authorized to use events in the Calendar.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_AUTHORIZED: null,
  /**
  * A [eventsAuthorization](Titanium.Calendar.eventsAuthorization) value indicating that the application is not authorized to use events in the Calendar.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_DENIED: null,
  /**
  * A [eventsAuthorization](Titanium.Calendar.eventsAuthorization) value indicating that the application is not authorized to use events in the Calendar.the user cannot change this application's status.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_RESTRICTED: null,
  /**
  * A [eventsAuthorization](Titanium.Calendar.eventsAuthorization) value indicating that the authorization state is unknown.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_UNKNOWN: null,
  /**
  * A [save](Titanium.Calendar.Event.save)/[remove](Titanium.Calendar.Event.remove) event value, indicating modifications to this event instance should affect only this instance.
  * @type Number
  * @requires iphone, ipad
  */
  SPAN_THISEVENT: null,
  /**
  * A [save](Titanium.Calendar.Event.save)/[remove](Titanium.Calendar.Event.remove) event value, indicating modifications to this event instance should also affect future instances of this event.
  * @type Number
  * @requires iphone, ipad
  */
  SPAN_FUTUREEVENTS: null,
  /**
  * Indicates a daily recurrence rule for a events reccurance frequency.
  * @type Number
  * @requires iphone, ipad
  */
  RECURRENCEFREQUENCY_DAILY: null,
  /**
  * Indicates a weekly recurrence rule for a events reccurance frequency.
  * @type Number
  * @requires iphone, ipad
  */
  RECURRENCEFREQUENCY_WEEKLY: null,
  /**
  * Indicates a monthly recurrence rule for a events reccurance frequency.
  * @type Number
  * @requires iphone, ipad
  */
  RECURRENCEFREQUENCY_MONTHLY: null,
  /**
  * Indicates a yearly recurrence rule for a events reccurance frequency.
  * @type Number
  * @requires iphone, ipad
  */
  RECURRENCEFREQUENCY_YEARLY: null,
  /**
  * Event confidential visibility.
  * @type Number
  * @requires android
  */
  VISIBILITY_CONFIDENTIAL: null,
  /**
  * Event default visibility.
  * @type Number
  * @requires android
  */
  VISIBILITY_DEFAULT: null,
  /**
  * Event private visibility.
  * @type Number
  * @requires android
  */
  VISIBILITY_PRIVATE: null,
  /**
  * Event public visibility.
  * @type Number
  * @requires android
  */
  VISIBILITY_PUBLIC: null,
  /**
  * Returns an authorization constant indicating if the application has access to the events in the EventKit.
  * @type Number
  * @requires iphone, ipad
  */
  eventsAuthorization: null,
  /**
  * All alerts in selected calendars.
  * @type Array<Titanium.Calendar.Alert>
  * @requires android
  */
  allAlerts: null,
  /**
  * All calendars known to the native calendar app.
  * @type Array<Titanium.Calendar.Calendar>
  * @requires android, iphone, ipad
  */
  allCalendars: null,
  /**
  * All calendars known to the native calendar app that can add, edit, and delete items in the calendar.
  * @type Array<Titanium.Calendar.Calendar>
  * @requires iphone, ipad
  */
  allEditableCalendars: null,
  /**
  * All calendars selected within the native calendar app, which may be a subset of `allCalendars`. 
  * @type Array<Titanium.Calendar.Calendar>
  * @requires android
  */
  selectableCalendars: null,
  /**
  * Calendar that events are added to by default, as specified by user settings.
  * @type Titanium.Calendar.Calendar
  * @requires iphone, ipad
  */
  defaultCalendar: null,
};

/**
* Gets the calendar with the specified identifier.
* @param {String} id Identifier of the calendar.
*/
Titanium.Calendar.getCalendarById = function(id) {};

/**
* If authorization is unknown, will bring up a dialog requesting permission.
* @param {Callback<EventsAuthorizationResponse>} callback Callback function to execute when when authorization is no longer unknown.
*/
Titanium.Calendar.requestEventsAuthorization = function(callback) {};
/**
* Fired when the database backing the EventKit module is modified.
* @event Titanium.Calendar#change
* @type {Object}
*/
/**
* @since 3.1.0
* @requires iphone, ipad
*/
EventsAuthorizationResponse = {
  /**
  * Indicates whether the request succeeded.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code, if any returned.
  * @type Number
  */
  code: null,
};


/**
* @extends Titanium.Proxy
* @since [object Object]
* @requires android, iphone, ipad
*/
Titanium.Calendar.Calendar = {
  /**
  * Indicates whether this calendar can be edited or deleted.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  hidden: null,
  /**
  * Identifier of this calendar. Available only in iOS 5.0 and above.
  * @type String
  * @requires android, iphone, ipad
  */
  id: null,
  /**
  * Display name of this calendar.
  * @type String
  * @requires android, iphone, ipad
  */
  name: null,
  /**
  * Indicates whether the calendar is selected.
  * @type Boolean
  * @requires android
  */
  selected: null,
};

/**
* Creates an event in this calendar.
* @param {Dictionary<Titanium.Calendar.Event>} properties Properties of the event
*/
Titanium.Calendar.Calendar.createEvent = function(properties) {};

/**
* Gets the event with the specified identifier.
* @param {Number} id Identifier of the event.
*/
Titanium.Calendar.Calendar.getEventById = function(id) {};

/**
* Gets events that occur between two dates.
* @param {Date} date1 Start date.
* @param {Date} date2 End date.
*/
Titanium.Calendar.Calendar.getEventsBetweenDates = function(date1, date2) {};

/**
* Gets events that occur on a specified date.
* @param {Number} year Year of the events.
* @param {Number} month Month of the events, as a zero-based integer with January at 0 and December at 11.
* @param {Number} day Day of the month of the events.
*/
Titanium.Calendar.Calendar.getEventsInDate = function(year, month, day) {};

/**
* Gets events that occur during a specified month.
* @param {Number} year Year of the events.
* @param {Number} month Month of the events, as a zero-based integer with January at 0 and December at 11.
*/
Titanium.Calendar.Calendar.getEventsInMonth = function(year, month) {};

/**
* Gets all events that occur during a specified year.
* @param {Number} year Year of the events.
*/
Titanium.Calendar.Calendar.getEventsInYear = function(year) {};

/**
* @extends Titanium.Proxy
* @since [object Object]
* @requires android, iphone, ipad
*/
Titanium.Calendar.Event = {
  /**
  * Alarms associated with the calendar item, as an array of <Titanium.Calendar.Alert> objects.
  * @type Array<Titanium.Calendar.Alert>
  * @requires android, iphone, ipad
  */
  alerts: null,
  /**
  * Indicates whether this event is all day.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  allDay: null,
  /**
  * Start date/time of this event.
  * @type Date
  * @requires android, iphone, ipad
  */
  begin: null,
  /**
  * Notes for this event.
  * @type String
  * @requires iphone, ipad
  */
  notes: null,
  /**
  * Description of this event.
  * @type String
  * @requires android
  */
  description: null,
  /**
  * End date/time of this event.
  * @type Date
  * @requires android, iphone, ipad
  */
  end: null,
  /**
  * Extended properties of this event.
  * @type Dictionary
  * @requires android
  */
  extendedProperties: null,
  /**
  * Indicates whether an alarm is scheduled for this event.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  hasAlarm: null,
  /**
  * Identifier of this event.
  * @type String
  * @requires android, iphone, ipad
  */
  id: null,
  /**
  * Location of this event.
  * @type String
  * @requires android, iphone, ipad
  */
  location: null,
  /**
  * Existing reminders for this event.
  * @type Array<Titanium.Calendar.Reminder>
  * @requires android
  */
  reminders: null,
  /**
  * Status of this event.
  * @type Number
  * @requires android, iphone, ipad
  */
  status: null,
  /**
  * Availability of this event.
  * @type Number
  * @requires iphone, ipad
  */
  availability: null,
  /**
  * Boolean value that indicates whether an event is a detached instance of a repeating event.
  * @type Boolean
  * @requires iphone, ipad
  */
  isDetached: null,
  /**
  * Title of this event.
  * @type String
  * @requires android, iphone, ipad
  */
  title: null,
  /**
  * Recurrence rule associated with the event. (Available in iOS 4.0 through iOS 5.1.)
  * @type Titanium.Calendar.RecurrenceRule
  * @requires iphone, ipad
  */
  recurenceRule: null,
  /**
  * The recurrence rules for the calendar item. (Available in iOS 5.1 and above.)
  * @type Array<Titanium.Calendar.RecurrenceRule>
  * @requires iphone, ipad
  */
  recurenceRules: null,
  /**
  * Visibility of this event.
  * @type Number
  * @requires android
  */
  visibility: null,
};

/**
* Creates an alert for this event.
* @param {Dictionary<Titanium.Calendar.Alert>} data Properties for the alert.
*/
Titanium.Calendar.Event.createAlert = function(data) {};

/**
* Creates a reminder for this event.
* @param {Dictionary<Titanium.Calendar.Reminder>} data Properties for the reminder.
*/
Titanium.Calendar.Event.createReminder = function(data) {};

/**
* Gets the value of the specified extended property.
* @param {String} name Name of an existing extended property.
*/
Titanium.Calendar.Event.getExtendedProperty = function(name) {};

/**
* Sets the value of the specified extended property.
* @param {String} name Property name.
* @param {String} value Property value.
*/
Titanium.Calendar.Event.setExtendedProperty = function(name, value) {};

/**
* Creates an recurrence pattern for a recurring event.All of the properties for the recurrence rule must be set during creation. The recurrence rule properties cannot be modified.
* @param {Dictionary<Titanium.Calendar.RecurrenceRule>} data Properties for the recurrence rule.
*/
Titanium.Calendar.Event.createRecurenceRule = function(data) {};

/**
* Saves changes to an event permanently.
* @param {Number} span The span to use. Indicates whether the save affects future instances of the event in the case of a recurring event.
*/
Titanium.Calendar.Event.save = function(span) {};

/**
* Removes an event from the event store.
* @param {Number} span The span to use. Indicates whether to remove future instances of the event in the case of a recurring event.
*/
Titanium.Calendar.Event.remove = function(span) {};

/**
* Updates the event's data with the current information in the Calendar database.
*/
Titanium.Calendar.Event.refresh = function() {};

/**
* Adds a recurrence rule to the recurrence rule array.
* @param {Titanium.Calendar.RecurrenceRule} rule The recurrence rule to be added.
*/
Titanium.Calendar.Event.addRecurrenceRule = function(rule) {};

/**
* Removes a recurrence rule to the recurrence rule array.
* @param {Titanium.Calendar.RecurrenceRule} rule The recurrence rule to be removed.
*/
Titanium.Calendar.Event.removeRecurenceRule = function(rule) {};

/**
* @extends Titanium.Proxy
* @since 3.1.0
* @requires iphone, ipad
*/
Titanium.Calendar.RecurrenceRule = {
  /**
  * Identifier for the recurrence rule's calendar.
  * @type String
  */
  calendarID: null,
  /**
  * Frequency of the recurrence rule.
  * @type Number
  */
  frequency: null,
  /**
  * The interval between instances of this recurrence. For example, a weekly recurrence rule with an interval of 2 occurs every other week. Must be greater than 0.
  * @type Number
  */
  interval: null,
  /**
  * The days of the week that the event occurs, as an Dictionay of `daysOfWeek` and `Week`. 
  * @type daysOfTheWeekDictionary
  */
  daysOfTheWeek: null,
  /**
  * The days of the month that the event occurs, as an array of number objects. Values can be from 1 to 31 and from -1 to -31. This parameter is only valid for recurrence rules of type [RECURRENCEFREQUENCY_MONTHLY](Titanium.Calendar.RECURRENCEFREQUENCY_MONTHLY).
  * @type Array<Number>
  */
  daysOfTheMonth: null,
  /**
  * The months of the year that the event occurs, as an array of Number objects. Values can be from 1 to 12. This parameter is only valid for recurrence rules of type [RECURRENCEFREQUENCY_YEARLY](Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY).
  * @type Array<Number>
  */
  monthsOfTheYear: null,
  /**
  * The weeks of the year that the event occurs, as an array of number objects. Values can be from 1 to 53 and from -1 to -53. This parameter is only valid for recurrence rules of type [RECURRENCEFREQUENCY_YEARLY](Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY).
  * @type Array<Number>
  */
  weeksOfTheYear: null,
  /**
  * The days of the year that the event occurs, as an array of number objects. Values can be from 1 to 366 and from -1 to -366. This parameter is only valid for recurrence rules of type [RECURRENCEFREQUENCY_YEARLY](Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY).
  * @type Array<Number>
  */
  daysOfTheYear: null,
  /**
  * An array of ordinal numbers that filters which recurrences to include in the recurrence rule's frequency. For example, a yearly recurrence rule that has a [daysOfTheWeek](Titanium.Calendar.RecurrenceRule.daysOfTheWeek) value that specifies Monday through Friday, and a `setPositions` array containing 2 and -1, occurs only on the second weekday and last weekday of every year. 
  * @type Array<Number>
  */
  setPositions: null,
  /**
  * End of a recurrence rule.
  * @type recurrenceEndDictionary
  */
  end: null,
};


/**
* @since 3.1.0
* @requires iphone, ipad
*/
daysOfTheWeekDictionary = {
  /**
  * The day of the week. Values are from 1 to 7, with Sunday being 1.
  * @type Number
  */
  daysOfWeek: null,
  /**
  * The week number of the day of the week.Values range from -53 to 53. A negative value indicates a value from the end of the range. 0 indicates the week number is irrelevant.
  * @type Number
  */
  week: null,
};


/**
* @since 3.1.0
* @requires iphone, ipad
*/
recurrenceEndDictionary = {
  /**
  * End date of the recurrence end, or undefined if the recurrence end is count-based.
  * @type Date
  */
  endDate: null,
  /**
  * Occurrence count of the recurrence end, or 0 if the recurrence end is date-based.
  * @type Number
  */
  occurrenceCount: null,
};


/**
* @extends Titanium.Proxy
* @since 3.2.0
* @requires android
*/
Titanium.Calendar.Reminder = {
  /**
  * Identifier of this reminder.
  * @type String
  */
  id: null,
  /**
  * Method by which this reminder will be delivered.
  * @type Number
  */
  method: null,
  /**
  * Reminder notice period in minutes, that determines how long prior to the event this reminder should trigger.
  * @type Number
  */
  minutes: null,
};


/**
* @extends Titanium.Module
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
Titanium.Codec = {
  /**
  * ASCII character encoding..
  * @type String
  */
  CHARSET_ASCII: null,
  /**
  * ISO 8859-1 (Latin-1) character encoding.
  * @type String
  */
  CHARSET_ISO_LATIN_1: null,
  /**
  * UTF-8 character encoding.
  * @type String
  */
  CHARSET_UTF8: null,
  /**
  * UTF-16 character encoding with default byte order.
  * @type String
  */
  CHARSET_UTF16: null,
  /**
  * UTF-16 character encoding with big endian byte order.
  * @type String
  */
  CHARSET_UTF16BE: null,
  /**
  * UTF-16 character encoding with little endian byte order.
  * @type String
  */
  CHARSET_UTF16LE: null,
  /**
  * 8-bit integer encoding type.
  * @type String
  */
  TYPE_BYTE: null,
  /**
  * 16-bit integer encoding type.
  * @type String
  */
  TYPE_SHORT: null,
  /**
  * 32-bit integer encoding type.
  * @type String
  */
  TYPE_INT: null,
  /**
  * 32-bit single precision floating-point type.
  * @type String
  */
  TYPE_FLOAT: null,
  /**
  * 64-bit integer encoding type.
  * @type String
  */
  TYPE_LONG: null,
  /**
  * 64-bit double precision floating-point type.
  * @type String
  */
  TYPE_DOUBLE: null,
  /**
  * Big endian (network) byte order -- that is, the most significant byte first.
  * @type Number
  */
  BIG_ENDIAN: null,
  /**
  * Little endian byte order -- that is, the least significant byte first.
  * @type Number
  */
  LITTLE_ENDIAN: null,
};

/**
* Get the OS native byte order (either <Titanium.Codec.BIG_ENDIAN> or<Titanium.Codec.LITTLE_ENDIAN>).
*/
Titanium.Codec.getNativeByteOrder = function() {};

/**
* Encodes a number and writes it to a buffer.
* @param {EncodeNumberDict} options Named parameters.
*/
Titanium.Codec.encodeNumber = function(options) {};

/**
* Decodes a number from the `source` buffer using the specified data type.
* @param {DecodeNumberDict} options Named parameters.
*/
Titanium.Codec.decodeNumber = function(options) {};

/**
* Encodes a string into a series of bytes in a buffer using the specified character set.
* @param {Dictionary<EncodeStringDict>} options Named parameters.
*/
Titanium.Codec.encodeString = function(options) {};

/**
* Decodes the source buffer into a String using the supplied character set.
* @param {DecodeStringDict} options Named parameters.
*/
Titanium.Codec.decodeString = function(options) {};

/**
*/
EncodeNumberDict = {
  /**
  * Number to encode.
  * @type Number
  */
  source: null,
  /**
  * Destination buffer.
  * @type Titanium.Buffer
  */
  dest: null,
  /**
  * Encoding type to use.
  * @type String
  */
  type: null,
  /**
  * Index in the `dest` buffer of the first byte of encoded data.
  * @type Number
  * @requires android, iphone, ipad
  */
  position: null,
  /**
  * Byte order to encode with.
  * @type Number
  */
  byteOrder: null,
};


/**
*/
DecodeNumberDict = {
  /**
  * Buffer to decode.
  * @type Titanium.Buffer
  */
  source: null,
  /**
  * The encoding type to use.
  * @type String
  */
  type: null,
  /**
  * Index in the `source` buffer of the first byte of data to decode.
  * @type Number
  * @requires android, iphone, ipad
  */
  position: null,
  /**
  * byte order to decode with.
  * @type Number
  * @requires android, iphone, ipad
  */
  byteOrder: null,
};


/**
*/
EncodeStringDict = {
  /**
  * Source string to encode.
  * @type String
  */
  source: null,
  /**
  * Destination buffer.
  * @type Titanium.Buffer
  */
  dest: null,
  /**
  * Index in the `dest` buffer of the first byte of the encoded string.
  * @type Number
  */
  destPosition: null,
  /**
  * Position in `source` to start encoding.
  * @type Number
  */
  sourcePosition: null,
  /**
  * Number of characters in `source` to encode.
  * @type Number
  */
  sourceLength: null,
  /**
  * Character encoding to use when encoding this string to bytes.
  * @type String
  */
  charset: null,
};


/**
*/
DecodeStringDict = {
  /**
  * Buffer to decode.
  * @type Titanium.Buffer
  */
  source: null,
  /**
  * Index in the `source` buffer of the first byte of data to decode.
  * @type Number
  */
  position: null,
  /**
  * Number of bytes to decode.
  * @type Number
  */
  length: null,
  /**
  * Character set to use when encoding this string to bytes.
  * @type String
  */
  charset: null,
};


/**
* @extends Titanium.Module
* @since 0.8
* @requires android, iphone, ipad
* @fires Titanium.Contacts#reload
*/
Titanium.Contacts = {
  /**
  * Specifies that a contact is an organization.
  * @type Number
  */
  CONTACTS_KIND_ORGANIZATION: null,
  /**
  * Specifies that a contact is a person.
  * @type Number
  */
  CONTACTS_KIND_PERSON: null,
  /**
  * Specifies that group members will be sorted by first name.
  * @type Number
  */
  CONTACTS_SORT_FIRST_NAME: null,
  /**
  * Specifies that group members will be sorted by last name.
  * @type Number
  */
  CONTACTS_SORT_LAST_NAME: null,
  /**
  * A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value indicating that the application is authorized to use the address book.
  * @type Number
  * @requires iphone, ipad, android
  */
  AUTHORIZATION_AUTHORIZED: null,
  /**
  * A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value indicating that the application is not authorized to use the address book.
  * @type Number
  * @requires iphone, ipad, android
  */
  AUTHORIZATION_DENIED: null,
  /**
  * A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value indicating that the application is not authorized to use the address book *and*the user cannot change this application's status.
  * @type Number
  * @requires iphone, ipad, android
  */
  AUTHORIZATION_RESTRICTED: null,
  /**
  * A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value indicating that the authorization state is unknown.
  * @type Number
  * @requires iphone, ipad, android
  */
  AUTHORIZATION_UNKNOWN: null,
  /**
  * Returns an authorization constant indicating if the application has access to the address book.
  * @type Number
  * @requires iphone, ipad, android
  */
  contactsAuthorization: null,
};

/**
* Creates and returns an instance of <Titanium.Contacts.Group>.
* @param {Dictionary<Titanium.Contacts.Group>} parameters Properties to set on a new object, including any in <Titanium.Contacts.Group> except those marked as non-creation or read-only.
*/
Titanium.Contacts.createGroup = function(parameters) {};

/**
* Creates and returns an instance of <Titanium.Contacts.Person>, and commits all pending changes to the underlying contacts database.
* @since [object Object]
* @param {Dictionary<Titanium.Contacts.Person>} parameters Properties to set on a new object, including any in <Titanium.Contacts.Person> except those marked as non-creation or read-only.
*/
Titanium.Contacts.createPerson = function(parameters) {};

/**
* Gets all groups.
*/
Titanium.Contacts.getAllGroups = function() {};

/**
* Gets all people, unless a limit is specified.
* @param {Number} limit Maximum number of people. Android only.
*/
Titanium.Contacts.getAllPeople = function(limit) {};

/**
* Gets the group with the specified identifier.
* @param {Number} id Group identifier.
*/
Titanium.Contacts.getGroupByID = function(id) {};

/**
* Gets people with a `firstName`, `middleName` or `lastName` field, or a combination of these fields, that match the specified name.
* @param {String} name Name to match.
*/
Titanium.Contacts.getPeopleWithName = function(name) {};

/**
* Gets the person with the specified identifier.
* @param {Number} id Contact identifier.
*/
Titanium.Contacts.getPersonByID = function(id) {};

/**
* Removes a group from the address book.
* @param {Titanium.Contacts.Group} group Contact group.
*/
Titanium.Contacts.removeGroup = function(group) {};

/**
* Removes a contact from the address book.
* @since [object Object]
* @param {Titanium.Contacts.Person} person Contact.
*/
Titanium.Contacts.removePerson = function(person) {};

/**
* Reverts all changes made by the previous save to the address book.
*/
Titanium.Contacts.revert = function() {};

/**
* Commits all pending changes to the underlying contacts database.
* @since [object Object]
* @param {Array<Titanium.Contacts.Person>} contacts List of contacts to save. Used on Android only.
*/
Titanium.Contacts.save = function(contacts) {};

/**
* Displays a picker that allows a person to be selected.
* @param {showContactsParams} params Argument containing parameters for this method. Optional on Android.
*/
Titanium.Contacts.showContacts = function(params) {};

/**
* If authorization is unknown, will bring up a dialog requesting permission.
* @since 2.1.3
* @param {Callback<ContactsAuthorizationResponse>} callback Callback function to execute when when authorization is no longer unknown.
*/
Titanium.Contacts.requestAuthorization = function(callback) {};
/**
* Fired when the database backing the contacts module is modified externally.
* @event Titanium.Contacts#reload
* @type {Object}
*/
/**
* @requires android, iphone, ipad
*/
showContactsParams = {
  /**
  * Determines whether to animate the show/hide of the contacts picker (iPhone, iPad only.)
  * @type Boolean
  */
  animated: null,
  /**
  * Field names to show when selecting properties. By default, shows all available.
  * @type Array<String>
  */
  fields: null,
  /**
  * Function to call when selection is canceled.
  * @type Callback<Object>
  */
  cancel: null,
  /**
  * Function to call when a person is selected. Must not be used with `selectedProperty` property.
  * @type Callback<Object>
  */
  selectedPerson: null,
  /**
  * Function to call when a property is selected. Must not be used with `selectedPerson` property.Note: If ringtone or texttone is selected, null values are returned, since these are unsupportedby Apple.
  * @type Callback<Object>
  * @requires iphone, ipad
  */
  selectedProperty: null,
};


/**
* @extends ErrorResponse
*/
ContactsAuthorizationResponse = {
};


/**
* @extends Titanium.Proxy
* @since 1.4.0
* @requires iphone, ipad
*/
Titanium.Contacts.Group = {
  /**
  * Name of this group.
  * @type String
  */
  name: null,
  /**
  * Record identifier of the group. Single value.
  * @type Number
  * @requires iphone, ipad
  */
  recordId: null,
};

/**
* Adds a person to this group.
* @param {Titanium.Contacts.Person} person Person to add.
*/
Titanium.Contacts.Group.add = function(person) {};

/**
* Gets people that are members of this group.
*/
Titanium.Contacts.Group.members = function() {};

/**
* Removes a person from this group.
* @param {Titanium.Contacts.Person} person Person to remove.
*/
Titanium.Contacts.Group.remove = function(person) {};

/**
* Gets people that are members of this group, sorted in the specified order.
* @param {Number} sortBy Method for sorting.
*/
Titanium.Contacts.Group.sortedMembers = function(sortBy) {};

/**
* @extends Titanium.Proxy
* @since 0.8
* @requires android, iphone, ipad
*/
Titanium.Contacts.Person = {
  /**
  * Addresses for the person. Multi-value. Read-only on Android.
  * @type Dictionary
  */
  address: null,
  /**
  * Date of birth of the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  birthday: null,
  /**
  * Alternate birthday of the person. Single Dictionary.
  * @type Dictionary
  * @requires iphone, ipad
  */
  alternateBirthday: null,
  /**
  * Date and time that the person record was created. Single value.
  * @type String
  * @requires iphone, ipad
  */
  created: null,
  /**
  * Dates associated with the person. Multi-value.
  * @type Dictionary
  * @requires android, iphone, ipad
  */
  date: null,
  /**
  * Department of the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  department: null,
  /**
  * Email addresses for the person. Multi-value. Read-only on Android.
  * @type Dictionary
  */
  email: null,
  /**
  * First name of the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  firstName: null,
  /**
  * Phonetic first name of the person.  Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  firstPhonetic: null,
  /**
  * Localized full name of the person. Single value. Read-only on Android.
  * @type String
  */
  fullName: null,
  /**
  * Record identifier of the person. Single value.
  * @type Number
  * @requires android
  */
  id: null,
  /**
  * Image for the person. Single value.
  * @type Titanium.Blob
  * @requires android, iphone, ipad
  */
  image: null,
  /**
  * Instant messenger information of the person. Multi-value.
  * @type Dictionary
  * @requires android, iphone, ipad
  */
  instantMessage: null,
  /**
  * Social profile information of the person. Multi-value.
  * @type Dictionary
  * @requires iphone, ipad
  */
  socialProfile: null,
  /**
  * Job title of the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  jobTitle: null,
  /**
  * Determines the type of information the person record contains; either person or organization. Read-only on Android.
  * @type Number
  */
  kind: null,
  /**
  * Last name of the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  lastName: null,
  /**
  * Phonetic last name of the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  lastPhonetic: null,
  /**
  * Middle name of the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  middleName: null,
  /**
  * Phonetic middle name of the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  middlePhonetic: null,
  /**
  * Date and time that the person record was last modified. Single value.
  * @type String
  * @requires iphone, ipad
  */
  modified: null,
  /**
  * Nickname of the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  nickname: null,
  /**
  * Notes for the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  note: null,
  /**
  * Organization to which the person belongs. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  organization: null,
  /**
  * Phone numbers for the person. Multi-value. Read-only on Android.
  * @type Dictionary
  */
  phone: null,
  /**
  * Prefix for the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  prefix: null,
  /**
  * Record identifier of the person. Single value.
  * @type Number
  * @requires iphone, ipad
  */
  recordId: null,
  /**
  * Names of people to which the person is related. Multi-value.
  * @type Dictionary
  * @requires android, iphone, ipad
  */
  relatedNames: null,
  /**
  * Suffix for the person. Single value.
  * @type String
  * @requires android, iphone, ipad
  */
  suffix: null,
  /**
  * URLs of webpages associated with the person. Multi-value.
  * @type Dictionary
  * @requires android, iphone, ipad
  */
  url: null,
};


/**
* @extends Titanium.Proxy
* @since 0.1
* @requires android, iphone, ipad
*/
Titanium.Database.DB = {
  /**
  * A `File` object representing the file where this database is stored. Must only be used for setting file properties.
  * @type Titanium.Filesystem.File
  * @requires iphone, ipad
  */
  file: null,
  /**
  * The identifier of the last populated row.
  * @type Number
  */
  lastInsertRowId: null,
  /**
  * The name of the database.
  * @type String
  */
  name: null,
  /**
  * The number of rows affected by the last query.
  * @type Number
  */
  rowsAffected: null,
};

/**
* Closes the database and releases resources from memory. Once closed, this instance is no longer valid and should not be used. On iOS, also closes all <Titanium.Database.ResultSet> instances that exist.
*/
Titanium.Database.DB.close = function() {};

/**
* Executes an SQL statement against the database and returns a `ResultSet`.
* @param {String} sql SQL to execute. May include placeholders for parameter substitution.
* @param {String|Array<String>|Object|Array<Object>} vararg Either a variable ordered list of zero or more values, or an array of values,to be substituted with the respective `?` placeholder of the query.
*/
Titanium.Database.DB.execute = function(sql, vararg) {};

/**
* Removes the database files for this instance from disk. WARNING: this is a destructive operation and cannot be reversed. All data in the database will be lost; use with caution.
*/
Titanium.Database.DB.remove = function() {};

/**
* @extends Titanium.Module
* @since 0.1
* @requires android, iphone, ipad
*/
Titanium.Database = {
  /**
  * Constant for requesting a column's value returned in double form.
  * @type Number
  */
  FIELD_TYPE_DOUBLE: null,
  /**
  * Constant for requesting a column's value returned in float form.
  * @type Number
  */
  FIELD_TYPE_FLOAT: null,
  /**
  * Constant for requesting a column's value returned in integer form.
  * @type Number
  */
  FIELD_TYPE_INT: null,
  /**
  * Constant for requesting a column's value returned in string form.
  * @type Number
  */
  FIELD_TYPE_STRING: null,
};

/**
* Installs an SQLite database to device's internal storage.
* @param {String} path Path and filename of the database file to copy to internal storage.File location is relative to the script's context unless an absolutepath, such as one constructed with a <Titanium.Filesystem> constant, is used.
* @param {String} dbName Destination filename or absolute path, which will subsequently be passed to<Titanium.Database.open>.
*/
Titanium.Database.install = function(path, dbName) {};

/**
* Opens an SQLite database.
* @param {String} dbName The dbname previously passed to <Titanium.Database.install>. An absolute path to the file, including one that is constructed with a <Titanium.Filesystem> constant or <Titanium.Filesystem.directoryForSuite> method, may be used.
*/
Titanium.Database.open = function(dbName) {};

/**
* @extends Titanium.Proxy
* @since 0.1
* @requires android, iphone, ipad
*/
Titanium.Database.ResultSet = {
  /**
  * The number of columns in this result set.
  * @type Number
  * @requires android, iphone, ipad
  */
  fieldCount: null,
  /**
  * The number of rows in this result set.
  * @type Number
  */
  rowCount: null,
  /**
  * Indicates whether the current row is valid.
  * @type Boolean
  * @requires iphone, ipad, android
  */
  validRow: null,
};

/**
* Closes this result set and release resources. Once closed, the result set must no longer be used.
*/
Titanium.Database.ResultSet.close = function() {};

/**
* Retrieves the value for the specified field in the current row, and casts it to the specified type (String, Integer, Float or Double.)
* @param {Number} index A zero-based column index.
* @param {Number} type Type to cast field value.
*/
Titanium.Database.ResultSet.field = function(index, type) {};

/**
* Retrieves the value for the specified field in the current row, and casts it to the specified type (String, Integer, Float or Double.)
* @param {String} name A column name or alias used in the SQL query.
* @param {Number} type Type to cast for the field value.
*/
Titanium.Database.ResultSet.fieldByName = function(name, type) {};

/**
* Returns the number of columns in this result set. This method has been **removed** in Release 3.3.0 of the Titanium SDK. Use the fieldCount property instead.
* @deprecated since 3.3.0 removed 3.3.0
*/
Titanium.Database.ResultSet.fieldCount = function() {};

/**
* Returns the field name for the specified field index.
* @param {Number} index A zero-based column index for the field.
*/
Titanium.Database.ResultSet.fieldName = function(index) {};

/**
* Returns the field name for the specified field index.
* @param {Number} index A zero-based column index for the field.
*/
Titanium.Database.ResultSet.getFieldName = function(index) {};

/**
* Returns whether the current row is valid.
*/
Titanium.Database.ResultSet.isValidRow = function() {};

/**
* Advances to the next row in the result set and returns `true` if one exists, or `false` otherwise.
*/
Titanium.Database.ResultSet.next = function() {};

/**
*/
ErrorResponse = {
  /**
  * Indicates if the operation succeeded.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns 0 if `success` is `true`.
  * @type Number
  */
  code: null,
};


/**
* @extends ErrorResponse
*/
SuccessResponse = {
  /**
  * Indicates if the operation succeeded. Returns `true`.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns 0.
  * @type Number
  */
  code: null,
};


/**
* @extends ErrorResponse
*/
FailureResponse = {
  /**
  * Indicates if the operation succeeded. Returns `false`.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns a non-zero value.
  * @type Number
  */
  code: null,
};


/**
* @since 0.1
*/
Titanium.Event = {
  /**
  * Source object that fired the event.
  * @type Object
  */
  source: null,
  /**
  * Name of the event fired.
  * @type String
  */
  type: null,
  /**
  * True if the event will try to bubble up if possible.
  * @type Boolean
  * @requires iphone, ipad, android
  */
  bubbles: null,
  /**
  * Set to true to stop the event from bubbling.
  * @type Boolean
  * @requires iphone, ipad, android
  */
  cancelBubble: null,
};


/**
* @extends Titanium.Module
* @since [object Object]
* @requires android, ipad, iphone, mobileweb
* @fires Titanium.Facebook#login
* @fires Titanium.Facebook#logout
*/
Titanium.Facebook = {
  /**
  * Use with [LoginButton.style](Titanium.Facebook.LoginButton.style) to specifythe default login button reading "Connect" or "Login".
  * @type Number
  */
  BUTTON_STYLE_NORMAL: null,
  /**
  * Use with [LoginButton.style](Titanium.Facebook.LoginButton.style) to specifya wide login button reading "Connect with Facebook" or "Login with Facebook".
  * @type Number
  */
  BUTTON_STYLE_WIDE: null,
  /**
  * OAuth token set after a successful `authorize`.
  * @type String
  */
  accessToken: null,
  /**
  * Your Facebook application id. You need to set this for anything to work.
  * @type String
  */
  appid: null,
  /**
  * Time at which the `accessToken` expires.
  * @type Date
  */
  expirationDate: null,
  /**
  * Indicates whether the login should use the traditional dialog-basedauthentication.
  * @type Boolean
  */
  forceDialogAuth: null,
  /**
  * Indicates if the user is logged in.
  * @type Boolean
  */
  loggedIn: null,
  /**
  * Array of permissions to request for your app.
  * @type Array<String>
  */
  permissions: null,
  /**
  * Unique user ID returned from Facebook.
  * @type String
  */
  uid: null,
};

/**
* Prompts the user to log in (if not already logged in) and authorize your application.  
*/
Titanium.Facebook.authorize = function() {};

/**
* Opens a supported Facebook dialog.
* @param {String} action Specifies which dialog to show, such as "feed".
* @param {Object} params A dictionary object for pre-filling some of the dialog's fields.  See [Code Examples](Titanium.Facebook#examples).
* @param {Callback<FacebookDialogResponsev1>} callback Callback to invoke  when the user completes or cancels the dialog.
*/
Titanium.Facebook.dialog = function(action, params, callback) {};

/**
* Clears the OAuth `accessToken` and logs out the user.
*/
Titanium.Facebook.logout = function() {};

/**
* Makes a request to the legacy Facebook REST API.
* @param {String} method The REST API method to call.
* @param {Object} params A dictionary object for setting parameters required by the call, if any.See [Code Examples](Titanium.Facebook#examples).
* @param {Callback<FacebookRESTResponsev1>} callback Callback to invoke  when the request completes.
*/
Titanium.Facebook.request = function(method, params, callback) {};

/**
* Makes a Facebook Graph API request.
* @param {String} path Graph API path to request.
* @param {Dictionary} params A dictionary object for setting parameters required by the call, if any.  See [Code Examples](Titanium.Facebook#examples).
* @param {String} httpMethod The HTTP method (GET/POST/DELETE) to use for the call.
* @param {Callback<FacebookGraphResponsev1>} callback Callback to invoke  when the request completes.
*/
Titanium.Facebook.requestWithGraphPath = function(path, params, httpMethod, callback) {};
/**
* Fired at session login.
* @event Titanium.Facebook#login
* @type {Object}
* @type String uid User ID returned by Facebook if the login was successful.
* @type Boolean success Indicates if the login was successful.
* @type undefined data Data returned by Facebook when we query for the UID (using graph path "me")after a successful login. Data is in JSON format, and includes information such as user name, locale and gender.
* @type undefined error Error message, if request failed.
* @type undefined cancelled Indicates if the user canceled the login request by closing the dialog.
*/
/**
* Fired at session logout.
* @event Titanium.Facebook#logout
* @type {Object}
*/
/**
*/
FacebookGraphResponsev1 = {
  /**
  * Indicates if the request succeeded.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if request failed.
  * @type String
  */
  error: null,
  /**
  * Graph API path of the original request.
  * @type String
  */
  path: null,
  /**
  * JSON response returned by Facebook.
  * @type String
  */
  result: null,
};


/**
*/
FacebookDialogResponsev1 = {
  /**
  * Indicates if the request succeeded.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if request failed.
  * @type String
  */
  error: null,
  /**
  * Indicates if the user canceled the dialog.
  * @type Boolean
  */
  cancelled: null,
  /**
  * JSON response containing the `post_id` of the new post, if successful.`undefined` if the user canceled the dialog.
  * @type String
  */
  result: null,
};


/**
*/
FacebookRESTResponsev1 = {
  /**
  * Indicates if the request succeeded.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if request failed.
  * @type String
  */
  error: null,
  /**
  * REST method call you specified.
  * @type String
  */
  method: null,
  /**
  * JSON response returned by Facebook.
  * @type String
  */
  result: null,
};


/**
* @extends Titanium.UI.View
* @since [object Object]
* @requires android, ipad, iphone, mobileweb
*/
Titanium.Facebook.LoginButton = {
  /**
  * Sets the login button style.
  * @type String
  */
  style: null,
};


/**
* @extends Titanium.Proxy
* @since 0.1
*/
Titanium.Filesystem.File = {
  /**
  * `true` if the file is executable.
  * @type Boolean
  * @requires android, iphone, ipad, mobileweb
  */
  executable: null,
  /**
  * Set to `true` if the file is hidden.
  * @type Boolean
  * @requires android, iphone, ipad, mobileweb
  */
  hidden: null,
  /**
  * Name of the file.
  * @type String
  */
  name: null,
  /**
  * Native path associated with this file object, as a file URL.
  * @type String
  */
  nativePath: null,
  /**
  * A `File` object representing the parent directory of the file identified by this object.
  * @type Titanium.Filesystem.File
  * @requires android, mobileweb
  */
  parent: null,
  /**
  * `true` if the file identified by this object is read-only.
  * @type Boolean
  * @requires android, mobileweb
  */
  readonly: null,
  /**
  * Size, in bytes, of the file identified by this object.
  * @type Number
  * @requires android, mobileweb
  */
  size: null,
  /**
  * Value indicating whether or not to back up to a cloud service.
  * @type Boolean
  * @requires iphone, ipad
  */
  remoteBackup: null,
  /**
  * `true` if the file identified by this object is a symbolic link.
  * @type Boolean
  */
  symbolicLink: null,
  /**
  * `true` if the file identified by this object is writable.
  * @type Boolean
  */
  writable: null,
  /**
  * `true` if the file identified by this object is writable.
  * @type Boolean
  * @requires iphone, ipad
  */
  writeable: null,
};

/**
* Appends data to the file identified by this file object.
* @param {String|Titanium.Blob|Titanium.Filesystem.File} data Data to append.
*/
Titanium.Filesystem.File.append = function(data) {};

/**
* Copies the file identified by this file object to a new path.
* @param {String} destinationPath Destination path to copy to.
*/
Titanium.Filesystem.File.copy = function(destinationPath) {};

/**
* Creates a directory at the path identified by this file object.
*/
Titanium.Filesystem.File.createDirectory = function() {};

/**
* Creates a file at the path identified by this file object.
*/
Titanium.Filesystem.File.createFile = function() {};

/**
* Returns the creation timestamp for the file identified by this file object.
*/
Titanium.Filesystem.File.createTimestamp = function() {};

/**
* Deletes the directory identified by this file object.
* @param {Boolean} recursive Pass `true` to recursively delete any directory contents.
*/
Titanium.Filesystem.File.deleteDirectory = function(recursive) {};

/**
* Deletes the file identified by this file object.
*/
Titanium.Filesystem.File.deleteFile = function() {};

/**
* Returns `true` if the file or directory identified by this file object exists on the device.
*/
Titanium.Filesystem.File.exists = function() {};

/**
* Returns the extension for the file identified by this file object.
*/
Titanium.Filesystem.File.extension = function() {};

/**
* Returns a listing of the directory identified by this file object, or `null`if this object doesn't identify a directory.
*/
Titanium.Filesystem.File.getDirectoryListing = function() {};

/**
* Returns the path of the parent directory holding the file identified by this file object, as a String **or** as a `File` object.
*/
Titanium.Filesystem.File.getParent = function() {};

/**
* Returns the protection key value of this file object.Returns `null` if there's an error.
* @since 4.1.0
*/
Titanium.Filesystem.File.getProtectionKey = function() {};

/**
* Returns `true` if this file object represents a directory.
* @since [object Object]
*/
Titanium.Filesystem.File.isDirectory = function() {};

/**
* Returns `true` if this file object represents an ordinary file.
* @since [object Object]
*/
Titanium.Filesystem.File.isFile = function() {};

/**
* Returns the last modification time for this file.
*/
Titanium.Filesystem.File.modificationTimestamp = function() {};

/**
* Moves the file identified by this file object to another path.
* @param {String} newpath New location for the file.
*/
Titanium.Filesystem.File.move = function(newpath) {};

/**
* Opens the file identified by this file object for random access.
* @param {Number} mode Mode to open the file in: `MODE_READ`, `MODE_WRITE`, or `MODE_APPEND`.
*/
Titanium.Filesystem.File.open = function(mode) {};

/**
* Returns the contents of the file identified by this file object as a `Blob`.
*/
Titanium.Filesystem.File.read = function() {};

/**
* Renames the file identified by this file object.
* @param {String} newname New name for the file.
*/
Titanium.Filesystem.File.rename = function(newname) {};

/**
* Returns the fully-resolved native path associated with this file object.
*/
Titanium.Filesystem.File.resolve = function() {};

/**
* Sets the protection key as an attribute to the file identified by this file object.
* @since 4.1.0
* @param {String} fileProtectionType File protection type.
*/
Titanium.Filesystem.File.setProtectionKey = function(fileProtectionType) {};

/**
* Returns the amount of free space available on the device where the file identified by this file object is stored.
*/
Titanium.Filesystem.File.spaceAvailable = function() {};

/**
* Writes the specified data to the file identified by this file object.
* @param {String|Titanium.Filesystem.File|Titanium.Blob} data Data to write, as a String, `Blob` or `File` object.
* @param {Boolean} append If `true`, append the data to the end of the file.
*/
Titanium.Filesystem.File.write = function(data, append) {};

/**
* @extends Titanium.IOStream
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
Titanium.Filesystem.FileStream = {
};

/**
* closes file stream, exception is thrown on error
*/
Titanium.Filesystem.FileStream.close = function() {};

/**
* @extends Titanium.Module
* @since 0.1
*/
Titanium.Filesystem = {
  /**
  * Constant for append mode for file operations.
  * @type Number
  */
  MODE_APPEND: null,
  /**
  * Constant for read mode for file operations.
  * @type Number
  */
  MODE_READ: null,
  /**
  * Constant for write mode for file operations.
  * @type Number
  */
  MODE_WRITE: null,
  /**
  * Constant used to set protection key to NSFileProtectionNone in file attributes.
  * @type String
  * @requires iphone, ipad
  */
  IOS_FILE_PROTECTION_NONE: null,
  /**
  * Constant used to set protection key to NSFileProtectionComplete in file attributes.
  * @type String
  * @requires iphone, ipad
  */
  IOS_FILE_PROTECTION_COMPLETE: null,
  /**
  * Constant used to set protection key to NSFileProtectionCompleteUnlessOpen in file attributes.
  * @type String
  * @requires iphone, ipad
  */
  IOS_FILE_PROTECTION_COMPLETE_UNLESS_OPEN: null,
  /**
  * Constant used to set protection key to NSFileProtectionCompleteUntilFirstUserAuthentication in file attributes.
  * @type String
  * @requires iphone, ipad
  */
  IOS_FILE_PROTECTION_COMPLETE_UNTIL_FIRST_USER_AUTHENTICATION: null,
  /**
  * Path to the application's internal cache directory.
  * @type String
  * @requires android, iphone, ipad
  */
  applicationCacheDirectory: null,
  /**
  * Path to the application's data directory.
  * @type String
  */
  applicationDataDirectory: null,
  /**
  * Path to the iOS application directory.
  * @type String
  * @requires iphone, ipad
  */
  applicationDirectory: null,
  /**
  * Path to the application support directory.
  * @type String
  * @requires iphone, ipad
  */
  applicationSupportDirectory: null,
  /**
  * Path to a directory on removable storage, such as SD card.
  * @type String
  * @requires android
  */
  externalStorageDirectory: null,
  /**
  * Platform-specific line ending constant.
  * @type String
  */
  lineEnding: null,
  /**
  * Path to the application's resource directory.
  * @type String
  */
  resourcesDirectory: null,
  /**
  * Path to the application's raw resource directory.
  * @type String
  * @requires android
  */
  resRawDirectory: null,
  /**
  * Platform-specific path separator constant.
  * @type String
  */
  separator: null,
  /**
  * Path for the application's temporary directory.
  * @type String
  */
  tempDirectory: null,
};

/**
* Creates a temporary directory and returns a [File](Titanium.Filesystem.File) object representing the new directory.
*/
Titanium.Filesystem.createTempDirectory = function() {};

/**
* Creates a temporary file and returns a [File](Titanium.Filesystem.File) object representing the new file.
*/
Titanium.Filesystem.createTempFile = function() {};

/**
* Returns a `File` object representing the file identified by the path arguments.
* @param {String} path One or more path components. Path arguments are joined together using the platform specific path separator to form the full path.
*/
Titanium.Filesystem.getFile = function(path) {};

/**
* Returns `true` if the device supports external storage *and* the external storage device is mounted.
*/
Titanium.Filesystem.isExternalStoragePresent = function() {};

/**
* Opens file using the <Titanium.IOStream> interface.
* @param {Number} mode Access mode.
* @param {String} path One or more path components. Path arguments are joined together using the platform-specific path separator to form the full path. 
*/
Titanium.Filesystem.openStream = function(mode, path) {};

/**
* Returns the path to the container directory associated with the specified security application group ID.
* @since 4.0.0
* @param {String} suiteName The name of the suite.
*/
Titanium.Filesystem.directoryForSuite = function(suiteName) {};

/**
* @extends Titanium.Module
* @since 2.0.0
* @requires android
*/
Titanium.Geolocation.Android = {
  /**
  * Set to `true` to enable manual configuration of location updates through this module.
  * @type Boolean
  */
  manualMode: null,
};

/**
* Adds and enables the specified location provider, possibly replacing an existing one.
* @param {Titanium.Geolocation.Android.LocationProvider} provider The location provider to add.
*/
Titanium.Geolocation.Android.addLocationProvider = function(provider) {};

/**
* Disables and removes the specified location provider.
* @param {Titanium.Geolocation.Android.LocationProvider} provider The location provider to remove.
*/
Titanium.Geolocation.Android.removeLocationProvider = function(provider) {};

/**
* Adds and enables the specified location rule.
* @param {Titanium.Geolocation.Android.LocationRule} rule The location rule to add.
*/
Titanium.Geolocation.Android.addLocationRule = function(rule) {};

/**
* Disables and removes the specified location rule.
* @param {Titanium.Geolocation.Android.LocationRule} rule The location rule to remove.
*/
Titanium.Geolocation.Android.removeLocationRule = function(rule) {};

/**
* @extends Titanium.Proxy
* @since 2.0.0
* @requires android
*/
Titanium.Geolocation.Android.LocationProvider = {
  /**
  * Type of location provider: [PROVIDER_GPS](Titanium.Geolocation.PROVIDER_GPS), [PROVIDER_NETWORK](Titanium.Geolocation.PROVIDER_NETWORK), or [PROVIDER_PASSIVE](Titanium.Geolocation.PROVIDER_PASSIVE).
  * @type String
  */
  name: null,
  /**
  * Limits the frequency of location updates to no more than one per `minUpdateTime` seconds.
  * @type Number
  */
  minUpdateTime: null,
  /**
  * Don't send a location update unless the location has changed at least `minUpdateDistance` meters since the previous update.
  * @type Number
  */
  minUpdateDistance: null,
};


/**
* @extends Titanium.Proxy
* @since 2.0.0
* @requires android
*/
Titanium.Geolocation.Android.LocationRule = {
  /**
  * If specified, this rule only applies to updates generatedby the specified provider. If `null`, this rule applies to all updates.
  * @type String
  */
  name: null,
  /**
  * Minimum accuracy required for a location update.
  * @type Number
  */
  accuracy: null,
  /**
  * Controls the frequency of location updates.
  * @type Number
  */
  minAge: null,
  /**
  * Controls the freshness of location updates. Do not forward an updateunless it is newer than `maxAge` milliseconds.
  * @type Number
  */
  maxAge: null,
};


/**
* @extends Titanium.Module
* @since 0.1
* @fires Titanium.Geolocation#calibration
* @fires Titanium.Geolocation#heading
* @fires Titanium.Geolocation#location
* @fires Titanium.Geolocation#locationupdatepaused
* @fires Titanium.Geolocation#locationupdateresumed
* @fires Titanium.Geolocation#authorization
*/
Titanium.Geolocation = {
  /**
  * Use with [accuracy](Titanium.Geolocation.accuracy) to request the bestaccuracy available.
  * @type Number
  * @requires android, iphone, ipad
  */
  ACCURACY_BEST: null,
  /**
  * Use with [accuracy](Titanium.Geolocation.accuracy) to request locationupdates accurate to the nearest 100 meters.
  * @type Number
  * @requires android, iphone, ipad
  */
  ACCURACY_HUNDRED_METERS: null,
  /**
  * Use with [accuracy](Titanium.Geolocation.accuracy) to request locationupdates accurate to the nearest kilometer.
  * @type Number
  * @requires android, iphone, ipad
  */
  ACCURACY_KILOMETER: null,
  /**
  * Use with [accuracy](Titanium.Geolocation.accuracy) to request locationupdates accurate to the nearest 10 meters.
  * @type Number
  * @requires android, iphone, ipad
  */
  ACCURACY_NEAREST_TEN_METERS: null,
  /**
  * Use with [accuracy](Titanium.Geolocation.accuracy) to request locationupdates accurate to the nearest three kilometers.
  * @type Number
  * @requires android, iphone, ipad
  */
  ACCURACY_THREE_KILOMETERS: null,
  /**
  * Use with [accuracy](Titanium.Geolocation.accuracy) to request moreaccurate location updates with higher battery usage.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  ACCURACY_HIGH: null,
  /**
  * Use with [accuracy](Titanium.Geolocation.accuracy) to request highest possible accuracy and combine it with additional sensor data.
  * @type Number
  * @requires iphone, ipad
  */
  ACCURACY_BEST_FOR_NAVIGATION: null,
  /**
  * Use with [accuracy](Titanium.Geolocation.accuracy) to request lessaccurate location updates with lower battery usage.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  ACCURACY_LOW: null,
  /**
  * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value indicating that the application is authorized to use location services.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_AUTHORIZED: null,
  /**
  * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value indicating that the application is not authorized to use location services, *or*location services are disabled.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_DENIED: null,
  /**
  * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value indicating that the application is not authorized to use location servies *and*the user cannot change this application's status.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_RESTRICTED: null,
  /**
  * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value indicating that the authorization state is unknown.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_UNKNOWN: null,
  /**
  * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value indicating that the application is authorized to start location services at any time. This authorizationincludes the use of all location services, including monitoring regions and significant location changes.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_ALWAYS: null,
  /**
  * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value indicating that the application is authorized to start most location services only while running in the foreground.
  * @type Number
  * @requires iphone, ipad
  */
  AUTHORIZATION_WHEN_IN_USE: null,
  /**
  * Error code indicating that the user denied access to the location service.
  * @type Number
  * @requires iphone, ipad
  */
  ERROR_DENIED: null,
  /**
  * Error code indicating that the heading could not be determined.
  * @type Number
  * @requires iphone, ipad
  */
  ERROR_HEADING_FAILURE: null,
  /**
  * Error code indicating that the user's location could not be determined.
  * @type Number
  * @requires iphone, ipad
  */
  ERROR_LOCATION_UNKNOWN: null,
  /**
  * Error code indicating that the network was unavailable.
  * @type Number
  * @requires iphone, ipad
  */
  ERROR_NETWORK: null,
  /**
  * Error code indicating that region monitoring is delayed.
  * @type Number
  * @requires iphone, ipad
  */
  ERROR_REGION_MONITORING_DELAYED: null,
  /**
  * Error code indicating that region monitoring is denied.
  * @type Number
  * @requires iphone, ipad
  */
  ERROR_REGION_MONITORING_DENIED: null,
  /**
  * Error code indicating a region monitoring failure.
  * @type Number
  * @requires iphone, ipad
  */
  ERROR_REGION_MONITORING_FAILURE: null,
  /**
  * Error indicating a timeout.
  * @type Number
  * @requires mobileweb
  */
  ERROR_TIMEOUT: null,
  /**
  * Specifies the GPS location provider.
  * @type String
  * @requires android
  */
  PROVIDER_GPS: null,
  /**
  * Specifies the network location provider.
  * @type String
  * @requires android
  */
  PROVIDER_NETWORK: null,
  /**
  * Specifies the passive location provider.
  * @type String
  * @requires android
  */
  PROVIDER_PASSIVE: null,
  /**
  * The location data is being used for an unknown activity.
  * @type String
  * @requires iphone, ipad
  */
  ACTIVITYTYPE_OTHER: null,
  /**
  * The location data is used for tracking location changes to the automobile specifically during vehicular navigation.
  * @type String
  * @requires iphone, ipad
  */
  ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION: null,
  /**
  * The location data is used for tracking any pedestrian-related activity.
  * @type String
  * @requires iphone, ipad
  */
  ACTIVITYTYPE_FITNESS: null,
  /**
  * The location data is used for tracking movements of other types of vehicular navigation that are not automobile related.
  * @type String
  * @requires iphone, ipad
  */
  ACTIVITYTYPE_OTHER_NAVIGATION: null,
  /**
  * Specifies the requested accuracy for location updates.
  * @type Number
  */
  accuracy: null,
  /**
  * The minimum change of position (in meters) before a 'location' event is fired.
  * @type Number
  * @requires iphone, ipad
  */
  distanceFilter: null,
  /**
  * Requested frequency for location updates, in milliseconds.
  * @type Number
  */
  frequency: null,
  /**
  * Indicates whether the current device supports a compass.
  * @type Boolean
  * @requires android, iphone, ipad, mobileweb
  */
  hasCompass: null,
  /**
  * Minimum heading change (in degrees) before a `heading` event is fired.
  * @type Number
  * @requires iphone, ipad
  */
  headingFilter: null,
  /**
  * Returns an authorization constant indicating if the application has access to location services.
  * @type Number
  * @requires iphone, ipad
  */
  locationServicesAuthorization: null,
  /**
  * Indicates if the user has enabled or disabled location services for the device (not the application).
  * @type Boolean
  */
  locationServicesEnabled: null,
  /**
  * Determines the preferred location provider.
  * @type String
  * @requires android
  */
  preferredProvider: null,
  /**
  * Text to display in the permission dialog when requesting locationservices.
  * @type String
  * @requires iphone, ipad
  */
  purpose: null,
  /**
  * Determines whether the compass calibration UI is shown if needed.
  * @type Boolean
  * @requires iphone, ipad
  */
  showCalibration: null,
  /**
  * Indicates if the location changes should be updated only when a significant change in location occurs.
  * @type Boolean
  * @requires iphone, ipad
  */
  trackSignificantLocationChange: null,
  /**
  * Determines if the app can do background location updates.
  * @type Boolean
  * @requires iphone, ipad
  */
  allowsBackgroundLocationUpdates: null,
  /**
  * The type of user activity to be associated with the location updates. Available in iOS 6.0 and later.
  * @type Number
  * @requires iphone, ipad
  */
  activityType: null,
  /**
  * Indicates whether the location updates may be paused. Available in iOS 6.0 and later.
  * @type Boolean
  * @requires iphone, ipad
  */
  pauseLocationUpdateAutomatically: null,
  /**
  * JSON representation of the last geolocation received.
  * @type String
  * @requires android, iphone, ipad
  */
  lastGeolocation: null,
};

/**
* Resolves an address to a location.
* @param {String} address address to resolve.
* @param {Callback<ForwardGeocodeResponse>} callback Function to invoke on success or failure.
*/
Titanium.Geolocation.forwardGeocoder = function(address, callback) {};

/**
* Retrieves the current compass heading.
* @param {Callback<HeadingResponse>} callback Function to invoke on success or failure of obtaining the current heading.
*/
Titanium.Geolocation.getCurrentHeading = function(callback) {};

/**
* Retrieves the last known location from the device.
* @param {Callback<LocationResults>} callback Function to invoke on success or failure of obtaining the current location.
*/
Titanium.Geolocation.getCurrentPosition = function(callback) {};

/**
* Tries to resolve a location to an address.
* @param {Number} latitude Latitude to search, specified in decimal degrees.
* @param {Number} longitude Longitude to search, specified in decimal degrees.
* @param {Callback<ReverseGeocodeResponse>} callback Function to invoke on success or failure.
*/
Titanium.Geolocation.reverseGeocoder = function(latitude, longitude, callback) {};
/**
* Fired when the device detects interface and requires calibration.
* @event Titanium.Geolocation#calibration
* @type {Object}
*/
/**
* Fired when an heading update is received.
* @event Titanium.Geolocation#heading
* @type {Object}
* @type undefined code If `success` is false, the error code if available.
* @requires android, iphone, ipad
* @type Boolean success Indicate if the heading event was successfully received.
* @requires android, iphone, ipad
* @type String error If `success` is false, a string describing the error.
* @requires android, iphone, ipad
* @type HeadingData heading Dictionary object containing the heading data.
*/
/**
* Fired when a location update is received.
* @event Titanium.Geolocation#location
* @type {Object}
* @type Number code if `success` is false, the error code if available.
* @type Boolean success Indicates if location data was successfully retrieved.
* @type LocationProviderDict provider If `success` is true, object describing the location provider generating this update.
* @requires android
* @type LocationCoordinates coords If `success` is true, actual location data for this update.
* @type String error If `success` is false, a string describing the error.
*/
/**
* Fired when location updates are paused by the OS. Available in iOS 6.0 and later.
* @event Titanium.Geolocation#locationupdatepaused
* @type {Object}
*/
/**
* Fired when location manager is resumed by the OS. Available in iOS 6.0 and later.
* @event Titanium.Geolocation#locationupdateresumed
* @type {Object}
*/
/**
* Fired when changes are made to the authorization status for location services. Available in iOS 8.0 and later.
* @event Titanium.Geolocation#authorization
* @type {Object}
* @type Number authorizationStatus New authorization status for the application.
*/
/**
* @extends ErrorResponse
*/
LocationResults = {
  /**
  * If `success` is true, object describing the location provider generating this update.
  * @type LocationProviderDict
  * @requires android
  */
  provider: null,
  /**
  * If `success` is true, actual location data for this update.
  * @type LocationCoordinates
  */
  coords: null,
};


/**
*/
LocationCoordinates = {
  /**
  * Latitude of the location update, in decimal degrees.
  * @type Number
  */
  latitude: null,
  /**
  * Longitude of the location update, in decimal degrees.
  * @type Number
  */
  longitude: null,
  /**
  * Altitude of the location update, in meters.
  * @type Number
  */
  altitude: null,
  /**
  * Accuracy of the location update, in meters.
  * @type Number
  */
  accuracy: null,
  /**
  * Vertical accuracy of the location update, in meters.
  * @type Number
  */
  altitudeAccuracy: null,
  /**
  * Compass heading, in degrees. May be unknown if device is not moving. On iOS, a negative value indicates that the heading data is not valid.
  * @type Number
  */
  heading: null,
  /**
  * Current speed in meters/second. On iOS, a negative value indicates that the heading data is not valid.
  * @type Number
  */
  speed: null,
  /**
  * Timestamp for this location update, in milliseconds.
  * @type Number
  */
  timestamp: null,
  /**
  * The floor of the building on which the user is located. Available in iOS 8.0 and later.
  * @type LocationCoordinatesFloor
  * @requires iphone, ipad
  */
  floor: null,
};


/**
*/
LocationCoordinatesFloor = {
  /**
  * The logical floor of the building.
  * @type Number
  */
  level: null,
};


/**
* @extends ErrorResponse
*/
ForwardGeocodeResponse = {
  /**
  * Indicates if the operation succeeded.
  * @type Boolean
  * @requires android, iphone, ipad, mobileweb
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  error: null,
  /**
  * Error code. Returns 0 if `success` is `true`.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  code: null,
  /**
  * Estimated accuracy of the geocoding, in meters.
  * @type Number
  * @requires iphone, ipad
  */
  accuracy: null,
  /**
  * Longitude of the geocoded address.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  longitude: null,
  /**
  * Latitude of the geocoded address.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  latitude: null,
  /**
  * Street name, without street address.
  * @type String
  * @requires android
  */
  street: null,
  /**
  * Street name.
  * @type String
  * @requires android
  */
  street1: null,
  /**
  * City name.
  * @type String
  * @requires android
  */
  city: null,
  /**
  * First line of region.
  * @type String
  * @requires android
  */
  region1: null,
  /**
  * Not used.
  * @type String
  * @requires android
  */
  region2: null,
  /**
  * Postal code.
  * @type String
  * @requires android
  */
  postalCode: null,
  /**
  * Country name.
  * @type String
  * @requires android
  */
  country: null,
  /**
  * Country code.
  * @type String
  * @requires android
  */
  countryCode: null,
  /**
  * Country code. Same as `countryCode`.
  * @type String
  * @requires android
  */
  country_code: null,
  /**
  * Display address. Identical to `address`.
  * @type String
  * @requires android
  */
  displayAddress: null,
  /**
  * Full address.
  * @type String
  * @requires android
  */
  address: null,
};


/**
* @extends ErrorResponse
*/
HeadingResponse = {
  /**
  * Indicates a successful operation.
  * @type Boolean
  * @requires iphone, ipad
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  * @requires iphone, ipad
  */
  error: null,
  /**
  * Error code.
  * @type Number
  * @requires iphone, ipad
  */
  code: null,
  /**
  * If `success` is true, the actual heading data.
  * @type HeadingData
  */
  heading: null,
};


/**
*/
HeadingData = {
  /**
  * Accuracy of the compass heading, in platform-specific units.
  * @type Number
  */
  accuracy: null,
  /**
  * Declination in degrees from magnetic North.
  * @type Number
  */
  magneticHeading: null,
  /**
  * Declination in degrees from true North.
  * @type Number
  * @requires android, iphone, ipad
  */
  trueHeading: null,
  /**
  * Timestamp for the heading data, in milliseconds.
  * @type Number
  */
  timestamp: null,
  /**
  * Raw geomagnetic data for the X axis.
  * @type Number
  * @requires iphone, ipad, android
  */
  x: null,
  /**
  * Raw geomagnetic data for the Y axis.
  * @type Number
  * @requires iphone, ipad, android
  */
  y: null,
  /**
  * Raw geomagnetic data for the Z axis.
  * @type Number
  * @requires iphone, ipad, android
  */
  z: null,
};


/**
*/
LocationProviderDict = {
  /**
  * Accuracy of the location provider, either fine (1) or coarse (2).
  * @type Number
  */
  accuracy: null,
  /**
  * Name of the location provider.
  * @type String
  */
  name: null,
  /**
  * Power consumption for this provider, either low (1), medium (2), or high (3).
  * @type Number
  */
  power: null,
};


/**
* @extends ErrorResponse
*/
ReverseGeocodeResponse = {
  /**
  * An array of reverse-geocoded addresses matching the requested location.
  * @type Array<GeocodedAddress>
  */
  places: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns 0 if `success` is `true`.
  * @type Number
  */
  code: null,
};


/**
*/
GeocodedAddress = {
  /**
  * Street name, without street address.
  * @type String
  * @requires android, iphone, ipad
  */
  street: null,
  /**
  * Street name.
  * @type String
  * @requires android
  */
  street1: null,
  /**
  * City name.
  * @type String
  * @requires android, iphone, ipad
  */
  city: null,
  /**
  * First line of region.
  * @type String
  * @requires android
  */
  region1: null,
  /**
  * Not used.
  * @type String
  * @requires android
  */
  region2: null,
  /**
  * Postal code. On iOS, use `zipcode`.
  * @type String
  * @requires android
  */
  postalCode: null,
  /**
  * Postal code. On Android, use `postalCode`.
  * @type String
  * @requires iphone, ipad
  */
  zipcode: null,
  /**
  * Country name.
  * @type String
  * @requires android, iphone, ipad
  */
  country: null,
  /**
  * Country code. On iOS, use `country_code`.
  * @type String
  * @requires android
  */
  countryCode: null,
  /**
  * Country code. Same as `country_code`.
  * @type String
  * @requires android, iphone, ipad
  */
  country_code: null,
  /**
  * Longitude of the geocoded point.
  * @type String
  * @requires android, iphone, ipad
  */
  longitude: null,
  /**
  * Latitude of the geocoded point.
  * @type String
  * @requires android, iphone, ipad
  */
  latitude: null,
  /**
  * Display address. Identical to `address`.
  * @type String
  * @requires android
  */
  displayAddress: null,
  /**
  * Full address.
  * @type String
  * @requires android, iphone, ipad
  */
  address: null,
};


/**
* @extends Titanium.Module
* @since 2.0.0
* @requires mobileweb
*/
Titanium.Geolocation.MobileWeb = {
  /**
  * The time within which location requests must succeed, in milliseconds.
  * @type Number
  */
  locationTimeout: null,
  /**
  * The maximum age of cached locations acceptible for location requests, in milliseconds.
  * @type Number
  */
  maximumLocationAge: null,
  /**
  * The maximum age of cached locations acceptible for heading requests, in milliseconds.
  * @type Number
  */
  maximumHeadingAge: null,
  /**
  * The time within which forward geocoder requests must succeed, in milliseconds.
  * @type Number
  */
  forwardGeocoderTimeout: null,
  /**
  * The time within which reverse geocoder requests must succeed, in milliseconds.
  * @type Number
  */
  reverseGeocoderTimeout: null,
};


/**
* @extends Titanium.Module
* @since 0.8
* @fires Titanium.Gesture#orientationchange
* @fires Titanium.Gesture#shake
*/
Titanium.Gesture = {
  /**
  * Indicates whether current window is considered portrait by the device.
  * @type Boolean
  * @requires android, mobileweb
  */
  portrait: null,
  /**
  * Indicates whether current window is considered landscape by the device.
  * @type Boolean
  * @requires android, mobileweb
  */
  landscape: null,
  /**
  * Orientation of the current window.
  * @type Number
  */
  orientation: null,
};

/**
* Gets the value of the [landscape](Titanium.Gesture.landscape) property.
*/
Titanium.Gesture.getLandscape = function() {};

/**
* Gets the value of the [portrait](Titanium.Gesture.portrait) property.
*/
Titanium.Gesture.getPortrait = function() {};

/**
* Returns whether current window is considered landscape by the device.
*/
Titanium.Gesture.isLandscape = function() {};

/**
* Returns whether current window is considered portrait by the device.
*/
Titanium.Gesture.isPortrait = function() {};
/**
* Fired when the device orientation changes.
* @event Titanium.Gesture#orientationchange
* @type {Object}
* @type Number orientation Orientation of the current window.
*/
/**
* Fired when the device is shaken.
* @event Titanium.Gesture#shake
* @type {Object}
* @type Number timestamp Time interval since previous shake event. On iOS, this value is 0 for the first shake event in a series.
* @type Number x Acceleration along the X axis, in Gs.
* @type Number y Acceleration along the Y axis, in Gs.
* @type Number z Acceleration along the Z axis, in Gs.
*/
/**
* @extends Titanium.Proxy
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
Titanium.IOStream = {
};

/**
* Reads data from this stream into a buffer.
* @param {Titanium.Buffer} buffer Buffer to read stream data into.
* @param {Number} offset Offset into the buffer to start writing stream data.If specified, `length` must also be specified.
* @param {Number} length Maximum number of bytes to read.If specified, `offset` must also be specified.
*/
Titanium.IOStream.read = function(buffer, offset, length) {};

/**
* Writes data from a buffer to this stream.
* @param {Titanium.Buffer} buffer Buffer to write to this stream.
* @param {Number} offset Offset in the buffer of the first byte to write to the stream.If specified, `length` must also be specified.
* @param {Number} length Maximum number of bytes to write to the stream.If specified, `offset` must also be specified.
*/
Titanium.IOStream.write = function(buffer, offset, length) {};

/**
* Indicates whether this stream is writeable.
*/
Titanium.IOStream.isWriteable = function() {};

/**
* Indicates whether this stream is readable.
*/
Titanium.IOStream.isReadable = function() {};

/**
* Closes this stream.
*/
Titanium.IOStream.close = function() {};

/**
* @extends Titanium.Module
* @since 1.5
*/
Titanium.Locale = {
  /**
  * Country of the current system locale, as an ISO 2-letter code.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  currentCountry: null,
  /**
  * Language of the current system locale, as an ISO 2-letter code.
  * @type String
  */
  currentLanguage: null,
  /**
  * Current system locale, as a combination of ISO 2-letter language and country codes.
  * @type String
  */
  currentLocale: null,
};

/**
* Formats a telephone number according to the current system locale.
* @param {String} number Phone number.
*/
Titanium.Locale.formatTelephoneNumber = function(number) {};

/**
* Returns the ISO 3-letter currency code for the specified locale.
* @param {String} locale Locale, as a combination of ISO 2-letter language and country codes. For example, `en-US` or `en-GB`. See the [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) sections of wikipedia for reference.
*/
Titanium.Locale.getCurrencyCode = function(locale) {};

/**
* Returns the currency symbol for the specified currency code.
* @param {String} currencyCode Currency, as an ISO 3-letter code. For example, `USD` or `GBP`. See the [Currency List](http://www.xe.com/iso4217.php#section2) section of the `www.xe.com` website for reference.
*/
Titanium.Locale.getCurrencySymbol = function(currencyCode) {};

/**
* Returns the currency symbol for the specified locale.
* @param {String} locale Locale, as a combination of ISO 2-letter language and country codes. For example, `en-US` or `en-GB`. See the [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) sections of wikipedia for reference.
*/
Titanium.Locale.getLocaleCurrencySymbol = function(locale) {};

/**
* Returns a string, localized according to the current system locale using the appropriate `/i18n/LANG/strings.xml` localization file.
* @param {String} key Key of string.
* @param {String} hint Text to return if key does not exist in the localization file.
*/
Titanium.Locale.getString = function(key, hint) {};

/**
* @extends Titanium.Proxy
* @since 0.9
* @fires Titanium.Map.Annotation#click
*/
Titanium.Map.Annotation = {
  /**
  * Boolean to indicate whether the pin should animate when dropped.
  * @type Boolean
  */
  animate: null,
  /**
  * Defines whether the annotation view is able to display extra information in a callout bubble.
  * @type Boolean
  * @requires iphone, ipad
  */
  canShowCallout: null,
  /**
  * Defines a center offset point for the annotation.
  * @type Point
  * @requires iphone, ipad
  */
  centerOffset: null,
  /**
  * Defines a custom view to be used by the annotation.
  * @type Titanium.UI.View
  * @requires iphone, ipad
  */
  customView: null,
  /**
  * Determines whether the pin can be dragged by the user.
  * @type Boolean
  * @requires iphone, ipad
  */
  draggable: null,
  /**
  * Image to use for the the pin.
  * @type String,Titanium.Blob
  */
  image: null,
  /**
  * Latitude of the annotation, in decimal degrees.
  * @type Number
  */
  latitude: null,
  /**
  * Longitude of the annotation, in decimal degrees.
  * @type Number
  */
  longitude: null,
  /**
  * Left button image on the annotation, specified as an image URL or an iOSbutton constant.
  * @type Number,String
  */
  leftButton: null,
  /**
  * Left view that is displayed on the annotation.
  * @type Titanium.UI.View
  * @requires android, iphone, ipad
  */
  leftView: null,
  /**
  * Image for the pin instead of the default image.
  * @type String
  * @requires android
  */
  pinImage: null,
  /**
  * Pin color. Specify one of: <Titanium.Map.ANNOTATION_GREEN>, <Titanium.Map.ANNOTATION_PURPLE> or <Titanium.Map.ANNOTATION_RED>.
  * @type Number
  */
  pincolor: null,
  /**
  * Right button image on the annotation, specified as an image URL or an iOSbutton constant.
  * @type Number,String
  */
  rightButton: null,
  /**
  * Right view that is displayed on the annotation.
  * @type Titanium.UI.View
  * @requires android, iphone, ipad
  */
  rightView: null,
  /**
  * Secondary title of the annotation view.
  * @type String
  */
  subtitle: null,
  /**
  * Key in the locale file to use for the subtitle property.
  * @type String
  */
  subtitleid: null,
  /**
  * Primary title of the annotation view.
  * @type String
  */
  title: null,
  /**
  * Key in the locale file to use for the title property.
  * @type String
  */
  titleid: null,
};

/**
* Fired when the user selects, deselects, or clicks on this annotation.
* @event Titanium.Map.Annotation#click
* @type {Object}
* @type Number index Index of the annotation in the map view's [annotations](Titanium.Map.View.annotations) array.
* @type String title Title of the annotation.
* @type Titanium.Map.View map The map view instance that this annotation belongs to.
* @type String clicksource Source of the click event, such as `pin`, or `leftButton`.
* @type Titanium.Map.Annotation annotation Annotation source object.
*/
/**
* @extends Titanium.Module
* @since 0.8
*/
Titanium.Map = {
  /**
  * Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event to indicate that the annotation is not being dragged.
  * @type Number
  * @requires iphone, ipad
  */
  ANNOTATION_DRAG_STATE_NONE: null,
  /**
  * Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event to indicate that the user started dragging the annotation.
  * @type Number
  * @requires iphone, ipad
  */
  ANNOTATION_DRAG_STATE_START: null,
  /**
  * Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event to indicate that the user moved the annotation.
  * @type Number
  * @requires iphone, ipad
  */
  ANNOTATION_DRAG_STATE_DRAG: null,
  /**
  * Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event to indicate that the user canceled the drag action.
  * @type Number
  * @requires iphone, ipad
  */
  ANNOTATION_DRAG_STATE_CANCEL: null,
  /**
  * Used in the [pinchangedragstate](Titanium.Map.View.pinchangedragstate) event to indicate that the user finished moving the annotation.
  * @type Number
  * @requires iphone, ipad
  */
  ANNOTATION_DRAG_STATE_END: null,
  /**
  * Color constant used to set a map annotation to green via the <Titanium.Map.Annotation.pincolor> property.
  * @type Number
  */
  ANNOTATION_GREEN: null,
  /**
  * Color constant used to set a map annotation to purple via the <Titanium.Map.Annotation.pincolor> property.
  * @type Number
  */
  ANNOTATION_PURPLE: null,
  /**
  * Color constant used to set a map annotation to red via the <Titanium.Map.Annotation.pincolor> property.
  * @type Number
  */
  ANNOTATION_RED: null,
  /**
  * Used with [mapType](Titanium.Map.View.mapType) to display a satellite image of the area with road and road name information layered on top.
  * @type Number
  */
  HYBRID_TYPE: null,
  /**
  * Used with [mapType](Titanium.Map.View.mapType) to display satellite imagery of the area.
  * @type Number
  */
  SATELLITE_TYPE: null,
  /**
  * Used with [mapType](Titanium.Map.View.mapType) to display a street map that shows the position of all roads and some road names.
  * @type Number
  */
  STANDARD_TYPE: null,
  /**
  * Used with [mapType](Titanium.Map.View.mapType) to display the terrain that shows the position of all roads and some road names.
  * @type Number
  * @requires mobileweb
  */
  TERRAIN_TYPE: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.Map.View#click
* @fires Titanium.Map.View#complete
* @fires Titanium.Map.View#error
* @fires Titanium.Map.View#loading
* @fires Titanium.Map.View#longpress
* @fires Titanium.Map.View#pinchangedragstate
* @fires Titanium.Map.View#regionChanged
* @fires Titanium.Map.View#regionchanged
*/
Titanium.Map.View = {
  /**
  * Indicates if changes to the mapping region should be animated.
  * @type Boolean
  * @requires iphone, ipad
  */
  animate: null,
  /**
  * Indicates if changes to the mapping region should be animated.
  * @type Boolean
  * @requires mobileweb
  */
  animated: null,
  /**
  * An array of annotations to add to the map.
  * @type Array<Titanium.Map.Annotation>
  */
  annotations: null,
  /**
  * Hide the annotation when clicking in the map view outside of the annotation.
  * @type Boolean
  * @requires android
  */
  hideAnnotationWhenTouchMap: null,
  /**
  * Map type, either: <Titanium.Map.STANDARD_TYPE>, <Titanium.Map.SATELLITE_TYPE> or <Titanium.Map.HYBRID_TYPE>.
  * @type Number
  */
  mapType: null,
  /**
  * A dictionary specifying the location and zoom level of the map.On the iOS platform, this property can only be set after the map view is loaded.To ensure this property is set when the application starts, wait for the[complete][Titanium.UI.Map-event-complete] event.
  * @type MapRegionType
  */
  region: null,
  /**
  * Boolean indicating if the map region should be modified to fit the map view's aspect ratio.
  * @type Boolean
  */
  regionFit: null,
  /**
  * Boolean indicating if the user's current device location should be shown on themap.
  * @type Boolean
  */
  userLocation: null,
  /**
  * The amount of north-to-south distance displayed on the map, measured in decimal degrees.
  * @type Number
  */
  latitudeDelta: null,
  /**
  * The amount of east-to-west distance displayed on the map, measured in decimal degrees.
  * @type Number
  */
  longitudeDelta: null,
};

/**
* Adds a new annotation to the map.
* @param {Dictionary<Titanium.Map.Annotation>|Titanium.Map.Annotation} annotation Either a dictionary of properties for the annotation or a <Titanium.Map.Annotation> instance.
*/
Titanium.Map.View.addAnnotation = function(annotation) {};

/**
* Adds one or more new annotations to the map.
* @param {Array<Titanium.Map.Annotation>|Array<Dictionary<Titanium.Map.Annotation>>} annotations Array of [Annotation](Titanium.Map.Annotation) objects, or an array ofdictionaries describing of properties for the annotation.
*/
Titanium.Map.View.addAnnotations = function(annotations) {};

/**
* Adds a route to the map.
* @since [object Object]
* @param {MapRouteType} route Simple dictionary object describing the route.
*/
Titanium.Map.View.addRoute = function(route) {};

/**
* Deselects the specified annotation, so the main annotation is hidden and onlya pin image is shown.
* @param {String|Titanium.Map.Annotation} annotation Annotation to deselect, identified by an annotation title or a <Titanium.Map.Annotation> reference.
*/
Titanium.Map.View.deselectAnnotation = function(annotation) {};

/**
* Removes all annotations from the map.
*/
Titanium.Map.View.removeAllAnnotations = function() {};

/**
* Removes an existing annotation from the map.
* @param {String|Titanium.Map.Annotation} annotation Annotation to remove, identified by an annotation title or a <Titanium.Map.Annotation> reference.
*/
Titanium.Map.View.removeAnnotation = function(annotation) {};

/**
* Removes one or more existing annotations from the map.
* @param {Array<String>|Array<Titanium.Map.Annotation>} annotations Array of annotations to remove.
*/
Titanium.Map.View.removeAnnotations = function(annotations) {};

/**
* Remove a previously added route.
* @since [object Object]
* @param {MapRouteType} route Same route object passed to [addRoute](Titanium.Map.View.addRoute).
*/
Titanium.Map.View.removeRoute = function(route) {};

/**
* Selects the annoation, showing the full annotation.
* @param {String|Titanium.Map.Annotation} annotation Annotation to show, identified by an annotation title or a <Titanium.Map.Annotation> reference.
*/
Titanium.Map.View.selectAnnotation = function(annotation) {};

/**
* Sets the map location and zoom level.
* @param {MapLocationType} location Dictionary specifying the location and the zoom level for the map.
*/
Titanium.Map.View.setLocation = function(location) {};

/**
* Sets the type of map (satellite, hybrid, or standard).
* @param {Number} mapType Map type constant, either <Titanium.Map.STANDARD_TYPE>, <Titanium.Map.SATELLITE_TYPE> or <Titanium.Map.HYBRID_TYPE>.
*/
Titanium.Map.View.setMapType = function(mapType) {};

/**
* Zooms in or out of the map.
* @param {Number} level Relative zoom level (positive to zoom in, negative to zoom out).
*/
Titanium.Map.View.zoom = function(level) {};
/**
* Fired when the user selects, deselects, or clicks on an annotation.
* @event Titanium.Map.View#click
* @type {Object}
* @type Number index the annotation index.
* @requires iphone, ipad, mobileweb
* @type String title Title of the annotation.
* @type String subtitle Subtitle of the annotation.
* @requires android, mobileweb
* @type Titanium.Map.View map The map view instance.
* @requires iphone, ipad, mobileweb
* @type String clicksource Source of the click event, such as `pin`, or `leftButton`.
* @type Titanium.Map.Annotation annotation Annotation source object.
* @type Number latitude Latitude of the clicked annotation.
* @requires android, mobileweb
* @type Number longitude Longitude of the clicked annotation.
* @requires android, mobileweb
*/
/**
* Fired when the map completes loading.
* @event Titanium.Map.View#complete
* @type {Object}
* @type Boolean success Indicates a successful operation. Returns `true`.
* @type String error Error message, if any returned. Will be undefined.
* @type Number code Error code. Error code will be 0.
*/
/**
* Fired when the map receives a mapping error.
* @event Titanium.Map.View#error
* @type {Object}
* @type Boolean success Indicates a successful operation. Returns `false`.
* @type String error Error message, if any returned. May be undefined.
* @type Number code Error code.If the error was generated by the operating system, that system's error valueis used. Otherwise, this value will be -1.
*/
/**
* Fired when the map begins loading.
* @event Titanium.Map.View#loading
* @type {Object}
*/
/**
* @event Titanium.Map.View#longpress
* @type {Object}
*/
/**
* Fired when the user interacts with a draggable annotation.
* @event Titanium.Map.View#pinchangedragstate
* @type {Object}
* @type Titanium.Map.Annotation annotation Annotation being dragged.
* @type Titanium.Map.View map This map view.
* @type String title Annotation title.
* @type Number index Index of the annotation.
* @type Number newState New drag state for the annotation, one of[ANNOTATION_DRAG_STATE_NONE](Titanium.Map.ANNOTATION_DRAG_STATE_NONE),[ANNOTATION_DRAG_STATE_START](Titanium.Map.ANNOTATION_DRAG_STATE_START),[ANNOTATION_DRAG_STATE_DRAG](Titanium.Map.ANNOTATION_DRAG_STATE_DRAG),[ANNOTATION_DRAG_STATE_CANCEL](Titanium.Map.ANNOTATION_DRAG_STATE_CANCEL) or[ANNOTATION_DRAG_STATE_END](Titanium.Map.ANNOTATION_DRAG_STATE_END).
* @type Number oldState Previous drag state for the annotation, one of[ANNOTATION_DRAG_STATE_NONE](Titanium.Map.ANNOTATION_DRAG_STATE_NONE),[ANNOTATION_DRAG_STATE_START](Titanium.Map.ANNOTATION_DRAG_STATE_START),[ANNOTATION_DRAG_STATE_DRAG](Titanium.Map.ANNOTATION_DRAG_STATE_DRAG),[ANNOTATION_DRAG_STATE_CANCEL](Titanium.Map.ANNOTATION_DRAG_STATE_CANCEL) or[ANNOTATION_DRAG_STATE_END](Titanium.Map.ANNOTATION_DRAG_STATE_END).
*/
/**
* Fired when the mapping region changes.
* @event Titanium.Map.View#regionChanged
* @type {Object}
* @type Number longitude Longitude value for the center point of the map, in decimal degrees.
* @type Number latitudeDelta The amount of north-to-south distance displayed on the map, measured in decimal degrees.
* @type Number longitudeDelta The amount of east-to-west distance displayed on the map, measured in decimal degrees.
* @type Number latitude Latitude value for the center point of the map, in decimal degrees.
*/
/**
* Fired when the mapping region changes.
* @event Titanium.Map.View#regionchanged
* @type {Object}
* @type Number longitude Longitude value for the center point of the map, in decimal degrees.
* @type Number latitudeDelta The amount of north-to-south distance displayed on the map, measured in decimal degrees.
* @type Number longitudeDelta The amount of east-to-west distance displayed on the map, measured in decimal degrees.
* @type Number latitude Latitude value for the center point of the map, in decimal degrees.
*/
/**
*/
MapRegionType = {
  /**
  * Longitude value for the center point of the map, in decimal degrees.
  * @type Number
  */
  longitude: null,
  /**
  * Latitude value for the center point of the map, in decimal degrees.
  * @type Number
  */
  latitude: null,
  /**
  * The amount of east-to-west distance displayed on the map, measured in decimal degrees.
  * @type Number
  */
  longitudeDelta: null,
  /**
  * The amount of north-to-south distance displayed on the map, measured in decimal degrees.
  * @type Number
  */
  latitudeDelta: null,
};


/**
*/
MapLocationType = {
  /**
  * Longitude value for the center point of the map, in decimal degrees.
  * @type Number
  */
  longitude: null,
  /**
  * Latitude value for the center point of the map, in decimal degrees.
  * @type Number
  */
  latitude: null,
  /**
  * The amount of east-to-west distance displayed on the map, measured in decimal degrees.
  * @type Number
  */
  longitudeDelta: null,
  /**
  * The amount of north-to-south distance displayed on the map, measured in decimal degrees.
  * @type Number
  */
  latitudeDelta: null,
  /**
  * Set to `true` to animate the move to the new location.
  * @type Boolean
  */
  animate: null,
  /**
  * If `true`, the specified region is modified to fit the aspect ratio of themap view, while remaining centered on `latitude`,`longitude`.
  * @type Boolean
  */
  regionFit: null,
};


/**
* @requires android, iphone, ipad, mobileweb
*/
MapRouteType = {
  /**
  * Route name.
  * @type String
  */
  name: null,
  /**
  * Array of map points making up the route.
  * @type Array<MapPointType>
  */
  points: null,
  /**
  * Color to use when drawing the route, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Line width to use when drawing the route.
  * @type Number
  */
  width: null,
};


/**
*/
MapPointType = {
  /**
  * Longitude value of the map point, in decimal degrees.
  * @type Number
  */
  longitude: null,
  /**
  * Latitude value of the map point, in decimal degrees.
  * @type Number
  */
  latitude: null,
};


/**
* @extends Titanium.Module
* @since 1.7.0
* @requires android
*/
Titanium.Media.Android = {
};

/**
* Scans newly created or downloaded media files to make them available to otherAndroid media providers, such as the Gallery.
* @param {Array<String>} paths Array of paths to the files you want to scan.
* @param {Array<String>} mimeTypes Array of MIME types for the files in the paths parameter. If `null`, MIME type will be inferred from the file names.
* @param {Callback<MediaScannerResponse>} callback Function to call when each file is done being scanned. 
*/
Titanium.Media.Android.scanMediaFiles = function(paths, mimeTypes, callback) {};

/**
* Set the system homescreen wallpaper.
* @param {Titanium.Blob} image Image to use as the wallpaper, as a `Blob` object.
* @param {Boolean} scale If `true`, the image is scaled to fit the width of the system wallpaper. If`false`, the image is not scaled.
*/
Titanium.Media.Android.setSystemWallpaper = function(image, scale) {};

/**
*/
MediaScannerResponse = {
  /**
  * Path to the media file that was scanned.
  * @type String
  */
  path: null,
  /**
  * URI to the file if it was scanned and added to the media library, or `null`if the file was not added.
  * @type String
  */
  uri: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires android, iphone, ipad
* @fires Titanium.Media.AudioPlayer#change
* @fires Titanium.Media.AudioPlayer#complete
* @fires Titanium.Media.AudioPlayer#error
* @fires Titanium.Media.AudioPlayer#progress
*/
Titanium.Media.AudioPlayer = {
  /**
  * Audio data is being buffered from the network.
  * @type Number
  */
  STATE_BUFFERING: null,
  /**
  * Audio playback is being initialized.
  * @type Number
  */
  STATE_INITIALIZED: null,
  /**
  * Playback is paused.
  * @type Number
  */
  STATE_PAUSED: null,
  /**
  * Audio playback is active.
  * @type Number
  */
  STATE_PLAYING: null,
  /**
  * Audio playback is starting.
  * @type Number
  */
  STATE_STARTING: null,
  /**
  * Audio playback is stopped.
  * @type Number
  */
  STATE_STOPPED: null,
  /**
  * Audio playback is stopping.
  * @type Number
  */
  STATE_STOPPING: null,
  /**
  * Player is waiting for audio data from the network.
  * @type Number
  */
  STATE_WAITING_FOR_DATA: null,
  /**
  * Player is waiting for audio data to fill the queue.
  * @type Number
  */
  STATE_WAITING_FOR_QUEUE: null,
  /**
  * Boolean to indicate if audio should continue playing even if the associatedAndroid [Activity](Titanium.Android.Activity) is paused.
  * @type Boolean
  * @requires android
  */
  allowBackground: null,
  /**
  * Bit rate of the current playback stream.
  * @type Number
  * @requires iphone, ipad
  */
  bitRate: null,
  /**
  * Estimated duration in milliseconds of the file being played.
  * @type Number
  * @requires android, iphone, ipad
  */
  duration: null,
  /**
  * Boolean indicating if the player is idle.
  * @type Boolean
  * @requires iphone, ipad
  */
  idle: null,
  /**
  * Boolean indicating if audio playback is paused.
  * @type Boolean
  */
  paused: null,
  /**
  * Boolean indicating if audio is currently playing.
  * @type Boolean
  */
  playing: null,
  /**
  * Current playback progress, in milliseconds.
  * @type Number
  * @requires iphone, ipad
  */
  progress: null,
  /**
  * Current state of playback, specified using one of the `STATE` constants defined on this object.
  * @type Number
  * @requires iphone, ipad
  */
  state: null,
  /**
  * URL for the audio stream.
  * @type String
  */
  url: null,
  /**
  * Volume of the audio, from 0.0 (muted) to 1.0 (loudest).
  * @type Number
  */
  volume: null,
  /**
  * Boolean indicating if the playback is waiting for audio data from the network.
  * @type Boolean
  * @requires iphone, ipad
  */
  waiting: null,
  /**
  * Size of the buffer used for streaming, in bytes.
  * @type Number
  * @requires iphone, ipad
  */
  bufferSize: null,
  /**
  * Current playback position of the audio.
  * @type Number
  * @requires android
  */
  time: null,
};

/**
* Returns the value of the [paused](Titanium.Media.AudioPlayer.paused) property.
*/
Titanium.Media.AudioPlayer.getPaused = function() {};

/**
* Returns the value of the [paused](Titanium.Media.AudioPlayer.paused) property.
*/
Titanium.Media.AudioPlayer.isPaused = function() {};

/**
* Returns the value of the [playing](Titanium.Media.AudioPlayer.playing) property.
*/
Titanium.Media.AudioPlayer.getPlaying = function() {};

/**
* Returns the value of the [playing](Titanium.Media.AudioPlayer.playing) property.
*/
Titanium.Media.AudioPlayer.isPlaying = function() {};

/**
* Pauses audio playback.
*/
Titanium.Media.AudioPlayer.pause = function() {};

/**
* Starts or resumes audio playback.
*/
Titanium.Media.AudioPlayer.play = function() {};

/**
* Sets the value of the [paused](Titanium.Media.AudioPlayer.paused) property.
* @param {Boolean} paused Pass `true` to pause the current playback temporarily, `false` to unpause it.
*/
Titanium.Media.AudioPlayer.setPaused = function(paused) {};

/**
* Stops buffering audio data and releases audio resources.
*/
Titanium.Media.AudioPlayer.release = function() {};

/**
* Starts or resumes audio playback.
*/
Titanium.Media.AudioPlayer.start = function() {};

/**
* Converts a [state](Titanium.Media.AudioPlayer.state) value into a text descriptionsuitable for display.
* @param {Number} state State value to convert.
*/
Titanium.Media.AudioPlayer.stateDescription = function(state) {};

/**
* Stops audio playback.
*/
Titanium.Media.AudioPlayer.stop = function() {};
/**
* Fired when the state of the playback changes.
* @event Titanium.Media.AudioPlayer#change
* @type {Object}
* @type Number state Current state of playback.
* @type undefined description Text description of the state of playback.
*/
/**
* Fired when the audio has finished playing.
* @event Titanium.Media.AudioPlayer#complete
* @type {Object}
* @type Boolean success Indicates if the sound was played successfully.Returns `true` if request succeeded, `false` otherwise.
* @type String error Error message, if any returned. Will be undefined if `success` is `true`.
* @type Number code Error code.Error code will be 0 if `success` is `true`, nonzero otherwise. If the errorwas generated by the operating system, that system's error value is used.Otherwise, this value will be -1.
*/
/**
* Fired when there's an error.
* @event Titanium.Media.AudioPlayer#error
* @type {Object}
* @type String error Error message.
* @type Number code Error code. Different between android and iOS.
*/
/**
* Fired once per second with the current progress during playback.
* @event Titanium.Media.AudioPlayer#progress
* @type {Object}
* @type undefined progress Current progress, in milliseconds.
*/
/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.Media.AudioRecorder = {
  /**
  * Audio compression to be used for the recording.
  * @type Number
  */
  compression: null,
  /**
  * Audio format to be used for the recording.
  * @type Number
  */
  format: null,
  /**
  * Indicates if the audio recorder is paused.
  * @type Boolean
  */
  paused: null,
  /**
  * Indicates if the audio recorder is recording.
  * @type Boolean
  */
  recording: null,
  /**
  * Indicates if the audio recorder is stopped.
  * @type Boolean
  */
  stopped: null,
};

/**
* Pauses the current audio recording.
*/
Titanium.Media.AudioRecorder.pause = function() {};

/**
* Resumes a paused recording.
*/
Titanium.Media.AudioRecorder.resume = function() {};

/**
* Starts an audio recording.
*/
Titanium.Media.AudioRecorder.start = function() {};

/**
* Stops the current audio recording and returns the recorded audio file.
*/
Titanium.Media.AudioRecorder.stop = function() {};

/**
* @extends Titanium.Proxy
* @since 1.4.0
* @requires iphone, ipad
*/
Titanium.Media.Item = {
  /**
  * Artist credited for the album containing this item.
  * @type String
  */
  albumArtist: null,
  /**
  * Title of the album containing this item.
  * @type String
  */
  albumTitle: null,
  /**
  * Number of tracks for the album containing this item.
  * @type Number
  */
  albumTrackCount: null,
  /**
  * Track number for this item.
  * @type Number
  */
  albumTrackNumber: null,
  /**
  * Artist credited for this item.
  * @type String
  */
  artist: null,
  /**
  * Image for the item's artwork as a `Blob` object,  or `null` if no artwork isavailable.
  * @type Titanium.Blob
  */
  artwork: null,
  /**
  * Composer of this item.
  * @type String
  */
  composer: null,
  /**
  * Total number of discs for the album containing this item.
  * @type Number
  */
  discCount: null,
  /**
  * Disc number for this item in the album.
  * @type Number
  */
  discNumber: null,
  /**
  * Genre of this item.
  * @type String
  */
  genre: null,
  /**
  * True if this item is part of a compilation album.
  * @type Boolean
  */
  isCompilation: null,
  /**
  * Lyrics for this item.
  * @type String
  */
  lyrics: null,
  /**
  * The type of the media. 
  * @type Number
  */
  mediaType: null,
  /**
  * Number of times the item has been played.
  * @type Number
  */
  playCount: null,
  /**
  * Length (in seconds) of this item.
  * @type Number
  */
  playbackDuration: null,
  /**
  * Title of a podcast item.
  * @type String
  */
  podcastTitle: null,
  /**
  * Rating for this item.
  * @type Number
  */
  rating: null,
  /**
  * Number of times this item has been skipped.
  * @type Number
  */
  skipCount: null,
  /**
  * Title of this item.
  * @type String
  */
  title: null,
};


/**
* @extends Titanium.Module
* @since 0.1
* @fires Titanium.Media#linechange
* @fires Titanium.Media#recordinginput
* @fires Titanium.Media#routechange
* @fires Titanium.Media#volume
*/
Titanium.Media = {
  /**
  * Audio file format 3GPP2.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FILEFORMAT_3GP2: null,
  /**
  * Audio file format 3GPP.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FILEFORMAT_3GPP: null,
  /**
  * Audio file format Audio Interchange File Format (AIFF).
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FILEFORMAT_AIFF: null,
  /**
  * Audio file format Adaptive Multi-Rate (AMR).
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FILEFORMAT_AMR: null,
  /**
  * Audio file format Apple Compressed Audio Format (CAF).
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FILEFORMAT_CAF: null,
  /**
  * Audio file format MP3.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FILEFORMAT_MP3: null,
  /**
  * Audio file format MP4.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FILEFORMAT_MP4: null,
  /**
  * Audio file format MP4A.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FILEFORMAT_MP4A: null,
  /**
  * Audio file format WAVE.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FILEFORMAT_WAVE: null,
  /**
  * Audio format MPEG4 AAC encoding.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FORMAT_AAC: null,
  /**
  * Audio format 8-bit aLaw encoding.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FORMAT_ALAW: null,
  /**
  * Audio format Apple lossless encoding.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FORMAT_APPLE_LOSSLESS: null,
  /**
  * Audio format iLBC encoding.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FORMAT_ILBC: null,
  /**
  * Audio format Apple IMA4 encoding.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FORMAT_IMA4: null,
  /**
  * Audio format 16-bit, linear PCM encoding.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FORMAT_LINEAR_PCM: null,
  /**
  * Audio format 8-bit muLaw encoding.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_FORMAT_ULAW: null,
  /**
  * Line-type constant for headphones.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_HEADPHONES: null,
  /**
  * Line-type constant for headphones and microphone.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_HEADPHONES_AND_MIC: null,
  /**
  * Line-type constant for headset in/out.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_HEADSET_INOUT: null,
  /**
  * Line-type constant for line-out.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_LINEOUT: null,
  /**
  * Line-type constant for microphone.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_MICROPHONE: null,
  /**
  * Line-type constant indicated mute switch is on.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_MUTED: null,
  /**
  * Line-type constant indicating receiver and microphone.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_RECEIVER_AND_MIC: null,
  /**
  * For long-duration sounds such as rain, car engine noise, and so on.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_CATEGORY_AMBIENT: null,
  /**
  * Session mode for playing recorded music or other sounds that are central to the successful use of your application.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_CATEGORY_PLAYBACK: null,
  /**
  * Session mode for recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) application.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD: null,
  /**
  * Session mode for recording audio; it silences playback audio.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_CATEGORY_RECORD: null,
  /**
  * Session mode for long-duration sounds such as rain, car engine noise, and so on.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_CATEGORY_SOLO_AMBIENT: null,
  /**
  * For long-duration sounds such as rain, car engine noise, and so on.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_SESSION_MODE_AMBIENT: null,
  /**
  * Session mode for playing recorded music or other sounds that are central to the successful use of your application.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_SESSION_MODE_PLAYBACK: null,
  /**
  * Session mode for recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) application.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_SESSION_MODE_PLAY_AND_RECORD: null,
  /**
  * Session mode for recording audio; it silences playback audio.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_SESSION_MODE_RECORD: null,
  /**
  * Session mode for long-duration sounds such as rain, car engine noise, and so on.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_SESSION_MODE_SOLO_AMBIENT: null,
  /**
  * Constant that specifies audio should output to the default audio route. See <Titanium.Media.setOverrideAudioRoute> for more information.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_SESSION_OVERRIDE_ROUTE_NONE: null,
  /**
  * Constant that specifies audio should output to the speaker. See <Titanium.Media.setOverrideAudioRoute> for more information.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER: null,
  /**
  * Constant for line level input on a dock connector. This is an input port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_LINEIN: null,
  /**
  * Constant for built-in microphone on an iOS device. This is an input port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_BUILTINMIC: null,
  /**
  * Constant for microphone on a wired headset. This is an input port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_HEADSETMIC: null,
  /**
  * Constant for line level output on a dock connector. This is an output port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_LINEOUT: null,
  /**
  * Constant for headphone or headset output. This is an output port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_HEADPHONES: null,
  /**
  * Constant for output on a Bluetooth A2DP device. This is an output port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_BLUETOOTHA2DP: null,
  /**
  * Constant for the speaker you hold to your ear when on a phone call. This is an output port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_BUILTINRECEIVER: null,
  /**
  * Constant for built-in speaker on an iOS device. This is an output port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_BUILTINSPEAKER: null,
  /**
  * Constant for output via High-Definition Multimedia Interface. This is an output port
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_HDMI: null,
  /**
  * Constant for output on a remote Air Play device. This is an output port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_AIRPLAY: null,
  /**
  * Constant for input or output on a Bluetooth Hands-Free Profile device. This can be both an input and output port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_BLUETOOTHHFP: null,
  /**
  * Constant for input or output on a Universal Serial Bus device. This can be both an input and output port.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_USBAUDIO: null,
  /**
  * Constant for output on a Bluetooth Low Energy device. This is an output port. This is available on iOS7 and later.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_BLUETOOTHLE: null,
  /**
  * Constant for Input or output via Car Audio. This can be both an input and output port. This is available on iOS7 and later.
  * @type String
  * @requires iphone, ipad
  */
  AUDIO_SESSION_PORT_CARAUDIO: null,
  /**
  * Line-type constant for speaker output.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_SPEAKER: null,
  /**
  * Line-type constant indicating that audio is unavailable.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_UNAVAILABLE: null,
  /**
  * Line-type constant indicating that line-type is unknown or not determined.
  * @type Number
  * @requires iphone, ipad
  */
  AUDIO_UNKNOWN: null,
  /**
  * Constant specifying to have the device determine to use the flash or not.
  * @type Number
  * @requires iphone, ipad, android
  */
  CAMERA_FLASH_AUTO: null,
  /**
  * Constant specifying to never fire the flash.
  * @type Number
  * @requires iphone, ipad, android
  */
  CAMERA_FLASH_OFF: null,
  /**
  * Constant specifying to always fire the flash.
  * @type Number
  * @requires iphone, ipad, android
  */
  CAMERA_FLASH_ON: null,
  /**
  * Constant specifying the front camera.
  * @type Number
  * @requires iphone, ipad, android
  */
  CAMERA_FRONT: null,
  /**
  * Constant indicating the rear camera.
  * @type Number
  * @requires iphone, ipad, android
  */
  CAMERA_REAR: null,
  /**
  * Constant specifying that app is authorized to use camera. This is available on iOS7 and later.
  * @type Number
  * @requires iphone, ipad
  */
  CAMERA_AUTHORIZATION_AUTHORIZED: null,
  /**
  * Constant specifying that app is denied usage of camera. This is available on iOS7 and later.
  * @type Number
  * @requires iphone, ipad
  */
  CAMERA_AUTHORIZATION_DENIED: null,
  /**
  * Constant specifying that app is restricted from using camera. This is available on iOS7 and later.
  * @type Number
  * @requires iphone, ipad
  */
  CAMERA_AUTHORIZATION_RESTRICTED: null,
  /**
  * Constant specifying that app is not yet authorized to use camera. This is available on iOS7 and later.
  * @type Number
  * @requires iphone, ipad
  */
  CAMERA_AUTHORIZATION_NOT_DETERMINED: null,
  /**
  * Constant for media device busy error.
  * @type Number
  */
  DEVICE_BUSY: null,
  /**
  * Media type constant for photo media.
  * @type String
  */
  MEDIA_TYPE_PHOTO: null,
  /**
  * Media type constant for video media.
  * @type String
  */
  MEDIA_TYPE_VIDEO: null,
  /**
  * Music library media containing any type of content.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_TYPE_ALL: null,
  /**
  * Music library media containing any type of audio content.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_TYPE_ANY_AUDIO: null,
  /**
  * Music library media containing audiobook content.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_TYPE_AUDIOBOOK: null,
  /**
  * Music library media containing music content.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_TYPE_MUSIC: null,
  /**
  * Music library media containing podcast content.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_TYPE_PODCAST: null,
  /**
  * Constant for grouping query results by title.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_GROUP_TITLE: null,
  /**
  * Constant for grouping query results by album.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_GROUP_ALBUM: null,
  /**
  * Constant for grouping query results by artist.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_GROUP_ARTIST: null,
  /**
  * Constant for grouping query results by album and artist.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_GROUP_ALBUM_ARTIST: null,
  /**
  * Constant for grouping query results by composer.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_GROUP_COMPOSER: null,
  /**
  * Constant for grouping query results by genre.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_GROUP_GENRE: null,
  /**
  * Constant for grouping query results by playlist.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_GROUP_PLAYLIST: null,
  /**
  * Constant for grouping query results by podcast title.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_MEDIA_GROUP_PODCAST_TITLE: null,
  /**
  * Constant for "Repeat All" setting.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_REPEAT_ALL: null,
  /**
  * Constant for user's default repeat setting.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_REPEAT_DEFAULT: null,
  /**
  * Constant for "No Repeat" setting.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_REPEAT_NONE: null,
  /**
  * Constant for "Repeat one item" setting.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_REPEAT_ONE: null,
  /**
  * Constant for shuffling complete albums setting.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_SHUFFLE_ALBUMS: null,
  /**
  * Constant for user's default shuffle setting.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_SHUFFLE_DEFAULT: null,
  /**
  * Constant for "no shuffle" setting.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_SHUFFLE_NONE: null,
  /**
  * Constant for shuffling songs setting.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_SHUFFLE_SONGS: null,
  /**
  * Constant for interrupted state.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_STATE_INTERRUPTED: null,
  /**
  * Constant for paused state.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_STATE_PAUSED: null,
  /**
  * Constant for playing state.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_STATE_PLAYING: null,
  /**
  * Constant for backward seek state.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_STATE_SEEK_BACKWARD: null,
  /**
  * Constant for forward seek state.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_STATE_SEEK_FORWARD: null,
  /**
  * Constant for stopped state.
  * @type Number
  * @requires iphone, ipad
  */
  MUSIC_PLAYER_STATE_STOPPED: null,
  /**
  * Constant for media no camera error.
  * @type Number
  */
  NO_CAMERA: null,
  /**
  * Constant for media no video error.
  * @type Number
  */
  NO_VIDEO: null,
  /**
  * Media type constant for high-quality video recording.
  * @type Number
  * @requires iphone, ipad
  */
  QUALITY_HIGH: null,
  /**
  * Media type constant for low-quality video recording.
  * @type Number
  * @requires iphone, ipad
  */
  QUALITY_LOW: null,
  /**
  * Media type constant for medium-quality video recording.
  * @type Number
  * @requires iphone, ipad
  */
  QUALITY_MEDIUM: null,
  /**
  * Constant for unknown media error.
  * @type Number
  */
  UNKNOWN_ERROR: null,
  /**
  * Constant for default video controls.
  * @type Number
  */
  VIDEO_CONTROL_DEFAULT: null,
  /**
  * Constant for video controls for an embedded view.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_CONTROL_EMBEDDED: null,
  /**
  * Constant for fullscreen video controls.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_CONTROL_FULLSCREEN: null,
  /**
  * Constant for video controls hidden.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_CONTROL_HIDDEN: null,
  /**
  * Constant for no video controls.
  * @type Number
  */
  VIDEO_CONTROL_NONE: null,
  /**
  * Constant for video controls volume only.
  * @type Number
  * @requires iphone, ipad
  */
  VIDEO_CONTROL_VOLUME_ONLY: null,
  /**
  * Video playback ended normally.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_FINISH_REASON_PLAYBACK_ENDED: null,
  /**
  * Video playback ended abnormally.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_FINISH_REASON_PLAYBACK_ERROR: null,
  /**
  * Video playback ended by user action (such as clicking the `Done` button).
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_FINISH_REASON_USER_EXITED: null,
  /**
  * Current media is playable.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  VIDEO_LOAD_STATE_PLAYABLE: null,
  /**
  * Playback will be automatically started in this state when `autoplay` is true.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  VIDEO_LOAD_STATE_PLAYTHROUGH_OK: null,
  /**
  * Playback will be automatically paused in this state, if started.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  VIDEO_LOAD_STATE_STALLED: null,
  /**
  * Current load state is not known.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  VIDEO_LOAD_STATE_UNKNOWN: null,
  /**
  * A audio type of media in the movie returned by <Titanium.Media.VideoPlayer> `mediaTypes` property.
  * @type Number
  * @requires iphone, ipad
  */
  VIDEO_MEDIA_TYPE_AUDIO: null,
  /**
  * An unknown type of media in the movie returned by <Titanium.Media.VideoPlayer> `mediaTypes` property.
  * @type Number
  * @requires iphone, ipad
  */
  VIDEO_MEDIA_TYPE_NONE: null,
  /**
  * A video type of media in the movie returned by <Titanium.Media.VideoPlayer> `mediaTypes` property.
  * @type Number
  * @requires iphone, ipad
  */
  VIDEO_MEDIA_TYPE_VIDEO: null,
  /**
  * Video playback has been interrupted.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_PLAYBACK_STATE_INTERRUPTED: null,
  /**
  * Video playback is paused.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  VIDEO_PLAYBACK_STATE_PAUSED: null,
  /**
  * Video is being played.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  VIDEO_PLAYBACK_STATE_PLAYING: null,
  /**
  * Video playback is rewinding.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD: null,
  /**
  * Video playback is seeking forward.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_PLAYBACK_STATE_SEEKING_FORWARD: null,
  /**
  * Video playback is stopped.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  VIDEO_PLAYBACK_STATE_STOPPED: null,
  /**
  * Constant for disabling repeat on video playback.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  VIDEO_REPEAT_MODE_NONE: null,
  /**
  * Constant for repeating one video (i.e., the one video will repeat constantly) during playback.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  VIDEO_REPEAT_MODE_ONE: null,
  /**
  * Scale video to fill the screen, clipping edges if necessary.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_SCALING_ASPECT_FILL: null,
  /**
  * Scale video to fit the screen, letterboxing if necessary.
  * @type Number
  */
  VIDEO_SCALING_ASPECT_FIT: null,
  /**
  * Video is scaled until both dimensions fit the screen exactly, stretching if necessary.
  * @type Number
  * @requires android, iphone, ipad
  */
  VIDEO_SCALING_MODE_FILL: null,
  /**
  * Video scaling is disabled.
  * @type Number
  */
  VIDEO_SCALING_NONE: null,
  /**
  * Video source type is a file.
  * @type Number
  * @requires iphone, ipad
  */
  VIDEO_SOURCE_TYPE_FILE: null,
  /**
  * Video source type is a remote stream.
  * @type Number
  * @requires iphone, ipad
  */
  VIDEO_SOURCE_TYPE_STREAMING: null,
  /**
  * Video source type is unknown.
  * @type Number
  * @requires iphone, ipad
  */
  VIDEO_SOURCE_TYPE_UNKNOWN: null,
  /**
  * Use the exact time.
  * @type Number
  * @requires iphone, ipad
  */
  VIDEO_TIME_OPTION_EXACT: null,
  /**
  * Use the closest keyframe in the time.
  * @type Number
  * @requires iphone, ipad, android
  */
  VIDEO_TIME_OPTION_NEAREST_KEYFRAME: null,
  /**
  * Use the closest sync (or key) frame at given the time.
  * @type Number
  * @requires android
  */
  VIDEO_TIME_OPTION_CLOSEST_SYNC: null,
  /**
  * Use the sync (or key) frame located right after or at given the time.
  * @type Number
  * @requires android
  */
  VIDEO_TIME_OPTION_NEXT_SYNC: null,
  /**
  * Use the sync (or key) frame located right before or at given the time.
  * @type Number
  * @requires android
  */
  VIDEO_TIME_OPTION_PREVIOUS_SYNC: null,
  /**
  * An instance of <Titanium.Media.MusicPlayer> representing the app-specific music player.
  * @type Titanium.Media.MusicPlayer
  * @requires iphone, ipad
  */
  appMusicPlayer: null,
  /**
  * Returns the line type constant for the current line type.
  * @type Number
  * @requires iphone, ipad
  */
  audioLineType: null,
  /**
  * Returns `true` if the device is playing audio.
  * @type Boolean
  * @requires iphone, ipad
  */
  audioPlaying: null,
  /**
  * A constant for the audio session category to be used.
  * @type Number
  * @requires iphone, ipad
  */
  audioSessionCategory: null,
  /**
  * A constant for the audio session mode to be used.
  * @type Number
  * @requires iphone, ipad
  */
  audioSessionMode: null,
  /**
  * Array indicating which cameras are available, `CAMERA_FRONT`, `CAMERA_REAR` or both.
  * @type Array<Number>
  * @requires iphone, ipad, android
  */
  availableCameras: null,
  /**
  * Array of media type constants supported for the camera.
  * @type Array<Object>
  * @requires iphone, ipad
  */
  availableCameraMediaTypes: null,
  /**
  * Array of media type constants supported for saving to the device's camera roll or saved images album.
  * @type Array<Object>
  * @requires iphone, ipad
  */
  availablePhotoGalleryMediaTypes: null,
  /**
  * Array of media type constants supported for the photo library.
  * @type Array<Object>
  * @requires iphone, ipad
  */
  availablePhotoMediaTypes: null,
  /**
  * Current average microphone level in dB or -1 if microphone monitoring is disabled.
  * @type Number
  * @requires iphone, ipad
  */
  averageMicrophonePower: null,
  /**
  * Determines how the flash is fired when using the device's camera.
  * @type Number
  * @requires android, iphone, ipad
  */
  cameraFlashMode: null,
  /**
  * `true` if the device has a recording input device available.
  * @type Boolean
  * @requires iphone, ipad
  */
  canRecord: null,
  /**
  * Returns a description of the current route, consisting of zero or more input ports and zero or more output ports.
  * @type RouteDescription
  * @requires iphone, ipad
  */
  currentRoute: null,
  /**
  * `true` if the device has camera support.
  * @type Boolean
  * @requires iphone, ipad, android
  */
  isCameraSupported: null,
  /**
  * Returns the authorization status for the camera.
  * @type Number
  * @requires iphone, ipad
  */
  cameraAuthorizationStatus: null,
  /**
  * Current microphone level peak power in dB or -1 if microphone monitoring is disabled.
  * @type Number
  * @requires iphone, ipad
  */
  peakMicrophonePower: null,
  /**
  * An instance of <Titanium.Media.MusicPlayer> representing the system-wide music player.
  * @type Titanium.Media.MusicPlayer
  * @requires iphone, ipad
  */
  systemMusicPlayer: null,
  /**
  * Current volume of the playback device.
  * @type Number
  * @requires iphone, ipad
  */
  volume: null,
};

/**
* Plays a device beep notification.
*/
Titanium.Media.beep = function() {};

/**
* Hides the device camera UI.
* @since [object Object]
*/
Titanium.Media.hideCamera = function() {};

/**
* Hides the music library.
*/
Titanium.Media.hideMusicLibrary = function() {};

/**
* Returns `true` if the source supports the specified media type.
* @param {String} source Media source specified as a string: `camera` for Camera or `photo` for Photo Library.
* @param {String} type Media type to check.
*/
Titanium.Media.isMediaTypeSupported = function(source, type) {};

/**
* Shows the music library and allows the user to select one or more tracks.
* @param {MusicLibraryOptionsType} options A dictionary of options as described in <MusicLibraryOptionsType>.
*/
Titanium.Media.openMusicLibrary = function(options) {};

/**
* Opens the photo gallery image picker.
* @param {PhotoGalleryOptionsType} options Photo gallery options as described in <PhotoGalleryOptionsType>.
*/
Titanium.Media.openPhotoGallery = function(options) {};

/**
* Displays the given image.
* @param {Dictionary<PreviewImageOptions>} options Dictionary containing the image and callback functions.
*/
Titanium.Media.previewImage = function(options) {};

/**
* Saves media to the device's photo gallery / camera roll.
* @since [object Object]
* @param {Titanium.Blob|Titanium.Filesystem.File} media Media to save to the camera roll or media gallery.
* @param {Object} callbacks Pass a dictionary with the following supported keys: `success` a function that will be called when the save succeeds, and `error` a function that will be called upon receiving an error.
*/
Titanium.Media.saveToPhotoGallery = function(media, callbacks) {};

/**
* Overrides the default audio route when using the <Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD> session mode.
* @param {Number} route The specified audio route.
*/
Titanium.Media.setOverrideAudioRoute = function(route) {};

/**
* Shows the camera.
* @param {CameraOptionsType} options A dictionary of camera options as described in <CameraOptionsType>.
*/
Titanium.Media.showCamera = function(options) {};

/**
* Searches the music library for items matching the specified search predicates.
* @param {MediaQueryType} query The query object to extract information from.
*/
Titanium.Media.queryMusicLibrary = function(query) {};

/**
* Starts monitoring the microphone sound level.
*/
Titanium.Media.startMicrophoneMonitor = function() {};

/**
* Stops monitoring the microphone sound level.
*/
Titanium.Media.stopMicrophoneMonitor = function() {};

/**
* Uses the device camera to capture a photo.
*/
Titanium.Media.takePicture = function() {};

/**
* Starts video capture using the camera specified.
*/
Titanium.Media.startVideoCapture = function() {};

/**
* Stops video capture using the camera specified.
*/
Titanium.Media.stopVideoCapture = function() {};

/**
* Switches between front and rear-facing cameras.
* @since [object Object]
* @param {Number} camera The camera to switch to.
*/
Titanium.Media.switchCamera = function(camera) {};

/**
* Requests for camera access.
* @since 4.0.0
* @param {Callback<RequestCameraAccessResult>} callback Function to call upon user decision to grant camera access.
*/
Titanium.Media.requestCameraAccess = function(callback) {};

/**
* Takes a screen shot of the visible UI on the device.
* @param {Callback<ScreenshotResult>} callback Function to call upon capture.
*/
Titanium.Media.takeScreenshot = function(callback) {};

/**
* Makes the device vibrate.
* @param {Array<Number>} pattern Array of values identifying a vibrate pattern (only used on Android).
*/
Titanium.Media.vibrate = function(pattern) {};

/**
* Request the user's permission for audio recording.
* @since 3.1.3
* @param {Callback<MediaAuthorizationResponse>} callback Callback function to execute when the users responds to the authorization alert.
*/
Titanium.Media.requestAuthorization = function(callback) {};
/**
* Fired when an audio line type change is detected.
* @event Titanium.Media#linechange
* @type {Object}
*/
/**
* Fired when the availablity of recording input changes.
* @event Titanium.Media#recordinginput
* @type {Object}
* @type Boolean available Indicates whether the recording device is available.
*/
/**
* Fired when an audio line type change is detected.
* @event Titanium.Media#routechange
* @type {Object}
* @type String reason The reason for route change.
* @type RouteDescription oldRoute Returns a description of the old route, consisting of zero or more input ports and zero or more output ports.
* @type RouteDescription currentRoute Returns a description of the current route, consisting of zero or more input ports and zero or more output ports.
*/
/**
* Fired when the volume output changes.
* @event Titanium.Media#volume
* @type {Object}
* @type Number volume New volume level in dB.
*/
/**
* @requires iphone, ipad
*/
MusicLibraryOptionsType = {
  /**
  * Function to call when the music library selection is made.
  * @type Callback<MusicLibraryResponseType>
  */
  success: null,
  /**
  * Function to call upon receiving an error.
  * @type Callback<FailureResponse>
  */
  error: null,
  /**
  * Function to call if the user presses the cancel button.
  * @type Callback<FailureResponse>
  */
  cancel: null,
  /**
  * Specifies that the library should be hidden automatically after media selection is completed.
  * @type Boolean
  */
  autohide: null,
  /**
  * Boolean if the dialog should be animated when showing and hiding.
  * @type Boolean
  */
  animated: null,
  /**
  * An array of media type constants defining selectable media.
  * @type Number,Array<Number>
  */
  mediaTypes: null,
  /**
  * Set to `true` to allow the user to select multiple items from the library.
  * @type Boolean
  */
  allowMultipleSelections: null,
};


/**
*/
MusicLibraryResponseType = {
  /**
  * A single representative of the selected items.
  * @type Titanium.Media.Item
  */
  representative: null,
  /**
  * A list of all the items chosen by the user.
  * @type Array<Titanium.Media.Item>
  */
  items: null,
  /**
  * Media types in this collection, represented as the bitwise OR of the media typevalues for all media types represented in `items`.
  * @type Number
  */
  types: null,
};


/**
* @since 1.8
* @requires iphone, ipad
*/
MediaQueryType = {
  /**
  * A constant that specifies the ordering of the result array.
  * @type Number
  */
  grouping: null,
  /**
  * The media type to filter on.
  * @type MediaQueryInfoType,Number
  */
  mediaType: null,
  /**
  * The title to filter on. Value should be a String.
  * @type MediaQueryInfoType,String
  */
  title: null,
  /**
  * The album title to filter on. Value should be a String.
  * @type MediaQueryInfoType,String
  */
  albumTitle: null,
  /**
  * The artist to filter on. Value should be a String.
  * @type MediaQueryInfoType,String
  */
  artist: null,
  /**
  * The album artist to filter on. Value should be a String.
  * @type MediaQueryInfoType,String
  */
  albumArtist: null,
  /**
  * The genre to filter on. Value should be a String.
  * @type MediaQueryInfoType,String
  */
  genre: null,
  /**
  * The composer to filter on. Value should be a String.
  * @type MediaQueryInfoType,String
  */
  composer: null,
  /**
  * Filter by whether or not the item is a compilation. Value should be a Boolean.
  * @type MediaQueryInfoType,Boolean
  */
  isCompilation: null,
};


/**
* @since 1.8
* @requires iphone, ipad
*/
MediaQueryInfoType = {
  /**
  * The value for the given predicate. See the descriptions in <MediaQueryType> for information about which properties require which values.
  * @type Number,String,Boolean
  */
  value: null,
  /**
  * Whether or not the predicate is for an exact match.  The default is `true`.
  * @type Boolean
  */
  exact: null,
};


/**
*/
CameraOptionsType = {
  /**
  * Function to call when the camera is closed after a successful capture/selection.
  * @type Callback<CameraMediaItemType>
  */
  success: null,
  /**
  * Function to call upon receiving an error.
  * @type Callback<FailureResponse>
  */
  error: null,
  /**
  * Function to call if the user presses the cancel button.
  * @type Callback<FailureResponse>
  */
  cancel: null,
  /**
  * Specifies if the camera should be hidden automatically after the media capture is completed.
  * @type Boolean
  * @requires iphone, ipad, android
  */
  autohide: null,
  /**
  * Specifies if the dialog should be animated upon showing and hiding.
  * @type Boolean
  * @requires iphone, ipad
  */
  animated: null,
  /**
  * Specifies if the media should be saved to the photo gallery upon successful capture.
  * @type Boolean
  */
  saveToPhotoGallery: null,
  /**
  * Specifies if the media should be editable after capture/selection.
  * @type Boolean
  * @requires iphone, ipad
  */
  allowEditing: null,
  /**
  * Array of media type constants to allow.
  * @type Array<String>
  * @requires iphone, ipad
  */
  mediaTypes: null,
  /**
  * Maximum duration (in milliseconds) to allow video capture before completing.
  * @type Number
  * @requires iphone, ipad
  */
  videoMaximumDuration: null,
  /**
  * Constant to indicate the video quality during capture.
  * @type Number
  * @requires iphone, ipad
  */
  videoQuality: null,
  /**
  * Indicates if the built-in camera controls should be displayed.
  * @type Boolean
  * @requires iphone, ipad
  */
  showControls: null,
  /**
  * View to added as an overlay to the camera UI (on top).
  * @type Titanium.UI.View
  */
  overlay: null,
  /**
  * Transformation matrix to apply to the camera or photogallery view.
  * @type Titanium.UI.2DMatrix
  * @requires iphone, ipad
  */
  transform: null,
  /**
  * Show the camera in a popover.
  * @type Boolean
  * @requires ipad
  */
  inPopOver: null,
  /**
  * View to position the camera or photo gallery popover on top of.
  * @type Titanium.UI.View
  * @requires ipad
  */
  popoverView: null,
  /**
  * Controls the type of arrow and position of the popover.
  * @type Number
  * @requires ipad
  */
  arrowDirection: null,
  /**
  * Determines if the camera preview should rotate or not.
  * @type Boolean
  * @requires ipad
  */
  autorotate: null,
};


/**
*/
PhotoGalleryOptionsType = {
  /**
  * Function to call when the photogallery is closed after a successful selection.
  * @type Callback<CameraMediaItemType>
  */
  success: null,
  /**
  * Function to call upon receiving an error.
  * @type Callback<FailureResponse>
  */
  error: null,
  /**
  * Function to call if the user presses the cancel button.
  * @type Callback<FailureResponse>
  */
  cancel: null,
  /**
  * Specifies if the photo gallery should be hidden automatically after the media selection is completed.
  * @type Boolean
  * @requires iphone, ipad
  */
  autohide: null,
  /**
  * Specifies if the dialog should be animated upon showing and hiding.
  * @type Boolean
  * @requires iphone, ipad
  */
  animated: null,
  /**
  * Specifies if the media should be editable after capture/selection.
  * @type Boolean
  * @requires iphone, ipad
  */
  allowEditing: null,
  /**
  * Array of media type constants to allow.
  * @type Array<String>
  * @requires iphone, ipad
  */
  mediaTypes: null,
  /**
  * View to position the photo gallery popover on top of.
  * @type Titanium.UI.View
  * @requires ipad
  */
  popoverView: null,
  /**
  * Controls the type of arrow and position of the popover.
  * @type Number
  * @requires ipad
  */
  arrowDirection: null,
};


/**
* @extends SuccessResponse
*/
CameraMediaItemType = {
  /**
  * The media object, as a [Blob](Titanium.Blob).
  * @type Titanium.Blob
  */
  media: null,
  /**
  * The type of media, either `MEDIA_TYPE_PHOTO` or `MEDIA_TYPE_VIDEO` defined in <Titanium.Media>.
  * @type String
  */
  mediaType: null,
  /**
  * Simple object defining the user's selected crop rectangle, or `null` if the user has not edited the photo.
  * @type CropRectType
  */
  cropRect: null,
  /**
  * Indicates if the operation succeeded. Returns `true`.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns 0.
  * @type Number
  */
  code: null,
};


/**
*/
CropRectType = {
  /**
  * X coordinate of the crop rectangle's upper-left corner.
  * @type Number
  */
  x: null,
  /**
  * Y coordinate of the crop rectangle's upper-left corner.
  * @type Number
  */
  y: null,
  /**
  * Width of the crop rectangle, in pixels.
  * @type Number
  */
  width: null,
  /**
  * Height of the crop rectangle, in pixels.
  * @type Number
  */
  height: null,
};


/**
* @requires android
*/
PreviewImageOptions = {
  /**
  * The image to preview. Must be a blob based on a file, such as from <Titanium.Filesystem.File.read>.
  * @type Titanium.Blob
  */
  image: null,
  /**
  * Function to be called back if the preview succeeds. No info is passed.
  * @type Callback<Object>
  */
  success: null,
  /**
  * Function called back if the preview fails. Check the `message` property of passed back parameter.
  * @type Callback<PreviewImageError>
  */
  error: null,
};


/**
* @extends FailureResponse
* @requires android
*/
PreviewImageError = {
  /**
  * Description of the error.
  * @type String
  */
  message: null,
  /**
  * Error code, if applicable.
  * @type Number
  */
  code: null,
  /**
  * Indicates if the operation succeeded. Returns `false`.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
};


/**
* @requires iphone, ipad, android
*/
ScreenshotResult = {
  /**
  * The screenshot image.
  * @type Titanium.Blob
  */
  media: null,
};


/**
* @extends ErrorResponse
*/
MediaAuthorizationResponse = {
};


/**
* @extends ErrorResponse
*/
RequestCameraAccessResult = {
};


/**
* @since 3.4.2
* @requires iphone, ipad
*/
RouteDescription = {
  /**
  * An Array of current input ports for the session. See the `AUDIO_SESSION_PORT` constants.
  * @type Array<Object>
  */
  inputs: null,
  /**
  * An Array of current output ports for the session. See the `AUDIO_SESSION_PORT` constants.
  * @type Array<Object>
  */
  outputs: null,
};


/**
* @extends Titanium.Proxy
* @since 1.4.0
* @requires iphone, ipad
* @fires Titanium.Media.MusicPlayer#playingChange
* @fires Titanium.Media.MusicPlayer#stateChange
* @fires Titanium.Media.MusicPlayer#volumeChange
* @fires Titanium.Media.MusicPlayer#playingchange
* @fires Titanium.Media.MusicPlayer#statechange
* @fires Titanium.Media.MusicPlayer#volumechange
*/
Titanium.Media.MusicPlayer = {
  /**
  * Current point in song playback, in seconds.
  * @type Number
  */
  currentPlaybackTime: null,
  /**
  * An `Item` object representing the currently playing media item.
  * @type Titanium.Media.Item
  */
  nowPlaying: null,
  /**
  * Playback state.
  * @type Number
  */
  playbackState: null,
  /**
  * Repeat setting.
  * @type Number
  */
  repeatMode: null,
  /**
  * Shuffle setting.
  * @type Number
  */
  shuffleMode: null,
  /**
  * Volume level for the music player from 0.0 (muted) to 1.0 (loudest).
  * @type Number
  */
  volume: null,
};

/**
* Pauses playback of the current media item.
*/
Titanium.Media.MusicPlayer.pause = function() {};

/**
* Begins playback of the current media item.
*/
Titanium.Media.MusicPlayer.play = function() {};

/**
* Begins seeking backward in the currently playing media.
*/
Titanium.Media.MusicPlayer.seekBackward = function() {};

/**
* Begins seeking forward in the currently playing media item.
*/
Titanium.Media.MusicPlayer.seekForward = function() {};

/**
* Sets the media queue.
* @param {Titanium.Media.Item|Array<Titanium.Media.Item>|PlayerQueue} queue One or more media items.
*/
Titanium.Media.MusicPlayer.setQueue = function(queue) {};

/**
* Skips to the beginning of the currently playing media item.
*/
Titanium.Media.MusicPlayer.skipToBeginning = function() {};

/**
* Skips to the next media item in the queue.
*/
Titanium.Media.MusicPlayer.skipToNext = function() {};

/**
* Skips to the previous media item in the queue.
*/
Titanium.Media.MusicPlayer.skipToPrevious = function() {};

/**
* Stops playback of the current media queue.
*/
Titanium.Media.MusicPlayer.stop = function() {};

/**
* Ends a seek operation and returns to the previous playback state.See also: [seekForward](Titanium.Media.MusicPlayer.seekForward) and[seekBackward](Titanium.Media.MusicPlayer.seekBackward).
*/
Titanium.Media.MusicPlayer.stopSeeking = function() {};
/**
* Fired when the currently playing media item changes.
* @event Titanium.Media.MusicPlayer#playingChange
* @type {Object}
*/
/**
* Fired when the music player's playback state changes.
* @event Titanium.Media.MusicPlayer#stateChange
* @type {Object}
*/
/**
* Fired when the volume changes.
* @event Titanium.Media.MusicPlayer#volumeChange
* @type {Object}
*/
/**
* Fired when the currently playing media item changes.
* @event Titanium.Media.MusicPlayer#playingchange
* @type {Object}
*/
/**
* Fired when the music player's playback state changes.
* @event Titanium.Media.MusicPlayer#statechange
* @type {Object}
*/
/**
* Fired when the volume changes.
* @event Titanium.Media.MusicPlayer#volumechange
* @type {Object}
*/
/**
*/
PlayerQueue = {
  /**
  * An array of media items.
  * @type Array<Titanium.Media.Item>
  */
  items: null,
};


/**
* @extends Titanium.Proxy
* @since 0.8
* @requires android, iphone, ipad
* @fires Titanium.Media.Sound#change
* @fires Titanium.Media.Sound#complete
* @fires Titanium.Media.Sound#error
* @fires Titanium.Media.Sound#interrupted
* @fires Titanium.Media.Sound#resume
*/
Titanium.Media.Sound = {
  /**
  * Audio data is being buffered from the network.
  * @type Number
  * @requires android
  */
  STATE_BUFFERING: null,
  /**
  * Audio playback is being initialized.
  * @type Number
  * @requires android
  */
  STATE_INITIALIZED: null,
  /**
  * Playback is paused.
  * @type Number
  * @requires android
  */
  STATE_PAUSED: null,
  /**
  * Audio playback is active.
  * @type Number
  * @requires android
  */
  STATE_PLAYING: null,
  /**
  * Audio playback is starting.
  * @type Number
  * @requires android
  */
  STATE_STARTING: null,
  /**
  * Audio playback is stopped.
  * @type Number
  * @requires android
  */
  STATE_STOPPED: null,
  /**
  * Audio playback is stopping.
  * @type Number
  * @requires android
  */
  STATE_STOPPING: null,
  /**
  * Player is waiting for audio data from the network.
  * @type Number
  * @requires android
  */
  STATE_WAITING_FOR_DATA: null,
  /**
  * Player is waiting for audio data to fill the queue.
  * @type Number
  * @requires android
  */
  STATE_WAITING_FOR_QUEUE: null,
  /**
  * Determines whether the audio should continue playing even when its activity is paused.
  * @type Boolean
  * @requires android
  */
  allowBackground: null,
  /**
  * Duration of the audio resource.
  * @type Number
  */
  duration: null,
  /**
  * Determines whether the audio should loop upon completion.
  * @type Boolean
  */
  looping: null,
  /**
  * Indicates if the audio is paused.
  * @type Boolean
  */
  paused: null,
  /**
  * Indicates if the audio is playing.
  * @type Boolean
  */
  playing: null,
  /**
  * Current playback position of the audio.
  * @type Number
  */
  time: null,
  /**
  * URL identifying the audio resource.
  * @type String
  */
  url: null,
  /**
  * Volume of the audio from 0.0 (muted) to 1.0 (loudest).
  * @type Number
  */
  volume: null,
};

/**
* Returns the value of the [looping](Titanium.Media.Sound.looping) property.
*/
Titanium.Media.Sound.isLooping = function() {};

/**
* Returns the value of the [paused](Titanium.Media.Sound.paused) property.
*/
Titanium.Media.Sound.isPaused = function() {};

/**
* Returns the value of the [playing](Titanium.Media.Sound.playing) property.
*/
Titanium.Media.Sound.isPlaying = function() {};

/**
* Pauses the audio.
*/
Titanium.Media.Sound.pause = function() {};

/**
* Starting playing the sound, or resume playing a paused sound.
*/
Titanium.Media.Sound.play = function() {};

/**
* Releases all internal resources.
*/
Titanium.Media.Sound.release = function() {};

/**
* Resets the audio playback position to the beginning.
*/
Titanium.Media.Sound.reset = function() {};

/**
* Sets the value of the [looping](Titanium.Media.Sound.looping) property.
* @param {Boolean} looping New value for the `looping` property.
*/
Titanium.Media.Sound.setLooping = function(looping) {};

/**
* Sets the value of the [paused](Titanium.Media.Sound.paused) property.
* @param {Boolean} paused Pass `true` to pause the current playback temporarily, `false` to unpause it.
*/
Titanium.Media.Sound.setPaused = function(paused) {};

/**
* Stops playing the audio and resets the playback position to the beginning of the clip.
*/
Titanium.Media.Sound.stop = function() {};
/**
* Fired when the state of the playback changes.
* @event Titanium.Media.Sound#change
* @type {Object}
* @type Number state Current state of playback.
* @type undefined description Text description of the state of playback.
*/
/**
* Fired when the audio has finished playing.
* @event Titanium.Media.Sound#complete
* @type {Object}
* @type Boolean success Indicates if the sound was played successfully.Returns `true` if request succeeded, `false` otherwise.
* @requires iphone, ipad, android
* @type String error Error message, if any returned. Will be undefined if `success` is `true`.
* @requires iphone, ipad, android
* @type Number code Error code.Error code will be 0 if `success` is `true`, nonzero otherwise. If the errorwas generated by the operating system, that system's error value is used.Otherwise, this value will be -1.
* @requires iphone, ipad, android
*/
/**
* Fired when an error occurs while playing the audio.
* @event Titanium.Media.Sound#error
* @type {Object}
* @type Boolean success Indicates a successful operation. Returns `false`.
* @requires iphone, ipad, android
* @type String error Error message, if any returned. May be undefined.
* @requires iphone, ipad, android
* @type Number code Error code.If the error was generated by the operating system, that system's error valueis used. Otherwise, this value will be -1.
* @requires iphone, ipad, android
* @type String message Error message. Use the error property instead.
*/
/**
* Fired  when audio playback is interrupted by the device.
* @event Titanium.Media.Sound#interrupted
* @type {Object}
*/
/**
* Fired when audio playback is resumed after an interruption.
* @event Titanium.Media.Sound#resume
* @type {Object}
* @type Boolean interruption Indicates if the resume was from an interruption.
*/
/**
* @extends Titanium.UI.View
* @since 0.9
* @fires Titanium.Media.VideoPlayer#complete
* @fires Titanium.Media.VideoPlayer#durationAvailable
* @fires Titanium.Media.VideoPlayer#durationavailable
* @fires Titanium.Media.VideoPlayer#error
* @fires Titanium.Media.VideoPlayer#fullscreen
* @fires Titanium.Media.VideoPlayer#load
* @fires Titanium.Media.VideoPlayer#loadstate
* @fires Titanium.Media.VideoPlayer#mediaTypesAvailable
* @fires Titanium.Media.VideoPlayer#naturalSizeAvailable
* @fires Titanium.Media.VideoPlayer#playbackState
* @fires Titanium.Media.VideoPlayer#mediatypesavailable
* @fires Titanium.Media.VideoPlayer#naturalsizeavailable
* @fires Titanium.Media.VideoPlayer#playbackstate
* @fires Titanium.Media.VideoPlayer#playing
* @fires Titanium.Media.VideoPlayer#preload
* @fires Titanium.Media.VideoPlayer#resize
* @fires Titanium.Media.VideoPlayer#sourceChange
* @fires Titanium.Media.VideoPlayer#sourcechange
* @fires Titanium.Media.VideoPlayer#click
* @fires Titanium.Media.VideoPlayer#singletap
* @fires Titanium.Media.VideoPlayer#touchcancel
* @fires Titanium.Media.VideoPlayer#touchend
* @fires Titanium.Media.VideoPlayer#touchmove
*/
Titanium.Media.VideoPlayer = {
  /**
  * Whether or not the current movie can be played on a remote device.
  * @type Boolean
  * @requires iphone, ipad
  */
  allowsAirPlay: null,
  /**
  * Indicates if a movie should automatically start playback.
  * @type Boolean
  */
  autoplay: null,
  /**
  * URL of the media to play.
  * @type String
  */
  contentURL: null,
  /**
  * Current playback time of the current movie in milliseconds.
  * @type Number
  */
  currentPlaybackTime: null,
  /**
  * The duration of the current movie in milliseconds, or 0.0 if not known.
  * @type Number
  */
  duration: null,
  /**
  * The end time of movie playback, in milliseconds.
  * @type Number
  */
  endPlaybackTime: null,
  /**
  * Determines if the movie is presented in the entire screen (obscuring all other application content). 
  * @type Boolean
  */
  fullscreen: null,
  /**
  * The start time of movie playback, in milliseconds.
  * @type Number
  */
  initialPlaybackTime: null,
  /**
  * Returns the network load state of the movie player.
  * @type Number
  */
  loadState: null,
  /**
  * Media object to play, as either a `File`,  a `Blob`, or a URL.
  * @type Titanium.Blob,Titanium.Filesystem.File,String
  * @requires iphone, ipad
  */
  media: null,
  /**
  * The style of the playback controls.
  * @type Number
  */
  mediaControlStyle: null,
  /**
  * The types of media in the movie, or <Titanium.Media.VIDEO_MEDIA_TYPE_NONE> if not known.
  * @type Number
  * @requires iphone, ipad
  */
  mediaTypes: null,
  /**
  * Style of the media playback controls.
  * @type Number
  * @requires iphone, ipad
  */
  movieControlMode: null,
  /**
  * Returns the natural size of the movie.
  * @type MovieSize
  * @requires iphone, ipad
  */
  naturalSize: null,
  /**
  * Currently playable duration of the movie, in milliseconds, for progressively downloaded network content, or 0.0 if not known.
  * @type Number
  */
  playableDuration: null,
  /**
  * Current playback state of the video player.
  * @type Number
  */
  playbackState: null,
  /**
  * Boolean to indicate if the player has started playing.
  * @type Boolean
  */
  playing: null,
  /**
  * Determines how the movie player repeats when reaching the end of playback.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  repeatMode: null,
  /**
  * Determines how the content scales to fit the view.
  * @type Number
  */
  scalingMode: null,
  /**
  * The playback type of the movie.
  * @type Number
  * @requires iphone, ipad
  */
  sourceType: null,
  /**
  * URL of the media to play.
  * @type String,Array<String>
  */
  url: null,
  /**
  * Indicates if the movie player should inherit the application's audio sessioninstead of creating a new session.
  * @type Boolean
  * @requires iphone, ipad
  */
  useApplicationAudioSession: null,
  /**
  * Volume of the audio portion of the video. 
  * @type Number
  * @requires iphone, ipad
  */
  volume: null,
};

/**
* Cancels all pending asynchronous thumbnail requests.
* @since [object Object]
*/
Titanium.Media.VideoPlayer.cancelAllThumbnailImageRequests = function() {};

/**
* Pauses playing the video.
*/
Titanium.Media.VideoPlayer.pause = function() {};

/**
* Starts playing the video.
*/
Titanium.Media.VideoPlayer.play = function() {};

/**
* Releases the internal video resources immediately.
*/
Titanium.Media.VideoPlayer.release = function() {};

/**
* Asynchronously request thumbnail images for one or more points in time in the video.
* @since [object Object]
* @param {Array<Number>} times Array of time values, representing offsets into the video, in seconds.
* @param {Number} option Video time precision.
* @param {Callback<ThumbnailResponse>} callback Callback to invoke when a thumbnail is available.
*/
Titanium.Media.VideoPlayer.requestThumbnailImagesAtTimes = function(times, option, callback) {};

/**
* Sets the background view for customization which is always displayed behind movie content.
* @param {Titanium.UI.View} view View to set.
*/
Titanium.Media.VideoPlayer.setBackgroundView = function(view) {};

/**
* Stops playing the video.
*/
Titanium.Media.VideoPlayer.stop = function() {};

/**
* Returns a thumbnail image for the video at the specified time.
* @param {Number} time Playback time, in **seconds**.
* @param {Number} option Video time precision.
*/
Titanium.Media.VideoPlayer.thumbnailImageAtTime = function(time, option) {};
/**
* Fired when movie playback ends or a user exits playback.
* @event Titanium.Media.VideoPlayer#complete
* @type {Object}
* @type Number reason Reason that playback ended.
* @type Boolean success Indicates if the video was played successfully. User exit counts as a success.Returns `true` if `reason` is not[VIDEO_FINISH_REASON_PLAYBACK_ERROR](Titanium.Media.VIDEO_FINISH_REASON_PLAYBACK_ERROR),`false` otherwise.
* @requires iphone, ipad, android
* @type String error Error message, if any returned. Will be undefined if `success` is `true`.
* @requires iphone, ipad, android
* @type Number code Error code.Error code will be 0 if `success` is `true`, nonzero otherwise. If the errorwas generated by the operating system, that system's error value is used.Otherwise, this value will be -1.
* @requires iphone, ipad, android
*/
/**
* Fired when the video duration is available.
* @event Titanium.Media.VideoPlayer#durationAvailable
* @type {Object}
* @type Number duration Video duration, in milliseconds.
*/
/**
* Fired when the video duration is available.
* @event Titanium.Media.VideoPlayer#durationavailable
* @type {Object}
* @type Number duration Video duration, in milliseconds.
*/
/**
* Fired when movie playback encounters an error.
* @event Titanium.Media.VideoPlayer#error
* @type {Object}
* @type String message Reason for error as a string.
* @type Boolean success Indicates a successful operation. Returns `false`.
* @requires android
* @type String error Error message, if any returned. May be undefined.
* @requires android
* @type Number code Error code.If the error was generated by the operating system, that system's error valueis used. Otherwise, this value will be -1.
* @requires android
*/
/**
* Fired when a movie changes to or from fullscreen view.
* @event Titanium.Media.VideoPlayer#fullscreen
* @type {Object}
* @type Boolean entering `true` if the player is entering fullscreen mode, `false` if it is leavingfullscreen mode.
* @type Number duration Duration of the animated transition to or from fullscreen mode, in seconds.
* @requires iphone, ipad
*/
/**
* Fired when the movie play loads.
* @event Titanium.Media.VideoPlayer#load
* @type {Object}
*/
/**
* Fired when the network [loadState](Titanium.Media.VideoPlayer.loadState) changes.
* @event Titanium.Media.VideoPlayer#loadstate
* @type {Object}
* @type Number loadState Current value of the [loadState](Titanium.Media.VideoPlayer.loadState) property.
*/
/**
* Fired when the media types in the current movie are determined.
* @event Titanium.Media.VideoPlayer#mediaTypesAvailable
* @type {Object}
* @type Number mediaTypes Current value of the [mediaTypes](Titanium.Media.VideoPlayer.mediaTypes) property.
*/
/**
* Fired when the natural size of the current movie is determined.
* @event Titanium.Media.VideoPlayer#naturalSizeAvailable
* @type {Object}
* @type Number naturalSize Current value of the [naturalSize](Titanium.Media.VideoPlayer.naturalSize) property.
*/
/**
* Fired when the [playbackState](Titanium.Media.VideoPlayer.playbackState) changes.
* @event Titanium.Media.VideoPlayer#playbackState
* @type {Object}
* @type Number playbackState Current value of the [playbackState](Titanium.Media.VideoPlayer.playbackState) property.
*/
/**
* Fired when the media types in the current movie are determined.
* @event Titanium.Media.VideoPlayer#mediatypesavailable
* @type {Object}
* @type Number mediaTypes Current value of the [mediaTypes](Titanium.Media.VideoPlayer.mediaTypes) property.
*/
/**
* Fired when the natural size of the current movie is determined.
* @event Titanium.Media.VideoPlayer#naturalsizeavailable
* @type {Object}
* @type Number naturalSize Current value of the [naturalSize](Titanium.Media.VideoPlayer.naturalSize) property.
*/
/**
* Fired when the [playbackState](Titanium.Media.VideoPlayer.playbackState) changes.
* @event Titanium.Media.VideoPlayer#playbackstate
* @type {Object}
* @type Number playbackState Current value of the [playbackState](Titanium.Media.VideoPlayer.playbackState) property.
*/
/**
* Fired when the currently playing movie changes.
* @event Titanium.Media.VideoPlayer#playing
* @type {Object}
* @type String url URL of the media.
*/
/**
* Fired when the movie has preloaded and is ready to play.
* @event Titanium.Media.VideoPlayer#preload
* @type {Object}
*/
/**
* Fired when the movie player is resized.
* @event Titanium.Media.VideoPlayer#resize
* @type {Object}
*/
/**
* Fired when the [sourceType](Titanium.Media.VideoPlayer.sourceType) propertychanges.
* @event Titanium.Media.VideoPlayer#sourceChange
* @type {Object}
* @type undefined sourceType New `sourceType` value.
*/
/**
* Fired when the [sourceType](Titanium.Media.VideoPlayer.sourceType) propertychanges.
* @event Titanium.Media.VideoPlayer#sourcechange
* @type {Object}
* @type undefined sourceType New `sourceType` value.
*/
/**
* Fired when the device detects a click against the view.
* @event Titanium.Media.VideoPlayer#click
* @type {Object}
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a single tap against the view.
* @event Titanium.Media.VideoPlayer#singletap
* @type {Object}
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when a touch event is interrupted by the device.
* @event Titanium.Media.VideoPlayer#touchcancel
* @type {Object}
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when a touch event is completed.
* @event Titanium.Media.VideoPlayer#touchend
* @type {Object}
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired as soon as the device detects movement of a touch.
* @event Titanium.Media.VideoPlayer#touchmove
* @type {Object}
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
*/
/**
* @extends ErrorResponse
* @since [object Object]
* @requires android, iphone, ipad
*/
ThumbnailResponse = {
  /**
  * Thumbnail image, as a `Blob`.
  * @type Titanium.Blob
  */
  image: null,
  /**
  * Time offset for the thumbnail, in seconds.
  * @type Number
  */
  time: null,
  /**
  * Error code. Returns 0 if `success` is `true`.
  * @type Number
  */
  code: null,
};


/**
* @requires iphone, ipad
*/
MovieSize = {
  /**
  * Width of the movie.
  * @type Number
  */
  width: null,
  /**
  * Height of the movie.
  * @type Number
  */
  height: null,
};


/**
* @extends Titanium.Proxy
* @since 0.1
* @requires android, iphone, ipad, mobileweb
*/
Titanium.Module = {
};


/**
* @extends Titanium.Proxy
* @since 1.2.0
* @requires iphone, ipad
* @fires Titanium.Network.BonjourBrowser#updatedServices
* @fires Titanium.Network.BonjourBrowser#updatedservices
*/
Titanium.Network.BonjourBrowser = {
  /**
  * The domain the browser is searching in
  * @type String
  */
  domain: null,
  /**
  * Whether or not the browser is currently searching
  * @type Boolean
  */
  isSearching: null,
  /**
  * The type of the service the browser searches for
  * @type String
  */
  serviceType: null,
};

/**
* Conduct a search for Bonjour services matching the type and domain specified during creation
*/
Titanium.Network.BonjourBrowser.search = function() {};

/**
* Halt an ongoing search
*/
Titanium.Network.BonjourBrowser.stopSearch = function() {};
/**
* Fired when the discovered services list is updated
* @event Titanium.Network.BonjourBrowser#updatedServices
* @type {Object}
* @type undefined services An array of BonjourService objects corresponding to currently available services.  If you cache this value, including using it as table data, be aware that it could become out of date at any time due to the asynchronous nature of Bonjour service discovery.
*/
/**
* Fired when the discovered services list is updated
* @event Titanium.Network.BonjourBrowser#updatedservices
* @type {Object}
* @type undefined services An array of BonjourService objects corresponding to currently available services.  If you cache this value, including using it as table data, be aware that it could become out of date at any time due to the asynchronous nature of Bonjour service discovery.
*/
/**
* @extends Titanium.Proxy
* @since 1.2.0
* @requires iphone, ipad
*/
Titanium.Network.BonjourService = {
  /**
  * the domain of the service
  * @type String
  */
  domain: null,
  /**
  * whether or not the service is local to the device
  * @type Boolean
  */
  isLocal: null,
  /**
  * the name of the service
  * @type String
  */
  name: null,
  /**
  * the TCPSocket object that is used to connect to the service
  * @type Object
  */
  socket: null,
  /**
  * the type of the service
  * @type String
  */
  type: null,
};

/**
* Publish a Bonjour service to the network.  Only works if isLocal is TRUE
* @param {Object} socket a TCPSocket object to associate with the Bonjour service.
*/
Titanium.Network.BonjourService.publish = function(socket) {};

/**
* Resolve a Bonjour service from the network.  Must be done before attempting to access the service's socket information, if a remote service.  You cannot resolve a locally published service.
* @param {Number} timeout the timeout for service resolution, in seconds.  Optional, default is 120s.
*/
Titanium.Network.BonjourService.resolve = function(timeout) {};

/**
* Halts publication of a service.
*/
Titanium.Network.BonjourService.stop = function() {};

/**
* @extends Titanium.Proxy
* @since [object Object]
* @requires android, iphone, ipad
*/
Titanium.Network.Cookie = {
  /**
  * The comment describing the purpose of this cookie
  * @type String
  */
  comment: null,
  /**
  * The domain attribute of the cookie.
  * @type String
  */
  domain: null,
  /**
  * The expiration Date of the cookie.
  * @type String
  */
  expiryDate: null,
  /**
  * The httponly attribute of the cookie.
  * @type Boolean
  */
  httponly: null,
  /**
  * The name of the cookie.
  * @type String
  */
  name: null,
  /**
  * The origual url attribute of the cookie.
  * @type String
  * @requires iphone, ipad
  */
  originalUrl: null,
  /**
  * The path attribute of the cookie.
  * @type String
  */
  path: null,
  /**
  * The secure attribute of the cookie.
  * @type Boolean
  */
  secure: null,
  /**
  * The value of the cookie.
  * @type String
  */
  value: null,
  /**
  * The version of the cookie specification to which this cookie conforms.
  * @type Number
  */
  version: null,
};

/**
* Returns true if the cookie is valid.
* @since 3.3.0
*/
Titanium.Network.Cookie.isValid = function() {};

/**
* @extends Titanium.Proxy
* @since 0.1
*/
Titanium.Network.HTTPClient = {
  /**
  * Ready state constant indicating that the request is complete.
  * @type Number
  */
  DONE: null,
  /**
  * Ready state constant indicating that response headers have been received.
  * @type Number
  */
  HEADERS_RECEIVED: null,
  /**
  * Ready state constant indicating that response data is being received from the remote server.
  * @type Number
  */
  LOADING: null,
  /**
  * Ready state constant indicating that the connection has been opened, but the request hasnot yet been sent.
  * @type Number
  */
  OPENED: null,
  /**
  * Ready state constant indicating that HTTPClient request has not been opened or sent.
  * @type Number
  */
  UNSENT: null,
  /**
  * All of the response headers.
  * @type String
  * @requires android
  */
  allResponseHeaders: null,
  /**
  * Determines whether automatic encoding is enabled for the specified URL.
  * @type Boolean
  * @requires android
  */
  autoEncodeUrl: null,
  /**
  * Determines whether automatic automatic handling of HTTP redirects is enabled.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  autoRedirect: null,
  /**
  * Indicates whether the response was successful.
  * @type Boolean
  */
  connected: null,
  /**
  * Connection type, normally either `GET`, `POST` or `PATCH`.
  * @type String
  */
  connectionType: null,
  /**
  * Sets the domain parameter for authentication credentials.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  domain: null,
  /**
  * Determines whether the client should attempt to keep a persistent connection.
  * @type Boolean
  * @requires iphone, ipad
  */
  enableKeepAlive: null,
  /**
  * Target local file to receive data.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  file: null,
  /**
  * Absolute URL of the request.
  * @type String
  */
  location: null,
  /**
  * Function to be called at regular intervals as the request data is being received.
  * @type Callback<Object>
  */
  ondatastream: null,
  /**
  * Function to be called upon a error response.
  * @type Callback<FailureResponse>
  */
  onerror: null,
  /**
  * Function to be called upon a successful response.
  * @type Callback<SuccessResponse>
  */
  onload: null,
  /**
  * Function to be called for each [readyState](Titanium.Network.HTTPClient.readyState) change.
  * @type Callback<Object>
  */
  onreadystatechange: null,
  /**
  * Function to be called at regular intervals as the request data is being transmitted.
  * @type Callback<Object>
  */
  onsendstream: null,
  /**
  * Sets the password parameter for authentication credentials.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  password: null,
  /**
  * The current ready state of this HTTP request.
  * @type Number
  */
  readyState: null,
  /**
  * Response data as a `Blob` object.
  * @type Titanium.Blob
  */
  responseData: null,
  /**
  * Response as text.
  * @type String
  */
  responseText: null,
  /**
  * Response object as an XML DOM Document object.
  * @type Titanium.XML.Document
  */
  responseXML: null,
  /**
  * The Security Manager for this client.
  * @type SecurityManagerProtocol
  * @requires ipad, iphone, android
  */
  securityManager: null,
  /**
  * Response HTTP status code.
  * @type Number
  */
  status: null,
  /**
  * Human-readable status message associated with the status code.
  * @type String
  */
  statusText: null,
  /**
  * Timeout in milliseconds when the connection should be aborted.
  * @type Number
  */
  timeout: null,
  /**
  * Sets the username parameter for authentication credentials.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  username: null,
  /**
  * Determines how SSL certification validation is performed on connection.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  validatesSecureCertificate: null,
  /**
  * Determines whether the request should include any cookies and HTTP authentication information.
  * @type Boolean
  * @requires mobileweb
  */
  withCredentials: null,
  /**
  * Sets the TLS version to use for handshakes.
  * @type Number
  * @requires android, iphone, ipad
  */
  tlsVersion: null,
  /**
  * Determines whether HTTP responses are cached.
  * @type Boolean
  * @requires iphone, ipad
  */
  cache: null,
};

/**
* Cancels a pending request.
*/
Titanium.Network.HTTPClient.abort = function() {};

/**
* Registers a new AuthSchemeFactory for a given scheme.
* @since [object Object]
* @param {String} scheme The authentication scheme.
* @param {Object} factory The authentication factory. This factory must implement the [AuthSchemeFactory](http://developer.android.com/reference/org/apache/http/auth/AuthSchemeFactory.html) interface.
*/
Titanium.Network.HTTPClient.addAuthFactory = function(scheme, factory) {};

/**
* Adds a custom key manager.
* @deprecated since 3.3.0 removed 3.4.0
* @since [object Object]
* @param {Object} X509KeyManager X.509 key manager. This key manager must implement the [X509KeyManager](http://developer.android.com/reference/javax/net/ssl/X509KeyManager.html) inteface.
*/
Titanium.Network.HTTPClient.addKeyManager = function(X509KeyManager) {};

/**
* Adds a custom trust manager.
* @deprecated since 3.3.0 removed 3.4.0
* @since [object Object]
* @param {Object} X509TrustManager X.509 trust manager. This trust manager must implement the [X509TrustManager](http://developer.android.com/reference/javax/net/ssl/X509TrustManager.html) inteface.
*/
Titanium.Network.HTTPClient.addTrustManager = function(X509TrustManager) {};

/**
* Clears any cookies stored for the host.
* @param {String} host The URL of the host/domain to clear cookies for.
*/
Titanium.Network.HTTPClient.clearCookies = function(host) {};

/**
* Returns the value of the specified response header.
* @param {String} name Name of the header to retrieve.
*/
Titanium.Network.HTTPClient.getResponseHeader = function(name) {};

/**
* Opens the request and prepares the connection.
* @param {String} method HTTP method for this request, such as 'GET' or 'POST'. 'PATCH' is available on Android from SDK 4.1.0.
* @param {String} url URL for the request.
* @param {Boolean} async Determines whether the request should be made asynchronously. Only used on iOS and Mobile Web.
*/
Titanium.Network.HTTPClient.open = function(method, url, async) {};

/**
* Sends the request.
* @param {Object|String|Titanium.Filesystem.File|Titanium.Blob} data Data to send with a POST request.
*/
Titanium.Network.HTTPClient.send = function(data) {};

/**
* Sets the value for the specified request header. Must be called after `open` but before `send`.
* @param {String} name Name of the header to set.
* @param {String} value Value to assign to the header. May be `null` to clear a default header value, such asX-Requested-With.
*/
Titanium.Network.HTTPClient.setRequestHeader = function(name, value) {};

/**
* Sets the request timeout.
* @param {Number} timeout Timeout in milliseconds.
*/
Titanium.Network.HTTPClient.setTimeout = function(timeout) {};

/**
* @since 3.3.0
* @requires iphone, ipad, android
*/
SecurityManagerProtocol = {
};

/**
* Returns if the security manager will participate in authentication of this end point.
* @param {Object} url The Object representing representing the end point of this connection.
*/
SecurityManagerProtocol.willHandleURL = function(url) {};

/**
* The <APSConnectionDelegate> for this connection.
* @param {Object} url The [NSURL](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSURL_Class/Reference/Reference.html) representing the end point of this connection.
*/
SecurityManagerProtocol.connectionDelegateForUrl = function(url) {};

/**
* Returns an array of objects implementing the [X509TrustManager](http://developer.android.com/reference/javax/net/ssl/X509TrustManager.html) protocol for the SSL Context.
* @param {Object} proxy The <Titanium.Network.HTTPClient> representing this connection.
*/
SecurityManagerProtocol.getTrustManagers = function(proxy) {};

/**
* Returns an array of objects implementing the [X509KeyManager](http://developer.android.com/reference/javax/net/ssl/X509KeyManager.html) protocol for the SSL Context.
* @param {Object} proxy The <Titanium.Network.HTTPClient> representing this connection.
*/
SecurityManagerProtocol.getKeyManagers = function(proxy) {};

/**
* @since 3.3.0
* @requires iphone, ipad
*/
APSConnectionDelegate = {
};


/**
* @since 3.4.2
* @requires iphone, ipad, android
*/
ReadyStatePayload = {
  /**
  * The state for which `onreadystatechange` was invoked. Set to one of `Titanium.Network.HTTPClient` ready-state constants
  * @type Number
  */
  readyState: null,
};


/**
* @extends Titanium.Module
* @since 0.1
* @fires Titanium.Network#change
*/
Titanium.Network = {
  /**
  * Special hostname value for listening sockets, representing alllocally available network interfaces.
  * @type String
  * @requires iphone, ipad
  */
  INADDR_ANY: null,
  /**
  * A [networkType](Titanium.Network.networkType) value indicating that the device iscommunicating over a local-area network.
  * @type Number
  */
  NETWORK_LAN: null,
  /**
  * A [networkType](Titanium.Network.networkType) value indicating that the device iscommunicating over a mobile network.
  * @type Number
  */
  NETWORK_MOBILE: null,
  /**
  * A [networkType](Titanium.Network.networkType) value indicating that no network is available.
  * @type Number
  */
  NETWORK_NONE: null,
  /**
  * A [networkType](Titanium.Network.networkType) value indicating that the  current network type is unknown.
  * @type Number
  */
  NETWORK_UNKNOWN: null,
  /**
  * A [networkType](Titanium.Network.networkType) value indicating that the  device is communicating over a WiFi network.
  * @type Number
  */
  NETWORK_WIFI: null,
  /**
  * Constant value for an Alert style push notification.
  * @type Number
  * @requires iphone, ipad
  */
  NOTIFICATION_TYPE_ALERT: null,
  /**
  * Constant value for a Badge style push notification.
  * @type Number
  * @requires iphone, ipad
  */
  NOTIFICATION_TYPE_BADGE: null,
  /**
  * Constant value for a Sound style push notification.
  * @type Number
  * @requires iphone, ipad
  */
  NOTIFICATION_TYPE_SOUND: null,
  /**
  * Constant value for a Newsstand style push notification. Only available on iOS5 and later
  * @type Number
  * @requires iphone, ipad
  */
  NOTIFICATION_TYPE_NEWSSTAND: null,
  /**
  * Constant value specifying read-only mode for sockets.
  * @type Number
  * @requires iphone, ipad
  */
  READ_MODE: null,
  /**
  * Constant value specifying read-write mode for sockets.
  * @type Number
  * @requires iphone, ipad
  */
  READ_WRITE_MODE: null,
  /**
  * Constant value representing a socket in the CLOSED state.
  * @type Number
  * @requires iphone, ipad
  */
  SOCKET_CLOSED: null,
  /**
  * Constant value representing a socket in the CONNECTED state.
  * @type Number
  * @requires iphone, ipad
  */
  SOCKET_CONNECTED: null,
  /**
  * Constant value representing a socket in the ERROR state.
  * @type Number
  * @requires iphone, ipad
  */
  SOCKET_ERROR: null,
  /**
  * Constant value representing a socket in the INITIALIZED state.
  * @type Number
  * @requires iphone, ipad
  */
  SOCKET_INITIALIZED: null,
  /**
  * Constant value representing a socket in the LISTENING state.
  * @type Number
  * @requires iphone, ipad
  */
  SOCKET_LISTENING: null,
  /**
  * Constant value specifying write-only mode for sockets.
  * @type Number
  * @requires iphone, ipad
  */
  WRITE_MODE: null,
  /**
  * Constant value specifying TLS version 1.0 for SSL.
  * @type Number
  * @requires android, iphone, ipad
  */
  TLS_VERSION_1_0: null,
  /**
  * Constant value specifying TLS version 1.1 for SSL.
  * @type Number
  * @requires android, iphone, ipad
  */
  TLS_VERSION_1_1: null,
  /**
  * Constant value specifying TLS version 1.2 for SSL.
  * @type Number
  * @requires android, iphone, ipad
  */
  TLS_VERSION_1_2: null,
  /**
  * Constant value specifying that the progress of a download can not be calculated.
  * @type Number
  * @requires android, iphone, ipad
  */
  PROGRESS_UNKNOWN: null,
  /**
  * A list of all cookies in the cookie storage.
  * @type Array<Titanium.Network.Cookie>
  * @requires iphone, ipad
  */
  allHTTPCookies: null,
  /**
  * Network type value as a constant.
  * @type Number
  */
  networkType: null,
  /**
  * Network type as a String. Returns one of `NONE`, `WIFI`, `LAN`, `MOBILE`, or `UNKNOWN`.
  * @type String
  */
  networkTypeName: null,
  /**
  * Boolean value indicating if the device can reach the Internet.
  * @type Boolean
  */
  online: null,
  /**
  * Remote device UUID if the device is registered with the Apple Push NotificationService, or null if it is not registered.
  * @type String
  * @requires iphone, ipad
  */
  remoteDeviceUUID: null,
  /**
  * Array of push notification type constants enabled for the application.
  * @type Array<Number>
  * @requires iphone, ipad
  */
  remoteNotificationTypes: null,
  /**
  * Indicates whether push  notifications have been enabled using [registerForPushNotifications](Titanium.Network.registerForPushNotifications).
  * @type Boolean
  * @requires iphone, ipad
  */
  remoteNotificationsEnabled: null,
  /**
  * User-defined function that is called everytime HTTPClient connects to a remote resource.
  * @type Callback<String>
  * @requires mobileweb
  */
  httpURLFormatter: null,
};

/**
* Legacy method to add a connectivity listener to listen for network changes.
* @deprecated since 1.7.0 removed 3.0.0
* @param {Callback<Object>} callback Callback function to invoke upon network connectivity changes.
*/
Titanium.Network.addConnectivityListener = function(callback) {};

/**
* Adds a cookie to the HTTP client cookie store.
* @since [object Object]
* @param {Titanium.Network.Cookie} cookie The cookie to add
*/
Titanium.Network.addHTTPCookie = function(cookie) {};

/**
* Adds a cookie to the system cookie store.
* @since 3.2.0
* @param {Titanium.Network.Cookie} cookie The cookie to add
*/
Titanium.Network.addSystemCookie = function(cookie) {};

/**
* Creates and returns a `BonjourBrowser` object.
* @param {String} serviceType Service to search for, must include the protocol type suffix (._tcp).
* @param {String} domain Bonjour service domain to conduct the search in.
* @param {Dictionary<Titanium.Network.BonjourBrowser>} parameters A dictionary object of properties defined in <Titanium.Network.BonjourBrowser>.
*/
Titanium.Network.createBonjourBrowser = function(serviceType, domain, parameters) {};

/**
* Creates and returns a `BonjourService` object.
* @param {String} name Name of the service. Must be a unique identifier for this service type and domain.
* @param {String} type Type of service.  Must include the protocol identifier (._tcp).
* @param {String} domain Domain to publish the service in.
* @param {Dictionary<Titanium.Network.BonjourService>} parameters Dictionary object of properties defined in <Titanium.Network.BonjourService>.
*/
Titanium.Network.createBonjourService = function(name, type, domain, parameters) {};

/**
* Legacy method to create and return an instance of <Titanium.Network.TCPSocket>.
* @deprecated since 1.7.0
* @param {String} hostName Host name to connect to/listen on.
* @param {Number} port Port for the socket.
* @param {Number} mode Socket's mode; one of <Titanium.Network.READ_MODE>, <Titanium.Network.WRITE_MODE>, <Titanium.Network.READ_WRITE_MODE>.
* @param {Dictionary<Titanium.Network.TCPSocket>} parameters Dictionary object with properties defined in <Titanium.Network.TCPSocket>.
*/
Titanium.Network.createTCPSocket = function(hostName, port, mode, parameters) {};

/**
* Returns a decoded version of a URI encoded value.
* @param {String} value URI encoded input value to be decoded.
*/
Titanium.Network.decodeURIComponent = function(value) {};

/**
* Returns a URI encoded version of the specified URI component.
* @param {String} value Input value to be encoded.
*/
Titanium.Network.encodeURIComponent = function(value) {};

/**
* Gets all the cookies with the domain, path and name matched with the given values from the HTTP client cookie store.
* @since [object Object]
* @param {String} domain The domain of the cookie to get. It is case-insensitive.
* @param {String} path The path of the cookie to get. It is case-sensitive.
* @param {String} name The name of the cookie to get. It is case-sensitive.
*/
Titanium.Network.getHTTPCookies = function(domain, path, name) {};

/**
* Gets all the cookies with the domain matched with the given values from the HTTP client cookie store.
* @since [object Object]
* @param {String} domain The domain of the cookie to get. It is case-insensitive.
*/
Titanium.Network.getHTTPCookiesForDomain = function(domain) {};

/**
* Gets all the cookies with the domain, path and name matched with the given values from the system cookie store.
* @since 3.2.0
* @param {String} domain The domain of the cookie to get. It is case-insensitive.
* @param {String} path The path of the cookie to get. It is case-sensitive.
* @param {String} name The name of the cookie to get. It is case-sensitive.
*/
Titanium.Network.getSystemCookies = function(domain, path, name) {};

/**
* Removes all the cookies from the HTTP client cookie store.
* @since [object Object]
*/
Titanium.Network.removeAllHTTPCookies = function() {};

/**
* Removes all the cookie from the system client cookie store.
* @since 3.2.0
*/
Titanium.Network.removeAllSystemCookies = function() {};

/**
* Removes the cookie with the domain, path and name exactly the same as the given values from the HTTP client cookie store.
* @since [object Object]
* @param {String} domain The domain of the cookie to remove. It is case-insensitive.
* @param {String} path The path of the cookie to remove. It is case-sensitive.
* @param {String} name The name of the cookie to remove. It is case-sensitive.
*/
Titanium.Network.removeHTTPCookie = function(domain, path, name) {};

/**
* Removes the cookies with the domain matched with the given values from the HTTP client cookie store.
* @since [object Object]
* @param {String} domain The domain of the cookie to remove. It is case-insensitive.
*/
Titanium.Network.removeHTTPCookiesForDomain = function(domain) {};

/**
* Removes the cookie with the domain, path and name exactly the same as the given values from the system cookie store.
* @since 3.2.0
* @param {String} domain The domain of the cookie to remove. It is case-insensitive.
* @param {String} path The path of the cookie to remove. It is case-sensitive.
* @param {String} name The name of the cookie to remove. It is case-sensitive.
*/
Titanium.Network.removeSystemCookie = function(domain, path, name) {};

/**
* Registers for push notifications with the Apple Push Notification Service.
* @param {PushNotificationConfig} config Dictionary specifying push-notification related options.
*/
Titanium.Network.registerForPushNotifications = function(config) {};

/**
* Legacy method to remove a connectivity listener.
* @deprecated since 1.7.0 removed 3.0.0
* @param {Callback<Object>} callback Callback function to remove.
*/
Titanium.Network.removeConnectivityListener = function(callback) {};

/**
* Unregisters the application for push notifications.
*/
Titanium.Network.unregisterForPushNotifications = function() {};
/**
* Fired when network connectivity changes.
* @event Titanium.Network#change
* @type {Object}
* @type String networkTypeName New network type as a string.
* @type Boolean online Boolean to indicate if the device is online.
* @type Number networkType New network type
* @type String reason Human-readable text describing the reason for the change.
* @requires android, mobileweb
*/
/**
*/
PushNotificationConfig = {
  /**
  * Array of `NOTIFICATION_TYPE` constants that the application would like to receive.
  * @type Array<Number>
  */
  types: null,
  /**
  * Callback function called when the push registration is successfully completed.
  * @type Callback<PushNotificationSuccessArg>
  */
  success: null,
  /**
  * Callback function called when an error occurs during registration.
  * @type Callback<PushNotificationErrorArg>
  */
  error: null,
  /**
  * Callback function invoked upon receiving a new push notification.
  * @type Callback<PushNotificationData>
  */
  callback: null,
};


/**
* @extends SuccessResponse
*/
PushNotificationSuccessArg = {
  /**
  * The value of this string is always "remote".
  * @type String
  */
  type: null,
  /**
  * The device token which this device was registered for.
  * @type String
  */
  deviceToken: null,
  /**
  * Indicates if the operation succeeded. Returns `true`.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns 0.
  * @type Number
  */
  code: null,
};


/**
* @extends FailureResponse
*/
PushNotificationErrorArg = {
  /**
  * The value of this string is always "remote".
  * @type String
  */
  type: null,
  /**
  * Indicates if the operation succeeded. Returns `false`.
  * @type Boolean
  */
  success: null,
  /**
  * Error code. Returns a non-zero value.
  * @type Number
  */
  code: null,
};


/**
*/
PushNotificationData = {
  /**
  * The `userinfo` dictionary passed to the Apple Push Notification Service.
  * @type Dictionary
  */
  data: null,
  /**
  * Boolean indicating if notification was received while app was in background. This property became available in Titanium Mobile 3.1.0 for iOS.
  * @type Boolean
  */
  inBackground: null,
};


/**
* @extends Titanium.Module
* @since 1.7
* @requires android, iphone, ipad
*/
Titanium.Network.Socket = {
  /**
  * State value representing an initialized socket.
  * @type Number
  */
  INITIALIZED: null,
  /**
  * State value representing a connected socket.
  * @type Number
  */
  CONNECTED: null,
  /**
  * State value representing a socket that is listening for connections.
  * @type Number
  */
  LISTENING: null,
  /**
  * State value representing a closed socket.
  * @type Number
  */
  CLOSED: null,
  /**
  * State value indicating an error has occurred on the socket.
  * @type Number
  */
  ERROR: null,
};

/**
* Returns a new TCP socket object.
* @param {Dictionary<Titanium.Network.Socket.TCP>} params Creation parameters.
*/
Titanium.Network.Socket.createTCP = function(params) {};

/**
* @extends Titanium.IOStream
* @since 1.7
* @requires android, iphone, ipad
*/
Titanium.Network.Socket.TCP = {
  /**
  * The host to connect to or listen on.
  * @type String
  */
  host: null,
  /**
  * The port to connect to or listen on.
  * @type Number
  */
  port: null,
  /**
  * Max number of pending incoming connections to be allowed when the socket is in the [LISTENING](Titanium.Network.Socket.LISTENING) state.
  * @type Number
  */
  listenQueueSize: null,
  /**
  * Timeout, in milliseconds, for `connect` and all `write` operations.
  * @type Number
  */
  timeout: null,
  /**
  * Callback to be fired when the socket enters the "connected" state.
  * @type Callback<ConnectedCallbackArgs>
  */
  connected: null,
  /**
  * Callback to be fired when the socket enters the [ERROR](Titanium.Network.Socket.ERROR) state.
  * @type Callback<ErrorCallbackArgs>
  */
  error: null,
  /**
  * Callback to be fired when a listener accepts a connection.
  * @type Callback<AcceptedCallbackArgs>
  */
  accepted: null,
  /**
  * Current state of the socket.
  * @type Number
  */
  state: null,
};

/**
* Attempts to connect the socket to its host/port.
*/
Titanium.Network.Socket.TCP.connect = function() {};

/**
* Attempts to start listening on the socket's host/port.
*/
Titanium.Network.Socket.TCP.listen = function() {};

/**
* Tells a [LISTENING](Titanium.Network.Socket.LISTENING) socket to accept a connection request at the top of a listener's request queue when one becomes available.
* @param {AcceptDict} options Options to be set on next accepted socket.
*/
Titanium.Network.Socket.TCP.accept = function(options) {};

/**
* Closes a socket.
*/
Titanium.Network.Socket.TCP.close = function() {};

/**
* @since 1.7
*/
ConnectedCallbackArgs = {
  /**
  * Socket instance that has been connected.
  * @type Titanium.Network.Socket.TCP
  */
  socket: null,
};


/**
* @extends FailureResponse
* @since 1.7
*/
ErrorCallbackArgs = {
  /**
  * Socket that experienced the error.
  * @type Titanium.Network.Socket.TCP
  */
  socket: null,
  /**
  * The error code of the error (potentially system-dependent).
  * @type Number
  */
  errorCode: null,
  /**
  * Indicates if the operation succeeded. Returns `false`.
  * @type Boolean
  */
  success: null,
  /**
  * Error code. Returns a non-zero value.
  * @type Number
  */
  code: null,
};


/**
* @since 1.7
*/
AcceptedCallbackArgs = {
  /**
  * Socket which received the connection.
  * @type Titanium.Network.Socket.TCP
  */
  socket: null,
  /**
  * Socket which represents the inbound connection.
  * @type Titanium.Network.Socket.TCP
  */
  inbound: null,
};


/**
* @since 1.7
*/
AcceptDict = {
  /**
  * Timeout, in milliseconds, for all `write` operations.
  * @type Number
  */
  timeout: null,
  /**
  * Callback to be fired when the socket enters the [ERROR](Titanium.Network.Socket.ERROR) state.
  * @type Callback<ErrorCallbackArgs>
  */
  error: null,
};


/**
* @extends Titanium.Proxy
* @since 1.2.0
* @requires iphone, ipad
* @fires Titanium.Network.TCPSocket#read
* @fires Titanium.Network.TCPSocket#readError
* @fires Titanium.Network.TCPSocket#writeError
*/
Titanium.Network.TCPSocket = {
  /**
  * the host name to connect to.  Must be <Titanium.Network.INADDR_ANY> or an identifier for the local device in order to listen
  * @type String
  */
  hostName: null,
  /**
  * whether or not the socket is valid
  * @type Boolean
  */
  isValid: null,
  /**
  * the socket's mode
  * @type Number
  */
  mode: null,
  /**
  * the port to connect/listen on
  * @type Number
  */
  port: null,
  /**
  * strip terminating null character when sending string data; default is false
  * @type Boolean
  */
  stripTerminator: null,
};

/**
* close the socket
*/
Titanium.Network.TCPSocket.close = function() {};

/**
* connect the scocket to a TCP server
*/
Titanium.Network.TCPSocket.connect = function() {};

/**
* set up the socket to receive connections
*/
Titanium.Network.TCPSocket.listen = function() {};

/**
* write data to the socket, if the mode is WRITE_MODE or READ_WRITE_MODE
* @param {Object|String} data either a string or blob object representing the data to be transferred
* @param {Number} sendTo the socket reference to send the data to.  Default is to send to all connected sockets
*/
Titanium.Network.TCPSocket.write = function(data, sendTo) {};
/**
* new data was read off the socket
* @event Titanium.Network.TCPSocket#read
* @type {Object}
* @type undefined from the reference for the socket that data was retrieved from
* @type undefined data a blob representing the data read, can be interpreted via toString
*/
/**
* an error occured when reading
* @event Titanium.Network.TCPSocket#readError
* @type {Object}
* @type Boolean success Indicates a successful operation. Returns `false`.
* @type String error Error message, if any returned. May be undefined.
* @type Number code Error code.If the error was generated by the operating system, that system's error valueis used. Otherwise, this value will be -1.
*/
/**
* an error occured when writing
* @event Titanium.Network.TCPSocket#writeError
* @type {Object}
* @type Boolean success Indicates a successful operation. Returns `false`.
* @type String error Error message, if any returned. May be undefined.
* @type Number code Error code.If the error was generated by the operating system, that system's error valueis used. Otherwise, this value will be -1.
*/
/**
* @extends Titanium.Module
* @since 1.8.2
* @requires android
*/
Titanium.Platform.Android = {
  /**
  * Android API level identifier of the Operating System.
  * @type Number
  */
  API_LEVEL: null,
  /**
  * Constant to indicate that the physical size category of the current device/emulator is large
  * @type Number
  */
  PHYSICAL_SIZE_CATEGORY_LARGE: null,
  /**
  * Constant to indicate that the physical size category of the current device/emulator is normal
  * @type Number
  */
  PHYSICAL_SIZE_CATEGORY_NORMAL: null,
  /**
  * Constant to indicate that the physical size category of the current device/emulator is small
  * @type Number
  */
  PHYSICAL_SIZE_CATEGORY_SMALL: null,
  /**
  * Constant to indicate that the physical size category of the current device/emulator is undefined
  * @type Number
  */
  PHYSICAL_SIZE_CATEGORY_UNDEFINED: null,
  /**
  * Constant to indicate that the physical size category of the current device/emulator is extra large
  * @type Number
  */
  PHYSICAL_SIZE_CATEGORY_XLARGE: null,
  /**
  * The physical size category of the Android device or emulator. 
  * @type Number
  */
  physicalSizeCategory: null,
};


/**
* @extends Titanium.Proxy
* @since 0.8
*/
Titanium.Platform.DisplayCaps = {
  /**
  * Logical density of the display.
  * @type String
  */
  density: null,
  /**
  * Display density expressed as dots-per-inch.
  * @type Number
  */
  dpi: null,
  /**
  * Logical density of the display, as a scaling factor for the Density Independent Pixel (dip) unit.
  * @type Number
  * @requires android, iphone, ipad
  */
  logicalDensityFactor: null,
  /**
  * Absolute height of the display in relation to UI orientation. Measured in platform-specific units; pixels on Android and density-independent pixels (dip) on iOS.
  * @type Number
  */
  platformHeight: null,
  /**
  * Absolute width of the display in relation to UI orientation. Measured in platform-specific units; pixels on Android and density-independent pixels (dip) on iOS.
  * @type Number
  */
  platformWidth: null,
  /**
  * Physical pixels per inch of the display in the X dimension.
  * @type Number
  * @requires android
  */
  xdpi: null,
  /**
  * Physical pixels per inch of the display in the Y dimension.
  * @type Number
  * @requires android
  */
  ydpi: null,
};


/**
* @extends Titanium.Module
* @since 0.1
* @fires Titanium.Platform#battery
*/
Titanium.Platform = {
  /**
  * Constant to indicate that the system is plugged in and currently being charged.
  * @type Number
  */
  BATTERY_STATE_CHARGING: null,
  /**
  * Constant to indicate that the battery is fully charged.
  * @type Number
  */
  BATTERY_STATE_FULL: null,
  /**
  * Constant to indicate that the battery state is not known or monitoring is disabled.
  * @type Number
  */
  BATTERY_STATE_UNKNOWN: null,
  /**
  * Constant to indicate that the system is unplugged.
  * @type Number
  */
  BATTERY_STATE_UNPLUGGED: null,
  /**
  * System's WIFI IP address. No other network types are supported.
  * @type String
  * @requires android, iphone, ipad
  */
  address: null,
  /**
  * System's processor architecture.
  * @type String
  * @requires android, iphone, ipad
  */
  architecture: null,
  /**
  * System's unused memory, measured in megabytes on iOS and bytes on Android.
  * @type Number
  * @requires android, iphone, ipad
  */
  availableMemory: null,
  /**
  * Battery level in percent, accessible only when `batteryMonitoring` is enabled. Measured in 5% increments on iPhone/iPad.
  * @type Number
  */
  batteryLevel: null,
  /**
  * Determines whether battery monitoring is enabled.
  * @type Boolean
  * @requires android, iphone, ipad, mobileweb
  */
  batteryMonitoring: null,
  /**
  * Indicates the state of the battery. Accessible only when `batteryMonitoring` is enabled.
  * @type Number
  */
  batteryState: null,
  /**
  * Returns the DisplayCaps object.
  * @type Titanium.Platform.DisplayCaps
  */
  displayCaps: null,
  /**
  * Applications's globally-unique ID (UUID).
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  id: null,
  /**
  * System's default language.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  locale: null,
  /**
  * System's network interface mac address, or app UUID.
  * @type String
  * @requires android, iphone, ipad
  */
  macaddress: null,
  /**
  * Manufacturer of the device.
  * @type String
  * @requires android, iphone, ipad
  */
  manufacturer: null,
  /**
  * Model of the device.
  * @type String
  * @requires android, iphone, ipad
  */
  model: null,
  /**
  * Name of the platform. Returns `android` for the Android platform, `iPhone OS` for the iOSplatform (iPhone, iPad, or iPod Touch), and `mobileweb` for the Mobile Web platform.
  * @type String
  */
  name: null,
  /**
  * System's WIFI network mask. No other network types are supported.
  * @type String
  * @requires android, iphone, ipad
  */
  netmask: null,
  /**
  * Short name of the system's Operating System. Returns `android` for the Android platfrom,`iphone` for the iPhone or iPod Touch, `ipad` for the iPad, and `mobileweb` for the Mobile Webplatform.
  * @type String
  */
  osname: null,
  /**
  * Operating System architecture. On Android, this is `32bit`.
  * @type String
  * @requires android, iphone, mobileweb, ipad
  */
  ostype: null,
  /**
  * Number of processing cores.
  * @type Number
  * @requires android, iphone, ipad
  */
  processorCount: null,
  /**
  * Short name of the JavaScript runtime in use.
  * @type String
  */
  runtime: null,
  /**
  * System name, if set. On iOS, this can be found in Settings > General > About > Name.
  * @type String
  * @requires android, iphone, ipad
  */
  username: null,
  /**
  * System's OS version.
  * @type String
  */
  version: null,
};

/**
* Returns whether the system is configured with a default application to handle the URL's protocol.
* @param {String} url The url to check.
*/
Titanium.Platform.canOpenURL = function(url) {};

/**
* Creates a globally-unique identifier.
*/
Titanium.Platform.createUUID = function() {};

/**
* Opens this URL using the system's default application for its protocol.
* @param {String} url The url to open.
*/
Titanium.Platform.openURL = function(url) {};

/**
* Returns whether the system settings are configured to show times in 24-hour format.
*/
Titanium.Platform.is24HourTimeFormat = function() {};
/**
* Fired when the battery state changes. This is measured in 5% increments on iPhone/iPad.
* @event Titanium.Platform#battery
* @type {Object}
* @type Number state The battery state.
* @type Number level Percentage battery power level.
*/
/**
* @since 0.1
*/
Titanium.Proxy = {
  /**
  * Indicates if the proxy will bubble an event to its parent.
  * @type Boolean
  * @requires iphone, ipad, android
  */
  bubbleParent: null,
  /**
  * The name of the API that this proxy corresponds to.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  apiName: null,
  /**
  * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
  * @type Titanium.UI.Window,Titanium.UI.TabGroup
  * @requires android
  */
  lifecycleContainer: null,
};

/**
* Adds the specified callback as an event listener for the named event.
* @param {String} name Name of the event.
* @param {Callback<Object>} callback Callback function to invoke when the event is fired.
*/
Titanium.Proxy.addEventListener = function(name, callback) {};

/**
* Removes the specified callback as an event listener for the named event.
* @param {String} name Name of the event.
* @param {Callback<Object>} callback Callback function to remove. Must be the same function passed to `addEventListener`.
*/
Titanium.Proxy.removeEventListener = function(name, callback) {};

/**
* Fires a synthesized event to any registered listeners.
* @param {String} name Name of the event.
* @param {Dictionary} event A dictionary of keys and values to add to the <Titanium.Event> object sent to the listeners.
*/
Titanium.Proxy.fireEvent = function(name, event) {};

/**
* Applies the properties to the proxy.
* @since [object Object]
* @param {Dictionary} props A dictionary of properties to apply.
*/
Titanium.Proxy.applyProperties = function(props) {};

/**
* @extends Titanium.Module
* @since 1.7
* @requires android, iphone, ipad
*/
Titanium.Stream = {
  /**
  * Use with [createStream](Titanium.Stream.createStream) to open a stream in readmode.
  * @type Number
  */
  MODE_READ: null,
  /**
  * Use with [createStream](Titanium.Stream.createStream) to open a stream in writemode.
  * @type Number
  */
  MODE_WRITE: null,
  /**
  * Use with [createStream](Titanium.Stream.createStream) to open a stream in appendmode.
  * @type Number
  */
  MODE_APPEND: null,
};

/**
* Creates stream from a `Buffer` or `Blob` object.
* @param {CreateStreamArgs} params Parameter object, for specifying the source object and mode.
*/
Titanium.Stream.createStream = function(params) {};

/**
* Asynchronously reads data from an [IOStream](Titanium.IOStream) into a buffer.
* @param {Titanium.IOStream} sourceStream Stream to read from.
* @param {Titanium.Buffer} buffer Buffer to read into.
* @param {Number} offset Offset to start reading stream data from, in bytes.If specified, `length` must be specified as well.
* @param {Number} length Number of bytes of data to read from the stream.If specified, `offset` must be specified as well.
* @param {Callback<ReadCallbackArgs>} resultsCallback Function to call with the results of the read operation.
*/
Titanium.Stream.read = function(sourceStream, buffer, offset, length, resultsCallback) {};

/**
* Reads all data from the specified [IOStream](Titanium.IOStream).
* @param {Titanium.IOStream} sourceStream Stream to read from.
* @param {Titanium.Buffer} buffer Buffer to read into. If specified, `resultsCallback` must be specified aswell.
* @param {Callback<ReadCallbackArgs>} resultsCallback Function to call with the results of the read operation.If specified, `resultsCallback` must be specified as well.
*/
Titanium.Stream.readAll = function(sourceStream, buffer, resultsCallback) {};

/**
* Asynchronously writes data from a buffer to an [IOStream](Titanium.IOStream).
* @param {Titanium.IOStream} outputStream Stream to write to.
* @param {Titanium.Buffer} buffer Buffer to write from.
* @param {Number} offset Offset to start writing buffer data from.If specified, `length` must be specified as well.
* @param {Number} length Bytes of data to write. If specified, `offset` must be specified as well.
* @param {Callback<WriteCallbackArgs>} resultsCallback Function to call with the results of the write operation.
*/
Titanium.Stream.write = function(outputStream, buffer, offset, length, resultsCallback) {};

/**
* Writes all data from an input stream to an output stream.
* @param {Titanium.IOStream} inputStream Stream to read from.
* @param {Titanium.IOStream} outputStream Stream to write to.
* @param {Number} maxChunkSize Maximum number of bytes to copy from `inputStream` to `outputStream` in a single operation.
* @param {Callback<WriteStreamCallbackArgs>} resultsCallback Function to call with the results of the `writeStream` operation.
*/
Titanium.Stream.writeStream = function(inputStream, outputStream, maxChunkSize, resultsCallback) {};

/**
* Reads data from input stream and passes it to a handler method.
* @param {Titanium.IOStream} inputStream Stream to pump from.
* @param {Callback<PumpCallbackArgs>} handler Handler method that will receive data from `inputStream`.
* @param {Number} maxChunkSize Maximum number of bytes to pass to `handler` in a single call.
* @param {Boolean} isAsync Specifies if the `pump` operation should run asynchronously.
*/
Titanium.Stream.pump = function(inputStream, handler, maxChunkSize, isAsync) {};

/**
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
CreateStreamArgs = {
  /**
  * Object that the stream will read from or write to.
  * @type Titanium.Blob,Titanium.Buffer
  */
  source: null,
  /**
  * Mode to open the stream in.
  * @type Number
  */
  mode: null,
};


/**
* @extends ErrorResponse
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
ReadCallbackArgs = {
  /**
  * Stream being read.
  * @type Titanium.IOStream
  */
  source: null,
  /**
  * Number of bytes processed, or -1 in the event of an error or end of stream.
  * @type Number
  */
  bytesProcessed: null,
  /**
  * Whether an error was encountered. Set to 1 in the case of an error, 0otherwise.
  * @type Number
  * @requires android
  */
  errorState: null,
  /**
  * Text description of the error.
  * @type String
  */
  errorDescription: null,
  /**
  * Indicates if the operation succeeded.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns 0 if `success` is `true`.
  * @type Number
  */
  code: null,
};


/**
* @extends ErrorResponse
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
WriteCallbackArgs = {
  /**
  * Stream being written to.
  * @type Titanium.IOStream
  */
  source: null,
  /**
  * Number of bytes processed, or -1 in the event of an error or end of stream.
  * @type Number
  */
  bytesProcessed: null,
  /**
  * Whether an error was encountered. Set to 1 in the case of an error, 0otherwise.
  * @type Number
  * @requires android
  */
  errorState: null,
  /**
  * Text description of the error.
  * @type String
  */
  errorDescription: null,
  /**
  * Indicates if the operation succeeded.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns 0 if `success` is `true`.
  * @type Number
  */
  code: null,
};


/**
* @extends ErrorResponse
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
WriteStreamCallbackArgs = {
  /**
  * Stream being read from.
  * @type Titanium.IOStream
  */
  fromStream: null,
  /**
  * Stream being written to.
  * @type Titanium.IOStream
  */
  toStream: null,
  /**
  * Number of bytes processed, or -1 in the event of an error or end of stream.
  * @type Number
  */
  bytesProcessed: null,
  /**
  * Whether an error was encountered. Set to 1 in the case of an error, 0otherwise.
  * @type Number
  * @requires android
  */
  errorState: null,
  /**
  * Text description of the error.
  * @type String
  */
  errorDescription: null,
};


/**
* @extends ErrorResponse
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
PumpCallbackArgs = {
  /**
  * Stream being read from.
  * @type Titanium.IOStream
  */
  source: null,
  /**
  * Buffer object holding the data currently being pumped to the handler method.
  * @type Titanium.Buffer
  */
  buffer: null,
  /**
  * Number of bytes being passed to this invocation of the handler, or -1 in the event of an error or end of stream.
  * @type Number
  */
  bytesProcessed: null,
  /**
  * Total number of bytes read from the stream so far, including the data passed to this current invocation of the handler.
  * @type Number
  */
  totalBytesProcessed: null,
  /**
  * Whether an error was encountered. Set to 1 in the case of an error, 0otherwise.
  * @type Number
  * @requires android
  */
  errorState: null,
  /**
  * Text description of the error.
  * @type String
  */
  errorDescription: null,
  /**
  * Indicates if the operation succeeded.
  * @type Boolean
  */
  success: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns 0 if `success` is `true`.
  * @type Number
  */
  code: null,
};


/**
* @extends Titanium.Module
* @since 0.1
*/
Titanium = {
  /**
  * User-agent string used by Titanium.
  * @type String
  */
  userAgent: null,
  /**
  * Version of Titanium that is executing.
  * @type String
  */
  version: null,
  /**
  * Date of the Titanium build.
  * @type String
  */
  buildDate: null,
  /**
  * Git hash of the Titanium build.
  * @type String
  */
  buildHash: null,
};

/**
* Includes JavaScript code from one or more files.
* @deprecated since 3.3.0
* @param {String} name Filename(s) to include.
*/
Titanium.include = function(name) {};

/**
* Creates a new buffer based on the params.
* @param {CreateBufferArgs} params creation arguments
*/
Titanium.createBuffer = function(params) {};

/**
* @since 1.7
* @requires android, iphone, ipad, mobileweb
*/
CreateBufferArgs = {
  /**
  * An initial value which will be encoded and placed in the buffer. If value is a Number, type must also be set. (this is simply a convenient way of calling <Titanium.Codec.encodeString> or <Titanium.Codec.encodeNumber> and placing the encoded value in the returned buffer.)
  * @type String,Number
  */
  value: null,
  /**
  * The length of the buffer.
  * @type Number
  */
  length: null,
  /**
  * The type of data encoding to use with `value`.
  * @type String
  */
  type: null,
  /**
  * The byte order of this buffer.
  * @type Number
  */
  byteOrder: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.UI["2DMatrix"] = {
  /**
  * The entry at position [1,1] in the matrix.
  * @type Number
  */
  a: null,
  /**
  * The entry at position [1,2] in the matrix.
  * @type Number
  */
  b: null,
  /**
  * The entry at position [2,1] in the matrix.
  * @type Number
  */
  c: null,
  /**
  * The entry at position [2,2] in the matrix.
  * @type Number
  */
  d: null,
  /**
  * The entry at position [3,1] in the matrix.
  * @type Number
  */
  tx: null,
  /**
  * The entry at position [3,2] in the matrix.
  * @type Number
  */
  ty: null,
};

/**
* Returns a matrix constructed by inverting this matrix.
*/
Titanium.UI["2DMatrix"].invert = function() {};

/**
* Returns a matrix constructed by combining two existing matrices.
* @param {Titanium.UI.2DMatrix} t2 The second matrix.
*/
Titanium.UI["2DMatrix"].multiply = function(t2) {};

/**
* Returns a matrix constructed by rotating this matrix.
* @param {Number} angle Angle to rotate to, in degrees. On Android, if `angleTo` is specified, this specifiesthe starting angle for a rotation animation.
* @param {Number} toAngle Ending angle for a rotation animation, in degrees. Android only.
*/
Titanium.UI["2DMatrix"].rotate = function(angle, toAngle) {};

/**
* Returns a `2DMatrix` object that specifies a scaling animation from one scale to another.
* @param {Number} sx Horizontal scaling factor. If `toSx` and `toSy` are specified, this specifies the starting horizontal scaling factor, at the beginning of an animation.
* @param {Number} sy Vertical scaling factor. If `toSx` and `toSy` are specified, this specifies the starting vertical scaling factor, at the beginning of an animation.
* @param {Number} toSx Ending horizontal scaling factor, at the end of an animation.If specified, `toSy` must be specified as well. Android only.
* @param {Number} toSy Ending vertical scaling factor, at the end of an animation.If specified, `toSx` must be specified as well. Android only.
*/
Titanium.UI["2DMatrix"].scale = function(sx, sy, toSx, toSy) {};

/**
* Returns a matrix constructed by applying a translation transform to this matrix.
* @param {Number} tx Horizontal component of the translation.
* @param {Number} ty Vertical component of the translation.
*/
Titanium.UI["2DMatrix"].translate = function(tx, ty) {};

/**
*/
Titanium.UI["2DMatrix"] = {
  /**
  * Scale the matrix by the specified scaling factor. The same scaling factor is usedfor both horizontal and vertical scaling.
  * @type Number
  */
  scale: null,
  /**
  * Rotation angle, in degrees. See the [rotate](Titanium.UI.2DMatrix.rotate) methodfor a discussion of rotation.
  * @type Number
  */
  rotate: null,
  /**
  * Point to rotate around, specified as a dictionary object with `x` and `y`properties, where { x: 0.5, y: 0.5 } represents the center of whatever is beingrotated.
  * @type Dictionary
  * @requires android
  */
  anchorPoint: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI["3DMatrix"] = {
  /**
  * The entry at position [1,1] in the matrix.
  * @type Number
  */
  m11: null,
  /**
  * The entry at position [1,2] in the matrix.
  * @type Number
  */
  m12: null,
  /**
  * The entry at position [1,3] in the matrix.
  * @type Number
  */
  m13: null,
  /**
  * The entry at position [1,4] in the matrix.
  * @type Number
  */
  m14: null,
  /**
  * The entry at position [2,1] in the matrix.
  * @type Number
  */
  m21: null,
  /**
  * The entry at position [2,2] in the matrix.
  * @type Number
  */
  m22: null,
  /**
  * The entry at position [2,3] in the matrix.
  * @type Number
  */
  m23: null,
  /**
  * The entry at position [2,4] in the matrix.
  * @type Number
  */
  m24: null,
  /**
  * The entry at position [3,1] in the matrix.
  * @type Number
  */
  m31: null,
  /**
  * The entry at position [3,2] in the matrix.
  * @type Number
  */
  m32: null,
  /**
  * The entry at position [3,3] in the matrix.
  * @type Number
  */
  m33: null,
  /**
  * The entry at position [3,4] in the matrix.
  * @type Number
  */
  m34: null,
  /**
  * The entry at position [4,1] in the matrix.
  * @type Number
  */
  m41: null,
  /**
  * The entry at position [4,2] in the matrix.
  * @type Number
  */
  m42: null,
  /**
  * The entry at position [4,3] in the matrix.
  * @type Number
  */
  m43: null,
  /**
  * The entry at position [4,4] in the matrix.
  * @type Number
  */
  m44: null,
};

/**
* Returns a matrix constructed by inverting this matrix.
*/
Titanium.UI["3DMatrix"].invert = function() {};

/**
* Returns a matrix constructed by combining two existing matrix.
* @param {Titanium.UI.3DMatrix} t2 Matrix to concatenate to this matrix.
*/
Titanium.UI["3DMatrix"].multiply = function(t2) {};

/**
* Returns a matrix constructed by rotating this matrix.
* @param {Number} angle The angle, in degrees, by which to rotate the matrix. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation.
* @param {Number} x The x part of the vector about which to rotate.
* @param {Number} y The y part of the vector about which to rotate.
* @param {Number} z The z part of the vector about which to rotate.
*/
Titanium.UI["3DMatrix"].rotate = function(angle, x, y, z) {};

/**
* Returns a matrix constructed by scaling this matrix.
* @param {Number} sx The value by which to scale x values of the matrix.
* @param {Number} sy The value by which to scale y values of the matrix.
* @param {Number} sz The value by which to scale z values of the matrix.
*/
Titanium.UI["3DMatrix"].scale = function(sx, sy, sz) {};

/**
* Returns a matrix constructed by translating an existing matrix.
* @param {Number} tx The value by which to move x values with the matrix.
* @param {Number} ty The value by which to move y values with the matrix.
* @param {Number} tz The value by which to move z values with the matrix.
*/
Titanium.UI["3DMatrix"].translate = function(tx, ty, tz) {};

/**
* @extends Titanium.UI.View
* @since 0.8
*/
Titanium.UI.ActivityIndicator = {
  /**
  * Bottom position of the view.
  * @type Number,String
  */
  bottom: null,
  /**
  * Color of the message text, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Font used for the message text.
  * @type Font
  */
  font: null,
  /**
  * Width of the view. Only accepts value of <Titanium.UI.SIZE>, which must be explicitly set in order todisplay the message and to position the view correctly.
  * @type String
  */
  height: null,
  /**
  * Left position of the view.
  * @type Number,String
  */
  left: null,
  /**
  * Message text.
  * @type String
  */
  message: null,
  /**
  * Key identifying a string in the locale file to use for the message text.
  * @type String
  */
  messageid: null,
  /**
  * Right position of the view.
  * @type Number,String
  */
  right: null,
  /**
  * The style for the activity indicator.
  * @type Number
  */
  style: null,
  /**
  * Color of the animated indicator.
  * @type String
  * @requires mobileweb
  */
  indicatorColor: null,
  /**
  * Diameter of the indicator.
  * @type String
  * @requires mobileweb
  */
  indicatorDiameter: null,
  /**
  * Top position of the view.
  * @type Number,String
  */
  top: null,
  /**
  * Width of the view. Only accepts value of <Titanium.UI.SIZE>, which must be explicitly set in order todisplay the message and to position the view correctly.
  * @type String
  */
  width: null,
};

/**
* Adds a child to this activity indicator's hierarchy.
*/
Titanium.UI.ActivityIndicator.add = function() {};

/**
* Hides the activity indicator and stops the animation.
*/
Titanium.UI.ActivityIndicator.hide = function() {};

/**
* Removes a child from this activity indicator's hierarchy.
*/
Titanium.UI.ActivityIndicator.remove = function() {};

/**
* Shows the activity indicator and starts the animation.
*/
Titanium.UI.ActivityIndicator.show = function() {};

/**
* @extends Titanium.Module
* @since [object Object]
* @requires android, mobileweb
*/
Titanium.UI.ActivityIndicatorStyle = {
  /**
  * Large white spinning indicator.
  * @type Number
  * @requires android, mobileweb
  */
  BIG: null,
  /**
  * Small gray spinning indicator.
  * @type Number
  * @requires android, mobileweb
  */
  DARK: null,
  /**
  * Large gray spinning indicator.
  * @type Number
  * @requires android, mobileweb
  */
  BIG_DARK: null,
  /**
  * Small white spinning indicator (default).
  * @type Number
  * @requires android, mobileweb
  */
  PLAIN: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.AlertDialog#click
*/
Titanium.UI.AlertDialog = {
  /**
  * View to load inside the message area, to create a custom layout.
  * @type Titanium.UI.View
  * @requires android
  */
  androidView: null,
  /**
  * Name of each button to create.
  * @type Array<String>
  */
  buttonNames: null,
  /**
  * Index to define the cancel button.
  * @type Number
  */
  cancel: null,
  /**
  * Index to define the destructive button.
  * @type Number
  * @requires iphone, ipad
  */
  destructive: null,
  /**
  * Dialog message.
  * @type String
  */
  message: null,
  /**
  * Key identifying a string in the locale file to use for the message text.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  messageid: null,
  /**
  * The style for the alert dialog.
  * @type Number
  * @requires iphone, ipad
  */
  style: null,
  /**
  * Title of the dialog.
  * @type String
  */
  title: null,
  /**
  * Key identifying a string in the locale file to use for the title text.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  titleid: null,
  /**
  * Text for the `OK` button.
  * @type String
  */
  ok: null,
  /**
  * Key identifying a string in the locale file to use for the `ok` text.
  * @type String
  * @requires iphone, ipad, mobileweb
  */
  okid: null,
  /**
  * Boolean value indicating if the alert dialog should only be cancelled by user gesture or by hide method.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  persistent: null,
};

/**
* Shows this dialog.
*/
Titanium.UI.AlertDialog.show = function() {};

/**
* Hides this dialog.
*/
Titanium.UI.AlertDialog.hide = function() {};
/**
* Fired when a button in the dialog is clicked.
* @event Titanium.UI.AlertDialog#click
* @type {Object}
* @type Boolean,Number cancel Boolean type on Android and Mobile Web; Number on iOS. On Android and Mobile Web, indicates whether the cancel button was clicked, in which case returns `true`. On iOS, the value of the [cancel](Titanium.UI.AlertDialog.cancel) property is returned, if defined, or `-1` otherwise. See the `Three-button Alert Dialog` example for a cross-platform workaround for this parity issue.
* @type Number index Index of the button that was clicked.
* @type String login Value of login field if dialog `style` property is defined as <Titanium.UI.iPhone.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT>.
* @requires iphone, ipad
* @type String password Value of password field if dialog `style` property is defined as <Titanium.UI.iPhone.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT>.
* @requires iphone, ipad
* @type String text Value of text field if dialog `style` property is defined as<Titanium.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT> or <Titanium.UI.iPhone.AlertDialogStyle.SECURE_TEXT_INPUT>.
* @requires iphone, ipad
*/
/**
* @extends Titanium.Module
* @since 1.0
* @requires android
*/
Titanium.UI.Android = {
  /**
  * Converts all detectable types of data into clickable links.
  * @type Number
  */
  LINKIFY_ALL: null,
  /**
  * Converts strings formatted as email addresses into clickable links.
  * @type Number
  */
  LINKIFY_EMAIL_ADDRESSES: null,
  /**
  * Converts strings formatted as addresses into clickable links.
  * @type Number
  */
  LINKIFY_MAP_ADDRESSES: null,
  /**
  * Converts strings formatted as phone numbers into clickable links.
  * @type Number
  */
  LINKIFY_PHONE_NUMBERS: null,
  /**
  * Converts strings formatted as URLs into clickable links.
  * @type Number
  */
  LINKIFY_WEB_URLS: null,
  /**
  * Always allow a user to over-scroll this view, provided it is a view that can scroll.
  * @type Number
  */
  OVER_SCROLL_ALWAYS: null,
  /**
  * Allow a user to over-scroll this view only if the content is large enough to meaningfully scroll, provided it is a view that can scroll.
  * @type Number
  */
  OVER_SCROLL_IF_CONTENT_SCROLLS: null,
  /**
  * Never allow a user to over-scroll this view.
  * @type Number
  */
  OVER_SCROLL_NEVER: null,
  /**
  * Android A_8 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_A_8: null,
  /**
  * Android LA_88 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_LA_88: null,
  /**
  * Android L_8 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_L_8: null,
  /**
  * Android OPAQUE pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_OPAQUE: null,
  /**
  * Android RGBA_4444 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_RGBA_4444: null,
  /**
  * Android RGBA_5551 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_RGBA_5551: null,
  /**
  * Android RGBA_8888 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_RGBA_8888: null,
  /**
  * Android RGBX_8888 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_RGBX_8888: null,
  /**
  * Android RGB_332 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_RGB_332: null,
  /**
  * Android RGB_565 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_RGB_565: null,
  /**
  * Android RGB_888 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_RGB_888: null,
  /**
  * Android TRANSLUCENT pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_TRANSLUCENT: null,
  /**
  * Android A_8 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_TRANSPARENT: null,
  /**
  * Android UNKNOWN pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can improve image clarity and performance.
  * @type Number
  */
  PIXEL_FORMAT_UNKNOWN: null,
  /**
  * Display <Titanium.UI.Android.ProgressIndicator> as a modal dialog. (default)
  * @type Number
  */
  PROGRESS_INDICATOR_DIALOG: null,
  /**
  * Display <Titanium.UI.Android.ProgressIndicator> as a horizontal progress bar in the title of the window.
  * @type Number
  */
  PROGRESS_INDICATOR_STATUS_BAR: null,
  /**
  * Used with the <Titanium.UI.Android.ProgressIndicator.type> property to indicate an ongoing activity of indeterminate length. (default)
  * @type Number
  */
  PROGRESS_INDICATOR_INDETERMINANT: null,
  /**
  * Used with the <Titanium.UI.Android.ProgressIndicator.type> property to indicate an ongoing activity of determinate length.
  * @type Number
  */
  PROGRESS_INDICATOR_DETERMINANT: null,
  /**
  * Pan the current heavyweight window when the input method (ie software keyboard) is shown, to ensure that its contents are not obscured.
  * @type Number
  */
  SOFT_INPUT_ADJUST_PAN: null,
  /**
  * Resize the current heavyweight window when the input method (ie software keyboard) is shown, to ensure that its contents are not obscured.
  * @type Number
  */
  SOFT_INPUT_ADJUST_RESIZE: null,
  /**
  * Use the system-default behavior to determine how the soft input area (ie software keyboard) is accomodated by the current heavyweight window when it receives focus (default.)
  * @type Number
  */
  SOFT_INPUT_ADJUST_UNSPECIFIED: null,
  /**
  * Always hide the soft input area (ie software keyboard) when the current heavyweight window receives focus.
  * @type Number
  */
  SOFT_INPUT_STATE_ALWAYS_HIDDEN: null,
  /**
  * Always show the soft input area (ie software keyboard) when the current heavyweight window receives focus.
  * @type Number
  */
  SOFT_INPUT_STATE_ALWAYS_VISIBLE: null,
  /**
  * Attempt to hide the soft input area (ie software keyboard) when the current heavyweight window receives focus.
  * @type Number
  */
  SOFT_INPUT_STATE_HIDDEN: null,
  /**
  * Use the system-default behavior to determine whether to show the soft input area (ie software keyboard) when the current heavyweight window receives focus.
  * @type Number
  */
  SOFT_INPUT_STATE_UNSPECIFIED: null,
  /**
  * Attempt to show the soft input area (ie software keyboard) when the current heavyweight window receives focus.
  * @type Number
  */
  SOFT_INPUT_STATE_VISIBLE: null,
  /**
  * Use Android default behavior to handle keyboard visibility when a view receives focus. (default)
  * @type Number
  */
  SOFT_KEYBOARD_DEFAULT_ON_FOCUS: null,
  /**
  * Attempt to hide the soft keyboard when a view receives focus. Note: system can override request.
  * @type Number
  */
  SOFT_KEYBOARD_HIDE_ON_FOCUS: null,
  /**
  * Attempt to show the soft keyboard when a view receives focus. Note: system can override request.
  * @type Number
  */
  SOFT_KEYBOARD_SHOW_ON_FOCUS: null,
  /**
  * Display a checkbox.
  * @type Number
  */
  SWITCH_STYLE_CHECKBOX: null,
  /**
  * Display a toggle button.
  * @type Number
  */
  SWITCH_STYLE_TOGGLEBUTTON: null,
  /**
  * Display a switch.
  * @type Number
  */
  SWITCH_STYLE_SWITCH: null,
  /**
  * Use with [WebView.pluginState](Titanium.UI.WebView.pluginState) to disable plugins in a web view.
  * @type Number
  */
  WEBVIEW_PLUGINS_OFF: null,
  /**
  * Use with [WebView.pluginState](Titanium.UI.WebView.pluginState) to enable plugins in a web view.
  * @type Number
  */
  WEBVIEW_PLUGINS_ON: null,
  /**
  * Display a placeholder and only load plugins when user selects it.
  * @type Number
  */
  WEBVIEW_PLUGINS_ON_DEMAND: null,
  /**
  * Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.
  * @type Number
  */
  WEBVIEW_LOAD_DEFAULT: null,
  /**
  * Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.
  * @type Number
  */
  WEBVIEW_LOAD_NO_CACHE: null,
  /**
  * Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.
  * @type Number
  */
  WEBVIEW_LOAD_CACHE_ONLY: null,
  /**
  * Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.
  * @type Number
  */
  WEBVIEW_LOAD_CACHE_ELSE_NETWORK: null,
};

/**
* Hides the soft keyboard.
*/
Titanium.UI.Android.hideSoftKeyboard = function() {};

/**
* Opens an application preferences dialog, using the native Android system settings interface, defined by the platform-specific `preferences.xml` and `array.xml` files.
*/
Titanium.UI.Android.openPreferences = function() {};

/**
* @extends Titanium.UI.View
* @since 3.0.0
* @requires android
* @fires Titanium.UI.Android.ProgressIndicator#cancel
*/
Titanium.UI.Android.ProgressIndicator = {
  /**
  * When `true` allows the user to cancel the progress dialog by pressing the BACK button.
  * @type Boolean
  * @requires android
  */
  cancelable: null,
  /**
  * When `cancelable` is set to `true` and this is set to `true`, the dialog is canceled when touched outside the window's bounds.
  * @type Boolean
  * @requires android
  */
  canceledOnTouchOutside: null,
  /**
  * Message text.
  * @type String
  * @requires android
  */
  message: null,
  /**
  * Key identifying a string in the locale file to use for the message text.
  * @type String
  * @requires android
  */
  messageid: null,
  /**
  * Minimum value of the progress bar.
  * @type Number
  * @requires android
  */
  min: null,
  /**
  * Maximum value of the progress bar.
  * @type Number
  * @requires android
  */
  max: null,
  /**
  * Location for the progress indicator.
  * @type Number
  * @requires android
  */
  location: null,
  /**
  * Type for the progress indicator.
  * @type Number
  * @requires android
  */
  type: null,
};

/**
* Hides the progress indicator and stops the animation.
*/
Titanium.UI.Android.ProgressIndicator.hide = function() {};

/**
* Shows the progress indicator and starts the animation.
*/
Titanium.UI.Android.ProgressIndicator.show = function() {};
/**
* Fired when the user has canceled the progress indicator dialog.
* @event Titanium.UI.Android.ProgressIndicator#cancel
* @type {Object}
*/
/**
* @extends Titanium.UI.View
* @since 3.0.2
* @requires android
* @fires Titanium.UI.Android.SearchView#blur
* @fires Titanium.UI.Android.SearchView#cancel
* @fires Titanium.UI.Android.SearchView#change
* @fires Titanium.UI.Android.SearchView#focus
* @fires Titanium.UI.Android.SearchView#submit
*/
Titanium.UI.Android.SearchView = {
  /**
  * Color of the text in this SearchView, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Text to show when the search view field is not focused.
  * @type String
  */
  hintText: null,
  /**
  * Value of the search view.
  * @type String
  */
  value: null,
  /**
  * Iconifies or expands the search view
  * @type Boolean
  */
  iconified: null,
  /**
  * Sets the default or resting state of the search view
  * @type Boolean
  */
  iconifiedByDefault: null,
  /**
  * Whether to display the submit button when necessary or never display.
  * @type Boolean
  */
  submitEnabled: null,
};

/**
* Causes the search view to lose focus.
*/
Titanium.UI.Android.SearchView.blur = function() {};

/**
* Causes the search view to gain focus.
*/
Titanium.UI.Android.SearchView.focus = function() {};
/**
* Fired when the search view loses focus.
* @event Titanium.UI.Android.SearchView#blur
* @type {Object}
*/
/**
* Fired when the cancel button is pressed.
* @event Titanium.UI.Android.SearchView#cancel
* @type {Object}
*/
/**
* Fired when the value of the search view changes.
* @event Titanium.UI.Android.SearchView#change
* @type {Object}
*/
/**
* Fired when the search view gains focus.
* @event Titanium.UI.Android.SearchView#focus
* @type {Object}
*/
/**
* If the search query is not empty, fired when the search button is clicked on soft keyboard
* @event Titanium.UI.Android.SearchView#submit
* @type {Object}
*/
/**
* @extends Titanium.Proxy
* @since 0.9
* @requires android, iphone, ipad, mobileweb
* @fires Titanium.UI.Animation#complete
* @fires Titanium.UI.Animation#start
*/
Titanium.UI.Animation = {
  /**
  * Coordinate of the view about which to pivot an animation.
  * @type Point
  * @requires android
  */
  anchorPoint: null,
  /**
  * Specifies if the animation should be replayed in reverse upon completion.
  * @type Boolean
  */
  autoreverse: null,
  /**
  * Value of the `backgroundColor` property at the end of the animation, as a color name or hex triplet.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  backgroundColor: null,
  /**
  * Value of the `bottom` property at the end of the animation.
  * @type Number
  */
  bottom: null,
  /**
  * Value of the `center` property at the end of the animation.
  * @type Object
  */
  center: null,
  /**
  * Value of the `color` property at the end of the animation, as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad, mobileweb
  */
  color: null,
  /**
  * Animation curve or easing function to apply to the animation.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  curve: null,
  /**
  * Delay, in milliseconds before starting the animation.
  * @type Number
  */
  delay: null,
  /**
  * Duration of the animation, in milliseconds.
  * @type Number
  */
  duration: null,
  /**
  * Value of the `height` property at the end of the animation.
  * @type Number
  */
  height: null,
  /**
  * Value of the `left` property at the end of the animation.
  * @type Number
  */
  left: null,
  /**
  * Value of the `opacity` property at the end of the animation.
  * @type Number
  */
  opacity: null,
  /**
  * Value of the `opaque` property at the end of the animation.
  * @type Boolean
  * @requires iphone, ipad
  */
  opaque: null,
  /**
  * Number of times the animation should be performed.
  * @type Number
  */
  repeat: null,
  /**
  * Value of the `right` property at the end of the animation.
  * @type Number
  */
  right: null,
  /**
  * Value of the `top` property at the end of the animation.
  * @type Number
  */
  top: null,
  /**
  * Animate the view from its current tranform to the specified transform.
  * @type Titanium.UI.2DMatrix,Titanium.UI.3DMatrix
  */
  transform: null,
  /**
  * Transition type to use during a transition animation.
  * @type Number
  * @requires iphone, ipad
  */
  transition: null,
  /**
  * New view to transition to.
  * @type Titanium.UI.View
  * @requires iphone, ipad
  */
  view: null,
  /**
  * Value of the `visible` property at the end of the animation.
  * @type Boolean
  * @requires iphone, ipad, mobileweb
  */
  visible: null,
  /**
  * Value of the `width` property at the end of the animation.
  * @type Number
  */
  width: null,
  /**
  * Value of the `zIndex` property at the end of the animation.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  zIndex: null,
};

/**
* Fired when the animation completes.
* @event Titanium.UI.Animation#complete
* @type {Object}
*/
/**
* Fired when the animation starts.
* @event Titanium.UI.Animation#start
* @type {Object}
*/
/**
* @since 3.6.0
* @requires iphone, ipad, android
*/
Attribute = {
  /**
  * Attribute to apply to the text.
  * @type Number
  */
  type: null,
  /**
  * Attribute value.
  * @type Number
  */
  value: null,
  /**
  * Attribute range.
  * @type Array<Number>
  */
  range: null,
};


/**
* @extends Titanium.Proxy
* @since 3.6.0
* @requires iphone, ipad, android
*/
Titanium.UI.AttributedString = {
  /**
  * The text applied to the attributed string.
  * @type String
  */
  text: null,
  /**
  * An array of attributes to add.
  * @type Array<Attribute>
  */
  attributes: null,
};

/**
* Adds an [attribute](Attribute) with the given name and value to the characters in the specified range.
* @param {Attribute} attribute An attribute object.
*/
Titanium.UI.AttributedString.addAttribute = function(attribute) {};

/**
* @extends Titanium.UI.View
* @since 0.8
*/
Titanium.UI.Button = {
  /**
  * Background image for the button in its normal state, specified as a local file path or URL. 
  * @type String
  */
  backgroundImage: null,
  /**
  * Background image for the button in its disabled state, specified as a local file path or URL. 
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  backgroundDisabledImage: null,
  /**
  * Background image for the button in its focused state, specified as a local file path or URL. 
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  backgroundFocusedImage: null,
  /**
  * Background image for the button in its selected state, specified as a local file path or URL. 
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  backgroundSelectedImage: null,
  /**
  * Default button text color, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Text color of the button in its disabled state, as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad
  */
  disabledColor: null,
  /**
  * Set to `true` to enable the button, `false` to disable the button.
  * @type Boolean
  * @requires ipad, iphone, mobileweb
  */
  enabled: null,
  /**
  * Font to use for the button text.
  * @type Font
  */
  font: null,
  /**
  * Image to display on the button, specified as a local path, URL or a `Blob`.
  * @type String,Titanium.Blob
  */
  image: null,
  /**
  * Button text color used to indicate the selected state, as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad, mobileweb
  */
  selectedColor: null,
  /**
  * Shadow color of the [title](Titanium.UI.Button.title), as a color name or hex triplet.
  * @type String
  * @requires android, mobileweb
  */
  shadowColor: null,
  /**
  * Shadow offset of the [title](Titanium.UI.Button.title), as a dictionary with the properties `x` and `y`.
  * @type Dictionary
  * @requires android, mobileweb
  */
  shadowOffset: null,
  /**
  * Shadow radius of the [title](Titanium.UI.Button.title).
  * @type Number
  * @requires android, mobileweb
  */
  shadowRadius: null,
  /**
  * Style constant for the button, as defined in <Titanium.UI.iPhone.SystemButtonStyle>.
  * @type Number
  * @requires iphone, ipad
  */
  style: null,
  /**
  * Specifies an iOS system button appearance, as defined in <Titanium.UI.iPhone.SystemButton>.
  * @type Number
  * @requires iphone, ipad
  */
  systemButton: null,
  /**
  * Text alignment, specified using one of the <Titanium.UI> text alignment constants.
  * @type String,Number
  */
  textAlign: null,
  /**
  * Button title.
  * @type String
  */
  title: null,
  /**
  * Key identifying a string from the locale file to use for the button title.
  * @type String
  */
  titleid: null,
  /**
  * Vertical alignment for the text field, specified using one of the vertical alignment constants from <Titanium.UI>.
  * @type Number,String
  * @requires android, mobileweb
  */
  verticalAlign: null,
};

/**
*/
Titanium.UI.Button.add = function() {};

/**
*/
Titanium.UI.Button.remove = function() {};

/**
* @extends Titanium.UI.View
* @since 0.8
* @requires iphone, ipad
* @fires Titanium.UI.ButtonBar#click
*/
Titanium.UI.ButtonBar = {
  /**
  * Index of the currently selected button.
  * @type Number
  */
  index: null,
  /**
  * Array of labels for the button bar.
  * @type Array<String>,Array<BarItemType>
  */
  labels: null,
  /**
  * Style of the button bar.
  * @type Number
  */
  style: null,
};

/**
* Fired when a button is clicked.
* @event Titanium.UI.ButtonBar#click
* @type {Object}
* @type Number index Index of the clicked button.
*/
/**
* @extends Titanium.Module
* @since 1.5
* @requires android, iphone, ipad, mobileweb
*/
Titanium.UI.Clipboard = {
};

/**
* Deletes data of the specified MIME type stored in the clipboard. If MIME type omitted, all data is deleted.
* @param {String} type MIME type. Ignored on Android.
*/
Titanium.UI.Clipboard.clearData = function(type) {};

/**
* Deletes all text data stored in the clipboard.
*/
Titanium.UI.Clipboard.clearText = function() {};

/**
* Gets data of the specified MIME type stored in the clipboard.
* @param {String} type MIME type. Must be text type on Android.
*/
Titanium.UI.Clipboard.getData = function(type) {};

/**
* Gets text data stored in the clipboard.
*/
Titanium.UI.Clipboard.getText = function() {};

/**
* Indicates whether any data of the specified MIME type is stored in the clipboard.
* @param {String} type MIME type. Must be text type on Android.
*/
Titanium.UI.Clipboard.hasData = function(type) {};

/**
* Indicates whether any text data is stored in the clipboard.
*/
Titanium.UI.Clipboard.hasText = function() {};

/**
* Stores data of the specified MIME type in the clipboard.
* @param {String} type MIME type. Must be text type on Android.
* @param {Object} data New item of data.
*/
Titanium.UI.Clipboard.setData = function(type, data) {};

/**
* Stores text data in the clipboard.
* @param {String} text New item of data.
*/
Titanium.UI.Clipboard.setText = function(text) {};

/**
* @extends Titanium.UI.View
* @since 0.8
* @requires iphone, ipad
* @fires Titanium.UI.CoverFlowView#change
* @fires Titanium.UI.CoverFlowView#click
*/
Titanium.UI.CoverFlowView = {
  /**
  * Array of images to display in the view.
  * @type Array<String>,Array<Titanium.Blob>,Array<Titanium.Filesystem.File>,Array<CoverFlowImageType>
  */
  images: null,
  /**
  * Index to make selected.
  * @type Number
  */
  selected: null,
};

/**
* Changes the image for a specified index.
* @param {Number} index Index to add the image at.
* @param {String|Titanium.Blob|Titanium.Filesystem.File|CoverFlowImageType} image Image to add at this index.
*/
Titanium.UI.CoverFlowView.setImage = function(index, image) {};
/**
* Fired when the user changes the image using a gesture.
* @event Titanium.UI.CoverFlowView#change
* @type {Object}
* @type Number index Index of the image that is now visible.
* @type Number previous Index of the previously-visible image.
*/
/**
* Fired when the user clicks on the view.
* @event Titanium.UI.CoverFlowView#click
* @type {Object}
* @type Number index Index of the image that is now visible.
* @type Number previous Index of the previously-visible image.
*/
/**
* @extends Titanium.Proxy
* @since 1.2
* @requires iphone, ipad
* @fires Titanium.UI.DashboardItem#click
* @fires Titanium.UI.DashboardItem#delete
* @fires Titanium.UI.DashboardItem#move
*/
Titanium.UI.DashboardItem = {
  /**
  * Integer value displayed in a badge.
  * @type Number
  */
  badge: null,
  /**
  * Determines whether this item can be deleted when it edit mode.
  * @type Boolean
  */
  canDelete: null,
  /**
  * Image or path to image to display in the item by default.
  * @type String,Titanium.Blob
  */
  image: null,
  /**
  * Image or path to image to display in the item as it is selected.
  * @type String,Titanium.Blob
  */
  selectedImage: null,
};

/**
* Fired when a click is detected against the view.
* @event Titanium.UI.DashboardItem#click
* @type {Object}
* @type Dictionary location Coordinates `x` and `y` of the event from the parent view's coordinate system.
* @type Titanium.UI.DashboardItem item Item that was clicked.
*/
/**
* Fired when an item is deleted during editing mode.
* @event Titanium.UI.DashboardItem#delete
* @type {Object}
* @type Titanium.UI.DashboardItem item Item that was deleted.
*/
/**
* Fired when an item is moved during editing mode.
* @event Titanium.UI.DashboardItem#move
* @type {Object}
* @type Array<Titanium.UI.DashboardItem> items List of items to be committed, possibly in new order, when edit mode ends.
* @type Titanium.UI.DashboardItem item Item that was moved.
*/
/**
* @extends Titanium.UI.View
* @since 1.2
* @requires iphone, ipad
* @fires Titanium.UI.DashboardView#click
* @fires Titanium.UI.DashboardView#commit
* @fires Titanium.UI.DashboardView#delete
* @fires Titanium.UI.DashboardView#dragEnd
* @fires Titanium.UI.DashboardView#dragStart
* @fires Titanium.UI.DashboardView#dragend
* @fires Titanium.UI.DashboardView#dragstart
* @fires Titanium.UI.DashboardView#edit
* @fires Titanium.UI.DashboardView#move
* @fires Titanium.UI.DashboardView#pagechanged
*/
Titanium.UI.DashboardView = {
  /**
  * The number of columns of items in the view.
  * @type Number
  */
  columnCount: null,
  /**
  * The number of rows of items in the view.
  * @type Number
  */
  rowCount: null,
  /**
  * Items to display in this view.
  * @type Array<Titanium.UI.DashboardItem>
  */
  data: null,
  /**
  * Determines whether edit mode is activated by a longpress of an item.
  * @type Boolean
  */
  editable: null,
  /**
  * Determines whether the wobble visual editing cue is enabled in edit mode.
  * @type Boolean
  */
  wobble: null,
};

/**
* Enable edit mode.
*/
Titanium.UI.DashboardView.startEditing = function() {};

/**
* Disable edit mode.
*/
Titanium.UI.DashboardView.stopEditing = function() {};
/**
* @event Titanium.UI.DashboardView#click
* @type {Object}
* @type Object item Item that was clicked.
* @type Dictionary location Coordinates x and y of the event from the parent view's coordinate system.
*/
/**
* Fired when edit mode ends.
* @event Titanium.UI.DashboardView#commit
* @type {Object}
*/
/**
* Fired when an item is deleted in edit mode.
* @event Titanium.UI.DashboardView#delete
* @type {Object}
* @type Titanium.UI.DashboardItem item Item that was deleted.
*/
/**
* Fired when an item finishes being dragged in edit mode.
* @event Titanium.UI.DashboardView#dragEnd
* @type {Object}
* @type Titanium.UI.DashboardItem item Item that was dragged.
*/
/**
* Fired when an item starts being dragged in edit mode.
* @event Titanium.UI.DashboardView#dragStart
* @type {Object}
* @type Titanium.UI.DashboardItem item Item that was dragged.
*/
/**
* Fired when an item finishes being dragged in edit mode.
* @event Titanium.UI.DashboardView#dragend
* @type {Object}
* @type Titanium.UI.DashboardItem item Item that was dragged.
*/
/**
* Fired when an item starts being dragged in edit mode.
* @event Titanium.UI.DashboardView#dragstart
* @type {Object}
* @type Titanium.UI.DashboardItem item Item that was dragged.
*/
/**
* Fired when edit mode starts.
* @event Titanium.UI.DashboardView#edit
* @type {Object}
*/
/**
* Fired when an item is moved in edit mode.
* @event Titanium.UI.DashboardView#move
* @type {Object}
* @type Titanium.UI.DashboardItem item Item that was moved.
* @type Array<Titanium.UI.DashboardItem> items List of items to be committed, possibly in new order, when edit mode ends.
*/
/**
* Fired when the current page of the dashboard view changes.
* @event Titanium.UI.DashboardView#pagechanged
* @type {Object}
* @type Number pageNo The current page number.
*/
/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.EmailDialog#complete
*/
Titanium.UI.EmailDialog = {
  /**
  * Constant for the `CANCELLED` status result. On Android, this property exists but is not used.
  * @type Number
  * @requires iphone, ipad
  */
  CANCELLED: null,
  /**
  * Constant for the `FAILED` status result.
  * @type Number
  */
  FAILED: null,
  /**
  * Constant for the `SAVED` status result. On Android, this property exists but is not used.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  SAVED: null,
  /**
  * Constant for the `SENT` status result.
  * @type Number
  */
  SENT: null,
  /**
  * Bar color of the email dialog window, as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad
  */
  barColor: null,
  /**
  * Recipients of the email included via the `BCC` (Blind Carbon Copy) field.
  * @type Array<String>
  */
  bccRecipients: null,
  /**
  * Recipients of the email included via the `CC` (Carbon Copy) field.
  * @type Array<String>
  */
  ccRecipients: null,
  /**
  * Determines whether the email message, specifically the contents of [messageBody](Titanium.UI.EmailDialog.messageBody), should be sent as HTML content type rather than plain text.
  * @type Boolean
  * @requires android, iphone, ipad, mobileweb
  */
  html: null,
  /**
  * Email message body.
  * @type String
  */
  messageBody: null,
  /**
  * Subject line for the email.
  * @type String
  */
  subject: null,
  /**
  * Recipients of the email included via the main `TO` field.
  * @type Array<String>
  */
  toRecipients: null,
};

/**
* Adds an attachment.
* @param {Titanium.Blob|Titanium.Filesystem.File} attachment Attachment to include in the email.
*/
Titanium.UI.EmailDialog.addAttachment = function(attachment) {};

/**
* Indicates whether sending email is supported by the system.
*/
Titanium.UI.EmailDialog.isSupported = function() {};

/**
* Opens this email dialog.
* @param {Object} properties Animation properties. Set `animated` Boolean property to `true` to animate dialog on open. (iPhone, iPad only)
*/
Titanium.UI.EmailDialog.open = function(properties) {};
/**
* Fired when this email dialog has completed sending an email.
* @event Titanium.UI.EmailDialog#complete
* @type {Object}
* @type Boolean success Indicates if the email was handled successfully.Returns `true` if request succeeded, `false` otherwise. Note that emails beingdeleted or saved for later do count as success.
* @type String error Error message, if any returned. Will be undefined if `success` is `true`.
* @type Number code Error code.Error code will be 0 if `success` is `true`, nonzero otherwise. If the errorwas generated by the operating system, that system's error value is used.Otherwise, this value will be -1.
* @type Number result Status of the email send process.The `SAVED` and `CANCELLED` constants are iOS only.On Android, this property will return `SENT` when the user discards or savesa message.
*/
/**
*/
Font = {
  /**
  * Specifies the font family or specific font to use.
  * @type String
  */
  fontFamily: null,
  /**
  * Font size, in platform-dependent units.
  * @type Number,String
  */
  fontSize: null,
  /**
  * Font weight. Valid values are "bold" or "normal".
  * @type String
  */
  fontWeight: null,
  /**
  * Font style. Valid values are "italic" or "normal".
  * @type String
  * @requires iphone, ipad
  */
  fontStyle: null,
  /**
  * The text style for the font.
  * @type String
  * @requires iphone, ipad
  */
  textStyle: null,
};


/**
* @extends Titanium.UI.View
* @since 0.9
* @fires Titanium.UI.ImageView#change
* @fires Titanium.UI.ImageView#load
* @fires Titanium.UI.ImageView#start
* @fires Titanium.UI.ImageView#stop
* @fires Titanium.UI.ImageView#error
* @fires Titanium.UI.ImageView#pause
*/
Titanium.UI.ImageView = {
  /**
  * Indicates whether animation is running.
  * @type Boolean
  */
  animating: null,
  /**
  * Indicates whether the image should be rotated based on exif orientation data. By default, this is false on android and true on iOS. The auto rotate behavior is not supported on Mobile Web.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  autorotate: null,
  /**
  * Number of times to retry decoding the bitmap at a URL.
  * @type Number
  * @requires android
  */
  decodeRetries: null,
  /**
  * Local path to the default image to display while loading a remote image.
  * @type String
  * @requires android, iphone, ipad
  */
  defaultImage: null,
  /**
  * Amount of time in milliseconds to animate one cycle.
  * @type Number
  */
  duration: null,
  /**
  * Show zoom controls when the user touches the image view.
  * @type Boolean
  * @requires android
  */
  enableZoomControls: null,
  /**
  * Set to `true` to prevent scaling of 2x-resolution remote images for Retina displays.
  * @type Boolean
  * @requires iphone, ipad
  */
  hires: null,
  /**
  * Image to display.
  * @type String,Titanium.Blob,Titanium.Filesystem.File
  */
  image: null,
  /**
  * Array of images to animate, defined using local filesystem paths, `File` objects, remote URLs (Android only), or `Blob` objects containing image data. `Blob` and `File` objects are not supported on Mobile Web.
  * @type Array<String>,Array<Titanium.Blob>,Array<Titanium.Filesystem.File>
  */
  images: null,
  /**
  * Indicates whether the animation is paused.
  * @type Boolean
  */
  paused: null,
  /**
  * Prevent the default image from being displayed while loading a remote image. This property is ignored when the `defaultImage` property is set.
  * @type Boolean
  * @requires iphone, ipad
  */
  preventDefaultImage: null,
  /**
  * Number of times to repeat the image animation.
  * @type Number
  */
  repeatCount: null,
  /**
  * Run the animation in reverse.
  * @type Boolean
  */
  reverse: null,
  /**
  * URL to the image to display.
  * @type String
  */
  url: null,
};

/**
*/
Titanium.UI.ImageView.add = function() {};

/**
* Pauses a running animation. Use `resume` method to continue.
*/
Titanium.UI.ImageView.pause = function() {};

/**
*/
Titanium.UI.ImageView.remove = function() {};

/**
* Resumes an animation from a `pause` state.
*/
Titanium.UI.ImageView.resume = function() {};

/**
* Starts the image animation. On Android and Mobile Web, also resets `index` to the first image.
*/
Titanium.UI.ImageView.start = function() {};

/**
* Stops a running animation. On iOS and Mobile Web, also resets `index` to the first image.
*/
Titanium.UI.ImageView.stop = function() {};

/**
* Returns the image as a Blob object.
*/
Titanium.UI.ImageView.toBlob = function() {};
/**
* Fired for each frame change during an animation.
* @event Titanium.UI.ImageView#change
* @type {Object}
* @type undefined index Index of the image frame being displayed.
*/
/**
* Fired when either the initial image and/or all of the images in an animation are loaded.
* @event Titanium.UI.ImageView#load
* @type {Object}
* @type String state Set to `image` when the image defined in the [image](Titanium.UI.ImageView.image) property is loaded. Set to `images`, when the series of images defined in the [images](Titanium.UI.ImageView.images) property are loaded.
*/
/**
* Fired when the animation starts.
* @event Titanium.UI.ImageView#start
* @type {Object}
*/
/**
* Fired when the animation stops.
* @event Titanium.UI.ImageView#stop
* @type {Object}
*/
/**
* Fired when an image fails to load.
* @event Titanium.UI.ImageView#error
* @type {Object}
* @type Boolean success Indicates a successful operation. Returns `false`.
* @type String error Error message, if any returned. May be undefined.
* @type Number code Error code.If the error was generated by the operating system, that system's error valueis used. Otherwise, this value will be -1.
* @type undefined image URL of the image that failed to load.
*/
/**
* Fired when the animation pauses.
* @event Titanium.UI.ImageView#pause
* @type {Object}
*/
/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.Label#link
*/
Titanium.UI.Label = {
  /**
  * Specify an attributed string for the label.
  * @type Titanium.UI.AttributedString
  * @requires android, iphone, ipad
  */
  attributedString: null,
  /**
  * Automatically convert certain text items in the label to clickable links.
  * @type Number
  * @requires android
  */
  autoLink: null,
  /**
  * Number of pixels to extend the background image past the label on the bottom.
  * @type Number
  * @requires iphone, ipad
  */
  backgroundPaddingBottom: null,
  /**
  * Number of pixels to extend the background image past the label on the left.
  * @type Number
  * @requires iphone, ipad
  */
  backgroundPaddingLeft: null,
  /**
  * Number of pixels to extend the background image past the label on the right.
  * @type Number
  * @requires iphone, ipad
  */
  backgroundPaddingRight: null,
  /**
  * Number of pixels to extend the background image past the label on the top.
  * @type Number
  * @requires iphone, ipad
  */
  backgroundPaddingTop: null,
  /**
  * Color of the label text, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Causes words in the text that are longer than the view is wide to be ellipsized instead of broken in the middle.
  * @type Number,Boolean
  * @requires android, mobileweb
  */
  ellipsize: null,
  /**
  * Font to use for the label text.
  * @type Font
  */
  font: null,
  /**
  * Color of the label when in the highlighted state, as a color name or hex triplet.
  * @type String
  * @requires android, iphone, ipad
  */
  highlightedColor: null,
  /**
  * Simple HTML formatting.
  * @type String
  * @requires android, mobileweb
  */
  html: null,
  /**
  * Includes extra top and bottom padding to make room for accents that go above normal ascent and descent.
  * @type Boolean
  * @requires android
  */
  includeFontPadding: null,
  /**
  * Makes the label be exactly this many lines tall.
  * @type Number
  * @requires android
  */
  lines: null,
  /**
  * Makes the label at most this many lines tall.
  * @type Number
  * @requires android
  */
  maxLines: null,
  /**
  * Minimum font size when the font is sized based on the contents.
  * @type Number
  * @requires iphone, ipad
  */
  minimumFontSize: null,
  /**
  * Shadow color of the [text](Titanium.UI.Label.text), as a color name or hex triplet.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  shadowColor: null,
  /**
  * Shadow offset of the [text](Titanium.UI.Label.text), as a dictionary with the properties `x` and `y`.
  * @type Dictionary
  * @requires android, iphone, ipad, mobileweb
  */
  shadowOffset: null,
  /**
  * Shadow radius of the [text](Titanium.UI.Label.text).
  * @type Number
  * @requires android, mobileweb
  */
  shadowRadius: null,
  /**
  * Label text.
  * @type String
  */
  text: null,
  /**
  * Text alignment.
  * @type String,Number
  */
  textAlign: null,
  /**
  * Key identifying a string from the locale file to use for the label text.
  * @type String
  */
  textid: null,
  /**
  * Enable or disable word wrapping in the label.
  * @type Boolean
  * @requires android, mobileweb
  */
  wordWrap: null,
  /**
  * Vertical text alignment, specified using one of the  vertical alignment constantsfrom <Titanium.UI>.
  * @type Number,String
  */
  verticalAlign: null,
};

/**
*/
Titanium.UI.Label.add = function() {};

/**
*/
Titanium.UI.Label.remove = function() {};
/**
* Fired when user interacts with a URL in the Label.
* @event Titanium.UI.Label#link
* @type {Object}
* @type String url The URL that is associated with this event.
* @type Array range An array of two numbers [location, length] describing the character range of the text associated with this URL.
* @type Boolean bubbles This is false. This event does not bubble
*/
/**
* @extends Titanium.Proxy
* @since 3.1.0
* @requires android, ipad, iphone
*/
Titanium.UI.ListItem = {
  /**
  * A user defined string that gets passed to events.
  * @type String
  */
  itemId: null,
  /**
  * Sets an accessory on the right side of an item.
  * @type Number
  */
  accessoryType: null,
  /**
  * Background color of the view, as a color name or hex triplet.
  * @type String
  */
  backgroundColor: null,
  /**
  * Background image to render when the item is not selected.
  * @type String
  * @requires android, iphone, ipad
  */
  backgroundImage: null,
  /**
  * Background gradient to render when the item is not selected.
  * @type Gradient
  * @requires android, iphone, ipad
  */
  backgroundGradient: null,
  /**
  * Background color of the view, as a color name or hex triplet when item is selected.
  * @type String
  * @requires android, iphone, ipad
  */
  selectedBackgroundColor: null,
  /**
  * Background image to render when the item is selected.
  * @type String
  * @requires android, iphone, ipad
  */
  selectedBackgroundImage: null,
  /**
  * Background gradient to render when the item is selected.
  * @type Gradient
  * @requires iphone, ipad
  */
  selectedBackgroundGradient: null,
  /**
  * Specifies if the item can be deleted by a user initiated action.
  * @type Boolean
  * @requires iphone, ipad
  */
  canEdit: null,
  /**
  * Specifies if the item can be reordered within the list view by a user initiated action.
  * @type Boolean
  * @requires iphone, ipad
  */
  canMove: null,
  /**
  * Specifies custom action items to be shown when when a list item is edited.
  * @type Array<RowActionType>
  * @requires iphone, ipad
  */
  editActions: null,
  /**
  * The text to match against when the [ListView](Titanium.UI.ListView) is performing a search.
  * @type String
  * @requires android, iphone, ipad
  */
  searchableText: null,
  /**
  * Default text color of the item when not selected, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Font to use for the item title.
  * @type Font
  */
  font: null,
  /**
  * Row height in platform-specific units.
  * @type Number,String
  */
  height: null,
  /**
  * Image to render in the image area of the item, specified as a local path or URL.
  * @type String
  */
  image: null,
  /**
  * Title to set in the text area of the item.
  * @type String
  */
  title: null,
  /**
  * Selection style constant to control the selection color.
  * @type Number
  * @requires iphone, ipad
  */
  selectionStyle: null,
  /**
  * Subtitle to set in the text area of the item.
  * @type String
  * @requires iphone, ipad
  */
  subtitle: null,
};


/**
* @since 3.1.0
* @requires android, ipad, iphone
*/
ItemTemplate = {
  /**
  * Contains key-value pairs of view properties and their values that are applied to the ListItem.
  * @type Dictionary<Titanium.UI.ListItem>
  */
  properties: null,
  /**
  * Contains key-value pairs of view events and their listeners that are applied to the ListItem.
  * @type Dictionary
  */
  events: null,
  /**
  * Contains an array of subview templates to be added (in order) as children to this view.
  * @type Array<ViewTemplate>
  */
  childTemplates: null,
};


/**
* @since 3.1.0
* @requires android, ipad, iphone
*/
ViewTemplate = {
  /**
  * View's class name, for example, `Ti.UI.Button`.
  * @type String
  */
  type: null,
  /**
  * View's ID (or set of IDs) used for data binding. This value must be unique.
  * @type String
  */
  bindId: null,
  /**
  * Contains key-value pairs of view properties and their values that are applied to this view component.
  * @type Dictionary
  */
  properties: null,
  /**
  * Contains key-value pairs of view events and their listeners that are applied to this view component.
  * @type Dictionary
  */
  events: null,
  /**
  * Contains an array of subview templates to be added (in order) as children to this view.
  * @type Array<ViewTemplate>
  */
  childTemplates: null,
};


/**
* @since 3.1.0
* @requires android, ipad, iphone
*/
ListDataItem = {
  /**
  * Template ID configured with the <Titanium.UI.ListView.templates> property or<Titanium.UI.LIST_ITEM_TEMPLATE_DEFAULT>.
  * @type String,Number
  */
  template: null,
  /**
  * Contains key-value pairs of view properties and their values that are applied to the`ListItem`.
  * @type Dictionary<Titanium.UI.ListItem>
  */
  properties: null,
};


/**
* @since 4.1.0
* @requires ipad, iphone
*/
RowActionType = {
  /**
  * The title of the row action.
  * @type String
  */
  title: null,
  /**
  * The style of the row action.
  * @type Number
  */
  style: null,
  /**
  * The background color of the row action.
  * @type String
  */
  color: null,
};


/**
* @extends Titanium.Proxy
* @since 3.1.0
* @requires android, ipad, iphone
*/
Titanium.UI.ListSection = {
  /**
  * Title of this section footer.
  * @type String
  */
  footerTitle: null,
  /**
  * View to use for this section footer.
  * @type Titanium.UI.View
  * @requires android, iphone, ipad
  */
  footerView: null,
  /**
  * Title of this section header.
  * @type String
  */
  headerTitle: null,
  /**
  * View to use for this section header.
  * @type Titanium.UI.View
  * @requires android, iphone, ipad
  */
  headerView: null,
  /**
  * Items of this list section.
  * @type Array<ListDataItem>
  */
  items: null,
};

/**
* Sets the data entries in the list section.
* @param {Array<ListDataItem>} dataItems List items to set.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListSection.setItems = function(dataItems, animation) {};

/**
* Appends the data entries to the end of the list section.
* @param {Array<ListDataItem>} dataItems List items to add.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListSection.appendItems = function(dataItems, animation) {};

/**
* Inserts data entries to the list section at the specified index.
* @param {Number} itemIndex Index of where to insert the items.
* @param {Array<ListDataItem>} dataItems List items to insert.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListSection.insertItemsAt = function(itemIndex, dataItems, animation) {};

/**
* Removes count entries from the list section at the specified index,then inserts data entries to the list section at the same index.
* @param {Number} index Index of where to remove then insert items.
* @param {Number} count Number of list items to remove.
* @param {Array<ListDataItem>} dataItems List items to insert.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListSection.replaceItemsAt = function(index, count, dataItems, animation) {};

/**
* Removes count entries from the list section at the specified index.
* @param {Number} itemIndex Index of where to remove items.
* @param {Number} count Number of items to remove.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListSection.deleteItemsAt = function(itemIndex, count, animation) {};

/**
* Returns the item entry from the list view at the specified index.
* @param {Number} itemIndex Index of where to retrieve an item.
*/
Titanium.UI.ListSection.getItemAt = function(itemIndex) {};

/**
* Updates an item at the specified index.
* @param {Number} index Index of where to update the item.
* @param {ListDataItem} dataItem List item to update.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListSection.updateItemAt = function(index, dataItem, animation) {};

/**
* @extends Titanium.UI.View
* @since 3.1.0
* @requires android, ipad, iphone
* @fires Titanium.UI.ListView#indexclick
* @fires Titanium.UI.ListView#itemclick
* @fires Titanium.UI.ListView#delete
* @fires Titanium.UI.ListView#marker
* @fires Titanium.UI.ListView#move
* @fires Titanium.UI.ListView#noresults
* @fires Titanium.UI.ListView#pull
* @fires Titanium.UI.ListView#pullend
* @fires Titanium.UI.ListView#rowAction
* @fires Titanium.UI.ListView#scrollstart
* @fires Titanium.UI.ListView#scrollend
*/
Titanium.UI.ListView = {
  /**
  * Determines whether this item can be selected.
  * @type Boolean
  * @requires iphone, ipad
  */
  allowsSelection: null,
  /**
  * Determines if the list view can scroll in response to user actions.
  * @type Boolean
  * @requires iphone, ipad
  */
  canScroll: null,
  /**
  * Determines if the list view is currently in editing mode.
  * @type Boolean
  * @requires iphone, ipad
  */
  editing: null,
  /**
  * Determines if empty sections are retained when the user completes editing the list view.
  * @type Boolean
  * @requires iphone, ipad
  */
  pruneSectionsOnEdit: null,
  /**
  * Contain key-value pairs mapping a style name (key) to an <ItemTemplate> (value).
  * @type Dictionary
  */
  templates: null,
  /**
  * Sections of this list.
  * @type Array<Titanium.UI.ListSection>
  */
  sections: null,
  /**
  * Sets the default template for list data items that do not specify the `template` property.
  * @type String,Number
  */
  defaultItemTemplate: null,
  /**
  * height of the ListView separator.
  * @type String,Number
  * @requires android
  */
  separatorHeight: null,
  /**
  * When set to false, the ListView will not draw the divider before the footer view.
  * @type Boolean
  * @requires android
  */
  footerDividersEnabled: null,
  /**
  * List view footer title.
  * @type String
  */
  footerTitle: null,
  /**
  * List view footer as a view that will be rendered instead of a label.
  * @type Titanium.UI.View
  * @requires android, iphone, ipad
  */
  footerView: null,
  /**
  * When set to false, the ListView will not draw the divider after the header view.
  * @type Boolean
  * @requires android
  */
  headerDividersEnabled: null,
  /**
  * List view header title.
  * @type String
  */
  headerTitle: null,
  /**
  * List view header as a view that will be rendered instead of a label.
  * @type Titanium.UI.View
  * @requires android, iphone, ipad
  */
  headerView: null,
  /**
  * View positioned above the first row that is only revealed when the user drags the list view contents down.
  * @type Titanium.UI.View
  * @requires iphone, ipad
  */
  pullView: null,
  /**
  * View positioned above the first row that is only revealed when the user drags the list view contents down.
  * @type Titanium.UI.RefreshControl
  * @requires iphone, ipad
  */
  refreshControl: null,
  /**
  * Search field to use for the list view.
  * @type Titanium.UI.SearchBar,Titanium.UI.Android.SearchView
  * @requires android, iphone, ipad
  */
  searchView: null,
  /**
  * The string to use as the search parameter.
  * @type String
  * @requires android, iphone, ipad
  */
  searchText: null,
  /**
  * Determines if the search performed is case insensitive.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  caseInsensitiveSearch: null,
  /**
  * Determines if the section information is displayed in the search results when using the `searchText` property.
  * @type Boolean
  * @requires iphone, ipad
  */
  keepSectionsInSearch: null,
  /**
  * Array of objects (with `title` and `index` properties) to control the list view index.
  * @type Array<ListViewIndexEntry>
  * @requires iphone, ipad
  */
  sectionIndexTitles: null,
  /**
  * Style of the scrollbar.
  * @type Number
  * @requires iphone, ipad
  */
  scrollIndicatorStyle: null,
  /**
  * Controls the scroll-to-top gesture.
  * @type Boolean
  * @requires iphone, ipad
  */
  willScrollOnStatusTap: null,
  /**
  * Number of sections in this list view.
  * @type Number
  */
  sectionCount: null,
  /**
  * Determines whether this list view displays a vertical scroll indicator.
  * @type Boolean
  */
  showVerticalScrollIndicator: null,
  /**
  * Separator line color between rows, as a color name or hex triplet.
  * @type String
  * @requires android, iphone, ipad
  */
  separatorColor: null,
  /**
  * The insets for list view separators (applies to all cells). This property is applicable on iOS 7 and greater.
  * @type Dictionary
  * @requires iphone, ipad
  */
  separatorInsets: null,
  /**
  * Separator style constant.
  * @type Number
  * @requires iphone, ipad
  */
  separatorStyle: null,
  /**
  * Style of the list view.
  * @type Number
  * @requires iphone, ipad
  */
  style: null,
};

/**
* Scrolls to a specific item.
* @param {Number} sectionIndex Section index.
* @param {Number} itemIndex Item index.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS and Android only.)
*/
Titanium.UI.ListView.scrollToItem = function(sectionIndex, itemIndex, animation) {};

/**
* Deselects a specific item.
* @since 3.2.0
* @param {Number} sectionIndex Section index.
* @param {Number} itemIndex Item index.
*/
Titanium.UI.ListView.deselectItem = function(sectionIndex, itemIndex) {};

/**
* Appends a single section or an array of sections to the end of the list.
* @param {Titanium.UI.ListSection|Array<Titanium.UI.ListSection>} section Section or sections to add to the list.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListView.appendSection = function(section, animation) {};

/**
* Deletes an existing section.
* @param {Number} sectionIndex Index of the section to delete.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListView.deleteSectionAt = function(sectionIndex, animation) {};

/**
* Inserts a section or an array of sections at a specific index.
* @param {Number} sectionIndex Index of the section to insert before.
* @param {Titanium.UI.ListSection|Array<Titanium.UI.ListSection>} section Section or sections to insert.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListView.insertSectionAt = function(sectionIndex, section, animation) {};

/**
* Replaces an existing section.
* @param {Number} sectionIndex Index of the section to update.
* @param {Titanium.UI.ListSection} section section data to update.
* @param {ListViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.ListView.replaceSectionAt = function(sectionIndex, section, animation) {};

/**
* Selects an item in the list using the specified item and section indices.
* @param {Number} sectionIndex Index of the section the item is in.
* @param {Number} itemIndex Index of the item to select.
*/
Titanium.UI.ListView.selectItem = function(sectionIndex, itemIndex) {};

/**
* Sets this list view's content insets.
* @since 3.2.0
* @param {ListViewEdgeInsets} edgeInsets Dictionary to describe the insets.
* @param {ListViewContentInsetOption} animated Determines whether, and how, the content inset change should be animated.
*/
Titanium.UI.ListView.setContentInsets = function(edgeInsets, animated) {};

/**
* Sets the value of the content offset of the list view without animation by default.
* @since 3.4.0
* @param {Dictionary} contentOffset Dictionary with the properties `x`, `y`. Pass in `animated` `true` as a second dictionary parameter.The `x` and `y` coordinates reposition the top-left point of the scrollable region of the list view.The `animated` property is optional and set to `false` by default. 
*/
Titanium.UI.ListView.setContentOffset = function(contentOffset) {};

/**
* Sets a reference item in the list view.
* @since 3.2.0
* @param {ListViewMarkerProps} markerProps Dictionary to describe the reference item.
*/
Titanium.UI.ListView.setMarker = function(markerProps) {};

/**
* Adds a reference item in the list view.
* @since 4.1.0
* @param {ListViewMarkerProps} markerProps Dictionary to describe the reference item.
*/
Titanium.UI.ListView.addMarker = function(markerProps) {};
/**
* Fired when the index bar is clicked by the user.
* @event Titanium.UI.ListView#indexclick
* @type {Object}
* @type String title The title of the index clicked.
* @type Number index The index number clicked.
*/
/**
* Fired when a list row is clicked by the user.
* @event Titanium.UI.ListView#itemclick
* @type {Object}
* @type Titanium.UI.ListSection section List section if the item is contained in a list section.
* @type Number sectionIndex Section index.
* @type Number itemIndex Item index.
* @type String itemId The item ID bound to the list item that generated the event.
* @type String bindId The bind ID of the control that generated this event, if one exists.
* @type Boolean accessoryClicked Returns `true` if the detail button is clicked else returns `false`.Only returns `true` if the `accessoryType` property is set to<Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL>.  All other accessories return `false` ifclicked.
* @requires iphone, ipad
*/
/**
* Fired when a list row is deleted by the user.
* @event Titanium.UI.ListView#delete
* @type {Object}
* @type Titanium.UI.ListSection section List section from which the item is deleted.
* @type Number sectionIndex Section index.
* @type Number itemIndex Item index.
* @type String itemId The item ID bound to the list item that generated the event.
* @type Boolean bubbles false. This event does not bubble.
*/
/**
* Fired when the list view displays the reference item.
* @event Titanium.UI.ListView#marker
* @type {Object}
* @type Boolean bubbles false. This event does not bubble.
* @type Number sectionIndex section index of the reference item.
* @type Number itemIndex section item index of the reference item.
*/
/**
* Fired when a list row is moved to a different location by the user.
* @event Titanium.UI.ListView#move
* @type {Object}
* @type Titanium.UI.ListSection section List section from which the item is moved.
* @type Number sectionIndex Section index.
* @type Number itemIndex Item index.
* @type Titanium.UI.ListSection targetSection List section to which the item is moved. Might be the same as `section` property.
* @type Number targetSectionIndex Section index.
* @type Number targetItemIndex Position within the `targetSection`.
* @type String itemId The item ID bound to the list item that generated the event.
* @type Boolean bubbles false. This event does not bubble.
*/
/**
* Fired when the search using either [searchView](Titanium.UI.ListView.searchView) or [searchText](Titanium.UI.ListView.searchText) has no results.
* @event Titanium.UI.ListView#noresults
* @type {Object}
* @type Boolean bubbles false. This event does not bubble.
*/
/**
* Fired when the user drags the list view past the top edge of the [pullView](Titanium.UI.ListView.pullView).
* @event Titanium.UI.ListView#pull
* @type {Object}
* @type Boolean active Determines if the `pullView` is completely visible (true) or partially hidden (false).
* @type Boolean bubbles false. This event does not bubble.
*/
/**
* Fired when the user stops dragging the list view and the [pullView](Titanium.UI.ListView.pullView) is completely visible.
* @event Titanium.UI.ListView#pullend
* @type {Object}
* @type Boolean bubbles false. This event does not bubble.
*/
/**
* Fired when the user interacts with one of the custom row actions defined by <Titanium.UI.ListItem.editActions>.
* @event Titanium.UI.ListView#rowAction
* @type {Object}
* @type String action The [title](RowActionType.title) as defined in the row action object.
* @type Titanium.UI.ListSection section List section from which the event was generated.
* @type Number sectionIndex Section index.
* @type Number itemIndex Item index.
* @type String itemId The item ID bound to the list item that generated the event.
* @type Boolean bubbles false. This event does not bubble.
*/
/**
* Fires when the list view starts scrolling by user interaction. Calling the `scrollTo` methods will not fire this event
* @event Titanium.UI.ListView#scrollstart
* @type {Object}
* @type Number visibleItemCount The number of visible items in the list view when the event fires.
* @type Object firstVisibleItem The first visible item in the list view when the event fires; this item might not be fully visible.
* @type Titanium.UI.ListSection firstVisibleSection The first visible section in the list view when the event fires.
* @type Number firstVisibleItemIndex The index of the first visible item in the list view when the event fires; this item might not be fully visible.
* @type Number firstVisibleSectionIndex The index of the first visible section in the list view when the event fires.
* @type Boolean bubbles false. This event does not bubble.
*/
/**
* Fires when the list view ends scrolling. Calling the `scrollTo` methods will not fire this event
* @event Titanium.UI.ListView#scrollend
* @type {Object}
* @type Number visibleItemCount The number of visible items in the list view when the event fires.
* @type Object firstVisibleItem The first visible item in the list view when the event fires; this item might not be fully visible.
* @type Titanium.UI.ListSection firstVisibleSection The first visible section in the list view when the event fires.
* @type Number firstVisibleItemIndex The index of the first visible item in the list view when the event fires; this item might not be fully visible.
* @type Number firstVisibleSectionIndex The index of the first visible section in the list view when the event fires.
* @type Boolean bubbles false. This event does not bubble.
*/
/**
* @since 3.1.0
* @requires iphone, ipad, android
*/
ListViewAnimationProperties = {
  /**
  * Whether this list change should be animated. Ignored if any `animationStyle` value is specified.
  * @type Boolean
  */
  animated: null,
  /**
  * Type of animation to use for cell insertions and deletions.
  * @type Number
  */
  animationStyle: null,
  /**
  * Specifies what position to scroll the selected cell to.
  * @type Number
  */
  position: null,
};


/**
* @since 3.2.0
* @requires iphone, ipad
*/
ListViewIndexEntry = {
  /**
  * Title to display in the index bar.
  * @type String
  */
  title: null,
  /**
  * Section index associated with this title.
  * @type Number
  */
  index: null,
};


/**
* @since 3.2.0
* @requires iphone, ipad
*/
ListViewContentInsetOption = {
  /**
  * Determines whether the list view's content inset change is animated.
  * @type Boolean
  */
  animated: null,
  /**
  * The duration in `milliseconds` for animation while the content inset is  being changed.
  * @type Number
  */
  duration: null,
};


/**
* @since 3.2.0
* @requires iphone, ipad, android
*/
ListViewMarkerProps = {
  /**
  * The sectionIndex of the reference item.
  * @type Number
  */
  sectionIndex: null,
  /**
  * The itemIndex of the reference item.
  * @type Number
  */
  itemIndex: null,
};


/**
* @since 3.2.0
* @requires iphone, ipad
*/
ListViewEdgeInsets = {
  /**
  * Value specifying the top insets for the enclosing scroll view of the list view.
  * @type Number
  */
  top: null,
  /**
  * Value specifying the left insets for the enclosing scroll view of the list view.
  * @type Number
  */
  left: null,
  /**
  * Value specifying the right insets for the enclosing scroll view of the list view.
  * @type Number
  */
  right: null,
  /**
  * Value specifying the bottom insets for the enclosing scroll view of the list view.
  * @type Number
  */
  bottom: null,
};


/**
* @extends Titanium.UI.View
* @requires iphone, ipad
*/
Titanium.UI.MaskedImage = {
  /**
  * Image drawn as the background image.
  * @type String
  */
  mask: null,
  /**
  * Image drawn as the Foreground image.
  * @type String
  */
  image: null,
  /**
  * Blend mode to use to combine layers.
  * @type Number
  */
  mode: null,
  /**
  * Color to combine with the image, as a color name or hex triplet.
  * @type String
  */
  tint: null,
};


/**
* @extends Titanium.Module
* @since 1.8
* @requires mobileweb
*/
Titanium.UI.MobileWeb = {
};


/**
* @extends Titanium.UI.View
* @since 2.0.0
* @requires mobileweb
*/
Titanium.UI.MobileWeb.NavigationGroup = {
  /**
  * Root window to add to this navigation group.
  * @type Titanium.UI.Window
  */
  window: null,
  /**
  * Specifies whether the navigation should be at the top of the screen or the bottom of the screen.
  * @type Boolean
  */
  navBarAtTop: null,
};

/**
* Closes a window and removes it from the navigation group.
* @param {Titanium.UI.Window} window Window to close.
* @param {Dictionary} options Options supporting a single `animated` boolean property to determine whether the window will be animated (default) while being closed.
*/
Titanium.UI.MobileWeb.NavigationGroup.close = function(window, options) {};

/**
* Opens a window within the navigation group.
* @param {Titanium.UI.Window} window Window to open.
* @param {Dictionary} options Options supporting a single `animated` boolean property to determine whether the window will be animated (default) while being closed.
*/
Titanium.UI.MobileWeb.NavigationGroup.open = function(window, options) {};

/**
* @extends Titanium.Proxy
* @since 1.8.1
* @requires mobileweb
*/
Titanium.UI.MobileWeb.TableViewSeparatorStyle = {
  /**
  * The separator cell has no distinct style.
  * @type Number
  */
  NONE: null,
  /**
  * The separator cell has a single line running across its width (default.)
  * @type Number
  */
  SINGLE_LINE: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @requires android
*/
Titanium.UI.Notification = {
  /**
  * Notification text to display.
  * @type String
  */
  message: null,
  /**
  * Determines how long the notification stays on screen.
  * @type Number
  */
  duration: null,
  /**
  * X offset from the default position, in pixels.
  * @type Number
  */
  xOffset: null,
  /**
  * Y offset from the default position, in pixels.
  * @type Number
  */
  yOffset: null,
  /**
  * Horizontal placement of the notification, *as a fraction of the screen width*.
  * @type Number
  */
  horizontalMargin: null,
  /**
  * Vertical placement of the notifcation, *as a fraction of the screen height*.
  * @type Number
  */
  verticalMargin: null,
};

/**
* Show the notification.
*/
Titanium.UI.Notification.show = function() {};

/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.OptionDialog#click
*/
Titanium.UI.OptionDialog = {
  /**
  * View to load inside the message area, to create a custom layout.
  * @type Titanium.UI.View
  * @requires android
  */
  androidView: null,
  /**
  * List of button names.
  * @type Array<String>
  * @requires android
  */
  buttonNames: null,
  /**
  * Index to define the cancel option.
  * @type Number
  */
  cancel: null,
  /**
  * Index to define the destructive option, indicated by a visual cue when rendered.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  destructive: null,
  /**
  * List of option names to display in the dialog.
  * @type Array<String>
  */
  options: null,
  /**
  * Boolean value indicating if the option dialog should have an opaque background.
  * @type Boolean
  * @requires iphone, ipad
  */
  opaquebackground: null,
  /**
  * Boolean value indicating if the option dialog should only be cancelled by user gesture or by hide method.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  persistent: null,
  /**
  * Defines the default selected option.
  * @type Number
  * @requires android
  */
  selectedIndex: null,
  /**
  * Title of the dialog.
  * @type String
  */
  title: null,
  /**
  * Key identifying a string in the locale file to use for the title text.
  * @type String
  */
  titleid: null,
};

/**
* Shows this dialog.
* @param {showParams} params Argument containing parameters for this method. Only used on iPad.
*/
Titanium.UI.OptionDialog.show = function(params) {};

/**
* Hides this dialog.
* @param {hideParams} params Argument containing parameters for this method. Only used on iOS.
*/
Titanium.UI.OptionDialog.hide = function(params) {};
/**
* Fired when an option of this dialog is clicked or, under certain circumstances, when this dialog is dismissed.
* @event Titanium.UI.OptionDialog#click
* @type {Object}
* @type Number index Index of the option that was pressed. See description for result of the dialog being dismissed in some other way.
* @type Boolean button Indicates whether the index returned by the `index` property relates to a button rather than an option item.
* @requires android
* @type Boolean,Number cancel Boolean type on Android; Number on iOS and Mobile Web. On Android, indicates whether the cancel button was clicked, in which case returns `true`. On iOS and Mobile Web, the value of the [cancel](Titanium.UI.OptionDialog.cancel) property is returned, if defined, or `-1` otherwise. 
* @type Number destructive Index of the destructive option if defined or `-1` otherwise.
* @requires iphone, ipad, mobileweb
*/
/**
* @since 2.0.0
* @requires ipad
*/
hideParams = {
  /**
  * Determines whether to animate the dialog as it is dismissed.
  * @type Boolean
  */
  animated: null,
};


/**
* @requires ipad
*/
showParams = {
  /**
  * Determines whether to animate the dialog as it is shown.
  * @type Boolean
  */
  animated: null,
  /**
  * View to which to attach the dialog.
  * @type Titanium.UI.View
  */
  view: null,
  /**
  * Positions the arrow of the option dialog relative to the attached view's dimensions.
  * @type Dimension
  */
  rect: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @requires android, iphone, ipad, mobileweb
* @fires Titanium.UI.Picker#change
* @fires Titanium.UI.Picker#click
*/
Titanium.UI.Picker = {
  /**
  * @type undefined
  * @requires android
  */
  backgroundColor: null,
  /**
  * Columns used for this picker, as an array of <Titanium.UI.PickerColumn> objects.
  * @type Array<Titanium.UI.PickerColumn>
  */
  columns: null,
  /**
  * Duration in milliseconds used for a Countdown Timer picker.
  * @type Number
  * @requires iphone, ipad
  */
  countDownDuration: null,
  /**
  * Determines whether the Time pickers display in 24-hour or 12-hour clock format.
  * @type Boolean
  * @requires android
  */
  format24: null,
  /**
  * Locale used when displaying Date and Time picker values.
  * @type String
  * @requires android
  */
  locale: null,
  /**
  * Maximum date displayed when a Date picker is in use.
  * @type Date
  */
  maxDate: null,
  /**
  * Minimum date displayed when a Date picker is in use.
  * @type Date
  */
  minDate: null,
  /**
  * Interval in minutes displayed when one of the Time types of pickers is in use.
  * @type Number
  * @requires iphone, ipad
  */
  minuteInterval: null,
  /**
  * Determines whether the visual selection indicator is shown.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  selectionIndicator: null,
  /**
  * Determines the type of picker displayed
  * @type Number
  */
  type: null,
  /**
  * Determines whether the non-native Android control, with a spinning wheel that looks and behaves like the iOS picker, is invoked rather than the default native "dropdown" style.
  * @type Boolean
  * @requires android
  */
  useSpinner: null,
  /**
  * Date and time value for Date and Time pickers.
  * @type Date
  */
  value: null,
  /**
  * Number of visible rows to display. This is only applicable to a plain picker and when the `useSpinner` is `true`.
  * @type Number
  * @requires android
  */
  visibleItems: null,
  /**
  * Determines whether the calenderView is visible.
  * @type Boolean
  * @requires android
  */
  calendarViewShown: null,
  /**
  * Font to use for text.
  * @type Font
  * @requires android
  */
  font: null,
};

/**
* Adds rows or columns to the picker.
* @param {Array<Titanium.UI.PickerRow>|Titanium.UI.PickerRow|Array<Titanium.UI.PickerColumn>|Titanium.UI.PickerColumn} data A row, set of rows, a column of rows or a set of columns of rows. When this method is used to add a row or set of rows, a single-column picker is created.
*/
Titanium.UI.Picker.add = function(data) {};

/**
* Gets the selected row for a column, or `null` if none exists.
* @param {Number} index A column index.
*/
Titanium.UI.Picker.getSelectedRow = function(index) {};

/**
* Repopulates values for a column.
* @param {Titanium.UI.PickerColumn} column Column to repopulate.
*/
Titanium.UI.Picker.reloadColumn = function(column) {};

/**
* Selects a column's row.
* @param {Number} column A column index.
* @param {Number} row A row index.
* @param {Boolean} animated Determines whether the selection should be animated. (iPhone, iPad-only)
*/
Titanium.UI.Picker.setSelectedRow = function(column, row, animated) {};

/**
* Sets the date and time value property for Date pickers.
* @param {Object} date A Javascript `Date` object.
* @param {Boolean} suppressEvent Determines whether a `change` event is fired.
*/
Titanium.UI.Picker.setValue = function(date, suppressEvent) {};

/**
* Shows Date picker as a modal dialog.
* @param {Object} dictObj Dictionary object with a subset of `Titanium.UI.Picker` properties and a callback defined. Acceptable object properties are `callback`, `okButtonTitle`, `title` and `value`.
*/
Titanium.UI.Picker.showDatePickerDialog = function(dictObj) {};

/**
* Shows Time picker as a modal dialog.
* @param {Object} dictObj Dictionary object with a subset of `Titanium.UI.Picker` properties and a callback defined. Acceptable object properties are `callback`, `format24`, `okButtonTitle`, `title` and `value`.
*/
Titanium.UI.Picker.showTimePickerDialog = function(dictObj) {};
/**
* Fired when the value of any column's row is changed.
* @event Titanium.UI.Picker#change
* @type {Object}
* @type Number columnIndex Selected column index. On iOS and Mobile Web, only applicable to <Titanium.UI.PICKER_TYPE_PLAIN>picker types.
* @type Number rowIndex Selected row index. On iOS and Mobile Web, only applicable to <Titanium.UI.PICKER_TYPE_PLAIN>picker types.
* @type Titanium.UI.PickerColumn column The column object. On iOS and Mobile Web, only applicable to <Titanium.UI.PICKER_TYPE_PLAIN>picker types.
* @type Number countDownDuration The selected duration in milliseconds. Applicable to <Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER> picker types.
* @type String value The selected value. Applicable to date/time pickers only. This property is read-only on Android.
* @type Titanium.UI.PickerRow row The row object. On iOS and Mobile Web, only applicable to <Titanium.UI.PICKER_TYPE_PLAIN> picker types.
* @type Array<String> selectedValue Array of selected values, one element per column in the picker. Applicable to <Titanium.UI.PICKER_TYPE_PLAIN> picker types.
*/
/**
* Fired when the device detects a click against the view.
* @event Titanium.UI.Picker#click
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* @extends Titanium.UI.View
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.UI.PickerColumn = {
  /**
  * Number of rows in this column.
  * @type Number
  */
  rowCount: null,
  /**
  * Rows of this column.
  * @type Array<Titanium.UI.PickerRow>
  */
  rows: null,
  /**
  * The selected row in this column.
  * @type Titanium.UI.PickerRow
  * @requires mobileweb
  */
  selectedRow: null,
  /**
  * Font to use for text.
  * @type Font
  * @requires android
  */
  font: null,
};

/**
* Adds a row to this column.
* @param {Titanium.UI.PickerRow} row A row to add.
*/
Titanium.UI.PickerColumn.addRow = function(row) {};

/**
* Removes a row from this column.
* @param {Titanium.UI.PickerRow} row A row to remove.
*/
Titanium.UI.PickerColumn.removeRow = function(row) {};

/**
* @extends Titanium.UI.View
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.UI.PickerRow = {
  /**
  * Color of the item text, as a color name or hex triplet.
  * @type String
  * @requires mobileweb
  */
  color: null,
  /**
  * Font to use for the item text.
  * @type Font
  * @requires mobileweb, iphone, ipad
  */
  font: null,
  /**
  * Item text.
  * @type String
  */
  title: null,
};

/**
* Adds a child view to this picker row, to provide a custom row.
* @param {Titanium.UI.View} view A view object.
*/
Titanium.UI.PickerRow.add = function(view) {};

/**
* @extends Titanium.UI.View
* @since 0.8
* @requires android, iphone, ipad, mobileweb
*/
Titanium.UI.ProgressBar = {
  /**
  * Color of the progress bar text, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Font for the progress bar text.
  * @type Font
  */
  font: null,
  /**
  * Maximum value of the progress bar.
  * @type Number
  */
  max: null,
  /**
  * Progress bar text.
  * @type String
  */
  message: null,
  /**
  * Minimum value of the progress bar.
  * @type Number
  */
  min: null,
  /**
  * Style of the progress bar.
  * @type Number
  * @requires iphone, ipad
  */
  style: null,
  /**
  * Current value of the progress bar.
  * @type Number
  */
  value: null,
};

/**
*/
Titanium.UI.ProgressBar.add = function() {};

/**
*/
Titanium.UI.ProgressBar.remove = function() {};

/**
* @extends Titanium.Proxy
* @since 3.2.0
* @requires iphone, ipad
* @fires Titanium.UI.RefreshControl#refreshstart
*/
Titanium.UI.RefreshControl = {
  /**
  * The title of the control.
  * @type Titanium.UI.AttributedString
  */
  title: null,
  /**
  * The tint color for the refresh control, as a color name or hex triplet.
  * @type String
  */
  tintColor: null,
};

/**
* Tells the control that a refresh operation was started programmatically.
*/
Titanium.UI.RefreshControl.beginRefreshing = function() {};

/**
* Tells the control that a refresh operation has ended.
*/
Titanium.UI.RefreshControl.endRefreshing = function() {};
/**
* Fired in response to a user initiated action to refresh the contents of the table view or list view.
* @event Titanium.UI.RefreshControl#refreshstart
* @type {Object}
* @type Boolean bubbles This is false. This event does not bubble
*/
/**
* @extends Titanium.UI.View
* @since 0.9
* @fires Titanium.UI.ScrollView#scale
* @fires Titanium.UI.ScrollView#scroll
* @fires Titanium.UI.ScrollView#scrollEnd
* @fires Titanium.UI.ScrollView#dragStart
* @fires Titanium.UI.ScrollView#dragEnd
* @fires Titanium.UI.ScrollView#scrollend
* @fires Titanium.UI.ScrollView#dragstart
* @fires Titanium.UI.ScrollView#dragend
*/
Titanium.UI.ScrollView = {
  /**
  * Determines whether this scroll view can cancel subview touches in order to scroll instead.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  canCancelEvents: null,
  /**
  * Height of the scrollable region.
  * @type Number,String
  */
  contentHeight: null,
  /**
  * X and Y coordinates to which to reposition the top-left point of the scrollable region.
  * @type Dictionary
  */
  contentOffset: null,
  /**
  * Width of the scrollable region.
  * @type Number,String
  */
  contentWidth: null,
  /**
  * The deceleration rate of the ScrollView.
  * @type Number
  * @requires iphone, ipad
  */
  decelerationRate: null,
  /**
  * Determines whether scroll bounce of the scrollable region is enabled.
  * @type Boolean
  * @requires iphone, ipad, mobileweb
  */
  disableBounce: null,
  /**
  * Determines whether horizontal scroll bounce of the scrollable region is enabled.
  * @type Boolean
  * @requires iphone, ipad, mobileweb
  */
  horizontalBounce: null,
  /**
  * Maximum scaling factor of the scrollable region and its content.
  * @type Number
  * @requires iphone, ipad
  */
  maxZoomScale: null,
  /**
  * Minimum scaling factor of the scrollable region and its content.
  * @type Number
  * @requires iphone, ipad
  */
  minZoomScale: null,
  /**
  * Determines the behavior when the user overscolls the view.
  * @type Number
  * @requires android
  */
  overScrollMode: null,
  /**
  * Controls whether the scroll-to-top gesture is effective.
  * @type Boolean
  * @requires iphone, ipad
  */
  scrollsToTop: null,
  /**
  * Style of the scrollbar.
  * @type Number
  * @requires iphone, ipad
  */
  scrollIndicatorStyle: null,
  /**
  * Limits the direction of the scrollable region, overriding the deduced setting. Set to `horizontal` or `vertical`.
  * @type String
  * @requires android
  */
  scrollType: null,
  /**
  * Determines whether scrolling is enabled for the view.
  * @type Boolean
  * @requires android, iphone, ipad, mobileweb
  */
  scrollingEnabled: null,
  /**
  * Determines whether the horizontal scroll indicator is visible.
  * @type Boolean
  */
  showHorizontalScrollIndicator: null,
  /**
  * Determines whether the vertical scroll indicator is visible.
  * @type Boolean
  */
  showVerticalScrollIndicator: null,
  /**
  * Determines whether vertical scroll bounce of the scrollable region is enabled.
  * @type Boolean
  * @requires iphone, ipad, mobileweb
  */
  verticalBounce: null,
  /**
  * Scaling factor of the scroll view's content.
  * @type Number
  * @requires iphone, ipad
  */
  zoomScale: null,
};

/**
* Moves the specified coordinate of the scrollable region into the viewable area.
* @param {Number} x X coordinate from the scrollable region's coordinate system.
* @param {Number} y Y coordinate from the scrollable region's coordinate system.
*/
Titanium.UI.ScrollView.scrollTo = function(x, y) {};

/**
* Sets the value of the [contentOffset](Titanium.UI.ScrollView.contentOffset) property.
* @param {Dictionary} contentOffset X and Y coordinates to which to reposition the top-left point of the scrollable region.
* @param {contentOffsetOption} animated Determines whether the scrollable region reposition should be animated
*/
Titanium.UI.ScrollView.setContentOffset = function(contentOffset, animated) {};

/**
* Sets the value of the [zoomScale](Titanium.UI.ScrollView.zoomScale) property.
* @param {Number} zoomScale Scaling factor of the scroll view's content.
* @param {zoomScaleOption} animated Determines whether the scrollable region reposition should be animated
*/
Titanium.UI.ScrollView.setZoomScale = function(zoomScale, animated) {};

/**
* Moves the end of the scrollable region into the viewable area.
* @since [object Object]
*/
Titanium.UI.ScrollView.scrollToBottom = function() {};
/**
* Fired when the zoom scale factor changes.
* @event Titanium.UI.ScrollView#scale
* @type {Object}
* @type Number scale New scaling factor as a float.
*/
/**
* Fired when the scrollable region is scrolled.
* @event Titanium.UI.ScrollView#scroll
* @type {Object}
* @type Boolean decelerating Indicates whether the scroll is decelerating.
* @requires iphone, ipad, mobileweb
* @type Boolean dragging Indicates whether the event was fired during a dragging gesture, where the touch remained in contact with the display to physically drag the view, as opposed to it being the result of scrolling momentum.
* @requires iphone, ipad, mobileweb
* @type Boolean zooming Indicates whether the event was fired during a zooming operation. This is only availablefrom Release 3.2.3 of the Titanium Mobile SDK.
* @requires iphone, ipad
* @type Number curZoomScale The current scaling factor of the scroll view content. This might not be equal to the `zoomScale` property or be within the range specified by `minZoomScale` and `maxZoomScale`.This is only available from Release 3.2.3 of the Titanium Mobile SDK.
* @requires iphone, ipad
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the view has stopped moving completely.
* @event Titanium.UI.ScrollView#scrollEnd
* @type {Object}
*/
/**
* Fired when the scrollable region starts being dragged.
* @event Titanium.UI.ScrollView#dragStart
* @type {Object}
*/
/**
* Fired when the scrollable region stops being dragged.
* @event Titanium.UI.ScrollView#dragEnd
* @type {Object}
* @type Boolean decelerate Indicates whether scrolling will continue but decelerate, now that the drag gesture has been released by the touch. If `false`, scrolling will stop immediately.
*/
/**
* Fired when the view has stopped moving completely.
* @event Titanium.UI.ScrollView#scrollend
* @type {Object}
*/
/**
* Fired when the scrollable region starts being dragged.
* @event Titanium.UI.ScrollView#dragstart
* @type {Object}
*/
/**
* Fired when the scrollable region stops being dragged.
* @event Titanium.UI.ScrollView#dragend
* @type {Object}
* @type Boolean decelerate Indicates whether scrolling will continue but decelerate, now that the drag gesture has been released by the touch. If `false`, scrolling will stop immediately.
*/
/**
* @since 1.8.1
* @requires iphone, ipad
*/
contentOffsetOption = {
  /**
  * Determines whether the scroll view's content area change is animated.
  * @type Boolean
  */
  animated: null,
};


/**
* @since 3.0.0
* @requires iphone, ipad
*/
zoomScaleOption = {
  /**
  * Determines whether the scroll view's zooming is animated.
  * @type Boolean
  */
  animated: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @requires android, iphone, ipad, mobileweb
* @fires Titanium.UI.ScrollableView#dblclick
* @fires Titanium.UI.ScrollableView#doubletap
* @fires Titanium.UI.ScrollableView#longpress
* @fires Titanium.UI.ScrollableView#singletap
* @fires Titanium.UI.ScrollableView#touchcancel
* @fires Titanium.UI.ScrollableView#touchstart
* @fires Titanium.UI.ScrollableView#twofingertap
* @fires Titanium.UI.ScrollableView#scroll
* @fires Titanium.UI.ScrollableView#scrollEnd
* @fires Titanium.UI.ScrollableView#dragStart
* @fires Titanium.UI.ScrollableView#dragEnd
* @fires Titanium.UI.ScrollableView#scrollend
* @fires Titanium.UI.ScrollableView#dragstart
* @fires Titanium.UI.ScrollableView#dragend
*/
Titanium.UI.ScrollableView = {
  /**
  * Number of pages to cache (pre-render).
  * @type Number
  * @requires android, iphone, ipad
  */
  cacheSize: null,
  /**
  * Index of the active page.
  * @type Number
  */
  currentPage: null,
  /**
  * Determines whether page bouncing effect is disabled.
  * @type Boolean
  * @requires iphone, ipad
  */
  disableBounce: null,
  /**
  * Determines the behavior when the user overscolls the view.
  * @type Number
  * @requires android
  */
  overScrollMode: null,
  /**
  * Color of the paging control, as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad
  */
  pagingControlColor: null,
  /**
  * Height of the paging control, in pixels.
  * @type Number
  * @requires iphone, ipad
  */
  pagingControlHeight: null,
  /**
  * Determines whether the paging control is visible.
  * @type Boolean
  */
  showPagingControl: null,
  /**
  * Number of milliseconds to wait before hiding the paging control.
  * @type Number
  * @requires android, mobileweb
  */
  pagingControlTimeout: null,
  /**
  * Alpha value of the paging control.
  * @type Number
  * @requires iphone, ipad
  */
  pagingControlAlpha: null,
  /**
  * Determines whether the paging control is displayed at the top or bottom of the view.
  * @type Boolean
  * @requires iphone, ipad
  */
  pagingControlOnTop: null,
  /**
  * Determines whether the paging control is added as an overlay to the view.
  * @type Boolean
  * @requires iphone, ipad
  */
  overlayEnabled: null,
  /**
  * Determines whether scrolling is enabled for the view.
  * @type Boolean
  * @requires iphone, ipad, android, mobileweb
  */
  scrollingEnabled: null,
  /**
  * Sets the pages within this Scrollable View.
  * @type Array<Titanium.UI.View>
  */
  views: null,
  /**
  * Determines whether the previous and next pages are clipped, so that they are not visible adjacent to the current page.
  * @type Boolean
  * @requires iphone, ipad
  */
  clipViews: null,
  /**
  * Sets the region where this view responds to gestures.
  * @type Dimension
  * @requires iphone, ipad
  */
  hitRect: null,
};

/**
* Adds a new page to this Scrollable View.
* @param {Titanium.UI.View} view The page to add.
*/
Titanium.UI.ScrollableView.addView = function(view) {};

/**
* Sets the current page to the next consecutive page in <Titanium.UI.ScrollableView.views>.
* @since [object Object]
*/
Titanium.UI.ScrollableView.moveNext = function() {};

/**
* Sets the current page to the previous consecutive page in <Titanium.UI.ScrollableView.views>.
* @since [object Object]
*/
Titanium.UI.ScrollableView.movePrevious = function() {};

/**
* Removes an existing page from this Scrollable View.
* @param {Number|Titanium.UI.View} view A <Titanium.UI.View> object (all platforms) or integer index (iPhone, iPad only) of a page to remove.
*/
Titanium.UI.ScrollableView.removeView = function(view) {};

/**
* Scrolls to the specified page in <Titanium.UI.ScrollableView.views>.
* @param {Number|Titanium.UI.View} view An integer index or <Titanium.UI.View> object to set as the current page.
*/
Titanium.UI.ScrollableView.scrollToView = function(view) {};
/**
* Fired when the device detects a double click against the view.
* @event Titanium.UI.ScrollableView#dblclick
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a double tap against this page.
* @event Titanium.UI.ScrollableView#doubletap
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a long press against this view.
* @event Titanium.UI.ScrollableView#longpress
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a single tap against this view.
* @event Titanium.UI.ScrollableView#singletap
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when a touch gesture is interrupted by the device.
* @event Titanium.UI.ScrollableView#touchcancel
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired as soon as the device detects a touch gesture against this view.
* @event Titanium.UI.ScrollableView#touchstart
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a two-finger tap against the view.
* @event Titanium.UI.ScrollableView#twofingertap
* @type {Object}
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired repeatedly as the view is being scrolled.
* @event Titanium.UI.ScrollableView#scroll
* @type {Object}
* @type Number currentPage Index of the currently visible view of <Titanium.UI.ScrollableView.views>.
* @type Number currentPageAsFloat Current page index that the view is scrolled to as a float. Forexample, if the user is holding the `ScrollableView` in betweenthe first and second page, this will have a value of 0.5.
* @type Titanium.UI.View view The currently visible view.
*/
/**
* Fired when the view has stopped moving completely.
* @event Titanium.UI.ScrollableView#scrollEnd
* @type {Object}
* @type Number currentPage Index of the currently visible view of <Titanium.UI.ScrollableView.views>.
* @type Titanium.UI.View view The currently visible view.
*/
/**
* Fired when the scrollable region starts being dragged.
* @event Titanium.UI.ScrollableView#dragStart
* @type {Object}
*/
/**
* Fired when the scrolling drag gesture on the view has been completed.
* @event Titanium.UI.ScrollableView#dragEnd
* @type {Object}
* @type Number currentPage Index of the currently visible view of <Titanium.UI.ScrollableView.views>.
* @type Titanium.UI.View view The currently visible view.
*/
/**
* Fired when the view has stopped moving completely.
* @event Titanium.UI.ScrollableView#scrollend
* @type {Object}
* @type Number currentPage Index of the currently visible view of <Titanium.UI.ScrollableView.views>.
* @type Titanium.UI.View view The currently visible view.
*/
/**
* Fired when the scrollable region starts being dragged.
* @event Titanium.UI.ScrollableView#dragstart
* @type {Object}
*/
/**
* Fired when the scrolling drag gesture on the view has been completed.
* @event Titanium.UI.ScrollableView#dragend
* @type {Object}
* @type Number currentPage Index of the currently visible view of <Titanium.UI.ScrollableView.views>.
* @type Titanium.UI.View view The currently visible view.
*/
/**
* @extends Titanium.UI.View
* @since 0.8
* @requires android, iphone, ipad
* @fires Titanium.UI.SearchBar#blur
* @fires Titanium.UI.SearchBar#bookmark
* @fires Titanium.UI.SearchBar#cancel
* @fires Titanium.UI.SearchBar#change
* @fires Titanium.UI.SearchBar#focus
* @fires Titanium.UI.SearchBar#return
*/
Titanium.UI.SearchBar = {
  /**
  * Determines how text is capitalized during typing.
  * @type Number
  * @requires iphone, ipad
  */
  autocapitalization: null,
  /**
  * Determines whether the text in the search bar is autocorrected during typing.
  * @type Boolean
  * @requires iphone, ipad
  */
  autocorrect: null,
  /**
  * Bar color of the search bar view, as a color name or hex triplet.
  * @type String
  * @requires android, iphone, ipad
  */
  barColor: null,
  /**
  * Text to show when the search bar field is not focused.
  * @type String
  */
  hintText: null,
  /**
  * Key identifying a string from the locale file to use for the[hintText](Titanium.UI.SearchBar.hintText) property.
  * @type String
  */
  hinttextid: null,
  /**
  * Keyboard type constant to use when the field is focused.
  * @type Number
  * @requires iphone, ipad
  */
  keyboardType: null,
  /**
  * Single line of text displayed at the top of the search bar.
  * @type String
  * @requires android, iphone, ipad
  */
  prompt: null,
  /**
  * Key identifying a string from the locale file to use for the[prompt](Titanium.UI.SearchBar.prompt) property.
  * @type String
  * @requires iphone, ipad
  */
  promptid: null,
  /**
  * Determines whether the bookmark button is displayed.
  * @type Boolean
  * @requires iphone, ipad
  */
  showBookmark: null,
  /**
  * Determines whether the cancel button is displayed.
  * @type Boolean
  */
  showCancel: null,
  /**
  * Value of the search bar.
  * @type String
  */
  value: null,
};

/**
* Causes the search bar to lose focus.
*/
Titanium.UI.SearchBar.blur = function() {};

/**
* Causes the search bar to gain focus.
*/
Titanium.UI.SearchBar.focus = function() {};

/**
* Shows or hides the cancel button.
* @param {Boolean} showCancel New value for [showCancel](Titanium.UI.SearchBar.showCancel).
* @param {Dictionary} animated Dictionary of animation properties. Currently only asingle boolean property, `animated` is supported. Only used on iOS.
*/
Titanium.UI.SearchBar.setShowCancel = function(showCancel, animated) {};
/**
* Fired when the search bar loses focus.
* @event Titanium.UI.SearchBar#blur
* @type {Object}
* @type String value Value of the search bar.
*/
/**
* Fired when the bookmark button is pressed.
* @event Titanium.UI.SearchBar#bookmark
* @type {Object}
* @type String value Value of the search bar.
*/
/**
* Fired when the cancel button is pressed.
* @event Titanium.UI.SearchBar#cancel
* @type {Object}
* @type String value Value of the search bar.
*/
/**
* Fired when the value of the search bar changes.
* @event Titanium.UI.SearchBar#change
* @type {Object}
* @type String value Value of the search bar.
*/
/**
* Fired when the search bar gains focus.
* @event Titanium.UI.SearchBar#focus
* @type {Object}
* @type String value Value of the search bar.
*/
/**
* Fired when keyboard search button is pressed.
* @event Titanium.UI.SearchBar#return
* @type {Object}
* @type String value Value of the search bar.
*/
/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.Slider#change
* @fires Titanium.UI.Slider#click
* @fires Titanium.UI.Slider#start
* @fires Titanium.UI.Slider#stop
*/
Titanium.UI.Slider = {
  /**
  * Image URL of the slider left track when in the disabled state.
  * @type String
  * @requires iphone, ipad
  */
  disabledLeftTrackImage: null,
  /**
  * Image URL of the slider right track when in the disabled state.
  * @type String
  * @requires iphone, ipad
  */
  disabledRightTrackImage: null,
  /**
  * Image URL of the slider thumb when in the disabled state.
  * @type String
  * @requires iphone, ipad
  */
  disabledThumbImage: null,
  /**
  * Boolean to indicate the enabled state of the slider.
  * @type Boolean
  */
  enabled: null,
  /**
  * Image URL of the slider left track when in the highlighted state.
  * @type String
  * @requires iphone, ipad
  */
  highlightedLeftTrackImage: null,
  /**
  * Image URL of the slider right track when in the highlighted state.
  * @type String
  * @requires iphone, ipad
  */
  highlightedRightTrackImage: null,
  /**
  * Image URL of the slider thumb when in the highlighted state.
  * @type String
  * @requires iphone, ipad
  */
  highlightedThumbImage: null,
  /**
  * Image URL of the slider left track.
  * @type String
  * @requires android, iphone, ipad
  */
  leftTrackImage: null,
  /**
  * Size of the left end cap for the leftTrackImage, disabledLeftTrackImage, highlightedLeftTrackImage and selectedLeftTrackImage properties.
  * @type Number
  * @requires iphone, ipad
  */
  leftTrackLeftCap: null,
  /**
  * Size of the top end cap for the leftTrackImage, disabledLeftTrackImage, highlightedLeftTrackImage and selectedLeftTrackImage properties.
  * @type Number
  * @requires iphone, ipad
  */
  leftTrackTopCap: null,
  /**
  * Maximum value of the slider.
  * @type Number
  */
  max: null,
  /**
  * Upper limit on the slider value that can be selected.
  * @type Number
  * @requires android, mobileweb
  */
  maxRange: null,
  /**
  * Minimum value of the slider.
  * @type Number
  */
  min: null,
  /**
  * Lower limit on the slider value that can be selected.
  * @type Number
  * @requires android, mobileweb
  */
  minRange: null,
  /**
  * Image URL of the slider right track.
  * @type String
  * @requires android, iphone, ipad
  */
  rightTrackImage: null,
  /**
  * Size of the left end cap for the rightTrackImage, disabledRightTrackImage, highlightedRightTrackImage and selectedRightTrackImage properties.
  * @type Number
  * @requires iphone, ipad
  */
  rightTrackLeftCap: null,
  /**
  * Size of the top end cap for the rightTrackImage, disabledRightTrackImage, highlightedRightTrackImage and selectedRightTrackImage properties.
  * @type Number
  * @requires iphone, ipad
  */
  rightTrackTopCap: null,
  /**
  * Image URL of the slider left track when in the selected state.
  * @type String
  * @requires iphone, ipad
  */
  selectedLeftTrackImage: null,
  /**
  * Image URL of the slider right track when in the selected state.
  * @type String
  * @requires iphone, ipad
  */
  selectedRightTrackImage: null,
  /**
  * Image URL of the slider thumb when in the selected state.
  * @type String
  * @requires iphone, ipad
  */
  selectedThumbImage: null,
  /**
  * Image for the slider thumb.
  * @type String,Titanium.Blob
  * @requires android, iphone, ipad
  */
  thumbImage: null,
  /**
  * Current value of the slider.
  * @type String
  */
  value: null,
};

/**
*/
Titanium.UI.Slider.add = function() {};

/**
*/
Titanium.UI.Slider.remove = function() {};

/**
* Sets the [value](Titanium.UI.Slider.value) property.
* @param {Number} value New value for the [value](Titanium.UI.Slider.value) property.
* @param {Dictionary} options Specifies animation options. The only supported propertyfor this dictionary is the `animated` flag, which specifies whetherthe value change should be animated. `animated` is false by default. Only usedon iOS.
*/
Titanium.UI.Slider.setValue = function(value, options) {};
/**
* Fired when the value of the slider changes.
* @event Titanium.UI.Slider#change
* @type {Object}
* @type Number value New value of the slider.
* @type undefined thumbSize Dictionary with properties `width` and `height` of the size of the thumb. Available with custom thumb image.
* @requires android
* @type Dictionary thumbOffset Dictionary with properties `x` and `y` of the thumb's left-top corner inthe control. Available with custom thumb image.
* @requires android
*/
/**
* Fired when the device detects a click against the view.
* @event Titanium.UI.Slider#click
* @type {Object}
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the user starts tracking the slider.
* @event Titanium.UI.Slider#start
* @type {Object}
* @type Number value Current value of the slider.
* @type Boolean bubbles False. This event does not bubble.
*/
/**
* Fired when the user stops tracking the slider.
* @event Titanium.UI.Slider#stop
* @type {Object}
* @type Number value Current value of the slider.
* @type Boolean bubbles False. This event does not bubble.
*/
/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.Switch#change
*/
Titanium.UI.Switch = {
  /**
  * Color to use for switch text, as a color name or hex triplet.
  * @type String
  * @requires android, mobileweb
  */
  color: null,
  /**
  * Determines whether the switch is enabled.
  * @type Boolean
  */
  enabled: null,
  /**
  * Font to use for the switch text.
  * @type Font
  * @requires android, mobileweb
  */
  font: null,
  /**
  * Style of the switch.
  * @type Number
  * @requires android
  */
  style: null,
  /**
  * Horizontal text alignment of the switch title.
  * @type String,Number
  * @requires android, mobileweb
  */
  textAlign: null,
  /**
  * Text to display next to the switch, when the checkbox style is in use.
  * @type String
  * @requires android, mobileweb
  */
  title: null,
  /**
  * Text to display on the switch in its "off" state, when the toggle button style is in use.
  * @type String
  * @requires android, mobileweb
  */
  titleOff: null,
  /**
  * Text to display on the switch in its "on" state, when the toggle button style is in use.
  * @type String
  * @requires android, mobileweb
  */
  titleOn: null,
  /**
  * The color used to tint the outline of the switch when it is turned off.
  * @type String
  * @requires iphone, ipad
  */
  tintColor: null,
  /**
  * The color used to tint the appearance of the switch when it is turned on.
  * @type String
  * @requires iphone, ipad
  */
  onTintColor: null,
  /**
  * The color used to tint the appearance of the thumb.
  * @type String
  * @requires iphone, ipad
  */
  thumbTintColor: null,
  /**
  * Indicates whether the switch has been turned on or off by the user. May also be set programmatically.
  * @type Boolean
  */
  value: null,
  /**
  * Vertical alignment for the text field.
  * @type Number,String
  * @requires android, mobileweb
  */
  verticalAlign: null,
};

/**
*/
Titanium.UI.Switch.add = function() {};

/**
*/
Titanium.UI.Switch.remove = function() {};
/**
* Fired when the switch value changes.
* @event Titanium.UI.Switch#change
* @type {Object}
* @type Boolean value New value of the switch.
*/
/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.Tab#blur
* @fires Titanium.UI.Tab#click
* @fires Titanium.UI.Tab#dblclick
* @fires Titanium.UI.Tab#doubletap
* @fires Titanium.UI.Tab#focus
* @fires Titanium.UI.Tab#longpress
* @fires Titanium.UI.Tab#postlayout
* @fires Titanium.UI.Tab#selected
* @fires Titanium.UI.Tab#singletap
* @fires Titanium.UI.Tab#swipe
* @fires Titanium.UI.Tab#touchcancel
* @fires Titanium.UI.Tab#touchend
* @fires Titanium.UI.Tab#touchmove
* @fires Titanium.UI.Tab#touchstart
* @fires Titanium.UI.Tab#unselected
*/
Titanium.UI.Tab = {
  /**
  * `true` if this tab is active, `false` if it is not. 
  * @type Boolean
  * @requires iphone, ipad, mobileweb
  */
  active: null,
  /**
  * Icon URL for this tab when active.
  * @type String
  * @requires iphone, ipad
  */
  activeIcon: null,
  /**
  * Sets the color of the tab when it is inactive.
  * @type undefined
  * @requires android, mobileweb
  */
  backgroundColor: null,
  /**
  * @type undefined
  * @requires mobileweb
  */
  backgroundDisabledColor: null,
  /**
  * @type undefined
  * @requires mobileweb
  */
  backgroundDisabledImage: null,
  /**
  * Sets the color of the tab when it is focused.
  * @type undefined
  * @requires android, mobileweb
  */
  backgroundFocusedColor: null,
  /**
  * @type undefined
  * @requires mobileweb
  */
  backgroundFocusedImage: null,
  /**
  * @type undefined
  * @requires mobileweb
  */
  backgroundImage: null,
  /**
  * @type undefined
  * @requires mobileweb
  */
  backgroundSelectedImage: null,
  /**
  * Badge value for this tab. `null` indicates no badge.
  * @type String
  * @requires iphone, ipad
  */
  badge: null,
  /**
  * Icon URL for this tab.
  * @type String
  */
  icon: null,
  /**
  * Defines if the icon property of the tab must be used as a mask. This property is applicable on iOS 7 and greater.
  * @type Boolean
  * @requires iphone, ipad
  */
  iconIsMask: null,
  /**
  * Defines if the active icon property of the tab must be used as a mask. This property is applicable on iOS 7 and greater.
  * @type Boolean
  * @requires iphone, ipad
  */
  activeIconIsMask: null,
  /**
  * Title for this tab.
  * @type String
  */
  title: null,
  /**
  * Key identifying a string from the locale file to use for the tab title. Only one of `title` or `titleid` should be specified.
  * @type String
  */
  titleid: null,
  /**
  * Defines the color of the title of tab when it's inactive.
  * @type String
  * @requires iphone, ipad
  */
  titleColor: null,
  /**
  * Defines the color of the title of tab when it's active.
  * @type String
  * @requires iphone, ipad
  */
  activeTitleColor: null,
  /**
  * @type undefined
  * @requires mobileweb
  */
  touchEnabled: null,
  /**
  * Root-level tab window.  All tabs must have at least one root-level tab window.
  * @type Titanium.UI.Window
  */
  window: null,
};

/**
* Opens a new window.
* @param {Titanium.UI.Window} window Window to open.
* @param {Object} options Dictionary of display and animation settings to use when opening the window. Identical to the `options` parameter to [Window.open](Titanium.UI.Window.open).iOS only supports the **animated** parameter.
*/
Titanium.UI.Tab.open = function(window, options) {};

/**
* Closes the top-level window for this tab.
* @param {Titanium.UI.Window} window Window to close. This parameter **must** be omitted on Android.
* @param {Object} options Dictionary of display and animation settings to use when closing the window. Identical to the `options` parameter to [Window.close](Titanium.UI.Window.close).iOS only supports the **animated** parameter.
*/
Titanium.UI.Tab.close = function(window, options) {};

/**
* Sets the root window that appears in the tab.
* @param {Titanium.UI.Window} window Root window of the tab.
*/
Titanium.UI.Tab.setWindow = function(window) {};
/**
* Fired when the tab loses focus.
* @event Titanium.UI.Tab#blur
* @type {Object}
* @type Number index Index of the current active tab.
* @type Number previousIndex Index of the previous active tab.
* @type Titanium.UI.Tab tab Current active tab object.
* @type Titanium.UI.Tab previousTab Previous active tab object.
*/
/**
* Fired when this tab is clicked in the tab group.
* @event Titanium.UI.Tab#click
* @type {Object}
*/
/**
* @event Titanium.UI.Tab#dblclick
* @type {Object}
*/
/**
* @event Titanium.UI.Tab#doubletap
* @type {Object}
*/
/**
* Fired when the tab gains focus.
* @event Titanium.UI.Tab#focus
* @type {Object}
* @type Number index Index of the current active tab.
* @type Number previousIndex Index of the previous active tab.
* @type Titanium.UI.Tab tab Current active tab object.
* @type Titanium.UI.Tab previousTab Previous active tab object.
*/
/**
* @event Titanium.UI.Tab#longpress
* @type {Object}
*/
/**
* @event Titanium.UI.Tab#postlayout
* @type {Object}
*/
/**
* Fired when the tab is selected.
* @event Titanium.UI.Tab#selected
* @type {Object}
*/
/**
* @event Titanium.UI.Tab#singletap
* @type {Object}
*/
/**
* @event Titanium.UI.Tab#swipe
* @type {Object}
*/
/**
* @event Titanium.UI.Tab#touchcancel
* @type {Object}
*/
/**
* @event Titanium.UI.Tab#touchend
* @type {Object}
*/
/**
* @event Titanium.UI.Tab#touchmove
* @type {Object}
*/
/**
* @event Titanium.UI.Tab#touchstart
* @type {Object}
*/
/**
* Fired when the tab is unselected.
* @event Titanium.UI.Tab#unselected
* @type {Object}
*/
/**
* @extends Titanium.UI.View
* @since 0.9
* @fires Titanium.UI.TabGroup#androidback
* @fires Titanium.UI.TabGroup#androidcamera
* @fires Titanium.UI.TabGroup#androidfocus
* @fires Titanium.UI.TabGroup#androidsearch
* @fires Titanium.UI.TabGroup#androidvoldown
* @fires Titanium.UI.TabGroup#androidvolup
* @fires Titanium.UI.TabGroup#blur
* @fires Titanium.UI.TabGroup#close
* @fires Titanium.UI.TabGroup#focus
* @fires Titanium.UI.TabGroup#open
*/
Titanium.UI.TabGroup = {
  /**
  * Active tab.
  * @type Titanium.UI.Tab
  */
  activeTab: null,
  /**
  * Reference to the Android Activity object associated with this tab group.
  * @type Titanium.Android.Activity
  * @requires android
  */
  activity: null,
  /**
  * Allow the user to reorder tabs in the tab group using the **Edit** button on the **More** tab.
  * @type Boolean
  * @requires iphone, ipad
  */
  allowUserCustomization: null,
  /**
  * Default navigation bar color (typically for the **More** tab), as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad
  */
  barColor: null,
  /**
  * Boolean value indicating if the nav bar (typically for the **More** tab), is translucent.
  * @type Boolean
  * @requires iphone, ipad
  */
  translucent: null,
  /**
  * Title text attributes of the window to be applied on the **More** tab.
  * @type titleAttributesParams
  * @requires iphone, ipad
  */
  titleAttributes: null,
  /**
  * The tintColor to apply to the navigation bar (typically for the **More** tab). This property is applicable on iOS 7 and greater.
  * @type String
  * @requires iphone, ipad
  */
  navTintColor: null,
  /**
  * Title for the edit button on the **More** tab.
  * @type String
  * @requires iphone, ipad
  */
  editButtonTitle: null,
  /**
  * Boolean value indicating if the application should exit when closing the tab group, whether via Androidback button or the [close](Titanium.UI.TabGroup.close) method.
  * @type Boolean
  * @requires android
  */
  exitOnClose: null,
  /**
  * Hide the nav bar (`true`) or show the nav bar (`false`) for this tab group.
  * @type Boolean
  * @requires android
  */
  navBarHidden: null,
  /**
  * Boolean value indicating if tab navigation can be done by swipes, in addition to tab clicks.
  * @type Boolean
  * @requires android
  */
  swipeable: null,
  /**
  * Boolean value indicating if changing pages by tab clicks is animated.
  * @type Boolean
  * @requires android
  */
  smoothScrollOnTabClick: null,
  /**
  * Tabs managed by the tab group.
  * @type Array<Titanium.UI.Tab>
  */
  tabs: null,
  /**
  * Determines how the tab group is treated when a soft input method (such as a virtual keyboard) is displayed.
  * @type Number
  * @requires android
  */
  windowSoftInputMode: null,
  /**
  * Default background color for inactive tabs, as a color name or hex triplet.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  tabsBackgroundColor: null,
  /**
  * The tintColor to apply to the tabs. This property is applicable on iOS 7 and greater.
  * @type String
  * @requires iphone, ipad
  */
  tabsTintColor: null,
  /**
  * Title for this tabGroup.
  * @type String
  * @requires android
  */
  title: null,
  /**
  * Default background image for tabs.
  * @type String
  * @requires mobileweb, iphone, ipad
  */
  tabsBackgroundImage: null,
  /**
  * Image of the shadow placed between the tab bar and the content area.
  * @type String
  * @requires iphone, ipad
  */
  shadowImage: null,
  /**
  * Color applied to active tabs icons, as a color name or hex triplet, where the tab's activeIcon was not defined.
  * @type String
  * @requires iphone, ipad
  */
  activeTabIconTint: null,
  /**
  * Default background disabled color for tabs, as a color name or hex triplet.
  * @type String
  * @requires mobileweb
  */
  tabsBackgroundDisabledColor: null,
  /**
  * Default background disabled image for tabs.
  * @type String
  * @requires mobileweb
  */
  tabsBackgroundDisabledImage: null,
  /**
  * Default background focused color for tabs, as a color name or hex triplet.
  * @type String
  * @requires mobileweb
  */
  tabsBackgroundFocusedColor: null,
  /**
  * Default background focused image for tabs.
  * @type String
  * @requires mobileweb
  */
  tabsBackgroundFocusedImage: null,
  /**
  * Default background selected color for tabs, as a color name or hex triplet.
  * @type String
  * @requires android, mobileweb
  */
  tabsBackgroundSelectedColor: null,
  /**
  * Default background selected image for tabs.
  * @type String
  * @requires mobileweb
  */
  tabsBackgroundSelectedImage: null,
  /**
  * Default background color for the active tab, as a color name or hex triplet.
  * @type String
  * @requires mobileweb
  */
  activeTabBackgroundColor: null,
  /**
  * Default background image for the active tab.
  * @type String
  * @requires mobileweb, iphone, ipad
  */
  activeTabBackgroundImage: null,
  /**
  * Default background disabled color for the active tab, as a color name or hex triplet.
  * @type String
  * @requires mobileweb
  */
  activeTabBackgroundDisabledColor: null,
  /**
  * Default background disabled image for the active tab.
  * @type String
  * @requires mobileweb
  */
  activeTabBackgroundDisabledImage: null,
  /**
  * Default background focused color for the active tab, as a color name or hex triplet.
  * @type String
  * @requires mobileweb
  */
  activeTabBackgroundFocusedColor: null,
  /**
  * Default background focused image for the active tab.
  * @type String
  * @requires mobileweb
  */
  activeTabBackgroundFocusedImage: null,
  /**
  * Default background selected color for the active tab, as a color name or hex triplet.
  * @type String
  * @requires mobileweb
  */
  activeTabBackgroundSelectedColor: null,
  /**
  * Default background selected image for the active tab.
  * @type String
  * @requires mobileweb
  */
  activeTabBackgroundSelectedImage: null,
  /**
  * Color of the divider between tabs, as a color name or hex triplet.
  * @type String
  * @requires mobileweb
  */
  tabDividerColor: null,
  /**
  * Width of the divider between tabs.
  * @type Number,String
  * @requires mobileweb
  */
  tabDividerWidth: null,
  /**
  * Height of the tabs.
  * @type Number,String
  * @requires mobileweb
  */
  tabHeight: null,
  /**
  * Determines whether the tabs should be positioned at the top rather than the bottom of the screen.
  * @type Boolean
  * @requires mobileweb
  */
  tabsAtBottom: null,
};

/**
* Adds a tab to the tab group.
* @param {Titanium.UI.Tab} tab Tab to add.
*/
Titanium.UI.TabGroup.addTab = function(tab) {};

/**
* Closes the tab group and removes it from the UI.
*/
Titanium.UI.TabGroup.close = function() {};

/**
* Disable (or re-enable) tab navigation. If tab navigation is disabled, the tabs are hidden andthe last selected tab window is shown.
* @since 3.6.0
* @param {Boolean} disable True to disable tab navigation, false to re-enable the tabs.
*/
Titanium.UI.TabGroup.disableTabNavigation = function(disable) {};

/**
* Gets the currently-active tab.
*/
Titanium.UI.TabGroup.getActiveTab = function() {};

/**
* Opens the tab group and makes it visible.
*/
Titanium.UI.TabGroup.open = function() {};

/**
* Removes a tab from the tab group.
* @param {Titanium.UI.Tab} tab Tab to remove.
*/
Titanium.UI.TabGroup.removeTab = function(tab) {};

/**
* Selects the currently active tab in a tab group.
* @param {Number|Titanium.UI.Tab} indexOrObject Index or object of the tab to switch to.
*/
Titanium.UI.TabGroup.setActiveTab = function(indexOrObject) {};

/**
* Gets all tabs that are managed by the tab group.
*/
Titanium.UI.TabGroup.getTabs = function() {};
/**
* Fired when the back button is pressed by the user.
* @event Titanium.UI.TabGroup#androidback
* @type {Object}
*/
/**
* Fired when the Camera button is released.
* @event Titanium.UI.TabGroup#androidcamera
* @type {Object}
*/
/**
* Fired when the Camera button is half-pressed then released.
* @event Titanium.UI.TabGroup#androidfocus
* @type {Object}
*/
/**
* Fired when the Search button is released.
* @event Titanium.UI.TabGroup#androidsearch
* @type {Object}
*/
/**
* Fired when the volume down button is released.
* @event Titanium.UI.TabGroup#androidvoldown
* @type {Object}
*/
/**
* Fired when the volume up button is released.
* @event Titanium.UI.TabGroup#androidvolup
* @type {Object}
*/
/**
* Fired when this tab group loses focus. On Android, fired when a tab in this tab group loses focus.
* @event Titanium.UI.TabGroup#blur
* @type {Object}
* @type Number index Index of the current active tab. On iOS, a value of `undefined` indicates that the **More** tab was the active tab.
* @type Number previousIndex Index of the previous active tab. On iOS, a value of `undefined` indicates that the **More** tab was the previous tab.
* @type Titanium.UI.Tab tab Active tab.
* @type Titanium.UI.Tab previousTab Previous active tab. On iOS, a value of `undefined` indicates that the **More** tab was the previous tab.
*/
/**
* Fired when the tab group is closed.
* @event Titanium.UI.TabGroup#close
* @type {Object}
*/
/**
* Fired when this tab group gains focus. On Android, fired when a tab in this tab group gains focus.
* @event Titanium.UI.TabGroup#focus
* @type {Object}
* @type Number index Index of the current active tab.
* @type Number previousIndex Index of the previous active tab.
* @type Titanium.UI.Tab tab Active tab.
* @type Titanium.UI.Tab previousTab Previous active tab.
*/
/**
* Fired when the tab group is opened.
* @event Titanium.UI.TabGroup#open
* @type {Object}
*/
/**
* @extends Titanium.UI.View
* @since 0.8
* @requires iphone, ipad
* @fires Titanium.UI.TabbedBar#click
*/
Titanium.UI.TabbedBar = {
  /**
  * Index of the currently selected button.
  * @type Number
  */
  index: null,
  /**
  * Array of labels for the tabbed bar.
  * @type Array<String>,Array<BarItemType>
  */
  labels: null,
  /**
  * Style of the tabbed bar.
  * @type Number
  */
  style: null,
};

/**
* Fired when a button is clicked.
* @event Titanium.UI.TabbedBar#click
* @type {Object}
* @type Number index Index of the clicked button.
*/
/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.TableView#click
* @fires Titanium.UI.TableView#dblclick
* @fires Titanium.UI.TableView#delete
* @fires Titanium.UI.TableView#doubletap
* @fires Titanium.UI.TableView#indexclick
* @fires Titanium.UI.TableView#longpress
* @fires Titanium.UI.TableView#move
* @fires Titanium.UI.TableView#pinch
* @fires Titanium.UI.TableView#scroll
* @fires Titanium.UI.TableView#scrollEnd
* @fires Titanium.UI.TableView#scrollend
* @fires Titanium.UI.TableView#singletap
* @fires Titanium.UI.TableView#swipe
* @fires Titanium.UI.TableView#touchcancel
* @fires Titanium.UI.TableView#touchend
* @fires Titanium.UI.TableView#touchmove
* @fires Titanium.UI.TableView#touchstart
* @fires Titanium.UI.TableView#twofingertap
* @fires Titanium.UI.TableView#dragStart
* @fires Titanium.UI.TableView#dragEnd
* @fires Titanium.UI.TableView#dragstart
* @fires Titanium.UI.TableView#dragend
*/
Titanium.UI.TableView = {
  /**
  * Determines whether this table's rows can be selected.
  * @type Boolean
  * @requires iphone, ipad
  */
  allowsSelection: null,
  /**
  * Determines whether this table's rows can be selected while editing the table.
  * @type Boolean
  * @requires iphone, ipad
  */
  allowsSelectionDuringEditing: null,
  /**
  * Background color of the view, as a color name or hex triplet.
  * @type String
  */
  backgroundColor: null,
  /**
  * Rows of the table view.
  * @type Dictionary,Array<Titanium.UI.TableViewRow>,Array<Titanium.UI.TableViewSection>
  */
  data: null,
  /**
  * Determines the rows' default editable behavior, which allows them to be deleted by the user when the table is in `editing` or `moving` mode.
  * @type Boolean
  * @requires iphone, ipad
  */
  editable: null,
  /**
  * Determines whether row editing mode is active.
  * @type Boolean
  * @requires iphone, ipad
  */
  editing: null,
  /**
  * Filter attribute to be used when searching.
  * @type String
  * @requires android, iphone, ipad
  */
  filterAttribute: null,
  /**
  * Determines whether the search is limited to the start of the string
  * @type Boolean
  * @requires android, iphone, ipad
  */
  filterAnchored: null,
  /**
  * Determines whether the search is case insensitive.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  filterCaseInsensitive: null,
  /**
  * When set to false, the ListView will not draw the divider before the footer view.
  * @type Boolean
  * @requires android
  */
  footerDividersEnabled: null,
  /**
  * Table view footer title.
  * @type String
  */
  footerTitle: null,
  /**
  * View positioned above the first row that is only revealed when the user drags the table contents down.
  * @type Titanium.UI.View
  * @requires iphone, ipad
  */
  headerPullView: null,
  /**
  * View positioned above the first row that is only revealed when the user drags the list view contents down.
  * @type Titanium.UI.RefreshControl
  * @requires iphone, ipad
  */
  refreshControl: null,
  /**
  * Determines whether the search field should hide on completion.
  * @type Boolean
  * @requires iphone, ipad
  */
  hideSearchOnSelection: null,
  /**
  * Table view footer as a view that will be rendered instead of a label.
  * @type Titanium.UI.View
  */
  footerView: null,
  /**
  * When set to false, the ListView will not draw the divider after the header view.
  * @type Boolean
  * @requires android
  */
  headerDividersEnabled: null,
  /**
  * Table view header title.
  * @type String
  */
  headerTitle: null,
  /**
  * Table view header as a view that will be rendered instead of a label.
  * @type Titanium.UI.View
  */
  headerView: null,
  /**
  * Array of objects (with `title` and `index` properties) to control the table view index.
  * @type Array<TableViewIndexEntry>
  * @requires iphone, ipad
  */
  index: null,
  /**
  * Maximum row height for table view rows.
  * @type Number
  */
  maxRowHeight: null,
  /**
  * Minimum row height for table view rows.
  * @type Number
  */
  minRowHeight: null,
  /**
  * Determines the rows' default moveable behavior, which allows them to be re-ordered by the user when the table is in `editing` or `moving` mode.
  * @type Boolean
  * @requires iphone, ipad
  */
  moveable: null,
  /**
  * Determines whether row moving mode is active.
  * @type Boolean
  * @requires iphone, ipad
  */
  moving: null,
  /**
  * Determines the behavior when the user overscrolls the view.
  * @type Number
  * @requires android
  */
  overScrollMode: null,
  /**
  * Default row height for table view rows.
  * @type Number
  */
  rowHeight: null,
  /**
  * If `true`, the tableview can be scrolled.
  * @type Boolean
  * @requires iphone, ipad
  */
  scrollable: null,
  /**
  * Style of the scrollbar.
  * @type Number
  * @requires iphone, ipad
  */
  scrollIndicatorStyle: null,
  /**
  * Controls whether the scroll-to-top gesture is effective.
  * @type Boolean
  * @requires iphone, ipad
  */
  scrollsToTop: null,
  /**
  * Search field to use for the table view.
  * @type Titanium.UI.SearchBar,Titanium.UI.Android.SearchView
  * @requires android, iphone, ipad
  */
  search: null,
  /**
  * Determines whether the [SearchBar](Titanium.UI.SearchBar) or [SearchView](Titanium.UI.Android.SearchView) appears as part of the TableView.
  * @type Boolean
  * @requires android
  */
  searchAsChild: null,
  /**
  * Determines whether the search field is visible.
  * @type Boolean
  * @requires iphone, ipad
  */
  searchHidden: null,
  /**
  * Number of sections in this table view.
  * @type Number
  * @requires android, iphone, ipad, mobileweb
  */
  sectionCount: null,
  /**
  * Sections of this table.
  * @type Array<Titanium.UI.TableViewSection>
  * @requires android, iphone, ipad, mobileweb
  */
  sections: null,
  /**
  * Separator line color between rows, as a color name or hex triplet.
  * @type String
  */
  separatorColor: null,
  /**
  * The insets for table view separators (applies to all cells). This property is applicable on iOS 7 and greater.
  * @type Dictionary
  * @requires iphone, ipad
  */
  separatorInsets: null,
  /**
  * Separator style constant.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  separatorStyle: null,
  /**
  * Determines whether this table view displays a vertical scroll indicator.
  * @type Boolean
  * @requires iphone, ipad
  */
  showVerticalScrollIndicator: null,
  /**
  * Style of the table view, specified using one of the constants from <Titanium.UI.iPhone.TableViewStyle>.
  * @type Number
  * @requires iphone, ipad
  */
  style: null,
};

/**
* Appends a single row or an array of rows to the end of the table.
* @param {Titanium.UI.TableViewRow|Dictionary<Titanium.UI.TableViewRow>|Array<Titanium.UI.TableViewRow>|Array<Dictionary<Titanium.UI.TableViewRow>>} row Row or rows to add to the table.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.appendRow = function(row, animation) {};

/**
* Appends a single section or an array of sections to the end of the table.
* @since 3.0.0
* @param {Titanium.UI.TableViewSection|Dictionary<Titanium.UI.TableViewSection>|Array<Titanium.UI.TableViewSection>|Array<Dictionary<Titanium.UI.TableViewSection>>} section Section or section to add to the table.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.appendSection = function(section, animation) {};

/**
* Deletes an existing row.
* @param {Number|Titanium.UI.TableViewRow} row Index of the row to delete, or the row object to delete.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.deleteRow = function(row, animation) {};

/**
* Deletes an existing section.
* @since 3.0.0
* @param {Number} section Index of the section to delete.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.deleteSection = function(section, animation) {};

/**
* Programmatically deselects a row.
* @param {Number} row Row index to deselect.
*/
Titanium.UI.TableView.deselectRow = function(row) {};

/**
* Inserts a row after another row.
* @param {Number} index Index of the row to insert after.
* @param {Titanium.UI.TableViewRow|Dictionary<Titanium.UI.TableViewRow>} row Row to insert.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.insertRowAfter = function(index, row, animation) {};

/**
* Inserts a section after another section.
* @since 3.0.0
* @param {Number} index Index of the section to insert after.
* @param {Titanium.UI.TableViewSection|Dictionary<Titanium.UI.TableViewSection>} section section to insert.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.insertSectionAfter = function(index, section, animation) {};

/**
* Inserts a row before another row.
* @param {Number} index Index of the row to insert before.
* @param {Titanium.UI.TableViewRow|Dictionary<Titanium.UI.TableViewRow>} row Row to insert.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.insertRowBefore = function(index, row, animation) {};

/**
* Inserts a section before another section.
* @since 3.0.0
* @param {Number} index Index of the section to insert before.
* @param {Titanium.UI.TableViewSection|Dictionary<Titanium.UI.TableViewSection>} section section to insert.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.insertSectionBefore = function(index, section, animation) {};

/**
* Scrolls the table view to ensure that the specified row is on screen.
* @param {Number} index Row index to scroll to.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.scrollToIndex = function(index, animation) {};

/**
* Scrolls the table to a specific top position where 0 is the topmost y position in the table view.
* @param {Number} top Y position for the top of the table view.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.scrollToTop = function(top, animation) {};

/**
* Sets this tableview's content insets.
* @since 2.1.0
* @param {TableViewEdgeInsets} edgeInsets Dictionary to describe the insets.
* @param {TableViewContentInsetOption} animated Determines whether, and how, the content inset change should be animated.
*/
Titanium.UI.TableView.setContentInsets = function(edgeInsets, animated) {};

/**
* Sets the value of the content offset of the table view without animation by default.
* @since 3.4.0
* @param {Dictionary} contentOffset Dictionary with the properties `x`, `y`, and `animated`. The `x` and `y` coordinatesreposition the top-left point of the scrollable region of the table view.The `animated` property is optional and set to `false` by default. 
*/
Titanium.UI.TableView.setContentOffset = function(contentOffset) {};

/**
* Programmatically selects a row. In Android, it sets the currently selected item. If in touch mode,the item will not be selected but it will still be positioned appropriately. If the specified selection position is less than 0, then the item at position 0 will be selected.
* @since [object Object]
* @param {Number} row Row index to select.
*/
Titanium.UI.TableView.selectRow = function(row) {};

/**
* Sets the data in the table.
* @param {Array<Titanium.UI.TableViewRow>|Array<Dictionary<Titanium.UI.TableViewRow>>|Array<Titanium.UI.TableViewSection>} data Rows or sections to add to this table.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.setData = function(data, animation) {};

/**
* Sets the value of the [Titanium.UI.TableView.headerPullView] property.
* @since 2.1.0
* @param {Titanium.UI.View} view View to display.
*/
Titanium.UI.TableView.setHeaderPullView = function(view) {};

/**
* Updates an existing row, optionally with animation.
* @param {Number} index Index of the row to update.
* @param {Titanium.UI.TableViewRow} row Row data to update.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.updateRow = function(index, row, animation) {};

/**
* Updates an existing section, optionally with animation.
* @since 3.0.0
* @param {Number} index Index of the section to update.
* @param {Titanium.UI.TableViewSection} section section data to update.
* @param {TableViewAnimationProperties} animation Animation properties. (iOS only.)
*/
Titanium.UI.TableView.updateSection = function(index, section, animation) {};
/**
* Fired when a table row is clicked by the user.
* @event Titanium.UI.TableView#click
* @type {Object}
* @type Boolean detail Indicates whether the detail button was clicked. Only `true` if `row.hasDetail` is `true` and the detail button was clicked.
* @type Number index Row index.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Properties of the row.When the row is created implicitly using a JavaScript dictionary object,use this property rather than `row` to access any custom row properties.Here's an example of creating a row implicitly, which is not the recommended way.    var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];    var table = Ti.UI.createTableView({data: data});
* @type Boolean searchMode Indicates whether the table is in search mode.
* @type Titanium.UI.TableViewSection section Table view section object, if the clicked row is contained in a section.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @requires mobileweb, iphone, ipad
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @requires mobileweb, iphone, ipad
*/
/**
* Fired when the device detects a double click against the view.
* @event Titanium.UI.TableView#dblclick
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when a table row is deleted by the user.
* @event Titanium.UI.TableView#delete
* @type {Object}
* @type Boolean detail Indicates whether the delete button was clicked. Always `false` for this event.
* @type Number index Row index.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Properties of the row. Use this property rather than `row` to access any custom row properties.
* @type Boolean searchMode Indicates whether the table is in search mode. Always `false` for this event.
* @type Titanium.UI.TableViewSection section Table view section object, if the deleted row is contained in a section.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a double tap against this view.
* @event Titanium.UI.TableView#doubletap
* @type {Object}
* @type Number index Row index.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Properties of the row.When the row is created implicitly using a JavaScript dictionary object,use this property rather than `row` to access any custom row properties.Here's an example of creating a row implicitly, which is not the recommended way.    var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];    var table = Ti.UI.createTableView({data: data});
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the index bar is clicked by the user.
* @event Titanium.UI.TableView#indexclick
* @type {Object}
* @type String title The title of the index clicked.
* @type Number index The index number clicked.
*/
/**
* Fired when the device detects a long press.
* @event Titanium.UI.TableView#longpress
* @type {Object}
* @type Number index Row index.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Properties of the row.When the row is created implicitly using a JavaScript dictionary object,use this property rather than `row` to access any custom row properties.Here's an example of creating a row implicitly, which is not the recommended way.    var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];    var table = Ti.UI.createTableView({data: data});
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when a table row is moved by the user.
* @event Titanium.UI.TableView#move
* @type {Object}
* @type Boolean detail Boolean to indicate if the right area was clicked. Always `false` for this event.
* @type Number index Row index.
* @type Boolean searchMode Boolean to indicate if the table is in search mode. Always `false` for this event.
* @type Titanium.UI.TableViewSection section Table view section object, if the deleted row is contained in a section.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Properties of the row. Use this property rather than `row` to access any custom row properties.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a pinch gesture.
* @event Titanium.UI.TableView#pinch
* @type {Object}
* @type Number scale The scale factor relative to the points of the two touches in screen coordinates.
* @type Number velocity The velocity of the pinch in scale factor per second.
*/
/**
* Fired when the table view is scrolled.
* @event Titanium.UI.TableView#scroll
* @type {Object}
* @type Point contentOffset Dictionary with `x` and `y` properties containing the content offset.
* @requires iphone, ipad, mobileweb
* @type Dictionary contentSize Dictionary with `width` and `height` properties containing the size of the content (regardless of the display size in the case of scrolling).
* @requires iphone, ipad, mobileweb
* @type Number firstVisibleItem Row index of the topmost visible row in the view.
* @requires android, mobileweb
* @type Dictionary size Dictionary with `width` and `height` properties containing the size of the visible table view
* @type Number totalItemCount Total number of rows in the view.
* @requires android, mobileweb
* @type Number visibleItemCount Number of rows currently visible in the view.
* @requires android, mobileweb
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @requires mobileweb
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
* @requires mobileweb
*/
/**
* Fired when the table view stops scrolling.
* @event Titanium.UI.TableView#scrollEnd
* @type {Object}
* @type Dictionary contentSize Dictionary with `width` and `height` properties containing the size of the content (regardless of the display size in the case of scrolling).
* @requires iphone, ipad, mobileweb
* @type Point contentOffset Dictionary with `x` and `y` properties containing the content offset.
* @requires iphone, ipad, mobileweb
* @type Dictionary size Dictionary with `width` and `height` properties containing the size of the visible table view.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the table view stops scrolling.
* @event Titanium.UI.TableView#scrollend
* @type {Object}
* @type Dictionary contentSize Dictionary with `width` and `height` properties containing the size of the content (regardless of the display size in the case of scrolling).
* @requires iphone, ipad, mobileweb
* @type Point contentOffset Dictionary with `x` and `y` properties containing the content offset.
* @requires iphone, ipad, mobileweb
* @type Dictionary size Dictionary with `width` and `height` properties containing the size of the visible table view.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a single tap against the view.
* @event Titanium.UI.TableView#singletap
* @type {Object}
* @type Number index Row index.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Properties of the row.When the row is created implicitly using a JavaScript dictionary object,use this property rather than `row` to access any custom row properties.Here's an example of creating a row implicitly, which is not the recommended way.    var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];    var table = Ti.UI.createTableView({data: data});
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a swipe gesture (left or right) against the view.
* @event Titanium.UI.TableView#swipe
* @type {Object}
* @type String direction Direction of the swipe, either `left` or `right`.
* @type Number index Row index.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Properties of the row.When the row is created implicitly using a JavaScript dictionary object,use this property rather than `row` to access any custom row properties.Here's an example of creating a row implicitly, which is not the recommended way.    var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];    var table = Ti.UI.createTableView({data: data});
* @type Number x X coordinate of the event's endpoint from the `source` view's coordinate system.
* @type Number y Y coordinate of the event's endpoint from the `source` view's coordinate system.
*/
/**
* Fired when a touch gesture is interrupted by the device.
* @event Titanium.UI.TableView#touchcancel
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when a touch gesture is complete.
* @event Titanium.UI.TableView#touchend
* @type {Object}
* @type Number index Row index.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Properties of the row.When the row is created implicitly using a JavaScript dictionary object,use this property rather than `row` to access any custom row properties.Here's an example of creating a row implicitly, which is not the recommended way.    var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];    var table = Ti.UI.createTableView({data: data});
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired as soon as the device detects movement of a touch.
* @event Titanium.UI.TableView#touchmove
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired as soon as the device detects a touch gesture against this view.
* @event Titanium.UI.TableView#touchstart
* @type {Object}
* @type Number index Row index.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Properties of the row.When the row is created implicitly using a JavaScript dictionary object,use this property rather than `row` to access any custom row properties.Here's an example of creating a row implicitly, which is not the recommended way.    var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];    var table = Ti.UI.createTableView({data: data});
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a two-finger tap against the view.
* @event Titanium.UI.TableView#twofingertap
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the scrollable region starts being dragged.
* @event Titanium.UI.TableView#dragStart
* @type {Object}
*/
/**
* Fired when the scrollable region stops being dragged.
* @event Titanium.UI.TableView#dragEnd
* @type {Object}
* @type Boolean decelerate Indicates whether scrolling will continue but decelerate, now that the drag gesture has been released by the touch. If `false`, scrolling will stop immediately.
*/
/**
* Fired when the scrollable region starts being dragged.
* @event Titanium.UI.TableView#dragstart
* @type {Object}
*/
/**
* Fired when the scrollable region stops being dragged.
* @event Titanium.UI.TableView#dragend
* @type {Object}
* @type Boolean decelerate Indicates whether scrolling will continue but decelerate, now that the drag gesture has been released by the touch. If `false`, scrolling will stop immediately.
*/
/**
*/
TableViewAnimationProperties = {
  /**
  * Whether this table change should be animated. Ignored if any `animationStyle` value is specified.
  * @type Boolean
  */
  animated: null,
  /**
  * Type of animation to use for row insertions and deletions.
  * @type Number
  */
  animationStyle: null,
  /**
  * Specifies what position to scroll the selected row to.
  * @type Number
  */
  position: null,
};


/**
*/
TableViewIndexEntry = {
  /**
  * Title to display in the index bar for this item.
  * @type String
  */
  title: null,
  /**
  * Row index associated with this item.
  * @type Number
  */
  index: null,
};


/**
* @since 2.1.0
* @requires iphone, ipad
*/
TableViewContentInsetOption = {
  /**
  * Determines whether the table view's content inset change is animated.
  * @type Boolean
  */
  animated: null,
  /**
  * The duration in `milleseconds` for animation while the content inset is  being changed.
  * @type Number
  */
  duration: null,
};


/**
* @since 2.1.0
* @requires iphone, ipad
*/
TableViewEdgeInsets = {
  /**
  * Value specifying the top insets for the enclosing scroll view of the table.
  * @type Number
  */
  top: null,
  /**
  * Value specifying the left insets for the enclosing scroll view of the table.
  * @type Number
  */
  left: null,
  /**
  * Value specifying the right insets for the enclosing scroll view of the table.
  * @type Number
  */
  right: null,
  /**
  * Value specifying the bottom insets for the enclosing scroll view of the table.
  * @type Number
  */
  bottom: null,
};


/**
* @extends Titanium.UI.View
* @since 0.9
* @fires Titanium.UI.TableViewRow#click
* @fires Titanium.UI.TableViewRow#swipe
* @fires Titanium.UI.TableViewRow#touchcancel
* @fires Titanium.UI.TableViewRow#touchend
* @fires Titanium.UI.TableViewRow#touchstart
* @fires Titanium.UI.TableViewRow#touchmove
*/
Titanium.UI.TableViewRow = {
  /**
  * Class name for the row.
  * @type String
  * @requires android
  */
  className: null,
  /**
  * Default text color of the row when not selected, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Determines the rows' editable behavior, which allows them to be deleted by the user when the table is in `editing` or `moving` mode.
  * @type Boolean
  * @requires iphone, ipad
  */
  editable: null,
  /**
  * Font to use for the row title.
  * @type Font
  */
  font: null,
  /**
  * Determines whether a system-provided checkmark is displayed on the right-hand side of the row.
  * @type Boolean
  */
  hasCheck: null,
  /**
  * Determines whether a system-provided arrow is displayed on the right-hand side of the row.
  * @type Boolean
  */
  hasChild: null,
  /**
  * Determines whether a system-provided detail disclosure button is displayed on the right-hand side of the row.
  * @type Boolean
  * @requires iphone, ipad
  */
  hasDetail: null,
  /**
  * Indention level for the row.
  * @type Number
  * @requires iphone, ipad
  */
  indentionLevel: null,
  /**
  * Image to render in the left image area of the row, specified as a local path or URL.
  * @type String
  */
  leftImage: null,
  /**
  * Determines the rows' moveable behavior, which allows them to be re-ordered by the user when the table is in `editing` or `moving` mode.
  * @type Boolean
  * @requires iphone, ipad
  */
  moveable: null,
  /**
  * @type undefined
  * @requires android, mobileweb
  */
  opacity: null,
  /**
  * Image to render in the right image area of the row, specified as a local path or URL.
  * @type String
  */
  rightImage: null,
  /**
  * Background color to render when the row is selected, as a color name or hex triplet.
  * @type String
  */
  selectedBackgroundColor: null,
  /**
  * Background image to render when the row is selected.
  * @type String
  */
  selectedBackgroundImage: null,
  /**
  * Color of the row text when the row is selected, as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad
  */
  selectedColor: null,
  /**
  * Selection style constant to control the selection color.
  * @type Number
  * @requires iphone, ipad
  */
  selectionStyle: null,
  /**
  * Text to display on the row.
  * @type String
  */
  title: null,
  /**
  * A succint label associated with the table row for the device's accessibility service.
  * @type String
  * @requires iphone, ipad
  */
  accessibilityLabel: null,
};

/**
* Fired when a table row is clicked by the user.
* @event Titanium.UI.TableViewRow#click
* @type {Object}
* @type Boolean detail Indicates whether the detail button was clicked. Only `true` if `row.hasDetail` is `true` and the detail button was clicked.
* @type Number index Row index.
* @type Titanium.UI.TableViewRow row Table view row object.
* @type Dictionary<Titanium.UI.TableViewRow> rowData Dictionary containing the properties set on the row.
* @type Boolean searchMode Boolean to indicate if the table is in search mode.
* @type Titanium.UI.TableViewSection section Table view section object, if the clicked row is contained in a section.
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a swipe gesture against the view.
* @event Titanium.UI.TableViewRow#swipe
* @type {Object}
* @type String direction Direction of the swipe--either 'left' or 'right'. Android also supports 'up' and 'down'.
* @type Number x X coordinate of the event's endpoint from the `source` view's coordinate system.
* @type Number y Y coordinate of the event's endpoint from the `source` view's coordinate system.
*/
/**
* Fired when a touch gesture is interrupted by the device.
* @event Titanium.UI.TableViewRow#touchcancel
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when a touch gesture is complete.
* @event Titanium.UI.TableViewRow#touchend
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired as soon as the device detects a touch gesture against this view.
* @event Titanium.UI.TableViewRow#touchstart
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired as soon as the device detects movement of a touch..
* @event Titanium.UI.TableViewRow#touchmove
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* @extends Titanium.Proxy
* @since 0.9
*/
Titanium.UI.TableViewSection = {
  /**
  * Title of this section footer.
  * @type String
  */
  footerTitle: null,
  /**
  * View to use for this section footer.
  * @type Titanium.UI.View
  */
  footerView: null,
  /**
  * Title of this section header.
  * @type String
  */
  headerTitle: null,
  /**
  * View to use for this section header.
  * @type Titanium.UI.View
  */
  headerView: null,
  /**
  * Number of rows in this section.
  * @type Number
  */
  rowCount: null,
  /**
  * Rows in this section.
  * @type Array<Titanium.UI.TableViewRow>
  */
  rows: null,
};

/**
* Adds a table view row to this section.
* @param {Titanium.UI.TableViewRow} row Row to add.
*/
Titanium.UI.TableViewSection.add = function(row) {};

/**
* Removes a table view row from this section.
* @param {Titanium.UI.TableViewRow} row Row to remove.
*/
Titanium.UI.TableViewSection.remove = function(row) {};

/**
* Returns a row in this section.
* @param {Number} index Section index of a row.
*/
Titanium.UI.TableViewSection.rowAtIndex = function(index) {};

/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.TextArea#blur
* @fires Titanium.UI.TextArea#change
* @fires Titanium.UI.TextArea#focus
* @fires Titanium.UI.TextArea#link
* @fires Titanium.UI.TextArea#return
* @fires Titanium.UI.TextArea#selected
*/
Titanium.UI.TextArea = {
  /**
  * Determines the appearance of the keyboard displayed when this text area is focused.
  * @type Number
  * @requires iphone, ipad
  */
  appearance: null,
  /**
  * TextArea attributed string.
  * @type Titanium.UI.AttributedString
  * @requires android, iphone, ipad
  */
  attributedString: null,
  /**
  * Determines how text is capitalized during typing.
  * @type Number
  * @requires android, iphone, ipad
  */
  autocapitalization: null,
  /**
  * Determines whether to automatically correct text entered into this text area.
  * @type Boolean
  * @requires android, iphone, ipad, mobileweb
  */
  autocorrect: null,
  /**
  * Automatically convert text to clickable links.
  * @type Number
  * @requires android, iphone, ipad
  */
  autoLink: null,
  /**
  * Determines whether the value of this text area should be cleared when it is focused.
  * @type Boolean
  * @requires android
  */
  clearOnEdit: null,
  /**
  * Color of the text in this text area, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Determines whether this field can be edited.
  * @type Boolean
  */
  editable: null,
  /**
  * Determines whether an ellipsis (`...`) should be used to indicate truncated text.
  * @type Boolean
  * @requires android
  */
  ellipsize: null,
  /**
  * Determines whether the return key is enabled automatically when there is text in this text area.
  * @type Boolean
  */
  enableReturnKey: null,
  /**
  * Font to use for text.
  * @type Font
  */
  font: null,
  /**
  * Hint text to display when the field is empty.
  * @type String
  * @requires android
  */
  hintText: null,
  /**
  * Color of hint text that displays when field is empty.
  * @type String
  * @requires android
  */
  hintTextColor: null,
  /**
  * Specifies if the text area should allow user interaction with the given URL in the given range of text.
  * @type Boolean
  * @requires iphone, ipad
  */
  handleLinks: null,
  /**
  * Array of toolbar button objects or a [toolbar](Titanium.UI.iOS.Toolbar) to be used when the keyboard is displayed.
  * @type Array<Titanium.UI.View>,Titanium.UI.iOS.Toolbar
  * @requires iphone, ipad
  */
  keyboardToolbar: null,
  /**
  * Color of the keyboard toolbar if keyboardToolbar is an array, as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad
  */
  keyboardToolbarColor: null,
  /**
  * Height of the keyboard toolbar if keyboardToolbar is an array.
  * @type Number
  * @requires iphone, ipad
  */
  keyboardToolbarHeight: null,
  /**
  * Keyboard type to display when this text area is focused.
  * @type Number
  * @requires android, iphone, ipad
  */
  keyboardType: null,
  /**
  * Maximum length of text field input.
  * @type Number
  * @requires android, iphone, ipad
  */
  maxLength: null,
  /**
  * Specifies the text to display on the keyboard `Return` key when this text area is focused.
  * @type Number
  * @requires iphone, ipad
  */
  returnKeyType: null,
  /**
  * Controls whether the scroll-to-top gesture is effective.
  * @type Boolean
  * @requires iphone, ipad
  */
  scrollsToTop: null,
  /**
  * Determines if the return key should be suppressed during text entry.
  * @type Boolean
  * @requires iphone, ipad, mobileweb
  */
  suppressReturn: null,
  /**
  * Text alignment within this text area.
  * @type String,Number
  */
  textAlign: null,
  /**
  * Value of this text area, which may be set programmatically and modified by the user.
  * @type String
  */
  value: null,
  /**
  * Determines whether this text area can be scrolled.
  * @type Boolean
  * @requires iphone, ipad
  */
  scrollable: null,
  /**
  * Returns the currently selected text of the text area.
  * @type textAreaSelectedParams
  * @requires iphone, ipad, android
  */
  selection: null,
  /**
  * Vertical alignment within this text area.
  * @type Number,String
  * @requires android
  */
  verticalAlign: null,
};

/**
*/
Titanium.UI.TextArea.add = function() {};

/**
* Forces this text area to lose focus.
*/
Titanium.UI.TextArea.blur = function() {};

/**
* Forces this text area to gain focus.
*/
Titanium.UI.TextArea.focus = function() {};

/**
* Returns `true` if this text area contains text.
* @since 2.1.0
*/
Titanium.UI.TextArea.hasText = function() {};

/**
*/
Titanium.UI.TextArea.remove = function() {};

/**
* Selects the text in range (start, end).
* @since 3.0.0
* @param {Number} start Start index for selection. Value ranges from 0 to the text's length.
* @param {Number} end End index for selection, not inclusive. Value ranges from 0 to the text's length.
*/
Titanium.UI.TextArea.setSelection = function(start, end) {};
/**
* Fired when this text area loses focus.
* @event Titanium.UI.TextArea#blur
* @type {Object}
* @type String value Value of this text area.
*/
/**
* Fired when this text area value changes.
* @event Titanium.UI.TextArea#change
* @type {Object}
* @type String value New value of this text area.
*/
/**
* Fired when this text area gains focus.
* @event Titanium.UI.TextArea#focus
* @type {Object}
* @type String value Value of this text area.
*/
/**
* Fired when user interacts with a URL in the text area. See [handleLinks](Titanium.UI.TextArea.handleLinks).
* @event Titanium.UI.TextArea#link
* @type {Object}
* @type String url The URL that is associated with this event.
* @type Array range An array of two numbers [location, length] describing the character range of the text associated with this URL.
* @type Boolean bubbles This is false. This event does not bubble.
*/
/**
* Fired when the return key is pressed on the keyboard.
* @event Titanium.UI.TextArea#return
* @type {Object}
* @type String value Value of this text area.
*/
/**
* Fired when text in this text area is selected.
* @event Titanium.UI.TextArea#selected
* @type {Object}
* @type textAreaSelectedParams range Dictionary that describes the position and length of the selected text.
*/
/**
*/
textAreaSelectedParams = {
  /**
  * Starting position of selected text.
  * @type Number
  */
  location: null,
  /**
  * Number of characters selected.
  * @type Number
  */
  length: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.TextField#blur
* @fires Titanium.UI.TextField#change
* @fires Titanium.UI.TextField#focus
* @fires Titanium.UI.TextField#return
*/
Titanium.UI.TextField = {
  /**
  * Determines the appearance of the keyboard displayed when this field is focused.
  * @type Number
  * @requires iphone, ipad
  */
  appearance: null,
  /**
  * TextField attributed string.
  * @type Titanium.UI.AttributedString
  * @requires android, iphone, ipad
  */
  attributedString: null,
  /**
  * Hint text attributed string.
  * @type Titanium.UI.AttributedString
  * @requires android, iphone, ipad
  */
  attributedHintText: null,
  /**
  * Determines how text is capitalized during typing.
  * @type Number
  */
  autocapitalization: null,
  /**
  * Determines whether to automatically correct text entered into this text field.
  * @type Boolean
  */
  autocorrect: null,
  /**
  * Automatically convert text to clickable links.
  * @type Number
  * @requires android
  */
  autoLink: null,
  /**
  * Border style for the field.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  borderStyle: null,
  /**
  * Determines when the clear button is displayed.
  * @type Number
  * @requires iphone, ipad
  */
  clearButtonMode: null,
  /**
  * Determines whether the value of this text field should be cleared when it is focused.
  * @type Boolean
  */
  clearOnEdit: null,
  /**
  * Color of the text in this text field, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Determines whether this field can be edited.
  * @type Boolean
  */
  editable: null,
  /**
  * Determines whether an ellipsis (`...`) should be used to indicate truncated text.
  * @type Boolean
  * @requires android
  */
  ellipsize: null,
  /**
  * Determines whether the return key is enabled automatically when there is text in this text field.
  * @type Boolean
  */
  enableReturnKey: null,
  /**
  * Font to use for text.
  * @type Font
  */
  font: null,
  /**
  * Hint text to display when the field is empty.
  * @type String
  */
  hintText: null,
  /**
  * Hint text color.
  * @type String
  * @requires android
  */
  hintTextColor: null,
  /**
  * Array of toolbar button objects or a [toolbar](Titanium.UI.iOS.Toolbar) to be used when the keyboard is displayed.
  * @type Array<Titanium.UI.View>,Titanium.UI.iOS.Toolbar
  * @requires iphone, ipad
  */
  keyboardToolbar: null,
  /**
  * Color of the keyboard toolbar if keyboardToolbar is an array, as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad
  */
  keyboardToolbarColor: null,
  /**
  * Height of the keyboard toolbar if keyboardToolbar is an array.
  * @type Number
  * @requires iphone, ipad
  */
  keyboardToolbarHeight: null,
  /**
  * Keyboard type to display when this text field is focused.
  * @type Number
  */
  keyboardType: null,
  /**
  * Left button view to display in the `TextField`.
  * @type Object
  * @requires iphone, ipad
  */
  leftButton: null,
  /**
  * Determines when to display the left button view.
  * @type Number
  * @requires iphone, ipad
  */
  leftButtonMode: null,
  /**
  * Padding between the left button and the edge of the field.
  * @type Number
  * @requires iphone, ipad
  */
  leftButtonPadding: null,
  /**
  * Minimum size of the font when the font is sized based on the contents.  Enables font scaling to fit.
  * @type Number
  * @requires iphone, ipad
  */
  minimumFontSize: null,
  /**
  * Left padding of this text field.
  * @type Number
  * @requires iphone, ipad
  */
  paddingLeft: null,
  /**
  * Right padding of this text field.
  * @type Number
  * @requires iphone, ipad
  */
  paddingRight: null,
  /**
  * Obscure the input text from the user.
  * @type Boolean
  */
  passwordMask: null,
  /**
  * Specifies the text to display on the keyboard `Return` key when this field is focused.
  * @type Number
  */
  returnKeyType: null,
  /**
  * Right button view.
  * @type Object
  * @requires iphone, ipad
  */
  rightButton: null,
  /**
  * Determines when to display the right button view.
  * @type Number
  * @requires iphone, ipad
  */
  rightButtonMode: null,
  /**
  * Padding between the right button and the edge of the field.
  * @type Number
  * @requires iphone, ipad
  */
  rightButtonPadding: null,
  /**
  * Determines whether the return key should be suppressed during entry.
  * @type Boolean
  * @requires iphone, ipad, mobileweb
  */
  suppressReturn: null,
  /**
  * Returns the currently selected text of the text field.
  * @type textFieldSelectedParams
  * @requires iphone, ipad, android
  */
  selection: null,
  /**
  * Text alignment within this text field.
  * @type String,Number
  */
  textAlign: null,
  /**
  * Value of this text field, which may be set programmatically and modified by the user.
  * @type String
  */
  value: null,
  /**
  * Vertical alignment within this text field.
  * @type Number,String
  * @requires iphone, ipad, android
  */
  verticalAlign: null,
  /**
  * Maximum length of text field input.
  * @type Number
  * @requires android, iphone, mobileweb
  */
  maxLength: null,
};

/**
*/
Titanium.UI.TextField.add = function() {};

/**
* Forces the field to lose focus.
*/
Titanium.UI.TextField.blur = function() {};

/**
* Forces the field to gain focus.
*/
Titanium.UI.TextField.focus = function() {};

/**
* Returns `true` if this text field contains text.
* @since 2.1.0
*/
Titanium.UI.TextField.hasText = function() {};

/**
*/
Titanium.UI.TextField.remove = function() {};

/**
* Selects the text in range (start, end).
* @since 3.0.0
* @param {Number} start Start index for selection. Value ranges from 0 to the text's length.
* @param {Number} end End index for selection, not inclusive. Value ranges from 0 to the text's length.
*/
Titanium.UI.TextField.setSelection = function(start, end) {};
/**
* Fired when the field loses focus.
* @event Titanium.UI.TextField#blur
* @type {Object}
* @type String value Value of the field.
*/
/**
* Fired when the field value changes.
* @event Titanium.UI.TextField#change
* @type {Object}
* @type String value New value of the field.
*/
/**
* Fired when the field gains focus.
* @event Titanium.UI.TextField#focus
* @type {Object}
* @type String value Value of the field.
*/
/**
* Fired when the return key is pressed on the keyboard.
* @event Titanium.UI.TextField#return
* @type {Object}
* @type String value Value of this text area.
*/
/**
*/
textFieldSelectedParams = {
  /**
  * Starting position of selected text.
  * @type Number
  */
  location: null,
  /**
  * Number of characters selected.
  * @type Number
  */
  length: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @requires iphone, ipad
*/
Titanium.UI.Toolbar = {
  /**
  * Background color for the toolbar, as a color name or hex triplet.
  * @type String
  */
  barColor: null,
  /**
  * An array of buttons (or other widgets) contained in the toolbar.
  * @type Array<Titanium.UI.View>
  */
  items: null,
  /**
  * If `true`, a border is drawn on the top of the toolbar.
  * @type Boolean
  */
  borderTop: null,
  /**
  * If `true`, a border is drawn on the bottom of the toolbar.
  * @type Boolean
  */
  borderBottom: null,
  /**
  * If `true`, a translucent background color is used for the toolbar.
  * @type Boolean
  */
  translucent: null,
};


/**
* @extends Titanium.Module
* @since 0.4
*/
Titanium.UI = {
  /**
  * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that startsslowly and speeds up.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  ANIMATION_CURVE_EASE_IN: null,
  /**
  * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that startsslowly, and speeds up, then slows down at the end of the animation.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  ANIMATION_CURVE_EASE_IN_OUT: null,
  /**
  * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that startsquickly, then slows down at the end of the animation.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  ANIMATION_CURVE_EASE_OUT: null,
  /**
  * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that proceedsat a constant rate.
  * @type Number
  * @requires iphone, ipad, mobileweb
  */
  ANIMATION_CURVE_LINEAR: null,
  /**
  * Use with <Attribute.type> to specify a font.
  * @type Number
  * @requires android, iphone, ipad
  */
  ATTRIBUTE_FONT: null,
  /**
  * Use with <Attribute.type> to specify a font color.
  * @type Number
  * @requires android, iphone, ipad
  */
  ATTRIBUTE_FOREGROUND_COLOR: null,
  /**
  * Use with <Attribute.type> to specify a background color.
  * @type Number
  * @requires android, iphone, ipad
  */
  ATTRIBUTE_BACKGROUND_COLOR: null,
  /**
  * Use with <Attribute.type> to enable or disable ligatures.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_LIGATURE: null,
  /**
  * Use with <Attribute.value> to use a letterpress text effect.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_LETTERPRESS_STYLE: null,
  /**
  * Use with <Attribute.type> to specify kerning (space between characters).
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_KERN: null,
  /**
  * Use with <Attribute.type> to place a horizontal line through the text.
  * @type Number
  * @requires android, iphone, ipad
  */
  ATTRIBUTE_STRIKETHROUGH_STYLE: null,
  /**
  * Use with <Attribute.type> to place a horizontal line under the text.
  * @type Number
  * @requires android, iphone, ipad
  */
  ATTRIBUTE_UNDERLINES_STYLE: null,
  /**
  * Use with <Attribute.type> to specify a color for the stroke text.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_STROKE_COLOR: null,
  /**
  * Use with <Attribute.type> to specify the width of the stroke text.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_STROKE_WIDTH: null,
  /**
  * Use with <Attribute.type> to display a shadow behind the text.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_SHADOW: null,
  /**
  * Use with <Attribute.type> to control the direction of the text.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_WRITING_DIRECTION: null,
  /**
  * Use with <Attribute.type> to apply a text effect.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_TEXT_EFFECT: null,
  /**
  * Use with <Attribute.type> to create a link.
  * @type Number
  * @requires android, iphone, ipad
  */
  ATTRIBUTE_LINK: null,
  /**
  * Use with <Attribute.type> to apply a different baseline to the text.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_BASELINE_OFFSET: null,
  /**
  * Use with <Attribute.type> to change the color of the horizontal line.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_COLOR: null,
  /**
  * Use with <Attribute.type> to change the color of the horizontal line.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_STRIKETHROUGH_COLOR: null,
  /**
  * Use with <Attribute.type> to skew the text.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_OBLIQUENESS: null,
  /**
  * Use with <Attribute.type> to stretch the text horizontally.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_EXPANSION: null,
  /**
  * Use with <Attribute.value> to not draw a line.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_STYLE_NONE: null,
  /**
  * Use with <Attribute.value> to draw a single line.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_STYLE_SINGLE: null,
  /**
  * Use with <Attribute.value> to draw a thick line.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_STYLE_THICK: null,
  /**
  * Use with <Attribute.value> to draw a double line.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_STYLE_DOUBLE: null,
  /**
  * Use with <Attribute.value> to draw a solid line.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_PATTERN_SOLID: null,
  /**
  * Use with <Attribute.value> to draw a dotted line.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_PATTERN_DOT: null,
  /**
  * Use with <Attribute.value> to draw a dashed line.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_PATTERN_DASH: null,
  /**
  * Use with <Attribute.value> to draw an alternating line of dashes and dots.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT: null,
  /**
  * Use with <Attribute.value> to draw an alternating line of dashes and two dots.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT: null,
  /**
  * Use with <Attribute.value> to draw a line only underneath or through words.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_UNDERLINE_BY_WORD: null,
  /**
  * Use with <Attribute.value> to use the embedded text direction.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_WRITING_DIRECTION_EMBEDDING: null,
  /**
  * Use with <Attribute.value> to override the text direction.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_WRITING_DIRECTION_OVERRIDE: null,
  /**
  * Use with <Attribute.value> to use the[Unicode Bidirection Algorithm rules P2 and P3](http://www.unicode.org/reports/tr9/#The_Paragraph_Level)to determine which direction to use.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_WRITING_DIRECTION_NATURAL: null,
  /**
  * Use with <Attribute.value> to write text left to right.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT: null,
  /**
  * Use with <Attribute.value> to write text right to left.
  * @type Number
  * @requires iphone, ipad
  */
  ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT: null,
  /**
  * Converts strings formatted as addresses into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_ADDRESS: null,
  /**
  * Converts all detectable types of data into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_ALL: null,
  /**
  * Converts strings formatted as calendar events into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_CALENDAR: null,
  /**
  * Converts strings formatted as URLs into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_LINK: null,
  /**
  * Disables converting strings into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_NONE: null,
  /**
  * Converts strings formatted as phone numbers into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_PHONE: null,
  /**
  * Converts strings formatted as addresses into clickable links.
  * @type Number
  * @requires android, iphone, ipad
  */
  AUTOLINK_MAP_ADDRESSES: null,
  /**
  * Converts all detectable types of data into clickable links.
  * @type Number
  * @requires android, iphone, ipad
  */
  AUTOLINK_ALL: null,
  /**
  * Converts strings formatted as calendar events into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTOLINK_CALENDAR: null,
  /**
  * Converts strings formatted as URLs into clickable links.
  * @type Number
  * @requires android, iphone, ipad
  */
  AUTOLINK_URLS: null,
  /**
  * Disables converting strings into clickable links.
  * @type Number
  * @requires android, iphone, ipad
  */
  AUTOLINK_NONE: null,
  /**
  * Converts strings formatted as phone numbers into clickable links.
  * @type Number
  * @requires android, iphone, ipad
  */
  AUTOLINK_PHONE_NUMBERS: null,
  /**
  * Converts strings formatted as email addresses into clickable links.
  * @type Number
  * @requires android, iphone, ipad
  */
  AUTOLINK_EMAIL_ADDRESSES: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_CLEAR: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_COLOR: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_COLOR_BURN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_COLOR_DODGE: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_COPY: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_DARKEN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_DESTINATION_ATOP: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_DESTINATION_IN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_DESTINATION_OUT: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_DESTINATION_OVER: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_DIFFERENCE: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_EXCLUSION: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_HARD_LIGHT: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_HUE: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_LIGHTEN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_LUMINOSITY: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_MULTIPLY: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_NORMAL: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_OVERLAY: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_PLUS_DARKER: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_PLUS_LIGHTER: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_SATURATION: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_SCREEN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_SOFT_LIGHT: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_SOURCE_ATOP: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_SOURCE_IN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_SOURCE_OUT: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  * @requires iphone, ipad
  */
  BLEND_MODE_XOR: null,
  /**
  * Add ellipses at the beginning of the label if the text is too large to fit.
  * @type Number
  * @requires android
  */
  TEXT_ELLIPSIZE_TRUNCATE_START: null,
  /**
  * Add ellipses in the middle of the label if the text is too large to fit.
  * @type Number
  * @requires android
  */
  TEXT_ELLIPSIZE_TRUNCATE_MIDDLE: null,
  /**
  * Add ellipses at the end of the label if the text is too large to fit.
  * @type Number
  * @requires android
  */
  TEXT_ELLIPSIZE_TRUNCATE_END: null,
  /**
  * Turns on a marquee effect of the label if the text is too large to fit. (This requires <Titanium.UI.Label.focusable> to be true)
  * @type Number
  * @requires android
  */
  TEXT_ELLIPSIZE_TRUNCATE_MARQUEE: null,
  /**
  * Specifies that the top edge of the window can extend.
  * @type Number
  * @requires iphone, ipad
  */
  EXTEND_EDGE_TOP: null,
  /**
  * Specifies that the bottom edge of the window can extend.
  * @type Number
  * @requires iphone, ipad
  */
  EXTEND_EDGE_BOTTOM: null,
  /**
  * Specifies that the left edge of the window can extend.
  * @type Number
  * @requires iphone, ipad
  */
  EXTEND_EDGE_LEFT: null,
  /**
  * Specifies that the right edge of the window can extend.
  * @type Number
  * @requires iphone, ipad
  */
  EXTEND_EDGE_RIGHT: null,
  /**
  * Specifies that none of the edges of the window can extend.
  * @type Number
  * @requires iphone, ipad
  */
  EXTEND_EDGE_NONE: null,
  /**
  * Specifies that all the edges of the window can extend.
  * @type Number
  * @requires iphone, ipad
  */
  EXTEND_EDGE_ALL: null,
  /**
  * Constant value for face-down orientation.
  * @type Number
  */
  FACE_DOWN: null,
  /**
  * Constant value for face-up orientation.
  * @type Number
  */
  FACE_UP: null,
  /**
  * FILL behavior for UI layout.
  * @type String
  */
  FILL: null,
  /**
  * INHERIT behavior for UI layout.
  * @type String
  * @requires mobileweb
  */
  INHERIT: null,
  /**
  * Use a bezel-style border on the input field.
  * @type Number
  */
  INPUT_BORDERSTYLE_BEZEL: null,
  /**
  * Use a simple line border on the input field.
  * @type Number
  */
  INPUT_BORDERSTYLE_LINE: null,
  /**
  * Use no border on the input field.
  * @type Number
  */
  INPUT_BORDERSTYLE_NONE: null,
  /**
  * Use a rounded-rectangle border on the input field.
  * @type Number
  */
  INPUT_BORDERSTYLE_ROUNDED: null,
  /**
  * Always show buttons on the input field.
  * @type Number
  * @requires android, iphone, ipad
  */
  INPUT_BUTTONMODE_ALWAYS: null,
  /**
  * Never show buttons on the input field.
  * @type Number
  * @requires android, iphone, ipad
  */
  INPUT_BUTTONMODE_NEVER: null,
  /**
  * Show buttons on the input field when it loses focus.
  * @type Number
  * @requires iphone, ipad
  */
  INPUT_BUTTONMODE_ONBLUR: null,
  /**
  * Show buttons on the input field when it gains focus.
  * @type Number
  * @requires android, iphone, ipad
  */
  INPUT_BUTTONMODE_ONFOCUS: null,
  /**
  * Use a keyboard appearance suitable for entering text on an alert.
  * @type Number
  * @requires iphone, ipad
  */
  KEYBOARD_APPEARANCE_ALERT: null,
  /**
  * Use the platform-specific default keyboard appearance.
  * @type Number
  * @requires iphone, ipad
  */
  KEYBOARD_APPEARANCE_DEFAULT: null,
  /**
  * Use an ASCII keyboard, with the standard keyboard layout.
  * @type Number
  * @requires android, iphone, ipad
  */
  KEYBOARD_ASCII: null,
  /**
  * Use a keyboard with decimal numbers only, with the pad keyboard layout.
  * @type Number
  * @requires android, iphone, ipad
  */
  KEYBOARD_DECIMAL_PAD: null,
  /**
  * Use the default keyboard, depending on the platform.
  * @type Number
  */
  KEYBOARD_DEFAULT: null,
  /**
  * Use a keyboard suitable for composing email, with the standard keyboard layout.
  * @type Number
  */
  KEYBOARD_EMAIL: null,
  /**
  * Use a keyboard suitable for entering names and phone numbers, with the pad keyboard layout.
  * @type Number
  * @requires android, iphone, ipad
  */
  KEYBOARD_NAMEPHONE_PAD: null,
  /**
  * Use a keyboard with numbers and punctuation only, with the standard keyboard layout.
  * @type Number
  * @requires android, iphone, ipad
  */
  KEYBOARD_NUMBERS_PUNCTUATION: null,
  /**
  * Use a keyboard with a number pad only, with the pad keyboard layout.
  * @type Number
  */
  KEYBOARD_NUMBER_PAD: null,
  /**
  * Use a keyboard with a phone-style number pad, with the pad keyboard layout.
  * @type Number
  */
  KEYBOARD_PHONE_PAD: null,
  /**
  * Use an keyboard optimized for entering URLs, with the standard keyboard layout.
  * @type Number
  */
  KEYBOARD_URL: null,
  /**
  * Standard landscape orientation (home button on left).
  * @type Number
  */
  LANDSCAPE_LEFT: null,
  /**
  * Reverse landscape orientation (home button on right).
  * @type Number
  * @requires android, iphone, ipad
  */
  LANDSCAPE_RIGHT: null,
  /**
  * Do not display anything on the right side of an item in a list view.
  * @type Number
  * @requires android, iphone, ipad
  */
  LIST_ACCESSORY_TYPE_NONE: null,
  /**
  * Displays a checkmark on the right side of an item in a list view.
  * @type Number
  * @requires android, iphone, ipad
  */
  LIST_ACCESSORY_TYPE_CHECKMARK: null,
  /**
  * Displays a detail disclosure button on the right side of an item in a list view.
  * @type Number
  * @requires android, iphone, ipad
  */
  LIST_ACCESSORY_TYPE_DETAIL: null,
  /**
  * Displays a disclosure indicator on the right side of an item in a list view.
  * @type Number
  * @requires android, iphone, ipad
  */
  LIST_ACCESSORY_TYPE_DISCLOSURE: null,
  /**
  * A built-in style for an item with an image view and left-aligned title label.
  * @type Number
  * @requires android, iphone, ipad
  */
  LIST_ITEM_TEMPLATE_DEFAULT: null,
  /**
  * A built-in style for a item with an image view; a left-aligned title label; and aright-aligned subtitle label.
  * @type Number
  * @requires iphone, ipad
  */
  LIST_ITEM_TEMPLATE_SETTINGS: null,
  /**
  * A built-in style for an item with a right-aligned title label on the left side of the cell,which is next to a left-aligned subtitle label.
  * @type Number
  * @requires iphone, ipad
  */
  LIST_ITEM_TEMPLATE_CONTACTS: null,
  /**
  * A built-in style for an item with an image view; a black, left-aligned title label across thetop of the cell and a subtitle label below it.
  * @type Number
  * @requires iphone, ipad
  */
  LIST_ITEM_TEMPLATE_SUBTITLE: null,
  /**
  * Specifies a long duration for an Android Toast notification (<Titanium.UI.Notification>).
  * @type Number
  * @requires android
  */
  NOTIFICATION_DURATION_LONG: null,
  /**
  * Specifies a short duration for an Android Toast notification (<Titanium.UI.Notification>).
  * @type Number
  * @requires android
  */
  NOTIFICATION_DURATION_SHORT: null,
  /**
  * Use a picker with a countdown timer appearance, showing hours and minutes.
  * @type Number
  * @requires iphone, ipad
  */
  PICKER_TYPE_COUNT_DOWN_TIMER: null,
  /**
  * Use a date picker.
  * @type Number
  */
  PICKER_TYPE_DATE: null,
  /**
  * Use a date and time picker.
  * @type Number
  */
  PICKER_TYPE_DATE_AND_TIME: null,
  /**
  * Use a plain picker (for values other than date or time).
  * @type Number
  */
  PICKER_TYPE_PLAIN: null,
  /**
  * Use a time picker.
  * @type Number
  */
  PICKER_TYPE_TIME: null,
  /**
  * Orientation constant for portrait mode orientation.
  * @type Number
  */
  PORTRAIT: null,
  /**
  * Use the default return key on the virtual keyboard.
  * @type Number
  */
  RETURNKEY_DEFAULT: null,
  /**
  * Set the return key text to "Done".
  * @type Number
  * @requires android, iphone, ipad
  */
  RETURNKEY_DONE: null,
  /**
  * Set the return key text to "Emergency Call".
  * @type Number
  * @requires android, iphone, ipad
  */
  RETURNKEY_EMERGENCY_CALL: null,
  /**
  * Set the return key text to "Go".
  * @type Number
  */
  RETURNKEY_GO: null,
  /**
  * Set the return key text to "Google".
  * @type Number
  */
  RETURNKEY_GOOGLE: null,
  /**
  * Set the return key text to "Join".
  * @type Number
  * @requires android, iphone, ipad
  */
  RETURNKEY_JOIN: null,
  /**
  * Set the return key text to "Next".
  * @type Number
  * @requires android, iphone, ipad
  */
  RETURNKEY_NEXT: null,
  /**
  * Set the return key text to "Route".
  * @type Number
  * @requires android, iphone, ipad
  */
  RETURNKEY_ROUTE: null,
  /**
  * Set the return key text to "Search".
  * @type Number
  */
  RETURNKEY_SEARCH: null,
  /**
  * Set the return key text to "Send".
  * @type Number
  * @requires android, iphone, ipad
  */
  RETURNKEY_SEND: null,
  /**
  * Set the return key text to "Yahoo".
  * @type Number
  */
  RETURNKEY_YAHOO: null,
  /**
  * SIZE behavior for UI layout.
  * @type String
  */
  SIZE: null,
  /**
  * Center align text.
  * @type Number,String
  */
  TEXT_ALIGNMENT_CENTER: null,
  /**
  * Left align text.
  * @type Number,String
  */
  TEXT_ALIGNMENT_LEFT: null,
  /**
  * Right align text.
  * @type Number,String
  */
  TEXT_ALIGNMENT_RIGHT: null,
  /**
  * Auto-capitalize all text in the input field.
  * @type Number
  */
  TEXT_AUTOCAPITALIZATION_ALL: null,
  /**
  * Do not auto-capitalize.
  * @type Number
  */
  TEXT_AUTOCAPITALIZATION_NONE: null,
  /**
  * Use sentence-style auto-capitalization in the input field.
  * @type Number
  */
  TEXT_AUTOCAPITALIZATION_SENTENCES: null,
  /**
  * Auto-capitalize the first letter of each word in the input field.
  * @type Number
  * @requires android, iphone, ipad
  */
  TEXT_AUTOCAPITALIZATION_WORDS: null,
  /**
  * Specifies the text style for the <Font> Object.
  * @type String
  * @requires iphone, ipad
  */
  TEXT_STYLE_HEADLINE: null,
  /**
  * Specifies the text style for the <Font> Object.
  * @type String
  * @requires iphone, ipad
  */
  TEXT_STYLE_SUBHEADLINE: null,
  /**
  * Specifies the text style for the <Font> Object.
  * @type String
  * @requires iphone, ipad
  */
  TEXT_STYLE_BODY: null,
  /**
  * Specifies the text style for the <Font> Object.
  * @type String
  * @requires iphone, ipad
  */
  TEXT_STYLE_FOOTNOTE: null,
  /**
  * Specifies the text style for the <Font> Object.
  * @type String
  * @requires iphone, ipad
  */
  TEXT_STYLE_CAPTION1: null,
  /**
  * Specifies the text style for the <Font> Object.
  * @type String
  * @requires iphone, ipad
  */
  TEXT_STYLE_CAPTION2: null,
  /**
  * Align text to the bottom of the view.
  * @type Number,String
  */
  TEXT_VERTICAL_ALIGNMENT_BOTTOM: null,
  /**
  * Vertically align text to the center of the view.
  * @type Number,String
  */
  TEXT_VERTICAL_ALIGNMENT_CENTER: null,
  /**
  * Align text to the top of the view.
  * @type Number,String
  */
  TEXT_VERTICAL_ALIGNMENT_TOP: null,
  /**
  * Unit constant representing units in centimeters.
  * @type String
  */
  UNIT_CM: null,
  /**
  * Unit constant representing units in density-independent pixels.
  * @type String
  */
  UNIT_DIP: null,
  /**
  * Unit constant representing units in inches.
  * @type String
  */
  UNIT_IN: null,
  /**
  * Unit constant representing units in millimeters.
  * @type String
  */
  UNIT_MM: null,
  /**
  * Unit constant representing units in pixels.
  * @type String
  */
  UNIT_PX: null,
  /**
  * Orientation constant representing an unknown orientation.
  * @type Number
  */
  UNKNOWN: null,
  /**
  * Orientation constant for inverted portait orientation.
  * @type Number
  * @requires android, iphone, ipad
  */
  UPSIDE_PORTRAIT: null,
  /**
  * Authentication error code reported via <Titanium.UI.WebView.error>.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_AUTHENTICATION: null,
  /**
  * Bad url error code reported via <Titanium.UI.WebView.error>.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_BAD_URL: null,
  /**
  * Error code reported via <Titanium.UI.WebView.error> for a failure to connect to host.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_CONNECT: null,
  /**
  * Error code reported via <Titanium.UI.WebView.error> for an SSL failure.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_SSL_FAILED: null,
  /**
  * Error code reported via <Titanium.UI.WebView.error> for a failure to access a file resource on a host, except "file not found", which has its own constant.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_FILE: null,
  /**
  * Error code reported via <Titanium.UI.WebView.error> when a requested file does not exist on the host.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_FILE_NOT_FOUND: null,
  /**
  * Error code reported via <Titanium.UI.WebView.error> when a host name cannot be resolved, such as via a DNS lookup error.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_HOST_LOOKUP: null,
  /**
  * Error code reported via <Titanium.UI.WebView.error> when a redirect loop is detected.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_REDIRECT_LOOP: null,
  /**
  * Error code reported via <Titanium.UI.WebView.error> when a timeout occurs.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_TIMEOUT: null,
  /**
  * Error code reported via <Titanium.UI.WebView.error> when an unknown error occurs.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_UNKNOWN: null,
  /**
  * Error code reported via <Titanium.UI.WebView.error> when a url contains an unsupported scheme.
  * @type Number
  * @requires android, iphone, ipad
  */
  URL_ERROR_UNSUPPORTED_SCHEME: null,
  /**
  * Sets the background color of the master view (when there are no windows or other top-level controls displayed).
  * @type String
  */
  backgroundColor: null,
  /**
  * Local path or URL to an image file for setting a background for the master view (when there are no windows or other top-level controls displayed).
  * @type String
  */
  backgroundImage: null,
  /**
  * The currently active tab, if a tab group is open.
  * @type Titanium.UI.Tab
  */
  currentTab: null,
  /**
  * The active window associated with the executing JavaScript context.
  * @type Titanium.UI.Window
  */
  currentWindow: null,
  /**
  * Updates the orientation of the current window to the specified orientation value.
  * @type Number
  * @requires android, iphone, ipad
  */
  orientation: null,
};

/**
* Creates and returns an instance of <Titanium.UI.2DMatrix>.
* @param {MatrixCreationDict} parameters Initial transformation of the matrix.
*/
Titanium.UI.create2DMatrix = function(parameters) {};

/**
* Converts one type of unit to another using the metrics of the main display.
* @since 2.0.0
* @param {String} convertFromValue Measurement and optional unit to convert from, i.e. 160, "120dip".  Percentages are not accepted.
* @param {Number} convertToUnits Desired unit for the conversion result.
*/
Titanium.UI.convertUnits = function(convertFromValue, convertToUnits) {};

/**
* @extends Titanium.Proxy
* @since 0.9
* @fires Titanium.UI.View#click
* @fires Titanium.UI.View#dblclick
* @fires Titanium.UI.View#doubletap
* @fires Titanium.UI.View#focus
* @fires Titanium.UI.View#keypressed
* @fires Titanium.UI.View#longclick
* @fires Titanium.UI.View#longpress
* @fires Titanium.UI.View#pinch
* @fires Titanium.UI.View#postlayout
* @fires Titanium.UI.View#singletap
* @fires Titanium.UI.View#swipe
* @fires Titanium.UI.View#touchcancel
* @fires Titanium.UI.View#touchend
* @fires Titanium.UI.View#touchmove
* @fires Titanium.UI.View#touchstart
* @fires Titanium.UI.View#twofingertap
*/
Titanium.UI.View = {
  /**
  * Whether the view should be "hidden" from (i.e., ignored by) the accessibility service.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  accessibilityHidden: null,
  /**
  * Briefly describes what performing an action (such as a click) on the view will do.
  * @type String
  * @requires android, iphone, ipad
  */
  accessibilityHint: null,
  /**
  * A succint label identifying the view for the device's accessibility service.
  * @type String
  * @requires android, iphone, ipad
  */
  accessibilityLabel: null,
  /**
  * A string describing the value (if any) of the view for the device's accessibility service.
  * @type String
  * @requires android, iphone, ipad
  */
  accessibilityValue: null,
  /**
  * Coordinate of the view about which to pivot an animation.
  * @type Point
  * @requires iphone, ipad
  */
  anchorPoint: null,
  /**
  * Current position of the view during an animation.
  * @type Point
  * @requires iphone, ipad
  */
  animatedCenter: null,
  /**
  * Background color of the view, as a color name or hex triplet.
  * @type String
  */
  backgroundColor: null,
  /**
  * Disabled background color of the view, as a color name or hex triplet.
  * @type String
  * @requires android
  */
  backgroundDisabledColor: null,
  /**
  * Disabled background image for the view, specified as a local file path or URL.
  * @type String
  * @requires android
  */
  backgroundDisabledImage: null,
  /**
  * Focused background color of the view, as a color name or hex triplet.
  * @type String
  * @requires android
  */
  backgroundFocusedColor: null,
  /**
  * Focused background image for the view, specified as a local file path or URL.
  * @type String
  * @requires android
  */
  backgroundFocusedImage: null,
  /**
  * A background gradient for the view.
  * @type Gradient
  * @requires iphone, ipad, mobileweb, android
  */
  backgroundGradient: null,
  /**
  * Background image for the view, specified as a local file path or URL.
  * @type String
  */
  backgroundImage: null,
  /**
  * Determines whether to tile a background across a view.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  backgroundRepeat: null,
  /**
  * Size of the left end cap.
  * @type Number
  * @requires iphone, ipad
  */
  backgroundLeftCap: null,
  /**
  * Selected background color of the view, as a color name or hex triplet.
  * @type String
  * @requires android, mobileweb
  */
  backgroundSelectedColor: null,
  /**
  * Selected background image url for the view, specified as a local file path or URL.
  * @type String
  * @requires android, mobileweb
  */
  backgroundSelectedImage: null,
  /**
  * Size of the top end cap.
  * @type Number
  * @requires iphone, ipad
  */
  backgroundTopCap: null,
  /**
  * Border color of the view, as a color name or hex triplet.
  * @type String
  */
  borderColor: null,
  /**
  * Radius for the rounded corners of the view's border.
  * @type Number
  */
  borderRadius: null,
  /**
  * Border width of the view.
  * @type Number
  */
  borderWidth: null,
  /**
  * View's bottom position, in platform-specific units.
  * @type Number,String
  */
  bottom: null,
  /**
  * View's center position, in the parent view's coordinates.
  * @type Point
  */
  center: null,
  /**
  * Array of this view's child views.
  * @type Array<Titanium.UI.View>
  */
  children: null,
  /**
  * View's clipping behavior.
  * @type Number
  * @requires iphone, ipad
  */
  clipMode: null,
  /**
  * Sets the elevation of this view
  * @type Number
  * @requires android
  */
  elevation: null,
  /**
  * Whether view should be focusable while navigating with the trackball.
  * @type Boolean
  * @requires android
  */
  focusable: null,
  /**
  * View height, in platform-specific units.
  * @type Number,String
  */
  height: null,
  /**
  * View's left position, in platform-specific units.
  * @type Number,String
  */
  left: null,
  /**
  * Specifies how the view positions its children. One of: 'composite', 'vertical', or 'horizontal'.
  * @type String
  */
  layout: null,
  /**
  * Opacity of this view, from 0.0 (transparent) to 1.0 (opaque).
  * @type Number
  */
  opacity: null,
  /**
  * When on, animate call overrides current animation if applicable.
  * @type Boolean
  * @requires android
  */
  overrideCurrentAnimation: null,
  /**
  * Background color of the wrapper view when this view is used as either <Titanium.UI.ListView.pullView> or <Titanium.UI.TableView.headerPullView>.
  * @type String
  * @requires iphone, ipad
  */
  pullBackgroundColor: null,
  /**
  * View's right position, in platform-specific units.
  * @type Number,String
  */
  right: null,
  /**
  * The bounding box of the view relative to its parent, in system units.
  * @type Dimension
  */
  rect: null,
  /**
  * The size of the view in system units. 
  * @type Dimension
  */
  size: null,
  /**
  * Determines keyboard behavior when this view is focused.
  * @type Number
  * @requires android
  */
  softKeyboardOnFocus: null,
  /**
  * The view's tintColor. This property is applicable on iOS 7 and greater.
  * @type String
  * @requires iphone, ipad
  */
  tintColor: null,
  /**
  * The view's top position.
  * @type Number,String
  */
  top: null,
  /**
  * Determines whether view should receive touch events.
  * @type Boolean
  */
  touchEnabled: null,
  /**
  * Transformation matrix to apply to the view.
  * @type Titanium.UI.2DMatrix,Titanium.UI.3DMatrix
  */
  transform: null,
  /**
  * Determines the blur radius used to create the shadow.
  * @type Number
  * @requires iphone, ipad
  */
  viewShadowRadius: null,
  /**
  * Determines the color of the shadow.
  * @type String
  * @requires iphone, ipad
  */
  viewShadowColor: null,
  /**
  * Determines the offset for the shadow of the view.
  * @type Point
  * @requires iphone, ipad
  */
  viewShadowOffset: null,
  /**
  * Determines whether the view is visible.
  * @type Boolean
  */
  visible: null,
  /**
  * View's width, in platform-specific units.
  * @type Number,String
  */
  width: null,
  /**
  * Determines whether the layout has wrapping behavior.
  * @type Boolean
  */
  horizontalWrap: null,
  /**
  * Z-index stack order position, relative to other sibling views.
  * @type Number
  */
  zIndex: null,
  /**
  * Determines whether to keep the device screen on.
  * @type Boolean
  * @requires android
  */
  keepScreenOn: null,
};

/**
* Adds a child to this view's hierarchy.
* @param {Titanium.UI.View} view View to add to this view's hierarchy.
*/
Titanium.UI.View.add = function(view) {};

/**
* Animates this view.
* @param {Titanium.UI.Animation|Dictionary<Titanium.UI.Animation>} animation Either a dictionary of animation properties or an [Animation](Titanium.UI.Animation) object.
* @param {Callback<Object>} callback Function to be invoked upon completion of the animation.
*/
Titanium.UI.View.animate = function(animation, callback) {};

/**
* Finishes a batch update of the View's layout properties and schedules a layout pass of the view tree.
* @deprecated since 3.0.0
* @since 2.0.0
*/
Titanium.UI.View.finishLayout = function() {};

/**
* Hides this view.
*/
Titanium.UI.View.hide = function() {};

/**
* Removes a child view from this view's hierarchy.
* @param {Titanium.UI.View} view View to remove from this view's hierarchy.
*/
Titanium.UI.View.remove = function(view) {};

/**
* Removes all child views from this view's hierarchy.
* @since [object Object]
*/
Titanium.UI.View.removeAllChildren = function() {};

/**
* Makes this view visible.
*/
Titanium.UI.View.show = function() {};

/**
* Starts a batch update of this view's layout properties.
* @deprecated since 3.0.0
* @since 2.0.0
*/
Titanium.UI.View.startLayout = function() {};

/**
* Returns an image of the rendered view, as a Blob.
* @param {Callback<Titanium.Blob>} callback Function to be invoked upon completion. If non-null, this method will be performed asynchronously. If null, it will be performed immediately.
* @param {Boolean} honorScaleFactor Determines whether the image is scaled based on scale factor of main screen. (iOS only) When set to true, image is scale factor is honored. When set to false, the image in the blob has the same dimensions for retina and non-retina devices.Starting with version 3.5.0 of the Titanium SDK, this value is no longer checked and always behaves as true.
*/
Titanium.UI.View.toImage = function(callback, honorScaleFactor) {};

/**
* Performs a batch update of all supplied layout properties and schedules a layout pass after they have been updated.
* @deprecated since 3.0.0
* @since 2.0.0
* @param {Dictionary} params Layout properties to be updated.
*/
Titanium.UI.View.updateLayout = function(params) {};

/**
* Translates a point from this view's coordinate system to another view's coordinate system.
* @since [object Object]
* @param {Point} point A point in this view's coordinate system. If this argument is missing an `x` or `y` property, or the properties can not be converted into numbers, an exception will be raised.
* @param {Titanium.UI.View} destinationView View that specifies the destination coordinate system to convert to. If this argument is not a view, an exception will be raised.
*/
Titanium.UI.View.convertPointToView = function(point, destinationView) {};
/**
* Fired when the device detects a click against the view.
* @event Titanium.UI.View#click
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a double click against the view.
* @event Titanium.UI.View#dblclick
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a double tap against the view.
* @event Titanium.UI.View#doubletap
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the view element gains focus.
* @event Titanium.UI.View#focus
* @type {Object}
*/
/**
* Fired when a hardware key is pressed in the view.
* @event Titanium.UI.View#keypressed
* @type {Object}
* @type Number keyCode The code for the physical key that was pressed. For more details, see [KeyEvent](http://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
*/
/**
* Fired when the device detects a long click.
* @event Titanium.UI.View#longclick
* @type {Object}
*/
/**
* Fired when the device detects a long press.
* @event Titanium.UI.View#longpress
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a pinch gesture.
* @event Titanium.UI.View#pinch
* @type {Object}
* @type Number scale The scale factor relative to the points of the two touches in screen coordinates.
* @type Number velocity The velocity of the pinch in scale factor per second.
*/
/**
* Fired when a layout cycle is finished.
* @event Titanium.UI.View#postlayout
* @type {Object}
*/
/**
* Fired when the device detects a single tap against the view.
* @event Titanium.UI.View#singletap
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a swipe gesture against the view.
* @event Titanium.UI.View#swipe
* @type {Object}
* @type String direction Direction of the swipe--either 'left', 'right', 'up', or 'down'.
* @type Number x X coordinate of the event's endpoint from the `source` view's coordinate system.
* @type Number y Y coordinate of the event's endpoint from the `source` view's coordinate system.
*/
/**
* Fired when a touch event is interrupted by the device.
* @event Titanium.UI.View#touchcancel
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when a touch event is completed.
* @event Titanium.UI.View#touchend
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired as soon as the device detects movement of a touch.
* @event Titanium.UI.View#touchmove
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired as soon as the device detects a touch gesture.
* @event Titanium.UI.View#touchstart
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* Fired when the device detects a two-finger tap against the view.
* @event Titanium.UI.View#twofingertap
* @type {Object}
* @type Number x X coordinate of the event from the `source` view's coordinate system.
* @type Number y Y coordinate of the event from the `source` view's coordinate system.
*/
/**
* @since 1.8.0
* @requires android, iphone, ipad
*/
Point = {
  /**
  * The x-axis coordinate of this point.
  * @type Number
  */
  x: null,
  /**
  * The y-axis coordinate of this point.
  * @type Number
  */
  y: null,
};


/**
* @since 1.8.0
* @requires iphone, ipad, mobileweb
*/
Gradient = {
  /**
  * Type of gradient, either 'linear' or 'radial'.
  * @type String
  */
  type: null,
  /**
  * Start point for the gradient.
  * @type Point
  */
  startPoint: null,
  /**
  * End point for the gradient.
  * @type Point
  */
  endPoint: null,
  /**
  * For a radial gradient, the radius at the `startPoint`.
  * @type Number
  */
  startRadius: null,
  /**
  * For a radial gradient, the radius at the `endPoint`.
  * @type Number
  */
  endRadius: null,
  /**
  * An array of colors, as a color name or hex triplet.
  * @type Array<String>,Array<GradientColorRef>
  */
  colors: null,
  /**
  * Set to `true` to continue filling with the starting color beyond the `startPoint`.
  * @type Boolean
  * @requires iphone, ipad
  */
  backfillStart: null,
  /**
  * Set to `true` to continue filling with the final color beyond the `endPoint`.
  * @type Boolean
  * @requires iphone, ipad
  */
  backfillEnd: null,
};


/**
*/
GradientColorRef = {
  /**
  * Color value at this point in the gradient, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Offset of this color in the gradient, from 0 (start) to 1 (end).
  * @type Number
  */
  offset: null,
};


/**
* @since 2.0.0
*/
Dimension = {
  /**
  * The height measurement.
  * @type Number
  */
  height: null,
  /**
  * The width measurement.
  * @type Number
  */
  width: null,
  /**
  * The x-axis coordinate of the position.
  * @type Number
  */
  x: null,
  /**
  * The y-axis coordinate of the position.
  * @type Number
  */
  y: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @fires Titanium.UI.WebView#beforeload
* @fires Titanium.UI.WebView#error
* @fires Titanium.UI.WebView#load
* @fires Titanium.UI.WebView#onLoadResource
* @fires Titanium.UI.WebView#sslerror
*/
Titanium.UI.WebView = {
  /**
  * Web content to load.
  * @type Titanium.Blob,Titanium.Filesystem.File
  */
  data: null,
  /**
  * Determines whether the view will bounce when scrolling to the edge of the scrollable region.
  * @type Boolean
  * @requires iphone, ipad
  */
  disableBounce: null,
  /**
  * Enable adding javascript interfaces internally to webview prior to JELLY_BEAN_MR1 (Android 4.2)
  * @type Boolean
  * @requires android
  */
  enableJavascriptInterface: null,
  /**
  * Lets the webview handle platform supported urls
  * @type Boolean
  * @requires iphone, ipad
  */
  handlePlatformUrl: null,
  /**
  * Hides activity indicator when loading remote URL.
  * @type Boolean
  * @requires iphone, ipad
  */
  hideLoadIndicator: null,
  /**
  * HTML content of this web view.
  * @type String
  */
  html: null,
  /**
  * Controls whether to ignore invalid SSL certificates or not.
  * @type Boolean
  * @requires android
  */
  ignoreSslError: null,
  /**
  * Indicates if the webview is loading content.
  * @type Boolean
  */
  loading: null,
  /**
  * Callback function called when there is a request for the application to create a new windowto host new content.
  * @type Callback<Object>
  * @requires android
  */
  onCreateWindow: null,
  /**
  * Determines the behavior when the user overscrolls the view.
  * @type Number
  * @requires android
  */
  overScrollMode: null,
  /**
  * Determines how a cache is used in this web view.
  * @type Number
  * @requires android
  */
  cacheMode: null,
  /**
  * Determines how to treat content that requires plugins in this web view.
  * @type Number
  * @requires android
  */
  pluginState: null,
  /**
  * Controls whether the scroll-to-top gesture is effective.
  * @type Boolean
  * @requires iphone, ipad
  */
  scrollsToTop: null,
  /**
  * If `true`, scrollbars are displayed if content is larger than the web view.
  * @type Boolean
  * @requires mobileweb
  */
  showScrollbars: null,
  /**
  * If `true`, zoom controls are enabled.
  * @type Boolean
  * @requires android
  */
  enableZoomControls: null,
  /**
  * If `true`, scale contents to fit the web view.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  scalesPageToFit: null,
  /**
  * URL to the web document.
  * @type String
  */
  url: null,
  /**
  * The User-Agent header used by the web view when requesting content.
  * @type String
  * @requires android
  */
  userAgent: null,
  /**
  * Explicitly specifies if this web view handles touches.
  * @type Boolean
  * @requires iphone, ipad
  */
  willHandleTouches: null,
  /**
  * Enables using light touches to make a selection and activate mouseovers.
  * @type Boolean
  * @requires android
  */
  lightTouchEnabled: null,
};

/**
* Sets the value of [html](Titanium.UI.WebView.html) property.
* @param {Object} html New HTML to display in the web view.
* @param {Dictionary} options Optional parameters for the content. Only used by iOS and Android.
*/
Titanium.UI.WebView.setHtml = function(html, options) {};

/**
* Returns `true` if the web view can go back in its history list.
*/
Titanium.UI.WebView.canGoBack = function() {};

/**
* Returns `true` if the web view can go forward in its history list.
*/
Titanium.UI.WebView.canGoForward = function() {};

/**
* Evaluates a JavaScript expression inside the context of the web view andoptionally, returns a result.
* @param {String} code JavaScript code as a string. The code will be evaluated inside the web view context.
*/
Titanium.UI.WebView.evalJS = function(code) {};

/**
* Goes back one entry in the web view's history list, to the previous page.
*/
Titanium.UI.WebView.goBack = function() {};

/**
* Goes forward one entry in this web view's history list, if possible.
*/
Titanium.UI.WebView.goForward = function() {};

/**
* Pauses native webview plugins.
* @since 1.8.0
*/
Titanium.UI.WebView.pause = function() {};

/**
* Reloads the current webpage.
*/
Titanium.UI.WebView.reload = function() {};

/**
* Forces the web view to repaint its contents.
*/
Titanium.UI.WebView.repaint = function() {};

/**
* Releases memory when the web view is no longer needed.
* @since 2.0.0
*/
Titanium.UI.WebView.release = function() {};

/**
* Resume native webview plugins.
* @since 1.8.0
*/
Titanium.UI.WebView.resume = function() {};

/**
* Sets the basic authentication for this web view to use on subsequent URl requests.
* @param {String} username Basic auth username.
* @param {String} password Basic auth password.
*/
Titanium.UI.WebView.setBasicAuthentication = function(username, password) {};

/**
* Stops loading a currently loading page.
* @param {Boolean} hardStop Forces the web view to destroy the iFrame (Mobile Web only).
*/
Titanium.UI.WebView.stopLoading = function(hardStop) {};
/**
* Fired before the web view starts loading its content.
* @event Titanium.UI.WebView#beforeload
* @type {Object}
* @type undefined url URL of the web document being loaded.
* @type Number navigationType Constant indicating the user's action.
* @requires ipad, iphone
*/
/**
* Fired when the web view cannot load the content.
* @event Titanium.UI.WebView#error
* @type {Object}
* @type Boolean success Indicates a successful operation. Returns `false`.
* @type String error Error message, if any returned. May be undefined.
* @type Number code Error code.If the error was generated by the operating system, that system's error valueis used. Otherwise, this value will be -1.
* @type String url URL of the web document.
* @requires iphone, ipad, mobileweb, android
* @type String message Error message. Use error instead.
* @requires iphone, ipad, mobileweb, android
* @type Number errorCode A constant or underlying platform specific error code. Use code instead.
* @requires iphone, ipad, android
*/
/**
* Fired when the web view content is loaded.
* @event Titanium.UI.WebView#load
* @type {Object}
* @type undefined url URL of the web document.
*/
/**
* Fired when loading resource.
* @event Titanium.UI.WebView#onLoadResource
* @type {Object}
* @type String url The url of the resource that will load.
*/
/**
* Fired when an SSL error occurred.
* @event Titanium.UI.WebView#sslerror
* @type {Object}
* @type Number code SSL error code.
*/
/**
* @extends Titanium.UI.View
* @since 0.9
* @fires Titanium.UI.Window#android:back
* @fires Titanium.UI.Window#android:camera
* @fires Titanium.UI.Window#android:focus
* @fires Titanium.UI.Window#android:search
* @fires Titanium.UI.Window#android:voldown
* @fires Titanium.UI.Window#android:volup
* @fires Titanium.UI.Window#androidback
* @fires Titanium.UI.Window#androidcamera
* @fires Titanium.UI.Window#androidfocus
* @fires Titanium.UI.Window#androidsearch
* @fires Titanium.UI.Window#androidvoldown
* @fires Titanium.UI.Window#androidvolup
* @fires Titanium.UI.Window#blur
* @fires Titanium.UI.Window#close
* @fires Titanium.UI.Window#focus
* @fires Titanium.UI.Window#open
*/
Titanium.UI.Window = {
  /**
  * For lightweight windows, this property returns undefined.For heavyweight windows, this property contains a reference to theAndroid Activity object associated with this window.
  * @type Titanium.Android.Activity
  * @requires android
  */
  activity: null,
  /**
  * Title for the back button. This is only valid when the window is a child of a tab.
  * @type String
  * @requires iphone, ipad
  */
  backButtonTitle: null,
  /**
  * The image to show as the back button. This is only valid when the window is a child of a tab.
  * @type String,Titanium.Blob
  * @requires iphone, ipad
  */
  backButtonTitleImage: null,
  /**
  * Background color of the window, as a color name or hex triplet.
  * @type String
  */
  backgroundColor: null,
  /**
  * Background color for the nav bar, as a color name or hex triplet.
  * @type String
  * @requires iphone, ipad, mobileweb
  */
  barColor: null,
  /**
  * Background image for the nav bar, specified as a URL to a local image.
  * @type String
  * @requires iphone, ipad, mobileweb
  */
  barImage: null,
  /**
  * Window's bottom position, in platform-specific units.
  * @type Number,String
  */
  bottom: null,
  /**
  * Boolean value indicating if the application should exit when the AndroidBack button is pressed while the window is being shown or when the window is closed programmatically.
  * @type Boolean
  * @requires android
  */
  exitOnClose: null,
  /**
  * An array of supported values specified using the EXTEND_EDGE constants in <Titanium.UI>. Valid on iOS 7 and greater.
  * @type Array<Number>
  * @requires iphone, ipad
  */
  extendEdges: null,
  /**
  * Treat the content of the window as secure, preventing it from appearing in screenshots or from being viewed on non-secure displays.
  * @type Boolean
  * @requires android
  */
  flagSecure: null,
  /**
  * Specifies if the edges should extend beyond opaque bars (navigation bar, tab bar, toolbar). Valid on iOS 7 and greater.
  * @type Boolean
  * @requires iphone, ipad
  */
  includeOpaqueBars: null,
  /**
  * Specifies whether or not the view controller should automatically adjust its scroll view insets. Valid on iOS 7 and greater.
  * @type Boolean
  * @requires iphone, ipad
  */
  autoAdjustScrollViewInsets: null,
  /**
  * Boolean value indicating if the window is fullscreen.
  * @type Boolean
  * @requires android, iphone, ipad
  */
  fullscreen: null,
  /**
  * Set this to true to hide the shadow image of the navigation bar.
  * @type Boolean
  * @requires iphone, ipad
  */
  hideShadow: null,
  /**
  * Window's left position, in platform-specific units.
  * @type Number,String
  */
  left: null,
  /**
  * View to show in the left nav bar area.
  * @type Titanium.UI.View
  * @requires iphone, ipad, mobileweb
  */
  leftNavButton: null,
  /**
  * An Array of views to show in the left nav bar area.
  * @type Array<Titanium.UI.View>
  * @requires iphone, ipad
  */
  leftNavButtons: null,
  /**
  * Indicates to open a modal window or not.
  * @type Boolean
  */
  modal: null,
  /**
  * Hides the nav bar (`true`) or shows the nav bar (`false`).
  * @type Boolean
  * @requires android, iphone, ipad, mobileweb
  */
  navBarHidden: null,
  /**
  * The tintColor to apply to the navigation bar. This property is applicable on iOS 7 and greater.
  * @type String
  * @requires iphone, ipad
  */
  navTintColor: null,
  /**
  * The opacity from 0.0-1.0.
  * @type Number
  */
  opacity: null,
  /**
  * Array of supported orientation modes, specified using the orientationconstants defined in <Titanium.UI>.
  * @type Array<Number>
  * @requires android, iphone, ipad
  */
  orientationModes: null,
  /**
  * Current orientation of the window.
  * @type Number
  * @requires android, iphone, ipad
  */
  orientation: null,
  /**
  * Window's right position, in platform-specific units.
  * @type Number,String
  */
  right: null,
  /**
  * View to show in the right nav bar area.
  * @type Titanium.UI.View
  * @requires iphone, ipad, mobileweb
  */
  rightNavButton: null,
  /**
  * An Array of views to show in the right nav bar area.
  * @type Array<Titanium.UI.View>
  * @requires iphone, ipad
  */
  rightNavButtons: null,
  /**
  * Shadow image for the navigation bar, specified as a URL to a local image..
  * @type String
  * @requires iphone, ipad
  */
  shadowImage: null,
  /**
  * Boolean value to enable split action bar.
  * @type Boolean
  * @requires android
  */
  splitActionBar: null,
  /**
  * The status bar style associated with this window.
  * @type Number
  * @requires iphone, ipad
  */
  statusBarStyle: null,
  /**
  * Boolean value indicating if the tab bar should be hidden. 
  * @type Boolean
  * @requires iphone, ipad
  */
  tabBarHidden: null,
  /**
  * Name of the theme to apply to the window.
  * @type String
  * @requires android
  */
  theme: null,
  /**
  * Title of the window.
  * @type String
  */
  title: null,
  /**
  * Title text attributes of the window.
  * @type titleAttributesParams
  * @requires iphone, ipad
  */
  titleAttributes: null,
  /**
  * View to show in the title area of the nav bar.
  * @type Titanium.UI.View
  * @requires iphone, ipad, mobileweb
  */
  titleControl: null,
  /**
  * Image to show in the title area of the nav bar, specified as a local file path or URL.
  * @type String
  * @requires iphone, ipad, mobileweb
  */
  titleImage: null,
  /**
  * Title prompt for the window.
  * @type String
  * @requires iphone, ipad
  */
  titlePrompt: null,
  /**
  * Key identifying a string from the locale file to use for the window title.
  * @type String
  */
  titleid: null,
  /**
  * Key identifying a string from the locale file to use for the window title prompt.
  * @type String
  * @requires iphone, ipad
  */
  titlepromptid: null,
  /**
  * Array of button objects to show in the window's toolbar.
  * @type Array<Object>
  * @requires iphone, ipad
  */
  toolbar: null,
  /**
  * Window's top position, in platform-specific units.
  * @type Number,String
  */
  top: null,
  /**
  * Use a transition animation when opening or closing windows in a<Titanium.UI.iOS.NavigationWindow> or <Titanium.UI.Tab>.
  * @type Titanium.Proxy
  * @requires iphone, ipad
  */
  transitionAnimation: null,
  /**
  * Boolean value indicating if the nav bar is translucent.
  * @type Boolean
  * @requires iphone, ipad, mobileweb
  */
  translucent: null,
  /**
  * Loads a JavaScript file from a local URL.
  * @type String
  */
  url: null,
  /**
  * Additional flags to set on the Activity Window.
  * @type Number
  * @requires android
  */
  windowFlags: null,
  /**
  * Determines whether a heavyweight window's soft input area (ie software keyboard) is visibleas it receives focus and how the window behaves in order to accomodate it while keeping itscontents in view.
  * @type Number
  * @requires android
  */
  windowSoftInputMode: null,
  /**
  * Set the pixel format for the Activity's Window.
  * @type Number
  * @requires android
  */
  windowPixelFormat: null,
};

/**
* Closes the window.
* @param {Dictionary<Titanium.UI.Animation>|closeWindowParams} params Animation or display properties to use when closing the window.
*/
Titanium.UI.Window.close = function(params) {};

/**
* Hides the navigation bar.
* @param {Dictionary} options Options dictionary supporting a single `animated` boolean property to determine whetherthe navigation bar will be animated (default) while being hidden.
*/
Titanium.UI.Window.hideNavBar = function(options) {};

/**
* Hides the tab bar. Must be called before opening the window.
*/
Titanium.UI.Window.hideTabBar = function() {};

/**
* Opens the window.
* @param {openWindowParams} params Animation or display properties to use when opening the window.
*/
Titanium.UI.Window.open = function(params) {};

/**
* Sets the array of items to show in the window's toolbar.
* @param {Array<Object>} items Array of button objects to show in the window's toolbar.
* @param {windowToolbarParam} params Parameters to control the toolbar appearance.
*/
Titanium.UI.Window.setToolbar = function(items, params) {};

/**
* Makes the navigation bar visible.
* @param {Dictionary} options Options dictionary supporting a single `animated` boolean property to determine whetherthe navigation bar will be animated (default) while being shown.
*/
Titanium.UI.Window.showNavBar = function(options) {};
/**
* Fired when the Back button is released.
* @event Titanium.UI.Window#android:back
* @type {Object}
*/
/**
* Fired when the Camera button is released.
* @event Titanium.UI.Window#android:camera
* @type {Object}
*/
/**
* Fired when the Camera button is half-pressed then released.
* @event Titanium.UI.Window#android:focus
* @type {Object}
*/
/**
* Fired when the Search button is released.
* @event Titanium.UI.Window#android:search
* @type {Object}
*/
/**
* Fired when the volume down button is released.
* @event Titanium.UI.Window#android:voldown
* @type {Object}
*/
/**
* Fired when the volume up button is released.
* @event Titanium.UI.Window#android:volup
* @type {Object}
*/
/**
* Fired when the back button is pressed by the user.
* @event Titanium.UI.Window#androidback
* @type {Object}
*/
/**
* Fired when the Camera button is released.
* @event Titanium.UI.Window#androidcamera
* @type {Object}
*/
/**
* Fired when the Camera button is half-pressed then released.
* @event Titanium.UI.Window#androidfocus
* @type {Object}
*/
/**
* Fired when the Search button is released.
* @event Titanium.UI.Window#androidsearch
* @type {Object}
*/
/**
* Fired when the volume down button is released.
* @event Titanium.UI.Window#androidvoldown
* @type {Object}
*/
/**
* Fired when the volume up button is released.
* @event Titanium.UI.Window#androidvolup
* @type {Object}
*/
/**
* Fired when the window loses focus.
* @event Titanium.UI.Window#blur
* @type {Object}
*/
/**
* Fired when the window is closed.
* @event Titanium.UI.Window#close
* @type {Object}
*/
/**
* Fired when the window gains focus.
* @event Titanium.UI.Window#focus
* @type {Object}
*/
/**
* Fired when the window is opened.
* @event Titanium.UI.Window#open
* @type {Object}
*/
/**
* @since 2.0.0
* @requires android, iphone, ipad
*/
openWindowParams = {
  /**
  * Determines whether to use an animated effect when the window is shown.
  * @type Boolean
  */
  animated: null,
  /**
  * Window's bottom position, in platform-specific units.
  * @type Number,String
  */
  bottom: null,
  /**
  * Determines if the window is fullscreen.
  * @type Boolean
  */
  fullscreen: null,
  /**
  * Window's height, in platform-specific units.
  * @type Number,String
  */
  height: null,
  /**
  * Window's left position, in platform-specific units.
  * @type Number,String
  */
  left: null,
  /**
  * Determines whether to open the window modal in front of other windows.
  * @type Boolean
  */
  modal: null,
  /**
  * Presentation style of this modal window.
  * @type Number
  * @requires iphone, ipad
  */
  modalStyle: null,
  /**
  * Transition style of this modal window.
  * @type Number
  * @requires iphone, ipad
  */
  modalTransitionStyle: null,
  /**
  * For modal windows, hides the nav bar (`true`) or shows the nav bar (`false`).
  * @type Boolean
  */
  navBarHidden: null,
  /**
  * Window's right position, in platform-specific units.
  * @type Number,String
  */
  right: null,
  /**
  * Window's top position, in platform-specific units.
  * @type Number,String
  */
  top: null,
  /**
  * Transition style of this non-modal window.
  * @type Number
  * @requires iphone, ipad
  */
  transition: null,
  /**
  * Window's width, in platform-specific units.
  * @type Number,String
  */
  width: null,
  /**
  * Animation resource to run on the activity (heavyweight window) being opened.
  * @type Number
  * @requires android
  */
  activityEnterAnimation: null,
  /**
  * Animation resource to run on the activity that is being put in background as a heavyweight window is being opened above it.
  * @type Number
  * @requires android
  */
  activityExitAnimation: null,
};


/**
* @since 3.1.3
* @requires iphone, ipad
*/
windowToolbarParam = {
  /**
  * Defines if the toolbar is translucent.
  * @type Boolean
  */
  translucent: null,
  /**
  * Defines if the toolbar appearance is animated.
  * @type Boolean
  */
  animated: null,
  /**
  * Background color for the toolbar, as a color name or hex triplet.
  * @type String
  */
  barColor: null,
  /**
  * The tintColor to apply to the tool bar. Applicable on iOS 7 and above.
  * @type String
  */
  tintColor: null,
};


/**
* @since 3.2.0
* @requires android
*/
closeWindowParams = {
  /**
  * Determines whether to use an animated effect when the window is closed.
  * @type Boolean
  */
  animated: null,
  /**
  * Animation resource to use for the incoming activity.
  * @type Number
  */
  activityEnterAnimation: null,
  /**
  * Animation resource to use for the outgoing activity (heavyweight window).
  * @type Number
  */
  activityExitAnimation: null,
};


/**
* @since 3.2.0
* @requires iphone, ipad
*/
titleAttributesParams = {
  /**
  * Color of the window title, as a color name or hex triplet.
  * @type String
  */
  color: null,
  /**
  * Font to use for the window title.
  * @type Font
  */
  font: null,
  /**
  * Shadow color and offset for the window title.
  * @type shadowDict
  */
  shadow: null,
};


/**
*/
shadowDict = {
  /**
  * Specifies the blur radius of the shadow.
  * @type Number
  */
  blurRadius: null,
  /**
  * Color name or hex triplet specifying the color of the shadow.
  * @type String
  */
  color: null,
  /**
  * Dictionary with the properties `width` and `height` used as the horizontaland vertical offset of the shadow, respectively.
  * @type Dictionary
  */
  offset: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iOS["3DMatrix"] = {
  /**
  * The entry at position [1,1] in the matrix.
  * @type Number
  */
  m11: null,
  /**
  * The entry at position [1,2] in the matrix.
  * @type Number
  */
  m12: null,
  /**
  * The entry at position [1,3] in the matrix.
  * @type Number
  */
  m13: null,
  /**
  * The entry at position [1,4] in the matrix.
  * @type Number
  */
  m14: null,
  /**
  * The entry at position [2,1] in the matrix.
  * @type Number
  */
  m21: null,
  /**
  * The entry at position [2,2] in the matrix.
  * @type Number
  */
  m22: null,
  /**
  * The entry at position [2,3] in the matrix.
  * @type Number
  */
  m23: null,
  /**
  * The entry at position [2,4] in the matrix.
  * @type Number
  */
  m24: null,
  /**
  * The entry at position [3,1] in the matrix.
  * @type Number
  */
  m31: null,
  /**
  * The entry at position [3,2] in the matrix.
  * @type Number
  */
  m32: null,
  /**
  * The entry at position [3,3] in the matrix.
  * @type Number
  */
  m33: null,
  /**
  * The entry at position [3,4] in the matrix.
  * @type Number
  */
  m34: null,
  /**
  * The entry at position [4,1] in the matrix.
  * @type Number
  */
  m41: null,
  /**
  * The entry at position [4,2] in the matrix.
  * @type Number
  */
  m42: null,
  /**
  * The entry at position [4,3] in the matrix.
  * @type Number
  */
  m43: null,
  /**
  * The entry at position [4,4] in the matrix.
  * @type Number
  */
  m44: null,
};

/**
* Returns a matrix constructed by inverting an existing matrix.
*/
Titanium.UI.iOS["3DMatrix"].invert = function() {};

/**
* Returns a matrix constructed by combining two existing matrices.
* @param {Titanium.UI.3DMatrix} t2 The second matrix. This matrix is concatenated to the matrix instance against which the function is invoked. The result of this function is the first matrix multiplied by the second matrix. You might perform several multiplications in order to create a single matrix that contains the cumulative effects of several transformations. Note that matrix operations are not commutative - the order in which you concatenate matrices is important. That is, the result of multiplying matrix t1 by matrix t2 does not necessarily equal the result of multiplying matrix t2 by matrix t1.
*/
Titanium.UI.iOS["3DMatrix"].multiply = function(t2) {};

/**
* Returns a matrix constructed by rotating an existing matrix.
* @param {Number} angle The angle, in degrees, by which to rotate the matrix. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation.
* @param {Number} x The x coordinate of the vector about which to rotate.
* @param {Number} y The y coordinate of the vector about which to rotate.
* @param {Number} z The z coordinate of the vector about which to rotate.
*/
Titanium.UI.iOS["3DMatrix"].rotate = function(angle, x, y, z) {};

/**
* Returns a matrix constructed by scaling an existing matrix.
* @param {Number} sx The value by which to scale x values of the matrix.
* @param {Number} sy The value by which to scale y values of the matrix.
* @param {Number} sz The value by which to scale z values of the matrix.
*/
Titanium.UI.iOS["3DMatrix"].scale = function(sx, sy, sz) {};

/**
* Returns a matrix constructed by translating an existing matrix.
* @param {Number} tx The value by which to move x values with the matrix.
* @param {Number} ty The value by which to move y values with the matrix. Negative values move the target up the display whereas towards the user and negative values away from the user.
* @param {Number} tz The value by which to move z values with the matrix. Negative values move the target towards the user whereas negative values away from the user.
*/
Titanium.UI.iOS["3DMatrix"].translate = function(tx, ty, tz) {};

/**
* @extends Titanium.UI.View
* @since 1.4
* @requires iphone, ipad
* @fires Titanium.UI.iOS.AdView#action
* @fires Titanium.UI.iOS.AdView#error
* @fires Titanium.UI.iOS.AdView#load
*/
Titanium.UI.iOS.AdView = {
  /**
  * Size of the advertisement when minimized.
  * @type String
  */
  adSize: null,
};

/**
* Cancel a banner to uncover the user interface.
*/
Titanium.UI.iOS.AdView.cancelAction = function() {};
/**
* Fired when a banner action is performed.
* @event Titanium.UI.iOS.AdView#action
* @type {Object}
*/
/**
* Fired when a banner could not be loaded.
* @event Titanium.UI.iOS.AdView#error
* @type {Object}
* @type Boolean success Indicates a successful operation. Returns `false`.
* @type String error Error message, if any returned. May be undefined.
* @type Number code Error code.If the error was generated by the operating system, that system's error valueis used. Otherwise, this value will be -1.
* @type String message Error message. Use the error property instead.
*/
/**
* Fired when a banner is loaded and displayed.
* @event Titanium.UI.iOS.AdView#load
* @type {Object}
*/
/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
*/
Titanium.UI.iOS.AnchorAttachmentBehavior = {
  /**
  * Anchor point for the attachment behavior relative to the animator's coordinate system.
  * @type Point
  */
  anchor: null,
  /**
  * Amount of damping to apply to the attachment behavior.
  * @type Number
  */
  damping: null,
  /**
  * Distance, in points, between the two attachment points.
  * @type Number
  */
  distance: null,
  /**
  * Frequency of oscillation for the behavior.
  * @type Number
  */
  frequency: null,
  /**
  * Item to connect to use the attachment behavior.
  * @type Titanium.UI.View
  */
  item: null,
  /**
  * Offset from the center point of the item for the attachment.
  * @type Point
  */
  offset: null,
};


/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
* @fires Titanium.UI.iOS.Animator#pause
* @fires Titanium.UI.iOS.Animator#resume
*/
Titanium.UI.iOS.Animator = {
  /**
  * Behaviors associated with this animator.
  * @type Array<Titanium.Proxy>
  */
  behaviors: null,
  /**
  * Titanium View object to initialize as the reference view for the animator.
  * @type Titanium.UI.View
  */
  referenceView: null,
  /**
  * Returns `true` if the animator is running else `false`.
  * @type Boolean
  */
  running: null,
};

/**
* Adds a dynamic behavior to the animator.
* @param {Titanium.Proxy} behavior Behavior to add to the animator.
*/
Titanium.UI.iOS.Animator.addBehavior = function(behavior) {};

/**
* Removes all behaviors from this animator.
*/
Titanium.UI.iOS.Animator.removeAllBehaviors = function() {};

/**
* Removes the specified behavior from the animator.
* @param {Titanium.Proxy} behavior Behavior to remove from the animator.
*/
Titanium.UI.iOS.Animator.removeBehavior = function(behavior) {};

/**
* Starts the animation behaviors.
*/
Titanium.UI.iOS.Animator.startAnimator = function() {};

/**
* Stops the animation behaviors.
*/
Titanium.UI.iOS.Animator.stopAnimator = function() {};

/**
* Updates the animator's state information with the current state of the specified item.
* @param {Titanium.UI.View} item Item to update with new state information.
*/
Titanium.UI.iOS.Animator.updateItemUsingCurrentState = function(item) {};
/**
* Fired when the animator paused its animations.
* @event Titanium.UI.iOS.Animator#pause
* @type {Object}
*/
/**
* Fired when the animator resumes its animations.
* @event Titanium.UI.iOS.Animator#resume
* @type {Object}
*/
/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
*/
Titanium.UI.iOS.Attribute = {
  /**
  * Attribute to apply to the text.
  * @type Number
  */
  type: null,
  /**
  * Attribute value.
  * @type Number
  */
  value: null,
  /**
  * Attribute range.
  * @type Array<Number>
  */
  range: null,
};


/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
*/
Titanium.UI.iOS.AttributedString = {
  /**
  * The text applied to the attributed string.
  * @type String
  */
  text: null,
  /**
  * An array of attributes to add.
  * @type Array<Attribute>
  */
  attributes: null,
};

/**
* Adds an [attribute](Attribute) with the given name and value to the characters in the specified range.
* @param {Attribute} attribute An attribute object.
*/
Titanium.UI.iOS.AttributedString.addAttribute = function(attribute) {};

/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
* @fires Titanium.UI.iOS.CollisionBehavior#boundarycollision
* @fires Titanium.UI.iOS.CollisionBehavior#itemcollision
*/
Titanium.UI.iOS.CollisionBehavior = {
  /**
  * Boundary identfiers added to this behavior.
  * @type Array<BoundaryIdentifier>
  */
  boundaryIdentifiers: null,
  /**
  * Specifies the collision behavior.
  * @type Number
  */
  collisionMode: null,
  /**
  * Items added to this behavior.
  * @type Array<Titanium.UI.View>
  */
  items: null,
  /**
  * Insets to apply when using the animator's reference view as the boundary.
  * @type ReferenceInsets
  */
  referenceInsets: null,
  /**
  * Use the animator's reference view as the boundary.
  * @type Boolean
  */
  treatReferenceAsBoundary: null,
};

/**
* Adds a boundary to this behavior.
* @param {BoundaryIdentifier} boundary Boundary to add to the behavior.
*/
Titanium.UI.iOS.CollisionBehavior.addBoundary = function(boundary) {};

/**
* Adds an item to this behavior.
* @param {Titanium.UI.View} item View object to add to the behavior.
*/
Titanium.UI.iOS.CollisionBehavior.addItem = function(item) {};

/**
* Removes all boundaries from this behavior.
*/
Titanium.UI.iOS.CollisionBehavior.removeAllBoundaries = function() {};

/**
* Removes the specified boundary from this behavior.
* @param {BoundaryIdentifier} boundary Boundary to remove.
*/
Titanium.UI.iOS.CollisionBehavior.removeBoundary = function(boundary) {};

/**
* Removes the specified item from this behavior.
* @param {Titanium.UI.View} item Item to remove.
*/
Titanium.UI.iOS.CollisionBehavior.removeItem = function(item) {};
/**
* Fired when an item collides with a boundary.
* @event Titanium.UI.iOS.CollisionBehavior#boundarycollision
* @type {Object}
* @type Titanium.UI.View item Item that collided with the boundary.
* @type String identifier Identifier of the boundary the item collided with.
* @type Point point Point of the collision when it started. Only returned when `start` is `true`.
* @type Boolean start Returns `true` if the collision started else `false`.
*/
/**
* Fired when two items collide.
* @event Titanium.UI.iOS.CollisionBehavior#itemcollision
* @type {Object}
* @type Titanium.UI.View item1 Item that collided with `item2`.
* @type Titanium.UI.View item2 Item that collided with `item1`.
* @type Point point Point of the collision when it started. Only returned when `start` is `true`.
* @type Boolean start Returns `true` if the collision started else `false`.
*/
/**
* @since 3.2
* @requires iphone, ipad
*/
BoundaryIdentifier = {
  /**
  * Arbitrary identifier for the boundary
  * @type String
  */
  identifier: null,
  /**
  * Start point for the boundary
  * @type Point
  */
  point1: null,
  /**
  * End point for the boundary
  * @type Point
  */
  point2: null,
};


/**
* @since 3.2
* @requires iphone, ipad
*/
ReferenceInsets = {
  /**
  * Top inset.
  * @type Number
  */
  top: null,
  /**
  * Left inset.
  * @type Number
  */
  left: null,
  /**
  * Right inset.
  * @type Number
  */
  right: null,
  /**
  * Bottom inset.
  * @type Number
  */
  bottom: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @requires iphone, ipad
* @fires Titanium.UI.iOS.CoverFlowView#change
* @fires Titanium.UI.iOS.CoverFlowView#click
*/
Titanium.UI.iOS.CoverFlowView = {
  /**
  * Images to display in the view.
  * @type Array<String>,Array<Titanium.Blob>,Array<Titanium.Filesystem.File>,Array<CoverFlowImageType>
  */
  images: null,
  /**
  * Index to make selected.
  * @type Number
  */
  selected: null,
};

/**
* Changes the image for a specified index.
* @param {Number} index Index to add the image at.
* @param {String|Titanium.Blob|Titanium.Filesystem.File|CoverFlowImageType} image Image to add at this index.
*/
Titanium.UI.iOS.CoverFlowView.setImage = function(index, image) {};
/**
* Fired when the user changes the image using a gesture.
* @event Titanium.UI.iOS.CoverFlowView#change
* @type {Object}
* @type Number index Index of the image that is now visible.
* @type Number previous Index of the previously-visible image.
*/
/**
* Fired when the user clicks on the view.
* @event Titanium.UI.iOS.CoverFlowView#click
* @type {Object}
* @type Number index Index of the image that is now visible.
* @type Number previous Index of the previously-visible image.
*/
/**
*/
CoverFlowImageType = {
  /**
  * Image to use, as a local file URL, `Blob`, or `File`.
  * @type String,Titanium.Blob,Titanium.Filesystem.File
  */
  image: null,
  /**
  * Display width for the image, in Apple points.
  * @type Number
  */
  width: null,
  /**
  * Display height of the image, in Apple points.
  * @type Number
  */
  height: null,
};


/**
* @extends Titanium.UI.View
* @since 2.1.1
* @requires iphone, ipad
* @fires Titanium.UI.iOS.DocumentViewer#load
* @fires Titanium.UI.iOS.DocumentViewer#menu
* @fires Titanium.UI.iOS.DocumentViewer#unload
*/
Titanium.UI.iOS.DocumentViewer = {
  /**
  * Name of the file (without the path).
  * @type String
  */
  name: null,
  /**
  * URL of the document being previewed.
  * @type String
  */
  url: null,
};

/**
* Dismisses the document viewer.
* @param {DocumentViewerOptions} options Animation options.
*/
Titanium.UI.iOS.DocumentViewer.hide = function(options) {};

/**
* Displays the document viewer over the current view.
* @param {DocumentViewerOptions} options Display options.
*/
Titanium.UI.iOS.DocumentViewer.show = function(options) {};
/**
* Fires when the document is previewed.
* @event Titanium.UI.iOS.DocumentViewer#load
* @type {Object}
*/
/**
* Fires when the options menu appears before the document is previewed.
* @event Titanium.UI.iOS.DocumentViewer#menu
* @type {Object}
*/
/**
* Fires when the document is dismissed.
* @event Titanium.UI.iOS.DocumentViewer#unload
* @type {Object}
*/
/**
* @since 2.1.1
* @requires iphone, ipad
*/
DocumentViewerOptions = {
  /**
  * Indicates whether to animate the transition.
  * @type Boolean
  */
  animated: null,
  /**
  * Anchors the options menu to the specified view.
  * @type Titanium.UI.View
  */
  view: null,
};


/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
*/
Titanium.UI.iOS.DynamicItemBehavior = {
  /**
  * Specifies if this item can rotate.
  * @type Boolean
  */
  allowsRotation: null,
  /**
  * Specifies the angular resistance of this item.
  * @type Number
  */
  angularResistance: null,
  /**
  * Specifies the relative mass density of this item.
  * @type Number
  */
  density: null,
  /**
  * Specifies the elasticity applied to collisions for this item.
  * @type Number
  */
  elasticity: null,
  /**
  * Specifies the linear resistance of the item when it slides against another item.
  * @type Number
  */
  friction: null,
  /**
  * Items added to this behavior.
  * @type Array<Titanium.UI.View>
  */
  items: null,
  /**
  * Specifies the linear resistance of this item which reduces linear velocity over time.
  * @type Number
  */
  resistance: null,
};

/**
* Adds a specified angular velocity for the item.
* @param {Titanium.UI.View} item Item to add the velocity for.
* @param {Number} velocity Velocity to add or subtract in radians per second. If the current velocity is positive,the item spins clockwise.  A negative value means the item spins counter-clockwise.
*/
Titanium.UI.iOS.DynamicItemBehavior.addAngularVelocityForItem = function(item, velocity) {};

/**
* Adds an item to this behavior.
* @param {Titanium.UI.View} item View object to add to the behavior.
*/
Titanium.UI.iOS.DynamicItemBehavior.addItem = function(item) {};

/**
* Adds a specified linear velocity for the item.
* @param {Titanium.UI.View} item Item to add the velocity for.
* @param {Point} velocity Velocity to add or substract in points per second in the x and y directions.
*/
Titanium.UI.iOS.DynamicItemBehavior.addLinearVelocityForItem = function(item, velocity) {};

/**
* Returns the angular velocity of the item.
* @param {Titanium.UI.View} item Item to retrieve the velocity of.
*/
Titanium.UI.iOS.DynamicItemBehavior.angularVelocityForItem = function(item) {};

/**
* Returns the linear velocity of the item.
* @param {Titanium.UI.View} item Item to retrieve the velocity of.
*/
Titanium.UI.iOS.DynamicItemBehavior.linearVelocityForItem = function(item) {};

/**
* Removes the specified item from this behavior.
* @param {Titanium.UI.View} item Item to remove.
*/
Titanium.UI.iOS.DynamicItemBehavior.removeItem = function(item) {};

/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
*/
Titanium.UI.iOS.GravityBehavior = {
  /**
  * Specifies the angle of the gravity vector in radians.
  * @type Number
  */
  angle: null,
  /**
  * Specifies the direction of the gravity vector as an x, y pair.
  * @type Point
  */
  gravityDirection: null,
  /**
  * Items added to this behavior.
  * @type Array<Titanium.UI.View>
  */
  items: null,
  /**
  * Specifies the magnitude of the gravity vector.
  * @type Number
  */
  magnitude: null,
};

/**
* Adds an item to this behavior.
* @param {Titanium.UI.View} item View object to add to the behavior.
*/
Titanium.UI.iOS.GravityBehavior.addItem = function(item) {};

/**
* Removes the specified item from this behavior.
* @param {Titanium.UI.View} item Item to remove.
*/
Titanium.UI.iOS.GravityBehavior.removeItem = function(item) {};

/**
* @extends Titanium.UI.Window
* @since 3.1.3
* @requires iphone, ipad
*/
Titanium.UI.iOS.NavigationWindow = {
  /**
  * Window to add to this navigation group.
  * @type Titanium.UI.Window
  */
  window: null,
};

/**
* Closes a window and removes it from the navigation group.
* @param {Titanium.UI.Window} window Window to close.
* @param {Dictionary} options Options supporting a single `animated` boolean property to determine whether the window will be animated (default) while being closed.
*/
Titanium.UI.iOS.NavigationWindow.closeWindow = function(window, options) {};

/**
* Opens a window within the navigation group.
* @param {Titanium.UI.Window} window Window to open.
* @param {Dictionary} options Options supporting a single `animated` boolean property to determine whether the window will be animated (default) while being opened.
*/
Titanium.UI.iOS.NavigationWindow.openWindow = function(window, options) {};

/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
*/
Titanium.UI.iOS.PushBehavior = {
  /**
  * State of the push behavior's force.
  * @type Boolean
  */
  active: null,
  /**
  * Specifies the angle of the force vector in radians.
  * @type Number
  */
  angle: null,
  /**
  * Items added to this behavior.
  * @type Array<Titanium.UI.View>
  */
  items: null,
  /**
  * Specifies the magnitude of the force vector.
  * @type Number
  */
  magnitude: null,
  /**
  * Specifies the direction of the force vector as an x, y pair.
  * @type Point
  */
  pushDirection: null,
  /**
  * Specifies the push mode.
  * @type Number
  */
  pushMode: null,
};

/**
* Adds an item to this behavior.
* @param {Titanium.UI.View} item View object to add to the behavior.
*/
Titanium.UI.iOS.PushBehavior.addItem = function(item) {};

/**
* Removes the specified item from this behavior.
* @param {Titanium.UI.View} item Item to remove.
*/
Titanium.UI.iOS.PushBehavior.removeItem = function(item) {};

/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
*/
Titanium.UI.iOS.SnapBehavior = {
  /**
  * Specifies the amount of oscillation during the conclusion of the snap.
  * @type Number
  */
  damping: null,
  /**
  * Item to add to this behavior.
  * @type Titanium.UI.View
  */
  item: null,
  /**
  * Specifies the point to snap to.
  * @type Point
  */
  snapPoint: null,
};


/**
* @extends Titanium.UI.Window
* @since 3.6.0
* @requires iphone, ipad
*/
Titanium.UI.iOS.SplitWindow = {
  /**
  * View for the detail view section of the SplitWindow.
  * @type Titanium.UI.View
  */
  detailView: null,
  /**
  * View for the master view section of the SplitWindow.
  * @type Titanium.UI.View
  */
  masterView: null,
  /**
  * Determines whether to show the master view in portrait orientation.
  * @type Boolean
  */
  showMasterInPortrait: null,
  /**
  * Determines whether to show the master view is overlayed in portrait orientation.
  * @type Boolean
  */
  masterIsOverlayed: null,
  /**
  * Determines the width of the `masterView` in portrait mode.
  * @type Number
  */
  portraitSplit: null,
  /**
  * Determines the width of the `masterView` in landscape mode.
  * @type Number
  */
  landscapeSplit: null,
};

/**
* Sets the value of the [showMasterInPortrait](Titanium.UI.iOS.SplitWindow.showMasterInPortrait) property.
* @param {Boolean} showMasterInPortrait Determines whether to show the master view in portrait orientation.
* @param {animationOption} animated Determines whether the scrollable region reposition should be animated
*/
Titanium.UI.iOS.SplitWindow.setShowMasterInPortrait = function(showMasterInPortrait, animated) {};

/**
* Sets the value of the [masterIsOverlayed](Titanium.UI.iOS.SplitWindow.masterIsOverlayed) property.
* @param {Boolean} masterIsOverlayed Determines whether to show the master view is overlayed in portrait orientation.
* @param {animationOption} animated Determines whether the scrollable region reposition should be animated
*/
Titanium.UI.iOS.SplitWindow.setMasterIsOverlayed = function(masterIsOverlayed, animated) {};

/**
* @requires iphone, ipad
*/
animationOption = {
  /**
  * Determines whether the change is animated.
  * @type Boolean
  */
  animated: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @requires iphone, ipad
* @fires Titanium.UI.iOS.TabbedBar#click
*/
Titanium.UI.iOS.TabbedBar = {
  /**
  * Index of the currently selected button.
  * @type Number
  */
  index: null,
  /**
  * Array of labels for the tabbed bar.
  * @type Array<String>,Array<BarItemType>
  */
  labels: null,
  /**
  * Style of the tabbed bar.
  * @type Number
  */
  style: null,
};

/**
* Fired when a button is clicked.
* @event Titanium.UI.iOS.TabbedBar#click
* @type {Object}
* @type Number index Index of the clicked button.
*/
/**
*/
BarItemType = {
  /**
  * Button title, used if no `image` is specified.
  * @type String
  */
  title: null,
  /**
  * Button icon. If specified, takes precedence over `title`.
  * @type String,Titanium.Blob,Titanium.Filesystem.File
  */
  image: null,
  /**
  * Width for this button.
  * @type Number
  */
  width: null,
  /**
  * Whether the button is enabled initially.
  * @type Boolean
  */
  enabled: null,
  /**
  * A succint label associated with the bar item for the device's accessibility service.
  * @type String
  * @requires iphone, ipad
  */
  accessibilityLabel: null,
};


/**
* @extends Titanium.UI.View
* @since 0.8
* @requires iphone, ipad
*/
Titanium.UI.iOS.Toolbar = {
  /**
  * Background color for the toolbar, as a color name or hex triplet.
  * @type String
  */
  barColor: null,
  /**
  * An array of buttons (or other widgets) contained in the toolbar.
  * @type Array<Titanium.UI.View>
  */
  items: null,
  /**
  * If `true`, a border is drawn on the top of the toolbar. This property is ignored on iOS 7 and above.
  * @type Boolean
  */
  borderTop: null,
  /**
  * If `true`, a border is drawn on the bottom of the toolbar. This property is ignored on iOS 7 and above.
  * @type Boolean
  */
  borderBottom: null,
  /**
  * If `true`, the background of the toolbar extends upwards.
  * @type Boolean
  * @requires iphone, ipad
  */
  extendBackground: null,
  /**
  * If `true`, a translucent background color is used for the toolbar.
  * @type Boolean
  */
  translucent: null,
};


/**
* @extends Titanium.Proxy
* @since 3.2
* @requires iphone, ipad
*/
Titanium.UI.iOS.ViewAttachmentBehavior = {
  /**
  * Item to use as the anchor in this behavior.
  * @type Titanium.UI.View
  */
  anchorItem: null,
  /**
  * Offset from the center point of the anchor item for the attachment.
  * @type Point
  */
  anchorOffset: null,
  /**
  * Amount of damping to apply to the attachment behavior.
  * @type Number
  */
  damping: null,
  /**
  * Distance, in points, between the two attachment points.
  * @type Number
  */
  distance: null,
  /**
  * Frequency of oscillation for the behavior.
  * @type Number
  */
  frequency: null,
  /**
  * Item to connect to use the attachment behavior.
  * @type Titanium.UI.View
  */
  item: null,
  /**
  * Offset from the center point of the item for the attachment.
  * @type Point
  */
  itemOffset: null,
};


/**
* @extends Titanium.Module
* @since 1.4
* @requires iphone, ipad
*/
Titanium.UI.iOS = {
  /**
  * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts slowly and speeds up.
  * @type Number
  */
  ANIMATION_CURVE_EASE_IN: null,
  /**
  * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts slowly, and speeds up, then slows down at the end of the animation.
  * @type Number
  */
  ANIMATION_CURVE_EASE_IN_OUT: null,
  /**
  * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts quickly, then slows down at the end of the animation.
  * @type Number
  */
  ANIMATION_CURVE_EASE_OUT: null,
  /**
  * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that proceeds at a constant rate.
  * @type Number
  */
  ANIMATION_CURVE_LINEAR: null,
  /**
  * Use with <Attribute.type> to specify a font.
  * @type Number
  */
  ATTRIBUTE_FONT: null,
  /**
  * Use with <Attribute.type> to specify a font color.
  * @type Number
  */
  ATTRIBUTE_FOREGROUND_COLOR: null,
  /**
  * Use with <Attribute.type> to specify a background color.
  * @type Number
  */
  ATTRIBUTE_BACKGROUND_COLOR: null,
  /**
  * Use with <Attribute.type> to enable or disable ligatures.
  * @type Number
  */
  ATTRIBUTE_LIGATURE: null,
  /**
  * Use with <Attribute.value> to use a letterpress text effect.
  * @type Number
  */
  ATTRIBUTE_LETTERPRESS_STYLE: null,
  /**
  * Use with <Attribute.type> to specify kerning (space between characters).
  * @type Number
  */
  ATTRIBUTE_KERN: null,
  /**
  * Use with <Attribute.type> to place a horizontal line through the text.
  * @type Number
  */
  ATTRIBUTE_STRIKETHROUGH_STYLE: null,
  /**
  * Use with <Attribute.type> to place a horizontal line under the text.
  * @type Number
  */
  ATTRIBUTE_UNDERLINES_STYLE: null,
  /**
  * Use with <Attribute.type> to specify a color for the stroke text.
  * @type Number
  */
  ATTRIBUTE_STROKE_COLOR: null,
  /**
  * Use with <Attribute.type> to specify the width of the stroke text.
  * @type Number
  */
  ATTRIBUTE_STROKE_WIDTH: null,
  /**
  * Use with <Attribute.type> to display a shadow behind the text.
  * @type Number
  */
  ATTRIBUTE_SHADOW: null,
  /**
  * Use with <Attribute.type> to control the direction of the text.
  * @type Number
  */
  ATTRIBUTE_WRITING_DIRECTION: null,
  /**
  * Use with <Attribute.type> to apply a text effect.
  * @type Number
  */
  ATTRIBUTE_TEXT_EFFECT: null,
  /**
  * Use with <Attribute.type> to create a link.
  * @type Number
  */
  ATTRIBUTE_LINK: null,
  /**
  * Use with <Attribute.type> to apply a different baseline to the text.
  * @type Number
  */
  ATTRIBUTE_BASELINE_OFFSET: null,
  /**
  * Use with <Attribute.type> to change the color of the horizontal line.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_COLOR: null,
  /**
  * Use with <Attribute.type> to change the color of the horizontal line.
  * @type Number
  */
  ATTRIBUTE_STRIKETHROUGH_COLOR: null,
  /**
  * Use with <Attribute.type> to skew the text.
  * @type Number
  */
  ATTRIBUTE_OBLIQUENESS: null,
  /**
  * Use with <Attribute.type> to stretch the text horizontally.
  * @type Number
  */
  ATTRIBUTE_EXPANSION: null,
  /**
  * Use with <Attribute.value> to not draw a line.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_STYLE_NONE: null,
  /**
  * Use with <Attribute.value> to draw a single line.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_STYLE_SINGLE: null,
  /**
  * Use with <Attribute.value> to draw a thick line.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_STYLE_THICK: null,
  /**
  * Use with <Attribute.value> to draw a double line.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_STYLE_DOUBLE: null,
  /**
  * Use with <Attribute.value> to draw a solid line.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_PATTERN_SOLID: null,
  /**
  * Use with <Attribute.value> to draw a dotted line.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_PATTERN_DOT: null,
  /**
  * Use with <Attribute.value> to draw a dashed line.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_PATTERN_DASH: null,
  /**
  * Use with <Attribute.value> to draw an alternating line of dashes and dots.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT: null,
  /**
  * Use with <Attribute.value> to draw an alternating line of dashes and two dots.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT: null,
  /**
  * Use with <Attribute.value> to draw a line only underneath or through words.
  * @type Number
  */
  ATTRIBUTE_UNDERLINE_BY_WORD: null,
  /**
  * Use with <Attribute.value> to use the embedded text direction.
  * @type Number
  */
  ATTRIBUTE_WRITING_DIRECTION_EMBEDDING: null,
  /**
  * Use with <Attribute.value> to override the text direction.
  * @type Number
  */
  ATTRIBUTE_WRITING_DIRECTION_OVERRIDE: null,
  /**
  * Use with <Attribute.value> to use the [Unicode Bidirection Algorithm rules P2 and P3](http://www.unicode.org/reports/tr9/#The_Paragraph_Level)to determine which direction to use.
  * @type Number
  */
  ATTRIBUTE_WRITING_DIRECTION_NATURAL: null,
  /**
  * Use with <Attribute.value> to write text left to right.
  * @type Number
  */
  ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT: null,
  /**
  * Use with <Attribute.value> to write text right to left.
  * @type Number
  */
  ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT: null,
  /**
  * Converts strings formatted as addresses into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_ADDRESS: null,
  /**
  * Converts all detectable types of data into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_ALL: null,
  /**
  * Converts strings formatted as calendar events into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_CALENDAR: null,
  /**
  * Converts strings formatted as URLs into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_LINK: null,
  /**
  * Disables converting strings into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_NONE: null,
  /**
  * Converts strings formatted as phone numbers into clickable links.
  * @type Number
  * @requires iphone, ipad
  */
  AUTODETECT_PHONE: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_CLEAR: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_COLOR: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_COLOR_BURN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_COLOR_DODGE: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_COPY: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_DARKEN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_DESTINATION_ATOP: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_DESTINATION_IN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_DESTINATION_OUT: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_DESTINATION_OVER: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_DIFFERENCE: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_EXCLUSION: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_HARD_LIGHT: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_HUE: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_LIGHTEN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_LUMINOSITY: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_MULTIPLY: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_NORMAL: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_OVERLAY: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_PLUS_DARKER: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_PLUS_LIGHTER: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_SATURATION: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_SCREEN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_SOFT_LIGHT: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_SOURCE_ATOP: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_SOURCE_IN: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_SOURCE_OUT: null,
  /**
  * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
  * @type Number
  */
  BLEND_MODE_XOR: null,
  /**
  * Use with [AdView.adSize](Titanium.UI.iOS.AdView.adSize) to specify a banner ad sizeappropriate for portrait orientations.
  * @type String
  */
  AD_SIZE_PORTRAIT: null,
  /**
  * Use with [AdView.adSize](Titanium.UI.iOS.AdView.adSize) to specify a banner ad sizeappropriate for landscape orientations.
  * @type String
  */
  AD_SIZE_LANDSCAPE: null,
  /**
  * Use with <Titanium.UI.View.clipMode> to specify clipping behavior.
  * @type Number
  */
  CLIP_MODE_DEFAULT: null,
  /**
  * Use with <Titanium.UI.View.clipMode> to specify clipping behavior.
  * @type Number
  */
  CLIP_MODE_DISABLED: null,
  /**
  * Use with <Titanium.UI.View.clipMode> to specify clipping behavior.
  * @type Number
  */
  CLIP_MODE_ENABLED: null,
  /**
  * Use with <Titanium.UI.iOS.CollisionBehavior.collisionMode> to specify collisions with both items andboundaries.
  * @type Number
  */
  COLLISION_MODE_ALL: null,
  /**
  * Use with <Titanium.UI.iOS.CollisionBehavior.collisionMode> to specify collisions withboundaries only.
  * @type Number
  */
  COLLISION_MODE_BOUNDARY: null,
  /**
  * Use with <Titanium.UI.iOS.CollisionBehavior.collisionMode> to specify collisions with items only.
  * @type Number
  */
  COLLISION_MODE_ITEM: null,
  /**
  * Returns the iOS system texture used to render the background on a group table view.
  * @type String
  */
  COLOR_GROUP_TABLEVIEW_BACKGROUND: null,
  /**
  * Returns the iOS system texture used to render the area behind scrollable content.
  * @type String
  */
  COLOR_SCROLLVIEW_BACKGROUND: null,
  /**
  * Returns the iOS system texture used for the back side of a view while it is being flipped.
  * @type String
  */
  COLOR_VIEW_FLIPSIDE_BACKGROUND: null,
  /**
  * Returns the iOS system texture used to render the background of a page.
  * @type String
  */
  COLOR_UNDER_PAGE_BACKGROUND: null,
  /**
  * Use with <Titanium.UI.iOS.PushBehavior.pushMode> to specifiy a continuous force.
  * @type Number
  */
  PUSH_MODE_CONTINUOUS: null,
  /**
  * Use with <Titanium.UI.iOS.PushBehavior.pushMode> to specifiy an instantaneous force.
  * @type Number
  */
  PUSH_MODE_INSTANTANEOUS: null,
  /**
  * The default style for <RowActionType>.
  * @type Number
  */
  ROW_ACTION_STYLE_DEFAULT: null,
  /**
  * The destructive style for <RowActionType>.
  * @type Number
  */
  ROW_ACTION_STYLE_DESTRUCTIVE: null,
  /**
  * The normal style for <RowActionType>.
  * @type Number
  */
  ROW_ACTION_STYLE_NORMAL: null,
  /**
  * Use with <Titanium.UI.ScrollView.decelerationRate> to control deceleration rate.
  * @type Number
  */
  SCROLL_DECELERATION_RATE_FAST: null,
  /**
  * Use with <Titanium.UI.ScrollView.decelerationRate> to control deceleration rate.
  * @type Number
  */
  SCROLL_DECELERATION_RATE_NORMAL: null,
  /**
  * User tapped a link.
  * @type Number
  */
  WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED: null,
  /**
  * User submitted a form.
  * @type Number
  */
  WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED: null,
  /**
  * User tapped the back or forward button.
  * @type Number
  */
  WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD: null,
  /**
  * User tapped the reload button.
  * @type Number
  */
  WEBVIEW_NAVIGATIONTYPE_RELOAD: null,
  /**
  * User resubmitted a form.
  * @type Number
  */
  WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED: null,
  /**
  * Some other action occurred.
  * @type Number
  */
  WEBVIEW_NAVIGATIONTYPE_OTHER: null,
  /**
  * String that represents the magnifying glass on the table view index bar
  * @type String
  */
  TABLEVIEW_INDEX_SEARCH: null,
};

/**
* Creates a transition animation when opening or closing windows in a<Titanium.UI.iOS.NavigationWindow> or <Titanium.UI.Tab>.
* @since 3.2.0
* @param {transitionAnimationParam} transition Dictionary specifying the transition animation.
*/
Titanium.UI.iOS.createTransitionAnimation = function(transition) {};

/**
* @since 3.2.0
* @requires iphone, ipad
*/
transitionAnimationParam = {
  /**
  * Length of the transition in milliseconds.
  * @type Number
  */
  duration: null,
  /**
  * Animation to hide the current window.
  * @type Titanium.UI.Animation
  */
  transitionFrom: null,
  /**
  * Animation to show the new window.
  * @type Titanium.UI.Animation
  */
  tranistionTo: null,
};


/**
* @extends Titanium.UI.View
* @since 1.8
* @requires ipad
*/
Titanium.UI.iPad.DocumentViewer = {
};

/**
* Displays the document viewer over the current view.
* @param {Boolean} animated Indicates whether the show transition should be animated.
* @param {Object} view The view property would specify the view relative to where the viewer should display.
*/
Titanium.UI.iPad.DocumentViewer.show = function(animated, view) {};

/**
* Sets the url of the document viewer.
* @param {String} url The new url
*/
Titanium.UI.iPad.DocumentViewer.setUrl = function(url) {};

/**
* @extends Titanium.UI.View
* @since 1.2
* @requires ipad
* @fires Titanium.UI.iPad.Popover#hide
*/
Titanium.UI.iPad.Popover = {
  /**
  * Indicates the arrow direction of the popover.
  * @type Number
  */
  arrowDirection: null,
  /**
  * View to use for the popover content. Must be set before calling the `show()` method.
  * @type Titanium.UI.View
  */
  contentView: null,
  /**
  * Height of the popover.
  * @type Number,String
  */
  height: null,
  /**
  * Left button in the navigation area of the popover.
  * @type Object
  */
  leftNavButton: null,
  /**
  * Passthrough views to use when the popover is shown.
  * @type Array<Titanium.UI.View>
  */
  passthroughViews: null,
  /**
  * Right button in the navigation area of the popover.
  * @type Object
  */
  rightNavButton: null,
  /**
  * Title of the navigation area of the popover.
  * @type String
  */
  title: null,
  /**
  * Width of the popover.
  * @type Number,String
  */
  width: null,
};

/**
* Adds a child to the popover.
* @deprecated since 3.2.0 removed 3.4.2
*/
Titanium.UI.iPad.Popover.add = function() {};

/**
* Hides the popover.
* @param {PopoverParams} options Display properties to use when hiding the popover.
*/
Titanium.UI.iPad.Popover.hide = function(options) {};

/**
* Removes a child from the popover.
* @deprecated since 3.2.0 removed 3.4.2
*/
Titanium.UI.iPad.Popover.remove = function() {};

/**
* Displays the popover.
* @param {PopoverParams} params Display properties to use when displaying the popover.
*/
Titanium.UI.iPad.Popover.show = function(params) {};
/**
* Fired when the popover is hidden.
* @event Titanium.UI.iPad.Popover#hide
* @type {Object}
*/
/**
*/
PopoverParams = {
  /**
  * Indicates whether to animate showing or hiding the popover.
  * @type Boolean
  */
  animated: null,
  /**
  * Sets the arrow position of the popover relative to the attached view object's dimensionswhen showing the popover.
  * @type Dimension
  */
  rect: null,
  /**
  * Attaches the popover to the specified view when showing the popover.
  * @type Titanium.UI.View
  */
  view: null,
};


/**
* @extends Titanium.UI.Window
* @since 1.2
* @requires ipad
* @fires Titanium.UI.iPad.SplitWindow#visible
*/
Titanium.UI.iPad.SplitWindow = {
  /**
  * View for the detail view section of the SplitWindow.
  * @type Titanium.UI.View
  */
  detailView: null,
  /**
  * View for the master view section of the SplitWindow.
  * @type Titanium.UI.View
  */
  masterView: null,
  /**
  * Determines whether to show the master view in portrait orientation.
  * @type Boolean
  */
  showMasterInPortrait: null,
};

/**
* Fired when the `masterView` or `detailView` becomes visible.
* @event Titanium.UI.iPad.SplitWindow#visible
* @type {Object}
* @type Titanium.UI.Button button For `detail` view type, the button that is automatically wired to control the master view popover.
* @type Titanium.UI.iPad.Popover popover For either `popover` or `detail` view types, the popover instance.
* @type String view Type of view becoming visible. Either `master`, `popover` or `detail`.
*/
/**
* @extends Titanium.Module
* @since 1.2
* @requires ipad
*/
Titanium.UI.iPad = {
  /**
  * An arrow that points in any direction.
  * @type Number
  */
  POPOVER_ARROW_DIRECTION_ANY: null,
  /**
  * An arrow that points downward.
  * @type Number
  */
  POPOVER_ARROW_DIRECTION_DOWN: null,
  /**
  * An arrow that points toward the left.
  * @type Number
  */
  POPOVER_ARROW_DIRECTION_LEFT: null,
  /**
  * An arrow that points toward the right.
  * @type Number
  */
  POPOVER_ARROW_DIRECTION_RIGHT: null,
  /**
  * The status of the arrow is currently unknown.
  * @type Number
  */
  POPOVER_ARROW_DIRECTION_UNKNOWN: null,
  /**
  * An arrow that points upward.
  * @type Number
  */
  POPOVER_ARROW_DIRECTION_UP: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iPhone.ActivityIndicatorStyle = {
  /**
  * Large white spinning indicator.
  * @type Number
  */
  BIG: null,
  /**
  * Small gray spinning indicator.
  * @type Number
  */
  DARK: null,
  /**
  * Small white spinning indicator (default.)
  * @type Number
  */
  PLAIN: null,
};


/**
* @extends Titanium.Proxy
* @since 3.0.0
* @requires iphone, ipad
*/
Titanium.UI.iPhone.AlertDialogStyle = {
  /**
  * A standard alert dialog. This is the default value.
  * @type Number
  */
  DEFAULT: null,
  /**
  * An alert dialog that allows the user to enter text.
  * @type Number
  */
  PLAIN_TEXT_INPUT: null,
  /**
  * An alert dialog that allows the user to enter text. The text field is obscured.
  * @type Number
  */
  SECURE_TEXT_INPUT: null,
  /**
  * An alert dialog that allows the user to enter login identifier and password.
  * @type Number
  */
  LOGIN_AND_PASSWORD_INPUT: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iPhone.AnimationStyle = {
  /**
  * Curl downwards during a transition animation.
  * @type Number
  */
  CURL_DOWN: null,
  /**
  * Curl upwards during a transition animation.
  * @type Number
  */
  CURL_UP: null,
  /**
  * Flip from left to right during a transition animation.
  * @type Number
  */
  FLIP_FROM_LEFT: null,
  /**
  * Flip from right to left during a transition animation.
  * @type Number
  */
  FLIP_FROM_RIGHT: null,
  /**
  * No animation.
  * @type Number
  */
  NONE: null,
};


/**
* @extends Titanium.Proxy
* @since 3.1.0
* @requires iphone, ipad
*/
Titanium.UI.iPhone.ListViewCellSelectionStyle = {
  /**
  * The cell when selected has a blue background. This is the default value.
  * @type Number
  */
  BLUE: null,
  /**
  * The cell when selected has a gray background.
  * @type Number
  */
  GRAY: null,
  /**
  * The cell has no distinct style for when it is selected.
  * @type Number
  */
  NONE: null,
};


/**
* @extends Titanium.Proxy
* @since 3.1.0
* @requires iphone, ipad
*/
Titanium.UI.iPhone.ListViewScrollPosition = {
  /**
  * The list view scrolls the row of interest to the bottom of the visible list view.
  * @type Number
  */
  BOTTOM: null,
  /**
  * The list view scrolls the row of interest to the middle of the list table view.
  * @type Number
  */
  MIDDLE: null,
  /**
  * The table view scrolls the row of interest to be fully visible with a minimal movement.If the row is already fully visible, no scrolling occurs. For example, if the row is above thevisible area, the behavior is identical to that specified by `TOP`. This is the default.
  * @type Number
  */
  NONE: null,
  /**
  * The list view scrolls the row of interest to the top of the visible list view.
  * @type Number
  */
  TOP: null,
};


/**
* @extends Titanium.Proxy
* @since 3.2.0
* @requires iphone, ipad
*/
Titanium.UI.iPhone.ListViewSeparatorStyle = {
  /**
  * The separator cell has no distinct style.
  * @type Number
  */
  NONE: null,
  /**
  * The separator cell has a single line running across its width. This is the default value.
  * @type Number
  */
  SINGLE_LINE: null,
};


/**
* @extends Titanium.Proxy
* @since 3.1.0
* @requires iphone, ipad
*/
Titanium.UI.iPhone.ListViewStyle = {
  /**
  * A list view whose sections present distinct groups of rows. The section headers and footers do not float.
  * @type Number
  */
  GROUPED: null,
  /**
  * A plain list view. Any section headers or footers are displayed as inline separators and float when the list view is scrolled.
  * @type Number
  */
  PLAIN: null,
};


/**
* @extends Titanium.UI.View
* @since 1.2
* @requires iphone, ipad
*/
Titanium.UI.iPhone.NavigationGroup = {
  /**
  * Window to add to this navigation group.
  * @type Titanium.UI.Window
  */
  window: null,
};

/**
* Closes a window and removes it from the navigation group.
* @param {Titanium.UI.Window} window Window to close.
* @param {Dictionary} options Options supporting a single `animated` boolean property to determine whether the window will be animated (default) while being closed.
*/
Titanium.UI.iPhone.NavigationGroup.close = function(window, options) {};

/**
* Opens a window within the navigation group.
* @param {Titanium.UI.Window} window Window to open.
* @param {Dictionary} options Options supporting a single `animated` boolean property to determine whether the window will be animated (default) while being closed.
*/
Titanium.UI.iPhone.NavigationGroup.open = function(window, options) {};

/**
* @extends Titanium.Proxy
* @since 0.8
* @requires iphone, ipad
*/
Titanium.UI.iPhone.ProgressBarStyle = {
  /**
  * The style of progress view that is used in a toolbar.
  * @type Number
  */
  BAR: null,
  /**
  * he standard progress-view style. This is the default.
  * @type Number
  */
  DEFAULT: null,
  /**
  * The standard progress-view style. Same as `DEFAULT`.
  * @type Number
  */
  PLAIN: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iPhone.RowAnimationStyle = {
  /**
  * The inserted row or rows slides in from the bottom; the deleted row or rows slides out toward the bottom.
  * @type Number
  */
  BOTTOM: null,
  /**
  * The inserted or deleted row or rows fades into or out of the table view.
  * @type Number
  */
  FADE: null,
  /**
  * The inserted row or rows slides in from the left; the deleted row or rows slides out to the left.
  * @type Number
  */
  LEFT: null,
  /**
  * No animation is performed. The new cell value appears as if the cell had just been reloaded.
  * @type Number
  */
  NONE: null,
  /**
  * The inserted row or rows slides in from the right; the deleted row or rows slides out to the right.
  * @type Number
  */
  RIGHT: null,
  /**
  * The inserted row or rows slides in from the top; the deleted row or rows slides out toward the top.
  * @type Number
  */
  TOP: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iPhone.ScrollIndicatorStyle = {
  /**
  * A style of indicator which is black smaller than the default style. This style is good against a white content background.
  * @type Number
  */
  BLACK: null,
  /**
  * The default style of scroll indicator, which is black with a white border. This style is good against any content background.
  * @type Number
  */
  DEFAULT: null,
  /**
  * A style of indicator is white and smaller than the default style. This style is good against a black content background.
  * @type Number
  */
  WHITE: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iPhone.StatusBar = {
  /**
  * No animation style, when the status bar is hidden or shown.
  * @type Number
  */
  ANIMATION_STYLE_NONE: null,
  /**
  * Slide animation style, when the status bar is hidden or shown.
  * @type Number
  */
  ANIMATION_STYLE_SLIDE: null,
  /**
  * Fade animation style, when the status bar is hidden or shown.
  * @type Number
  */
  ANIMATION_STYLE_FADE: null,
  /**
  * Default status bar style.
  * @type Number
  */
  DEFAULT: null,
  /**
  * Gray-colored status bar style.
  * @type Number
  */
  GRAY: null,
  /**
  * Gray-colored status bar style.
  * @type Number
  */
  GREY: null,
  /**
  * Status bar style to use with dark backgrounds. Valid on iOS 7 and above.
  * @type Number
  */
  LIGHT_CONTENT: null,
  /**
  * Opaque black-colored status bar style.
  * @type Number
  */
  OPAQUE_BLACK: null,
  /**
  * Translucent black-colored status bar style, which provides some degree of transparency to the device background.
  * @type Number
  */
  TRANSLUCENT_BLACK: null,
};


/**
* @extends Titanium.Proxy
* @since 0.8
* @requires iphone, ipad
*/
Titanium.UI.iPhone.SystemButton = {
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Action** button.
  * @type Number
  */
  ACTION: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to create an activity indicator thatcan be used in navigation bars and toolbars. 
  * @type Number
  */
  ACTIVITY: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Add** button.
  * @type Number
  */
  ADD: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Bookmarks** button.
  * @type Number
  */
  BOOKMARKS: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Camera** button.
  * @type Number
  */
  CAMERA: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Cancel** button.
  * @type Number
  */
  CANCEL: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Compose** button.
  * @type Number
  */
  COMPOSE: null,
  /**
  * Use with [Button.style](Titanium.UI.Button.style) to specify a **ContactAdd** button.
  * @type Number
  */
  CONTACT_ADD: null,
  /**
  * Use with [Button.style](Titanium.UI.Button.style) to specify a **Disclosure** button.
  * @type Number
  */
  DISCLOSURE: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Done** button.
  * @type Number
  */
  DONE: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Edit** button.
  * @type Number
  */
  EDIT: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Fast Forward** button.
  * @type Number
  */
  FAST_FORWARD: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to create a fixed-width blank space for spacing items in toolbars.
  * @type Number
  */
  FIXED_SPACE: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to create a flexible blank space for spacing items in toolbars.
  * @type Number
  */
  FLEXIBLE_SPACE: null,
  /**
  * Use with [Button.style](Titanium.UI.Button.style) to specify a dark-colored **Info** button.
  * @type Number
  */
  INFO_DARK: null,
  /**
  * Use with [Button.style](Titanium.UI.Button.style) to specify a light-colored **Info** button.
  * @type Number
  */
  INFO_LIGHT: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Organize** button.
  * @type Number
  */
  ORGANIZE: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Pause** button.
  * @type Number
  */
  PAUSE: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Play** button.
  * @type Number
  */
  PLAY: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Refresh** button.
  * @type Number
  */
  REFRESH: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Reply** button.
  * @type Number
  */
  REPLY: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Rewind** button.
  * @type Number
  */
  REWIND: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Save** button.
  * @type Number
  */
  SAVE: null,
  /**
  * Identical to [ACTIVITY](Titanium.UI.iPhone.SystemButton.ACTIVITY).
  * @type Number
  */
  SPINNER: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Stop** button.
  * @type Number
  */
  STOP: null,
  /**
  * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Trash** button.
  * @type Number
  */
  TRASH: null,
};


/**
* @extends Titanium.Proxy
* @since 0.8
* @requires iphone, ipad
*/
Titanium.UI.iPhone.SystemButtonStyle = {
  /**
  * Used with [ButtonBar](Titanium.UI.ButtonBar) or [TabbedBar](Titanium.UI.iOS.TabbedBar) only, to use the more condensed style used in nav bars and tool bars.
  * @type Number
  */
  BAR: null,
  /**
  * A simple button style with a border.
  * @type Number
  */
  BORDERED: null,
  /**
  * The style for a **Done** button--for example, a button that completes some task and returns to the previous view.
  * @type Number
  */
  DONE: null,
  /**
  * Specifies a borderless button, the default style for toolbars, button bars, and tabbed bars.
  * @type Number
  */
  PLAIN: null,
};


/**
* @extends Titanium.Proxy
* @since 0.8
* @requires iphone, ipad
*/
Titanium.UI.iPhone.SystemIcon = {
  /**
  * Bookmark style icon
  * @type Number
  */
  BOOKMARKS: null,
  /**
  * Contacts style icon
  * @type Number
  */
  CONTACTS: null,
  /**
  * Downloads style icon
  * @type Number
  */
  DOWNLOADS: null,
  /**
  * Favorites style icon
  * @type Number
  */
  FAVORITES: null,
  /**
  * Featured style icon
  * @type Number
  */
  FEATURED: null,
  /**
  * History style icon
  * @type Number
  */
  HISTORY: null,
  /**
  * More style icon
  * @type Number
  */
  MORE: null,
  /**
  * Most recent style icon
  * @type Number
  */
  MOST_RECENT: null,
  /**
  * Most viewed style icon
  * @type Number
  */
  MOST_VIEWED: null,
  /**
  * Recents style icon
  * @type Number
  */
  RECENTS: null,
  /**
  * Search style icon
  * @type Number
  */
  SEARCH: null,
  /**
  * Top rated style icon
  * @type Number
  */
  TOP_RATED: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iPhone.TableViewCellSelectionStyle = {
  /**
  * The cell when selected has a blue background. This is the default value.
  * @type Number
  */
  BLUE: null,
  /**
  * Then cell when selected has a gray background.
  * @type Number
  */
  GRAY: null,
  /**
  * The cell has no distinct style for when it is selected.
  * @type Number
  */
  NONE: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iPhone.TableViewScrollPosition = {
  /**
  * The table view scrolls the row of interest to the bottom of the visible table view.
  * @type Number
  */
  BOTTOM: null,
  /**
  * The table view scrolls the row of interest to the middle of the visible table view.
  * @type Number
  */
  MIDDLE: null,
  /**
  * The table view scrolls the row of interest to be fully visible with a minimum of movement. If the row is already fully visible, no scrolling occurs. For example, if the row is above the visible area, the behavior is identical to that specified by `TOP`. This is the default.
  * @type Number
  */
  NONE: null,
  /**
  * The table view scrolls the row of interest to the top of the visible table view.
  * @type Number
  */
  TOP: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iPhone.TableViewSeparatorStyle = {
  /**
  * The separator cell has no distinct style.
  * @type Number
  */
  NONE: null,
  /**
  * The separator cell has a single line running across its width. This is the default value.
  * @type Number
  */
  SINGLE_LINE: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires iphone, ipad
*/
Titanium.UI.iPhone.TableViewStyle = {
  /**
  * A table view whose sections present distinct groups of rows. The section headers and footers do not float.
  * @type Number
  */
  GROUPED: null,
  /**
  * A plain table view. Any section headers or footers are displayed as inline separators and float when the table view is scrolled.
  * @type Number
  */
  PLAIN: null,
};


/**
* @extends Titanium.Module
* @since 0.5
* @requires iphone, ipad
*/
Titanium.UI.iPhone = {
  /**
  * View presented with the same style as its parent window.
  * @type Number
  */
  MODAL_PRESENTATION_CURRENT_CONTEXT: null,
  /**
  * Window width and height are smaller than those of the screen and the view is centered on the screen.
  * @type Number
  */
  MODAL_PRESENTATION_FORMSHEET: null,
  /**
  * Window covers the screen.
  * @type Number
  */
  MODAL_PRESENTATION_FULLSCREEN: null,
  /**
  * Window height is the height of the screen and width is equal to screen width in a portrait orientation.
  * @type Number
  */
  MODAL_PRESENTATION_PAGESHEET: null,
  /**
  * When the window is presented, its view slides up from the bottom of the screen. On dismissal, the view slides back down (default.)
  * @type Number
  */
  MODAL_TRANSITION_STYLE_COVER_VERTICAL: null,
  /**
  * When the window is presented, the current view fades out while the new view fades in at the same time. On dismissal, a similar type of cross-fade is used to return to the original view.
  * @type Number
  */
  MODAL_TRANSITION_STYLE_CROSS_DISSOLVE: null,
  /**
  * When the window is presented, the current view initiates a horizontal 3D flip from right-to-left, resulting in the revealing of the new view as if it were on the back of the previous view. On dismissal, the flip occurs from left-to-right, returning to the original view.
  * @type Number
  */
  MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL: null,
  /**
  * When the window is presented, one corner of the current view curls up to reveal the modal view underneath. On dismissal, the curled up page unfurls itself back on top of the modal view.
  * @type Number
  */
  MODAL_TRANSITION_STYLE_PARTIAL_CURL: null,
  /**
  * Value of the badge for the application's springboard icon.
  * @type Number
  */
  appBadge: null,
  /**
  * Determines whether the shake to edit system-wide capability is enabled.
  * @type Boolean
  */
  appSupportsShakeToEdit: null,
  /**
  * Determines whether the status bar is hidden.
  * @type Boolean
  */
  statusBarHidden: null,
  /**
  * Determines the status bar color style.
  * @type Number
  */
  statusBarStyle: null,
};

/**
* Hides the status bar.
* @deprecated since 3.1.3 removed 3.2.0
* @param {hideStatusBarParams} params Determines whether action is animated.
*/
Titanium.UI.iPhone.hideStatusBar = function(params) {};

/**
* Shows the status bar.
* @deprecated since 3.1.3 removed 3.2.0
* @param {showStatusBarParams} params Determines whether action is animated.
*/
Titanium.UI.iPhone.showStatusBar = function(params) {};

/**
* @since 2.0.0
* @requires iphone, ipad
*/
hideStatusBarParams = {
  /**
  * Determines whether to animate the dialog as it is hidden.
  * @type Boolean
  */
  animated: null,
  /**
  * Style of the animation.
  * @type Number
  */
  animationStyle: null,
};


/**
* @since 2.0.0
* @requires iphone, ipad
*/
showStatusBarParams = {
  /**
  * Determines whether to animate the dialog as it is shown.
  * @type Boolean
  */
  animated: null,
  /**
  * Style of the animation.
  * @type Number
  */
  animationStyle: null,
};


/**
* @extends Titanium.Module
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.Utils = {
};

/**
* Returns the specified data decoded from Base64.
* @param {String|Titanium.Blob} obj Data to decode.
*/
Titanium.Utils.base64decode = function(obj) {};

/**
* Returns the specified data encoded to Base64.
* @param {String|Titanium.Blob|Titanium.Filesystem.File} obj Data to encode.
*/
Titanium.Utils.base64encode = function(obj) {};

/**
* Returns a MD5 digest of the specified data as a hex-based String.
* @param {String|Titanium.Blob} obj Data to calculate.
*/
Titanium.Utils.md5HexDigest = function(obj) {};

/**
* Returns a SHA-1 hash of the specified data as a hex-based String.
* @since 1.3.2
* @param {String|Titanium.Blob} obj Data to calculate.
*/
Titanium.Utils.sha1 = function(obj) {};

/**
* Returns a SHA-256 hash of the specified data as a hex-based String.
* @since 1.8.0
* @param {String|Titanium.Blob} obj Data to calculate.
*/
Titanium.Utils.sha256 = function(obj) {};

/**
* @extends Titanium.XML.Node
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.Attr = {
  /**
  * Attribute name
  * @type String
  */
  name: null,
  /**
  * The <Titanium.XML.Element> to which the attribute belongs.
  * @type Titanium.XML.Element
  */
  ownerElement: null,
  /**
  * True if this attribute was explicitly given a value in the instance document, false otherwise.
  * @type Boolean
  */
  specified: null,
  /**
  * The attribute value as a string.
  * @type String
  */
  value: null,
};


/**
* @extends Titanium.XML.Text
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.CDATASection = {
};


/**
* @extends Titanium.XML.Node
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.CharacterData = {
  /**
  * The character data of the node that implements this interface. Throws an exception during setting if this node is readonly.
  * @type String
  */
  data: null,
  /**
  * The number of characters that are available through data and the substringData method. This may have the value zero, i.e., <Titanium.XML.CharacterData> may be empty.
  * @type Number
  */
  length: null,
};

/**
* Append the string to the end of the character data of the node. Upon success, data provides access to the concatenation of data and the string specified. Throws an exception if this node is readonly.
* @param {String} arg The string to append.
*/
Titanium.XML.CharacterData.appendData = function(arg) {};

/**
* Remove a range of characters from the node. Upon success, data and length reflect the change. Throws an exception if this node is readonly, if offset is negative, offset is beyond the data's length, or if count is negative.
* @param {Number} offset The offset from which to start removing.
* @param {Number} count The number of characters to delete. If the sum of offset and count exceeds length then all characters from offset to the end of the data are deleted.
*/
Titanium.XML.CharacterData.deleteData = function(offset, count) {};

/**
* Insert a string at the specified offset. Throws an exception if this node is readonly, if offset is negative, or if offset is beyond the data's length.
* @param {Number} offset The character offset at which to insert.
* @param {String} arg The string to insert.
*/
Titanium.XML.CharacterData.insertData = function(offset, arg) {};

/**
* Replace the characters starting at the specified offset with the specified string. Throws an exception if this node is readonly, if offset is negative, offset is beyond the data's length, or if count is negative.
* @param {Number} offset The offset from which to start replacing.
* @param {Number} count The number of characters to replace. If the sum of offset and count exceeds length, then all characters to the end of the data are replaced; (i.e., the effect is the same as a remove method call with the same range, followed by an append method invocation).
* @param {String} arg The string with which the range must be replaced.
*/
Titanium.XML.CharacterData.replaceData = function(offset, count, arg) {};

/**
* Extracts a range of data from the node. Throws an exception if offset is negative, offset is beyond the data's length, or if count is negative.
* @param {Number} offset Start offset of substring to extract.
* @param {Number} count The number of characters units to extract.
*/
Titanium.XML.CharacterData.substringData = function(offset, count) {};

/**
* @extends Titanium.XML.CharacterData
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.Comment = {
};


/**
* @extends Titanium.Proxy
* @since 1.8
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.DOMImplementation = {
};

/**
* Creates an <Titanium.XML.Document> object of the specified type with its document element. Raises an exception if qualifiedName is malformed, contains an illegal character, or is inconsistent with namespaceURI. Also raises an exception if doctype has already been used with a different document.
* @param {String} namespaceURI The namespace URI of the document element to create.
* @param {String} qualifiedName The qualified name of the document element to be created.
* @param {Titanium.XML.DocumentType} doctype The type of document to be created or null. When doctype is not null, its Node.ownerDocument attribute is set to the document being created.
*/
Titanium.XML.DOMImplementation.createDocument = function(namespaceURI, qualifiedName, doctype) {};

/**
* Creates an empty <Titanium.XML.DocumentType> node. Entity declarations and notations are not made available. Entity reference expansions and default attribute additions do not occur. Raises an exception if qualifiedName is malformed or contains an illegal character.
* @param {String} qualifiedName The qualified name of the document type to be created.
* @param {String} publicId The external subset public identifier.
* @param {String} systemId The external subset system identifier.
*/
Titanium.XML.DOMImplementation.createDocumentType = function(qualifiedName, publicId, systemId) {};

/**
* Test if the <Titanium.XML.DOMImplementation> implements a specific feature.
* @param {String} feature The name of the feature to test (case-insensitive). The values used by DOM features are defined throughout the DOM Level 2 specifications and listed in the Conformance section. The name must be an XML name. To avoid possible conflicts, as a convention, names referring to features defined outside the DOM specification should be made unique by reversing the name of the Internet domain name of the person (or the organization that the person belongs to) who defines the feature, component by component, and using this as a prefix. For instance, the W3C SVG Working Group defines the feature "org.w3c.dom.svg".
* @param {String} version This is the version number of the feature to test. In Level 2, the string can be either "2.0" or "1.0". If the version is not specified, supporting any version of the feature causes the method to return true.
*/
Titanium.XML.DOMImplementation.hasFeature = function(feature, version) {};

/**
* @extends Titanium.XML.Node
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.Document = {
  /**
  * An interface to the list of entities that are defined for the document, such as via a Document Type Definition (DTD).
  * @type Titanium.XML.DocumentType
  */
  doctype: null,
  /**
  * Root element of this document.
  * @type Titanium.XML.Element
  */
  documentElement: null,
  /**
  * [DOMImplementation](Titanium.XML.DOMImplementation) object associated with thisdocument.
  * @type Titanium.XML.DOMImplementation
  */
  implementation: null,
};

/**
* Creates an attribute with the given name.
* @param {String} name Name for the new attribute.
*/
Titanium.XML.Document.createAttribute = function(name) {};

/**
* Creates an attribute with the given name and namespace.
* @param {String} namespaceURI Namespace URI for the new attribute.
* @param {String} name Qualified name for the new attribute (can include a prefix).
*/
Titanium.XML.Document.createAttributeNS = function(namespaceURI, name) {};

/**
* Creates and returns a [CDATASection](Titanium.XML.CDATASection).
* @param {String} data String data to go into the CDATA section.
*/
Titanium.XML.Document.createCDATASection = function(data) {};

/**
* Creates a [Comment](Titanium.XML.Comment) with the supplied string data.
* @param {String} data Comment text.
*/
Titanium.XML.Document.createComment = function(data) {};

/**
* Creates an empty [DocumentFragment](Titanium.XML.DocumentFragment).
*/
Titanium.XML.Document.createDocumentFragment = function() {};

/**
* Creates an element with the given tag name.
* @param {String} tagName Name for the created element.
*/
Titanium.XML.Document.createElement = function(tagName) {};

/**
* Create a new element with the given namespace and name.
* @param {String} namespaceURI URI for the namespace the new element belongs to.
* @param {String} name Qualified for the new element (can include a prefix).
*/
Titanium.XML.Document.createElementNS = function(namespaceURI, name) {};

/**
* Creates an [EntityReference](Titanium.XML.EntityReference) with the given name.
* @param {String} name Name for the new entity reference.
*/
Titanium.XML.Document.createEntityReference = function(name) {};

/**
* Creates a processing instruction for inserting into the DOM tree.
* @param {String} target Target part for the processing instruction.
* @param {String} data Data for the processing instruction node.
*/
Titanium.XML.Document.createProcessingInstruction = function(target, data) {};

/**
* Creates a text node.
* @param {String} data The string value for the text node.
*/
Titanium.XML.Document.createTextNode = function(data) {};

/**
* Returns an [Element](Titanium.XML.Element) that has an ID attribute with the given value.
* @param {String} elementId A unique ID value for an element to search for.
*/
Titanium.XML.Document.getElementById = function(elementId) {};

/**
* Returns a node list of elements in the document which have the given tag.
* @param {String} tagname Tag name to search for.
*/
Titanium.XML.Document.getElementsByTagName = function(tagname) {};

/**
* Returns a node list of elements in the document which belong to the given namespace and have the given tag name.
* @param {String} namespaceURI Namespace URI used for matching elements.
* @param {String} localname Tag name to search for.
*/
Titanium.XML.Document.getElementsByTagNameNS = function(namespaceURI, localname) {};

/**
* Imports a node from another document to this document,without altering or removing the source node from the original document.
* @param {Titanium.XML.Node} importedNode Node to import.
* @param {Boolean} deep If true, recursively import the subtree under the specified node; if false, import only the node itself.
*/
Titanium.XML.Document.importNode = function(importedNode, deep) {};

/**
* @extends Titanium.XML.Node
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.DocumentFragment = {
};


/**
* @extends Titanium.XML.Node
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.DocumentType = {
  /**
  * A <Titanium.XML.NamedNodeMap> containing the general entities, both external and internal, declared in the DTD. Parameter entities are not contained. Duplicates are discarded.
  * @type Titanium.XML.NamedNodeMap
  */
  entities: null,
  /**
  * The internal subset as a string.
  * @type String
  */
  internalSubset: null,
  /**
  * The name of DTD; i.e., the name immediately following the `DOCTYPE` keyword.
  * @type String
  */
  name: null,
  /**
  * A <Titanium.XML.NamedNodeMap> containing the notations declared  in the DTD. Duplicates are discarded. Every node in this map also  implements the <Titanium.XML.Notation> interface.
  * @type Titanium.XML.NamedNodeMap
  */
  notations: null,
  /**
  * The public identifier of the external subset.
  * @type String
  */
  publicId: null,
  /**
  * The system identifier of the external subset.
  * @type String
  */
  systemId: null,
};


/**
* @extends Titanium.XML.Node
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.Element = {
  /**
  * The name of the element, as defined by its tag.
  * @type String
  */
  tagName: null,
  /**
  * Content (value) of all text nodes within this node.
  * @type String
  * @requires android, iphone, ipad
  */
  text: null,
  /**
  * Content (value) of all text nodes within this node.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  textContent: null,
};

/**
* Retrieves an attribute value by name, returning it as a string.
* @param {String} name The name of the attribute
*/
Titanium.XML.Element.getAttribute = function(name) {};

/**
* Adds a new attribute. Any attribute with the same name is replaced. Throws an exception if the element is read-only, or if the name contains an illegal character.
* @param {String} name The name of the attribute.
* @param {String} value The value of the attribute. This is value is __not__ parsed as part of the assignment. Any markup is treated as literal text, and needs to be escaped.
*/
Titanium.XML.Element.setAttribute = function(name, value) {};

/**
* Removes an attribute by name. If the attribute has a default value, it is immediately replaced with this default, including namespace URI and local name. Throws an exception if the element is read-only.
* @param {String} name The name of the attribute to remove.
*/
Titanium.XML.Element.removeAttribute = function(name) {};

/**
* Retrieves an attribute value by name, returning it as a <Titanium.XML.Attr> object.
* @param {String} name The name of the attribute
*/
Titanium.XML.Element.getAttributeNode = function(name) {};

/**
* Adds a new attribute. Any attribute with the same `nodeName` as the argument is replaced. Throws an exception if the element is read-only, if `newAttr` is from a different document, or if `newAttr` is already an attribute of another element.
* @param {Titanium.XML.Attr} newAttr The attribute node to add to the element.
*/
Titanium.XML.Element.setAttributeNode = function(newAttr) {};

/**
* Removes the specified attribute node. If the removed attribute has a default value, it is replaced immediately, with the same namespace and local name as the removed attribute, if applicable. Throws an exception if the element is read-only, or the attribute is  not an attribute of the element.
* @param {Titanium.XML.Attr} oldAttr The attribute to remove.
*/
Titanium.XML.Element.removeAttributeNode = function(oldAttr) {};

/**
* Retrieves a <Titanium.XML.NodeList> of all descendant elements with a given tag name, in preorder traversal.
* @param {String} name The name of the element. The value `*` matches all tags.
*/
Titanium.XML.Element.getElementsByTagName = function(name) {};

/**
* Retrieves an attribute value by local name and namespace URI, returning it as a string.
* @param {String} namespaceURI The namespace URI of the attribute to retrieve.
* @param {String} localName The local name of the attribute to retrieve.
*/
Titanium.XML.Element.getAttributeNS = function(namespaceURI, localName) {};

/**
* Adds a new attribute. Any attribute with the same local name and namespace URI is present on the element is replaced, with its prefix changed to that of the `qualifiedName` parameter.  Throws an exception if the element is read-only, if the name contains an illegal character, or if the qualified name contains an error.
* @param {String} namespaceURI The namespace URI of the attribute.
* @param {String} qualifiedName The qualified name of the attribute. If it is malformed, has a prefix and namespaceURI is `null`, or if the prefix is `xml` or `xmlns` but does not correspond to a property defined in the  [XML](http://www.w3.org/XML/1998/namespace) or [XMLNS](http://www.w3.org/2000/xmlns/) specifications, then it contains an error.
* @param {String} value The value of the attribute. This is value is __not__ parsed as part of the assignment. Any markup is treated as literal text, and needs to be escaped.
*/
Titanium.XML.Element.setAttributeNS = function(namespaceURI, qualifiedName, value) {};

/**
* Removes an attribute by local name and namespace URI. If the attribute has a default value, it is immediately replaced with this default, including namespace URI and local name. Throws an exception if the element is read-only.
* @param {String} namespaceURI The namespace URI of the attribute to remove.
* @param {String} localName The local name of the attribute to remove.
*/
Titanium.XML.Element.removeAttributeNS = function(namespaceURI, localName) {};

/**
* Retrieves an attribute value by local name and namespace URI,  returning it as a <Titanium.XML.Attr> object.
* @param {String} namespaceURI The namespace URI of the attribute to retrieve.
* @param {String} localName The local name of the attribute to retrieve.
*/
Titanium.XML.Element.getAttributeNodeNS = function(namespaceURI, localName) {};

/**
* Adds a new attribute. Any attribute with the same local name and namespace URI is replaced. Throws an exception if the element is read-only, if `newAttr` is from a different document, or if `newAttr` is already an attribute of another element.
* @param {Titanium.XML.Attr} newAttr The attribute node to add to the element.
*/
Titanium.XML.Element.setAttributeNodeNS = function(newAttr) {};

/**
* Retrieves a <Titanium.XML.NodeList> of all descendant elements with a given local name and namespace URI, in preorder traversal.
* @param {String} namespaceURI The namespace URI of the element. The value `*` matches all namespaces.
* @param {String} localName The local name of the element. The value `*` matches all local names.
*/
Titanium.XML.Element.getElementsByTagNameNS = function(namespaceURI, localName) {};

/**
* Determines whether or not an attribute with the given name is available in the element, or has a default value.
* @param {String} name The name of the attribute to search for.
*/
Titanium.XML.Element.hasAttribute = function(name) {};

/**
* Determines whether or not an attribute with the given name is available in the element, or has a default value.
* @param {String} namespaceURI The namespace URI of the attribute to search for.
* @param {String} localName The local name of the attribute to search for.
*/
Titanium.XML.Element.hasAttributeNS = function(namespaceURI, localName) {};

/**
* @extends Titanium.XML.Node
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.Entity = {
  /**
  * For unparsed entities, the name of the notation for the entity. For parsed entities, this is `null`.
  * @type String
  */
  notationName: null,
  /**
  * The public identifier associated with the entity, if specified. If the public identifier was not specified, this is `null`.
  * @type String
  */
  publicId: null,
  /**
  * The system identifier associated with the entity, if specified. If the system identifier was not specified, this is null.
  * @type String
  */
  systemId: null,
};


/**
* @extends Titanium.XML.Node
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.EntityReference = {
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.NamedNodeMap = {
  /**
  * The number of nodes in the map. The valid range of child node indices is 0-`length`-1, inclusive.
  * @type Number
  */
  length: null,
};

/**
* Retrieves a node specified by name.
* @param {String} name The name of the node to retrieve.
*/
Titanium.XML.NamedNodeMap.getNamedItem = function(name) {};

/**
* Adds a node using its `nodeName` attribute. If a node with that name is already present, it is replaced.  Throws an exception if the argument is from a different document, the map is read-only, or the argument is an attribute of another element.
* @param {Titanium.XML.Node} node The node to insert into the map.
*/
Titanium.XML.NamedNodeMap.setNamedItem = function(node) {};

/**
* Removes a node from the map specified by name. When this map contains attributes attached to an element, if the removed attribtue is known to have a default, it is replaced with that value.
* @param {String} name The name of the node to remove.
*/
Titanium.XML.NamedNodeMap.removeNamedItem = function(name) {};

/**
* Retrieves the node at the specified index of the map. Note that NamedNodeMaps are not ordered.
* @param {Number} index The index of the node to retrieve.
*/
Titanium.XML.NamedNodeMap.item = function(index) {};

/**
* Retrieves a node specified by name and namespace. Returns `null` if no matching node is in the map.
* @param {String} namespaceURI The namespace URI of the node to retrieve.
* @param {String} localName The local name of the node within the namespace to retrieve.
*/
Titanium.XML.NamedNodeMap.getNamedItemNS = function(namespaceURI, localName) {};

/**
* Adds a node using its `namespaceURI` and `localName` attributes. If a node with that name is already present, it is replaced. Throws an exception if the argument is from a different document, the map is read-only, or the argument is an attribute of another element.
* @param {Titanium.XML.Node} node The node to insert into the map.
*/
Titanium.XML.NamedNodeMap.setNamedItemNS = function(node) {};

/**
* Removes a node from the map specified by local name and namespace URI.  When this map contains attributes attached to an element, if the removed attribtue is known to have a default, it is replaced with that value. Returns the node removed from the map, or `null` if there is no corresponding node.
* @param {String} namespaceURI The namespace URI of the node to remove.
* @param {String} localName The local name of the node within the namespace to remove.
*/
Titanium.XML.NamedNodeMap.removeNamedItemNS = function(namespaceURI, localName) {};

/**
* @extends Titanium.Proxy
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.Node = {
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify an[Element](Titanium.XML.Element) node.  
  * @type Number
  */
  ELEMENT_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify an[Attr](Titanium.XML.Attr) node.  
  * @type Number
  */
  ATTRIBUTE_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a[Text](Titanium.XML.Text) node.  
  * @type Number
  */
  TEXT_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a[CDATASection](Titanium.XML.CDATASection) node.  
  * @type Number
  */
  CDATA_SECTION_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify an[EntityReference](Titanium.XML.EntityReference) node.  
  * @type Number
  */
  ENTITY_REFERENCE_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify an[Entity](Titanium.XML.Entity) node.  
  * @type Number
  */
  ENTITY_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a[ProcessingInstruction](Titanium.XML.ProcessingInstruction) node.  
  * @type Number
  */
  PROCESSING_INSTRUCTION_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a[Comment](Titanium.XML.Comment) node.  
  * @type Number
  */
  COMMENT_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a[Document](Titanium.XML.Document) node.  
  * @type Number
  */
  DOCUMENT_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a[DocumentType](Titanium.XML.DocumentType) node.  
  * @type Number
  */
  DOCUMENT_TYPE_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a[DocumentFragment](Titanium.XML.DocumentFragment) node.  
  * @type Number
  */
  DOCUMENT_FRAGMENT_NODE: null,
  /**
  * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a[Notation](Titanium.XML.Notation) node.  
  * @type Number
  */
  NOTATION_NODE: null,
  /**
  * Name of this node.
  * @type String
  */
  nodeName: null,
  /**
  * Content (value) of this node.
  * @type String
  */
  nodeValue: null,
  /**
  * Content (value) of all text nodes within this node.
  * @type String
  * @requires iphone, ipad, mobileweb
  */
  textContent: null,
  /**
  * Content (value) of all text nodes within this node.
  * @type String
  * @requires iphone, ipad
  */
  text: null,
  /**
  * This node's type. One of `ELEMENT_NODE`, `ATTRIBUTE_NODE`, `TEXT_NODE`, `CDATA_SECTION_NODE`,`ENTITY_REFERENCE_NODE`, `ENTITY_NODE`, `PROCESSING_INSTRUCTION_NODE`, `COMMENT_NODE`,`DOCUMENT_NODE`, `DOCUMENT_TYPE_NODE`, `DOCUMENT_FRAGMENT_NODE`, `NOTATION_NODE`.
  * @type Number
  */
  nodeType: null,
  /**
  * This node's parent node.
  * @type Titanium.XML.Node
  */
  parentNode: null,
  /**
  * A <Titanium.XML.NodeList> of this node's children.
  * @type Titanium.XML.NodeList
  */
  childNodes: null,
  /**
  * This node's first child.
  * @type Titanium.XML.Node
  */
  firstChild: null,
  /**
  * This node's last child.
  * @type Titanium.XML.Node
  */
  lastChild: null,
  /**
  * This node's previous sibling.
  * @type Titanium.XML.Node
  */
  previousSibling: null,
  /**
  * This node's next sibling.
  * @type Titanium.XML.Node
  */
  nextSibling: null,
  /**
  * A map of this node's attributes.
  * @type Titanium.XML.NamedNodeMap
  */
  attributes: null,
  /**
  * This node's owning document.
  * @type Titanium.XML.Document
  */
  ownerDocument: null,
  /**
  * Namespace URI of this node.
  * @type String
  */
  namespaceURI: null,
  /**
  * Namespace prefix of this node.
  * @type String
  */
  prefix: null,
  /**
  * Local part of the qualified name of this node.
  * @type String
  */
  localName: null,
};

/**
* Appends the node `newChild` as a child of this node.
* @param {Titanium.XML.Node} newChild New node to append.
*/
Titanium.XML.Node.appendChild = function(newChild) {};

/**
* Returns a duplicate of this node.
* @param {Boolean} deep Whether or not to perform a deep copy of this node.
*/
Titanium.XML.Node.cloneNode = function(deep) {};

/**
* Returns `true` if this node has attributes.
*/
Titanium.XML.Node.hasAttributes = function() {};

/**
* Returns `true` if this node has child nodes.
*/
Titanium.XML.Node.hasChildNodes = function() {};

/**
* Inserts the node `newChild` before the node `refChild`.
* @param {Titanium.XML.Node} newChild Node to insert.
* @param {Titanium.XML.Node} refChild Node to insert `newChild` before.
*/
Titanium.XML.Node.insertBefore = function(newChild, refChild) {};

/**
* Tests whether the DOM implementation supports a specific feature.
* @param {String} feature Name of the feature.
* @param {String} version Version number of the feature.
*/
Titanium.XML.Node.isSupported = function(feature, version) {};

/**
* Normalizes text and attribute nodes in this node's child hierarchy.
*/
Titanium.XML.Node.normalize = function() {};

/**
* Removes a child node from this node.
* @param {Titanium.XML.Node} oldChild Node to remove.
*/
Titanium.XML.Node.removeChild = function(oldChild) {};

/**
* Replaces the node `oldChild` with the node `newChild`.
* @param {Titanium.XML.Node} newChild New node.
* @param {Titanium.XML.Node} oldChild Node being replaced.
*/
Titanium.XML.Node.replaceChild = function(newChild, oldChild) {};

/**
* @extends Titanium.Proxy
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.NodeList = {
  /**
  * The length of the node list.
  * @type Number
  */
  length: null,
};

/**
* Returns the <Titanium.XML.Node> object at the specified index.
* @param {Number} index The index of the node to retrieve. Indexing starts at 0.
*/
Titanium.XML.NodeList.item = function(index) {};

/**
* @extends Titanium.Proxy
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.Notation = {
  /**
  * The public identifier of this notation. If the public identifier was not specified, this is `null`.
  * @type String
  */
  publicId: null,
  /**
  * The system identifier of this notation. If the system identifier was not specified, this is `null`.
  * @type String
  */
  systemId: null,
};


/**
* @extends Titanium.Proxy
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.ProcessingInstruction = {
  /**
  * Retrieve the content of this processing instruction. This from the first non white space character  after the target to the character immediatly preceding the ?>. When setting a processing instruction, a DOMException may be thrown on an invalid instruction.
  * @type String
  */
  data: null,
  /**
  * Retrieve the target of this processing instruction. XML defines this as being the first token following  the markup that begins the processing instruction.
  * @type String
  */
  target: null,
};


/**
* @extends Titanium.XML.CharacterData
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML.Text = {
  /**
  * Content (value) of all text nodes within this node.
  * @type String
  * @requires android, iphone, ipad, mobileweb
  */
  textContent: null,
};

/**
* Breaks this node into two nodes at the specified by offset, and returns a new node of the same type, which contains all the content at and after the offset point. Throws an exception if the specified offset is negative or if this node is read only.
* @param {Number} offset The offset at which to split, starting from 0.
*/
Titanium.XML.Text.splitText = function(offset) {};

/**
* @extends Titanium.Module
* @since 0.9
* @requires android, iphone, ipad, mobileweb
*/
Titanium.XML = {
};

/**
* Parses an XML string into a <Titanium.XML.Document> object.
* @param {String} xml XML content as a string.
*/
Titanium.XML.parseString = function(xml) {};

/**
* Serializes a [Node](Titanium.XML.Node) object into a string.
* @param {Titanium.XML.Node} node XML [Node](Titanium.XML.Node) to serialize.
*/
Titanium.XML.serializeToString = function(node) {};

/**
* @extends Titanium.Module
* @since 0.8
* @requires android, iphone, ipad, mobileweb
*/
Titanium.Yahoo = {
};

/**
* invoke a Yahoo YQL query
* @param {String} yql the YQL query to execute
* @param {Callback<YQLResponse>} callback the function to execute when the query completes.
*/
Titanium.Yahoo.yql = function(yql, callback) {};

/**
* @extends ErrorResponse
*/
YQLResponse = {
  /**
  * Error message, if any returned. Use `error` instead
  * @type String
  */
  message: null,
  /**
  * The data payload received from the YQL.
  * @type Object
  */
  data: null,
  /**
  * Error message, if any returned.
  * @type String
  */
  error: null,
  /**
  * Error code. Returns 0 if `success` is `true`.
  * @type Number
  */
  code: null,
};


/**
*/
Dictionary = {
};


/**
* @extends Titanium.Proxy
* @since 1.7.0
* @fires Titanium.Namespace.Name#exampleEvent
*/
Titanium.Namespace.Name = {
  /**
  * A property
  * @type String
  */
  exampleProperty: null,
};

/**
* A method
*/
Titanium.Namespace.Name.exampleMethod = function() {};
/**
* An event
* @event Titanium.Namespace.Name#exampleEvent
* @type {Object}
* @type String eventProperty An event property
*/
