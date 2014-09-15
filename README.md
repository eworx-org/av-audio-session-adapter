av-audio-session-adapter
========================

The AVAudioSessionAdapter is an iOS specific cordova plugin, that exposes functionality of the AVAudioSession singleton instance. It is usefull to applications that require to implement advanced use-cases of media handling (play/record etc. For more information on AVAudioSession, view the [Apple Documentation](https://developer.apple.com/library/ios/documentation/AVFoundation/Reference/AVAudioSession_ClassReference/Reference/Reference.html))

The following functions are supported:

 * **getCategory(successCallback)**
 
   Returns the current category value of the AVAudioSession, as a parameter to the registered callback.
   
 
 * **getCategoryOptions(successCallback)**
 
   Returns the current categoryOptions value of the AVAudioSession, as a parameter to the registered callback.
   
 
 * **setCategory(successCallback, errorCallback, category)**
 
   Sets the category of the AVAudioSession to the given value.
   
 
 * **setCategoryWithOptions(successCallback, errorCallback, category, categoryOptions)**
 
   Sets the category and categoryOptions of the AVAudioSession to the given values.


A typical usage is as follows:

```javascript
var AVAudioSessionAdapter = gr.eworx.AVAudioSessionAdapter;
var audioSession = new AVAudioSessionAdapter();
audioSession.setCategoryWithOptions(
	function() {
		// Do something on success.
	}, 
    function() {
		// Handle the error.
	}, 
    AVAudioSessionAdapter.Categories.PLAY_AND_RECORD,
	AVAudioSessionAdapter.CategoryOptions.MIX_WITH_OTHERS
);
audioSession.getCategory(
	function(category) {
    	// Do something with category value.
    }
);
```

