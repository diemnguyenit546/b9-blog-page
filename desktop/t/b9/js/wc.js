function alert_login(){alert(loginFirstMsg);}
function jumpTo(element){$("html, body").scrollTop($(element).offset().top);}
function populate_winner(callid){$("#masklayer").css('left',"0px");$("#masklayer").css('top',"0px");$("#popupLayer").css("background","#000000");$("#popupLayer").css("width","995px");$("#popupLayer").css("height","600px");$("#popupLayer").css("padding-top","10px");$("#popupLayer").css("padding-bottom","10px");$("#popupLayer").css("-moz-box-shadow","0 0 30px 5px #888");$("#popupLayer").css("-webkit-box-shadow","0 0 30px 5px #888");$("#popupLayer").html($("#promo_"+callid).html());$('img[id="closeLogo"]').click(function(){$("#masklayer").fadeOut(500);$("#popupLayer").fadeOut(500);});}
function show_winner(id){populate_winner(id);$('div[id$="_winner"]').hide();$('#'+id+'_winner').show();$("#masklayer").fadeIn(500);$("#popupLayer").fadeIn(500);var top=Math.max($(window).scrollTop()+$(window).height()/2-$("#popupLayer")[0].offsetHeight/2,0);var left=Math.max($(window).scrollLeft()+$(window).width()/2-$("#popupLayer")[0].offsetWidth/2,0);$("#popupLayer").css('top',top+"px");$("#popupLayer").css('left',left+"px");}
function onlivechat(){window.open("u_event","event",'width=815,height=669,scrollbars=0,resizable=1,menubar=0;');}
$(document).keyup(function(e){if(e.keyCode==27){if($('#popupLayer').is(":visible")){$("#masklayer").fadeOut(500);$("#popupLayer").fadeOut(500);}
if($('#popupLayer2').is(":visible")){$("#masklayer").fadeOut(500);$("#popupLayer2").fadeOut(500);}}});function openCWLink(paraP,paraK){window.open("../../../CashWallet/cashwallet/cashwallet.php?p="+paraP+"&k="+paraK+"&lang="+lang+"&ff=user_winclub",'cashwallet','width=930,height=685,scrollbars=0,resizable=1,menubar=0;');}
showPopUpContact=function(){$.ajax({type:'POST',url:'tp/contactus',data:{theme:theme,ap:'1'},dataType:'html'}).success(function(data){show_contact_popup(data);});}
show_contact_popup=function(content){$("#masklayer").fadeIn("fast");$("#masklayer").css('left',"0px");$("#masklayer").css('top',"0px");$("#popupLayer").css('background-image','none');$("#popupLayer").css("background-color","#000");$("#popupLayer").css("width","1024px");$("#popupLayer").css("height","800px");$("#popupLayer").css("padding","0px");$("#popupLayer").css("border",'1px solid #264F00');$("#popupLayer").html(content);$("#popupLayer").fadeIn("fast");var top=Math.max($(window).scrollTop()+$(window).height()/2-$("#popupLayer")[0].offsetHeight/2,0);var left=Math.max($(window).scrollLeft()+$(window).width()/2-$("#popupLayer")[0].offsetWidth/2,0);$("#popupLayer").css('top',top+"px");$("#popupLayer").css('left',left+"px");}
close_contact=function(){if($("#cboxsection").is(":visible")){$("#masklayer").fadeOut("fast");$("#popupLayer").fadeOut("fast");}}