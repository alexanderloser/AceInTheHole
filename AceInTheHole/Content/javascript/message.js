function createMessage(title, body) {

  var container = document.createElement('div')

  container.innerHTML = '<div id="back1" class="back"><div class="my-message"> \
    <span class="my-message-close" onclick="modal_close()"><i class="fa fa-close"></i></span> \
    <div class="my-message-title">'+title+'</div> \
    <div class="my-message-body">'+body+'</div> \
  </div></div>'
  return container.firstChild
}

function positionMessage(elem) {
  elem.style.position = 'absolute'
  var scroll = document.documentElement.scrollTop || document.body.scrollTop
  elem.style.top = scroll + 0 + 'px'
  elem.style.left =0 + 'px'
}

function addCloseOnClick(messageElem) {
  var input = messageElem.getElementsByTagName('span')[0]
  input.onclick = function() {
    messageElem.parentNode.removeChild(messageElem)
  }
}

function setupMessageButton(title, body) {
  var messageElem = createMessage(title, body)
  positionMessage(messageElem)
  addCloseOnClick(messageElem)
  document.body.appendChild(messageElem)
}

function ValidPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    var submitButton = document.getElementById('ok');
    if (!valid)
    {
       alert('Номер телефона введен неправильно!');
       submitButton.disabled = true;
    }
    else {
       submitButton.disabled = false;
    }
}
