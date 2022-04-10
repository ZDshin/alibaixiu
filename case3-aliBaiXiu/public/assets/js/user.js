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
// $('#avatar').on('change', function () {
//     // console.log(this.files[0]);
//     // 用户选择的文件
//     var formData = new FormData();
//     formData.append('avatar',
//         this.files[0]);
//     $.ajax({
//         type: 'post',
//         url: '/upload',
//         data: formData,
//         processData: false,
//         // // // 不要设置请求参数的类型
//         contentType: false,
//         // contentType: 'application/json;charset=utf-8',
//         // data: JSON.stringify($(this).serializeObject()),
//         success: function (res) {
//             // console.log(res);
//             $('#preAvatar').attr('src', res[0].avatar);
//             $('#hiddenAvatar').val(res[0].avatar);
//         }

//     })
// })
// 上传或修改头像，事件委托
$("#modifyBox").on("change", "#avatar", function () {
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
});
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

$("#modifyBox").on("submit", "#modifyForm", function () {
    // 获取用户在表单中输入的内容
    var formData = $(this).serialize();
    // 获取要修改的id属性
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'put',
        url: '/users/' + id,
        data: formData,
        success: function (res) {
            location.reload();
        }
    })
    return false;
})

$('#userBox').on('click', '.delete', function () {
    if (confirm("请确认是否进行用户删除？")) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'delete',
            url: '/users/' + id,
            success: function (res) {
                location.reload();
            }
        })
    }
})

$('#selectAll').on('change', function () {
    // 获取全选按钮状态
    var status = $(this).prop('checked');

    if (status) {
        $('#deleteMany').show();
    } else {
        $("#deleteMany").hide();
    }
    // 获取所有用户，让用户状态与全选按钮状态保持一致
    $('#userBox').find('input').prop('checked', status);
});

$('#userBox').on('change', '.userStatus', function () {
    var inputs = $('#userBox').find('input');
    if (inputs.length == inputs.filter(':checked').length) {
        $('#selectAll').prop('checked', true);
    } else {
        $('#selectAll').prop('checked', false);
    }
    if (inputs.filter(':checked').length > 0) {
        $('#deleteMany').show();
    } else {
        $("#deleteMany").hide();
    }
})

$('#deleteMany').on('click', function () {
    var ids = [];
    var checkedUsers = $('#userBox').find('input').filter(':checked');
    checkedUsers.each(function (index, element) {
        ids.push($(element).attr('data-id'));
    });
    // console.log(ids);
    if (confirm("请确认是否要进行批量删除操作？")) {
        $.ajax({
            type: 'delete',
            url: '/users/' + ids.join('-'),
            success: function () {
                location.reload();
            }
        })
    }
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