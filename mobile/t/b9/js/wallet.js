function getBalance(){$.ajax({type:'POST',url:'a/getWallet',dataType:'json'}).success(function(data){if(data.status=='0'){$('#balance-data').html('');var content='<table class="balance-table" align="center"><tbody>';$.each(data.d,function(index,d){content+=' <tr><td><input type="hidden" name="w_bal_'+index+'" id="w_bal_'+index+'" value="0"><span>'+d.t+' </span></td><td><span id="wallet_'+index+'"><img src="'+imgURL+'images/load-indicator.gif"></span></td></tr>';});content+='<tr><td class="no-bdr">&nbsp;</td><td class="no-bdr">&nbsp;</td></tr>';content+='<tr><td class="tbalance">'+langtotalbalance+'</td><td class="tbalance"><span class="tbalance" id="wallet_total"><img src="'+imgURL+'images/load-indicator.gif"></span></td></tr>';content+='<tbody></table>';$('#balance-data').append(content);$.each(data.d,function(index,d){getWalletBalance(index);});}});}
function getWalletBalance(wallet){$.ajax({type:'POST',url:'a/getGameCCL',data:{wallet:wallet},dataType:'json'}).success(function(data){if(data.d.ccl=='-9999'){$("#w_bal_"+wallet).val(0);$("#wallet_"+wallet).html(underMain);}else{$("#w_bal_"+wallet).val(data.d.ccl);var n=parseFloat(data.d.ccl).toFixed(2);$("#wallet_"+wallet).html(gCurrency+n);}
sumBalance(wallet);});}
function sumBalance(wallet){var ccl=0;$("input[name^='w_bal_']").each(function(i){ccl=ccl+parseFloat($(this).val());});var s=ccl.toString();s=s.replace(",","");var n=parseFloat(s).toFixed(2);$("#wallet_total").html(gCurrency+n);}