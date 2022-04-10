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
            // console.log(res);
            $('#preAvatar').attr('src', res[0].avatar);
            $('#hiddenAvatar').val(res[0].avatar);
        }

    })
})
// 查询显示用户列表
$.ajax({
    type: 'get',
    url: '/users',
    success: function (res) {
        // console.log(res);
        var html = template('userTpl', {
            data: res
        });
        $('#userBox').html(html);
    }
})
// 点击编辑按钮，左侧显示人员信息
$("#userBox").on('click', '.edit', function (res) {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/users/' + id,
        success: function (res) {
            var html = template('modifyTpl', res);
            // console.log(html);
            $('#modifyBox').html(html)

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