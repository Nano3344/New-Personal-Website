// Ajax booking form

function _ (id) {
  return document.getElementById(id);
}

function submitBooking(){
	_("submit2").disabled = true;
	var bookingdata = new FormData();
	bookingdata.append( "name2", _("name2").value );
	bookingdata.append( "email2", _("email2").value );
  bookingdata.append( "date", _("date").value );
  bookingdata.append( "time", _("time").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "booking.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				//_("booking").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
			} else {
				//_("status").innerHTML = ajax.responseText;
				_("submit2").disabled = false;
			}
		}
	}
	ajax.send( bookingdata );
}
