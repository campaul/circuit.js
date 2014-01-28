var circuit = (function() {
    var circuit = {};
    var types = {};

    circuit.define = function(name, data) {
        types[name] = data;
    };

    circuit.part = function(data) {
        return new Part(data);
    };
    
    var Part = function(data) {
        var type = types[data.type];

        this.draw = function(canvas) {
            type.draw(data, canvas);
        };
    };

    circuit.scale = 50;

    return circuit;
})();
