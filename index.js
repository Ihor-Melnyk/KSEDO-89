function onBeforeCardSave() {
  setPersonProceedings();
}

function setPersonProceedings() {
  var Student = EdocsApi.getAttributeValue(Student).value;
  var Teacher = EdocsApi.getAttributeValue(Teacher).value;

  if (Student) {
    EdocsApi.setAttributeValue({
      code: "PersonProceedings",
      value: Student,
    });
  } else if (Teacher) {
    EdocsApi.setAttributeValue({
      code: "PersonProceedings",
      value: Teacher,
    });
  } else {
    EdocsApi.setAttributeValue({
      code: "PersonProceedings",
      value: "",
    });
  }
}
