module.exports = function(node, fire) {

	var teardown = addDragDropListener(node, function(event) {
		fire({
			files: Array.prototype.slice.call(event.dataTransfer.files),
			node: node,
			original: event
		})
	})

	return {
		teardown: teardown
	}
}

function handleDrop(callback, event) {
	event.stopPropagation()
	event.preventDefault()
	callback(event)
}

function killEvent(e) {
	e.stopPropagation()
	e.preventDefault()
	return false
}

function addDragDropListener(element, callback) {
	var handler = handleDrop.bind(undefined, callback)

	element.addEventListener('dragenter', killEvent, false)
	element.addEventListener('dragover', killEvent, false)
	element.addEventListener('drop', handler, false)

	return function teardown() {
		element.removeEventListener('dragenter', killEvent)
		element.removeEventListener('dragover', killEvent)
		element.removeEventListener('drop', handler)
	}
}
