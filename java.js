$('#btnOk').button();
$('#btnCancel').button();

$('#btn').dialog({
    autoOpen: false
});

$('#mybutt').click(function(){
    $('#btn').dialog('open');
});
$('#btnOk').click(function(){
    alert('you said OK');
    $('#btn').dialog('close');
});
$('#btnCancel').click(function(){
    alert('you said Cancel');
    $('#btn').dialog('close');
});
