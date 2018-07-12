'use strict';
//--------------------------------------------------
// NAVIGATION
//--------------------------------------------------
// Vinicio - here we are using a function expression/anonymous function/callback. This is a very common pattern in Javascript
$('nav a').on('click', function() {
  // Vinicio - comments should be about WHY instead of the HOW.
  // In an even listener, the value of this is what triggered the event
  const selectedTab = $(this).data('tab');
  console.log('selectedTab', selectedTab);
  // Vinicio - giving a number a name conveys intent
  const FADE_IN_DURATION = 750;
  $('.tab-content').hide();
  $(`#${selectedTab}`).fadeIn(FADE_IN_DURATION);
});
//--------------------------------------------------
// LOGGING AND MESSAGES
//--------------------------------------------------
// Vinicio - notice how this is a regular function
function logTheTarget() {
  console.log('this',this);
  console.log('$(this)',$(this));

  const targetText = $(this).text();
  const $newMessage = $('#feedback p:first-child').clone();
  $newMessage.text(`You clicked on ${targetText}`);
  $('#feedback').append($newMessage);
}

$('#menu1 li').on('click',logTheTarget);// Vinicio - I won't fix this line
$('#menu2').on('click','li',logTheTarget); // Vinicio - This is called Event Delegation
//--------------------------------------------------
// BUTTONS
//--------------------------------------------------
$('button[name=adder1]').on('click',function(){
  // Vinicio - How do we add new elements in jQuery?
  //           1 - clone the element
  //           2 - make changes to it
  //           3 - re-insert the elements to the DOM
  const $newLi = $('#menu1 li:first').clone(); // Vinicio - 1
  $newLi.text('NEW!'); // Vinicio - 2
  $('#menu1').append($newLi); // Vinicio - 3
});

$('button[name=adder2]').on('click',function(){
  const $newLi = $('#menu2 li:first').clone(); // Vinicio - 1
  $newLi.text('NEW!'); // Vinicio - 2
  $('#menu2').append($newLi); // Vinicio - 3
});

$('button[name=clear]').on('click',function(){
  $('.log-item:first').siblings().remove();
});
//--------------------------------------------------
// ATTRIBUTES AND PROPS
//--------------------------------------------------

$('input[name="check"]').on('change',function(){
  // Vinicio - this code displays the difference between attr("checked")
  //           and the prop("checked").
  const $checkbox = $(this);

  const htmlToRender = `.attr("checked"): ${$checkbox.attr('checked')}
  <br>.prop("checked") : ${$checkbox.prop('checked')}`;

  $('#checked-state').html(htmlToRender);
});

$('select[name="icecream"]').on('change',function(){
  const selectionName = $(this).val();
  $('img').hide(); // Vinicio - hiding all the pictures
  $(`img[data-flavor="${selectionName}"]`).show(); // Vinicio - showing the one I want to see
});
//--------------------------------------------------
$(document).ready(function() {
  $('.tab-content').hide();
})