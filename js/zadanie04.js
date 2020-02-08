
//1
const sampleClassElements = document.querySelectorAll('.sample_class');
const getTagsOfElements = elements => Array.from(elements).map(({ tagName }) => tagName);
console.log(getTagsOfElements(sampleClassElements));

//2
const sampleElement = document.querySelector('#sample_id');
const getClassesOfElement = element => Array.from(element.classList);
console.log(getClassesOfElement(sampleElement));

//3
const sampleListElements = document.querySelectorAll('.sample_class_2 li');
const getInnerTextsOfElements = elements => Array.from(elements).map(({ innerText }) => innerText);
console.log(getInnerTextsOfElements(sampleListElements));

//4
const allLinks = document.querySelectorAll('a');
const getAddressesOfElements = elements => Array.from(elements).map(({ href }) => href);
console.log(getAddressesOfElements(allLinks));

//5
const sampleClass3Elements = document.querySelector('.sample_class_3');
console.log(getTagsOfElements(Array.from(sampleClass3Elements.children)));