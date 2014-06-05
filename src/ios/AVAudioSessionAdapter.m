#import "AVAudioSessionAdapter.h"
#import <AVFoundation/AVFoundation.h>

@implementation AVAudioSessionAdapter

- (void) getCategory:(CDVInvokedUrlCommand*)command
{
    NSString* value = [[AVAudioSession sharedInstance] category];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:value];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];    
}

- (void) getCategoryOptions:(CDVInvokedUrlCommand*)command
{
    int value = (int)[[AVAudioSession sharedInstance] categoryOptions];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:value];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];    
}

- (void) setCategory:(CDVInvokedUrlCommand*)command 
{
    CDVPluginResult* pluginResult = nil;
    
    @try {
        NSString* value = (NSString*)[command.arguments objectAtIndex:0];
        NSUInteger options = 0;
    
        if ([command.arguments count] > 1) {
            options = (NSUInteger)[command.arguments objectAtIndex:1];
        }
        
        NSError* err = nil;
    
        if (options == 0) {
            [[AVAudioSession sharedInstance] setCategory:value error:&err];    
        }
        else {
            [[AVAudioSession sharedInstance] setCategory:value withOptions:(AVAudioSessionCategoryOptions)options error:&err];
        }
        
        if (err) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:[err localizedDescription]];
        }
        else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        }
    }
    @catch (NSException* ex) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:[ex reason]];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end

