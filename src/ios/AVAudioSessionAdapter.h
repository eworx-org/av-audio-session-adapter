#import <Cordova/CDV.h>

@interface AVAudioSessionAdapter : CDVPlugin

- (void) getCategory:(CDVInvokedUrlCommand*)command;

- (void) getCategoryOptions:(CDVInvokedUrlCommand*)command;

- (void) setCategory:(CDVInvokedUrlCommand*)command;

@end

