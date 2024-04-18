//your JS code here. If required.
const bands = ['The Plot in You', 
			   'The Devil Wears Prada', 
			   'Pierce the Veil', 'Norma Jean', 
			   'The Bled', 'Say Anything', 'The Midway State', 
			   'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
			   'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const ul = document.getElementById("bands");

const sortedBands = bands.map(band => {
	const cleanedName = band.replace(/^(a |an |the )/i,'');
	return {original: band, cleaned: cleanedName};
}).sort((a,b) => a.cleaned.localeCompare(b.cleaned));


sortedBands.forEach(band => {
	const li = document.createElement('li');
	li.textContent = band.original;
	ul.appendChild(li);
})
