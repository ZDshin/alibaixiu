$('#userForm').on('submit', function () {
    var formData = $(this).serialize();
    // console.log(formData);
    $.ajax({
        type: 'post',
        url: '/users',
        // contentType: 'application/json;charset=utf-8',
        // data: JSON.stringify($(this).serializeObject()),
        data: formData,
        // processData: false,
<<<<<<< HEAD
        // // // 不要设置请求参数的类型
=======
>>>>>>> 3c8be2166a7affe49ff870cb55e5eaa3eb539895
        // contentType: false,
        success: function () {
            location.reload();
        },
        error: function () {
            console.log("添加失败");
        }

    })
    // 阻止表单的默认提交行为
    return false;
});
// 当用户选择文件时
$('#avatar').on('change', function () {
    // console.log(this.files[0]);
    // 用户选择的文件
    var formData = new FormData();
    formData.append('avatar',
        this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        // // // 不要设置请求参数的类型
        contentType: false,
        // contentType: 'application/json;charset=utf-8',
        // data: JSON.stringify($(this).serializeObject()),
        success: function (res) {
<<<<<<< HEAD
            console.log(res);
            $("#preview").attr('src', res[0].avatar);
            $("#hiddenAvatar").val(res[0].avatar);
            
=======
            // console.log(res);
            $('#preAvatar').attr('src', res[0].avatar);
            $('#hiddenAvatar').val(res[0].avatar);
>>>>>>> 3c8be2166a7affe49ff870cb55e5eaa3eb539895
        }

    })
})

$.fn.serializeObject = function () {
    var serializeObj = {};
    var array = this.serializeArray();
    var str = this.serialize();
    $(array).each(function () {
        if (serializeObj[this.name]) {
            if ($.isArray(serializeObj[this.name])) {
                serializeObj[this.name].push(this.value);
            } else {
                serializeObj[this.name] = [serializeObj[this.name], this.value];
            }
        } else {
            serializeObj[this.name] = this.value;
        }
    });
    return serializeObj;
};