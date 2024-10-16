/**
 * Версия для es5
 * Устанавливает геттер и сеттер в объект
 */
function defineSetter(obj, functions) {
    var shadow = {};

    Object.keys(functions).forEach(function (key) {
        if (key in obj) {
            return;
        }
        Object.defineProperty(obj, key, {
            get: function () {
                return shadow[key];
            },
            set: function (val) {
                var old = shadow[key];
                if (val !== old) {
                    shadow[key] = val;
                    functions[key](val, old);
                }
            }
        });
    });
}
