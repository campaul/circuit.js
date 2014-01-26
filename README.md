# circuit.js

**circuit.js** is a library for drawing circuits using HTML5 Canvas.

## Creating a Part

Any of the included parts can be created by name.

```javascript
var part = circuit.create('LM339');
```

## Registering a Part

New parts can be registered in the **circuit.js** namespace. Then they can be created the same way as the included parts.

```javascript
circuit.part.OPA2107 = {
    title: 'OPA2107',
    type: 'dip',
    pins: [
        'OUTPUT1',
        'INPUT1-',
        'INPUT1+',
        'V-',
        'INPUT1+',
        'INPUT1-',
        'OUTPUT2',
        'V+'
    ]
}
```

## Drawing a Part

A physical representation of a part can be drawn using the part's `draw` methood.

```javascript
part.draw(canvas);
```

## Drawing the Symbol for a Part

This functionality is not yet implemented but will be added soon.

## Drawing a Schematic

This functionality is not yet implemented but will be added eventually.

## Example

For a complete example, open demo.html in your browser.
