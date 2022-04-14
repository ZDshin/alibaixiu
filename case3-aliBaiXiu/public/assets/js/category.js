$('#addCategory').on('submit', function () {
    var formData = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/categories',
        data: formData,
        success: function () {
            location.reload();
        }
    });
    return false;
});

// 获取用户分类列表
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (res) {
        var html = template('categoryListTpl', {
            data: res
        });
        $('#categoryBox').html(html);
    }
});

$("#categoryBox").on('click', '.edit', function () {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/categories/' + id,
        success: function (res) {
            var html = template('modifyCategoryTpl', res);
            $('#formBox').html(html);
        }
    })
});
// 修改分类提交时
$('#formBox').on('submit', '#modifyCategory', function () {
    var formData = $(this).serialize();
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'put',
        url: '/categories/' + id,
        data: formData,
        success: function () {
            location.reload();
        }
    });
    return false;
});

// 删除按钮
$('#categoryBox').on('click', '.delete', function () {
    if (confirm("请确认是否进行用户删除？")) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'delete',
            url: '/categories/' + id,
            success: function (res) {
                location.reload();
            }
        })
    }
});

// 多选框
$('#selectAll').on('change', function () {
    // 获取全选按钮状态
    var status = $(this).prop('checked');

    if (status) {
        $('#deleteMany').show();
    } else {
        $("#deleteMany").hide();
    }
    // 获取所有用户，让用户状态与全选按钮状态保持一致
    $('#categoryBox').find('input').prop('checked', status);
});
$('#categoryBox').on('change', '.categoryStatus', function () {
    var inputs = $('#categoryBox').find('input');
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
});
// 批量删除
$('#deleteMany').on('click', function () {
    var ids = [];
    var checkedcategores = $('#categoryBox').find('input').filter(':checked');
    checkedcategores.each(function (index, element) {
        ids.push($(element).attr('data-id'));
    });
    // console.log(ids);
    if (confirm("请确认是否要进行批量删除操作？")) {
        $.ajax({
            type: 'delete',
            url: '/categories/' + ids.join('-'),
            success: function () {
                location.reload();
            }
        })
    }
})