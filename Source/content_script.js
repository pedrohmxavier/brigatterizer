walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	if (node.tagName != undefined){

		if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'  || Array.from(node.classList).indexOf('ace_editor') > -1) {
			return;
		}
		
	}	
	

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	console.log(v)

	v = v.replace(/([a-zA-Z]+)ado/gi, "$1" + "atto")
	
	textNode.nodeValue = v;
}


