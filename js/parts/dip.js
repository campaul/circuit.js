circuit.define('dip', {
    draw: function(data, canvas) {
        var context = canvas.getContext('2d');
        context.save();
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Make 1px lines draw cleanly
        context.translate(0.5, 0.5)
        
        var width = Math.floor(circuit.scale * 3);
        var height = Math.floor(circuit.scale * (data.pins.length / 2 + 1));
        var x = Math.floor((canvas.width / 2) - (width / 2));
        var y = Math.floor((canvas.height / 2) - (height / 2));
        
        // Draw the body of the IC
        context.strokeRect(x, y, width, height);
        
        // Draw the notch in the IC
        context.beginPath();
        context.arc(x + width / 2, y, circuit.scale / 2, 0, Math.PI, false);
        context.closePath();
        context.stroke();
        
        // Set font size
        var fontSize = Math.floor(circuit.scale / 3);
        context.font = fontSize + 'px Monospace';
        
        // Draw the pins and labels
        for (var i = 0; i < data.pins.length / 2; i++) {
            var pinY = Math.round(y + (i * circuit.scale) + (circuit.scale * .7));
            var pinLeftX = x - Math.round(circuit.scale / 2);
            var pinRightX = x + width;
            var pinWidth = Math.round(circuit.scale / 2);
            var pinHeight = Math.round(circuit.scale / 1.75);
            
            var textMargin = Math.round(circuit.scale / 4);
            var textY = pinY + pinHeight / 2 + circuit.scale / 9;
            var textLeftX = pinLeftX - textMargin - context.measureText(data.pins[i]).width;
            var textRightX = pinRightX + textMargin + pinWidth;

            context.strokeRect(pinLeftX, pinY, pinWidth, pinHeight);
            context.fillText(data.pins[i], textLeftX, textY);
            
            context.strokeRect(pinRightX, pinY, pinWidth, pinHeight);
            context.fillText(data.pins[data.pins.length - 1 - i], textRightX, textY);
        }

        // Draw the title
        var titleX = (canvas.width / 2) - (context.measureText(data.title).width / 2);
        var titleY = fontSize * 2;
        context.fillText(data.title, titleX, titleY);

        context.restore();
    }
});
