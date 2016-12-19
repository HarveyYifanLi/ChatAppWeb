var socket = io();

$('form').submit(
  function () {
  var text = $('#m').val();
  
  socket.emit('message', text);
  $('#m').val('');
  
  return false;
}
);

socket.on('message', function (msg) {
  var incomingMessage = $('<li>').text(msg);
  $('#messages').append(incomingMessage);
});