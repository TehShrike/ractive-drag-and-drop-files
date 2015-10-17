A Ractive wrapper/fork of https://github.com/mikolalysenko/drag-and-drop-files

Seriously it's nearly identical

```javascript

var dragDropFiles = require('ractive-drag-and-drop-files')

var ractive = new Ractive({
	el: '#container',
	template: '<div on-dragdropfiles="drag-file">{{text}}</div>',
	data: {
		text: 'Drag me!'
	},
	events: {
		dragdropfiles: dragDropFiles
	}
})

ractive.on('drag-file', function(event) {
	var files = event.files
	console.log(files)
}

```
