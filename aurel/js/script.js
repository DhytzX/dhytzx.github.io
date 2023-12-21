function toggle (elements, specifiedDisplay) {
    var element, index;
  
    elements = elements.length ? elements : [elements];
    for (index = 0; index < elements.length; index++) {
      element = elements[index];
  
      if (isElementHidden(element)) {
        element.style.display = '';
  
        if (isElementHidden(element)) {
          element.style.display = specifiedDisplay || 'block';
        }
      } else {
        element.style.display = 'none';
      }
    }
    function isElementHidden (element) {
      return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
    }
  }