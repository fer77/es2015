// Before 
let template = [
	'<div class="alert">',
		'<p>Old template</p>',
	'</div>'
].join('');

console.log(template);

// Template literals
let templateLiteral = `
	<div class="alert">,
		<p>New template literal</p>,
	</div>
`;

console.log(templateLiteral);

// Referencing values with template literals
let name = 'Template string';
let templateString = `
	<div class="alert">,
		<p>${name}</p>,
	</div>
`;

console.log(templateString);