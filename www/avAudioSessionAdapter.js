
var exec = require('cordova/exec');

var AVAudioSessionAdapter = function() {
};

AVAudioSessionAdapter.prototype.getCategory = function(resultCallback) {
    return cordova.exec(successCallback, errorCallback, "AVAudioSessionAdapter", "getCategory", []);
        
    function successCallback(param) {
        resultCallback(param);
    }
        
    function errorCallback(param) { }
};

AVAudioSessionAdapter.prototype.getCategoryOptions = function(resultCallback) {
    return cordova.exec(successCallback, errorCallback, "AVAudioSessionAdapter", "getCategoryOptions", []);
        
    function successCallback(param) {
            resultCallback(param);
    }
        
    function errorCallback(param) { }
};

AVAudioSessionAdapter.prototype.setCategory = function(successCallback, errorCallback, category) {
    return cordova.exec(successCallback, errorCallback, "AVAudioSessionAdapter", "setCategory", [category]);
};

AVAudioSessionAdapter.prototype.setCategoryWithOptions = function(successCallback, errorCallback, category, categoryOptions) {
    return cordova.exec(successCallback, errorCallback, "AVAudioSessionAdapter", "setCategory", [category, categoryOptions]);
};

module.exports = AVAudioSessionAdapter;

