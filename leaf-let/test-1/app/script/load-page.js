var lblcurrentmsg = document.getElementById('lblcurrentmsg'),
    txtnewmsg = document.getElementById('txtnewmsg'),
    rootRef = new Firebase('https://alert-msg.firebaseio.com'),
    currentmsgref = rootRef.child('currentmsgref');
document.getElementById('btnupdatemsg').addEventListener('click', function () {
    currentmsgref.set(txtnewmsg.value);
    txtnewmsg.value = '';
}); 
currentmsgref.on('value', function (snapshot) {
    lblcurrentmsg.innerText = snapshot.val();
});
