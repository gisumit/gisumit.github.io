var lblcurrentmsg = document.getElementById('lblcurrentmsg'),
    txtnewmsg = document.getElementById('txtnewmsg'),
    btnupdatemsg = document.getElementById('btnupdatemsg'),
    rootRef = new Firebase('https://alert-msg.firebaseio.com'),
<<<<<<< HEAD
    currentMessageRef = rootRef.child('currentmsgref');
btnupdatemsg.addEventListener('click', function() {
    currentMessageRef.set(txtnewmsg.value);
    txtnewmsg.value = '';
});    
currentMessageRef.on('value', function(snapshot) {
=======
    currentmsgref = rootRef.child('currentmsgref');
btnupdatemsg.onclick = function() {
    currentmsgref.set(txtnewmsg.value);
    txtnewmsg.value = '';
}; 
currentmsgref.on('value', function(snapshot) {
>>>>>>> origin/master
    lblcurrentmsg.innerText = snapshot.val();
});
