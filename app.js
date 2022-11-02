


document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duration){

        let obj = document.getElementById(id),
        current = start, 
        Range = end - start,
        increment = end > start ? 1 : -1,
        step = math.abs(math.floor (duration / range )),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);

            }
        },step);
    }
    counter("count1, 0, 1287, 3000");
    counter("count2, 100, 4387, 2500");
    counter("count3, 0, 1330, 3000");
    counter("count4, 0, 9287, 3000");

});