
var exec = require('cordova/exec');

var AVAudioSessionAdapter = function() {
};

AVAudioSessionAdapter.prototype.getCategory = function(resultCallback) {
    exec(successCallback, errorCallback, "AVAudioSessionAdapter", "getCategory", []);
        
    function successCallback(param) {
        resultCallback(param);
    }
        
    function errorCallback(param) { }
};

AVAudioSessionAdapter.prototype.getCategoryOptions = function(resultCallback) {
    exec(successCallback, errorCallback, "AVAudioSessionAdapter", "getCategoryOptions", []);
        
    function successCallback(param) {
            resultCallback(param);
    }
        
    function errorCallback(param) { }
};

AVAudioSessionAdapter.prototype.setCategory = function(successCallback, errorCallback, category) {
    exec(successCallback, errorCallback, "AVAudioSessionAdapter", "setCategory", [category]);
};

AVAudioSessionAdapter.prototype.setCategoryWithOptions = function(successCallback, errorCallback, category, categoryOptions) {
    exec(successCallback, errorCallback, "AVAudioSessionAdapter", "setCategory", [category, categoryOptions]);
};

module.exports = AVAudioSessionAdapter;

