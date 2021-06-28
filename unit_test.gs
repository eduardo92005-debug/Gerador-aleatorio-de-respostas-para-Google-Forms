
QUnit.helpers(this);
QUnit.exposeInternals();
function doGet( e ) {
  QUnit.urlParams( e.parameter );
  QUnit.config({ title: "Unit tests for my project" });
  QUnit.load( tests );
  return QUnit.getHtml();
};


function tests() {
  console = Logger;
  checkReturnQuestion();
}

function checkReturnQuestion(){
  Logger.log(getQuestions().object)
  var item_log = Logger.getLog()
  item_count = item_log.split("Item").length - 1;
  test('Checa se a função está retornando corretamente os itens!', function () {
   equal( item_count, 8, 'Sucesso, objeto tem o mesmo conteúdo e a quantidade esperada de itens!');
  });
}
