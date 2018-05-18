module.exports = function() {
    return {
        restrict: 'E',
        scope: {
            message: '=message'
        },
        template: require('./demo.html')
    };
}
