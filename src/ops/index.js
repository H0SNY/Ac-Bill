function getHeaders() {
  try {
    return JSON.parse(localStorage.getItem('headers'));
  } catch (err) {
    return false;
  }
}
function setHeaders(headers) {
  localStorage.setItem('headers', JSON.stringify(headers))
}

function getElements() {
  try {
    return JSON.parse(localStorage.getItem('elements'));
  } catch (err) {
    return false;
  }
}
function setElements(elements) {
  localStorage.setItem('elements', JSON.stringify(elements));
}

function getResults() {
  try {
    return JSON.parse(localStorage.getItem('results'));
  } catch (err) {
    return false;
  }
}
function setResults(results) {
  localStorage.setItem('results', JSON.stringify(results))
}

function getElement(type, index) {
  switch (type) {
    case 'elements':
      return getElements()[index]
    case 'headers':
      return getHeaders()[index]
    default:
      return ""
  }
}

export {
  getElements,
  setElements,
  setHeaders,
  setResults,
  getHeaders,
  getResults , 
  getElement
}
