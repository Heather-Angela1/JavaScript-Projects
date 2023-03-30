function validateForm() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const subject = document.getElementById("subject");
  
    if (!fname.value.trim()) {
      alert("Please enter your first name.");
      fname.focus();
      return false;
    }
  
    if (!lname.value.trim()) {
      alert("Please enter your last name.");
      lname.focus();
      return false;
    }
  
    if (!subject.value.trim()) {
      alert("Please enter a subject.");
      subject.focus();
      return false;
    }
  
    return true;
  }
  