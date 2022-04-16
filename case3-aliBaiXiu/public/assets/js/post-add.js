// 获取用户分类列表
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (res) {
        var html = template('categoryTpl', {
            data: res
        });
        $('#category').html(html);
        // console.log(res);
    }
});
$('#feature').on('change', function () {
    // 获取管理员选择上传的文件
    var file = this.files[0];
    // 创建formData对象，实现二进制文件上传
    var formData = new FormData();
    // 将文件追加到formData对象中
    formData.append('cover', file);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        // 告诉$.ajax方法不要处理data属性对应的参数
        // 默认转换为 name=abc&age=1&...
        processData: false,
        // 告诉$.ajax方法不要设置参数类型
        contentType: false,
        success: function (res) {
            // console.log(res);
            $('#thumbnail').val(res[0].cover);
        }

    })
});
$('#addForm').on('submit', function () {
    var formData = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/posts',
        data: formData,
        success: function () {
            location.href = '/admin/posts.html'
        }
    })

    return false;
})