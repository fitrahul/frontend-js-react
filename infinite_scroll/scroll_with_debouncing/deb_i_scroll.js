    // 1. simple main function =>
    var count = 1;
    var parent = document.getElementById("main_div");
    var main = () => {
        for (let i = 1; i <= 25; i++) {
            var name = `Masai school student ${count++}`
            var child = document.createElement("p");
            child.setAttribute("id", "child_div")
            child.innerHTML = name;
            parent.append(child);
        }
    }
    main();

    // 2. scrolling effect =>
    parent.addEventListener("scroll", () => {
        var { scrollTop, scrollHeight, clientHeight } = document.getElementById("main_div");
        console.log({ scrollTop, scrollHeight, clientHeight });
        if (clientHeight + scrollTop >= scrollHeight - 5) {
            main();
        }
    })
    
// ******************************************************
        // 2. main function
        var count = 1;
        var main = () => {
            console.log(`fetching...${count++}`);
        }
    
        // 1. debouncing function
        var timer;
        var debounce = (main,delay) => {
            if (timer) clearTimeout(timer);
            timer =  setTimeout(() => {
                main();
            },delay);
        }