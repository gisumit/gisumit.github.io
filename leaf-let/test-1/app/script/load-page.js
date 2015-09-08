var lblcurrentmsg = document.getElementById('lblcurrentmsg'),
    txtnewmsg = document.getElementById('txtnewmsg'),
    btnupdatemsg = document.getElementById('btnupdatemsg'),
    rootRef = new Firebase('https://alert-msg.firebaseio.com'),
    currentmsgref = rootRef.child('currentmsgref');
btnupdatemsg.onclick = function () {
    currentmsgref.set(txtnewmsg.value);
    txtnewmsg.value = '';
}; 
currentmsgref.on('value', function (snapshot) {
    lblcurrentmsg.innerText = snapshot.val();
});
