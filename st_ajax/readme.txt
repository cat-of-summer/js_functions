Функция предназначена для поочередного слияния многомерных ассоциативных массивов.

Пример:

<form action="action.php" method="POST" onsubmit="return send_ajax(this);">
    <input type="text">
</form>

<script>
    function send_ajax(form) {
        return ajax({
            url: form.getAttribute('action'),
            method: form.getAttribute('method'),
            data: new FormData(form),
            success: function(data) {
                if (data == "success") alert("Boo!");
            }
        });
    }
</script>