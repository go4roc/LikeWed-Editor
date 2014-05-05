define([
    "underscore"
], function(_) {

    function FileDescriptor(title, content) {
        this.title = title;
        this.content = content;
    }

    FileDescriptor.prototype.composeTitle = function() {
        return this.title;
    };

    return FileDescriptor;
});