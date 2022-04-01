$('#userForm').on('submit', function(){
    // var formData = ;
    // console.log(formData);
    $.ajax({
        type: 'post',
        url: '/users',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify($(this).serializeObject()),
        // data: formData,
        success: function(){
            location.reload();
        },
        error: function(){
            console.log("添加失败");
        }

    })
    // 阻止表单的默认提交行为
    return false;
});
$.fn.serializeObject = function () {
    var serializeObj={};
    var array=this.serializeArray();
    var str=this.serialize();
    $(array).each(function(){
        if(serializeObj[this.name]){
            if($.isArray(serializeObj[this.name])){
                serializeObj[this.name].push(this.value);
            }else{
                serializeObj[this.name]=[serializeObj[this.name],this.value];
            }
        }else{
            serializeObj[this.name]=this.value;
        }
    });
    return serializeObj;
};