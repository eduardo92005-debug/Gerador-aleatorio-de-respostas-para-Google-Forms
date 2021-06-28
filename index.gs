var formID = "120nSuOoj0olng6La09uofH9vA0xnjkiIWzUu0lya_6Q";
var form = FormApp.openById(formID);

function getQuestions(){
  var questions = form.getItems();
  return {
    'object':questions
  };
}

function filterType(type_question){
  var questions = getQuestions().object;
  var typed_questions = [];
  var contador = 0;
  for( var question of questions){
    if(question.getType() == type_question){
      typed_questions.push(question)
    }
  }
  return {
    'object': typed_questions
  }
}
function getQuestionByType(type_question){
  let questions = getQuestions().object;
  let questions_filtered = filterType('MULTIPLE_CHOICE');
  return {
    'object': {    
    'titles':  questions_filtered.object.map(obj => obj.getTitle()),
    'IDs': questions_filtered.object.map(obj => obj.getId())
    }
  }

}


