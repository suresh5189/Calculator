    var screen = document.querySelector("#screen");
    var btn = document.querySelectorAll(".btn");

    for (item of btn) {
        item.addEventListener("click", (e) => {
            btnText = e.target.innerText;
            if (btnText == 'X') {
                btnText = '*';
            }

            if (btnText == '÷') {
                btnText = '/';
            }
            screen.value += btnText;

        });
    }

    function sin() {
        screen.value = Math.sin(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function power() {
        screen.value = Math.pow(screen.value, 2);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function sin() {
        screen.value = Math.sin(screen.value);
    }

    function pi() {
        screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.718281828459045;
    }

    function fact() {
        var i, num, fact = 1;
        num = screen.value;
        for (i = 1; i <= num; i++) {
            fact = fact * 1;
        }
        screen.value = f;
    }

    function back() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }