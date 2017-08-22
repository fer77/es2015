'use strict';

// Before 
var template = ['<div class="alert">', '<p>Old template</p>', '</div>'].join('');

console.log(template);

// Template literals
var templateLiteral = '\n\t<div class="alert">,\n\t\t<p>New template literal</p>,\n\t</div>\n';

console.log(templateLiteral);

// Referencing values with template literals
var name = 'Template string';
var templateString = '\n\t<div class="alert">,\n\t\t<p>' + name + '</p>,\n\t</div>\n';

console.log(templateString);