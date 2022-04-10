$('#modifyForm').on('submit', function () {
    
    var formData = $(this).serialize();
    console.log(formData);
    $.ajax({
        url: '/users/password',
        // put类型慎用 当路由中有多个put请求时put的先后顺序可能会影响程序执行
        type: 'put',
        data: formData,
        success: function () {
            location.href = '/admin/login.html';
        }
    });
    return false;
})