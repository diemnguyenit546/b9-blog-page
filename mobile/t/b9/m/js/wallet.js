function getWalletB9(){$.ajax({type:'POST',url:'a/getWallet',dataType:'json'}).success(function(data){if(data.status=='0'){var txtnode='';var walletName='';txtnode='<table style="width:100%;color: #3e3c27;">';$.each(data.d,function(index,d){walletName=product_cap[index.toLowerCase()]!==undefined?product_cap[index.toLowerCase()]:index.toUpperCase();txtnode+='<tr><th><b style="color:#efbd56;"><input type="hidden" name="w_bal_'+index+'" id="w_bal_'+index+'" value="0">'+walletName+'</b></th><th><b style="color:#efbd56;"><div id="wallet_'+index+'"><img src="'+imgPath+'images/load-indicator.gif"></div></b></th></tr>';});txtnode+='</table>';document.getElementById("cclList").innerHTML=txtnode;$.each(data.d,function(index,d){getWalletBalanceB9(index);});}});}
function getWalletBalanceB9(wallet){$.ajax({type:'POST',url:'a/getGameCCL',data:{wallet:wallet},dataType:'json'}).success(function(data){if(data.d.ccl=='-9999'){$("#w_bal_"+wallet).val(0);$("#wallet_"+wallet).html(underMain);}else{$("#w_bal_"+wallet).val(data.d.ccl);$("#wallet_"+wallet).html(curr+' '+$.formatNumber(data.d.ccl,{format:"#,##0.00",locale:"us"}));}
sumWalletBalance();});}
function sumWalletBalance(){var ccl=0;$("input[name^='w_bal_']").each(function(i){ccl=ccl+parseFloat($(this).val());});$("#wallet_total").html(curr+' '+$.formatNumber(ccl,{format:"#,##0.00",locale:"us"}));}