// FORMAT OF $.ajax
$.ajax({
  url:
  method:
  success:
  fail:
})

// FORMAT OF $.get
$.<METHOD>(url) // Vinicio - METHOD could be ajax, get or getJSON
  .done(successCallback)
  .fail(failureCallback)
  .always(everyTimeCallback)
  .then(nextCallback)

// FORMAT OF $.getJSON
$.<METHOD>(url)
  .then(successCallback, failureCallback)
