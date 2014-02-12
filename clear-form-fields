function clearForm(form) {

  // iterate over all of the inputs for the form
  // element that was passed in
  
  $(':input', form).each(function() {
    var type = this.type;
    var tag = this.tagName.toLowerCase(); // normalize case
    
    // password inputs, and textareas
    if (type == 'text' || type == 'password' || tag == 'textarea') {
    this.value = "";
    }
    // checkboxes and radios need to have their checked state cleared
    else if (type == 'checkbox' || type == 'radio') {
      this.checked = false;
    }
    // select elements need to have their 'selectedIndex' property set to -1
    else if (tag == 'select') {
      this.selectedIndex = -1;
    }
  
  });
  
};
