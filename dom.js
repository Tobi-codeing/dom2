document.body.childNotes[1]
// yeh document ke andar body mai se pehle note ko slect karta hai.


document.body.childNotes[1].childNotes
// yeh document ke andar body mai se pehle ko select karega phir uske andar pehle note ko karega .


let indo = document.body.childNotes[1]
// abb inka shortcut banna diya abb hum jub bhi indo dalenge to yeh select hoga .

indo.firstChild
// yeh abb indo kjo shortcut tha usme se pehle ko target karega.

indo.lastChild
// yeh abb indoo mai se last ko target karega.

indo.firstElementChild
// yeh abb indo mai se pehle element ko target kar dega.

indo.lastElementChild
// yeh last element ko target karege.

indo.firstElementChild.style.color ="red"
//  example hai inn sub ko console pe try karna.

indo.firstElementChild.parentElement
// Child ka parent kon hai bata dega.


Document.body.firstElementChild.Childnodes
// yeh batayega ki kon konsa element hai isme.

Document.body.firstElementChild.Children
// yeh sirf element ko target karega

document.body.firstElementChild.nextElementSibling
// yeh next sibling ko targett karega

document.body.firstElementChild.previousElementSibling
// yeh previous element ko target karega



// Abb table ko target karenge

document.body.Children
// yeh batayega ki body mai kitne children hai

Document.body.Children[1]
// abb hamara jo hai table select ho gya

Document.body.Children[1].rows
// abb iski rows mil jayenge


// Kuch additional tips:

// - console.log() function ka use karke aap apne code ke output ko console mein dekh sakte hain.
// - document.querySelector() function ka use karke aap specific elements ko select kar sakte hain.
// - element.addEventListener() function ka use karke aap elements par events attach kar sakte hain.
