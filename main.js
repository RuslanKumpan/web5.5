function price()
{
    var a = Number(document.getElementById("quantity").value);
    var b = Number(document.getElementById("price").value);
    var d = Number(document.getElementById("quantity1").value);
    if(a == "" || b == "" || d == "")
    {
        alert("Ошибка! Неверный формат чисел:");
    }
    else
        if (!(/^(0|[1-9][0-9]*)$/).test(a) || !(/^(0|[1-9][0-9]*)$/).test(b))
        {
            alert("Ошибка! Неверный формат чисел:");
        }
        else
        {
            var c = a * b + d;
            document.getElementById("pay").innerHTML = "Стоимость топлива составляет: " + c;
        }
    document.addEventListener("DOMContentLoaded", function(){
        console.log("DOMContent Loaded");
        let h = document.getElementById("button");
        h.addEventListener("click", price);
    });
}
