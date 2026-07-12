function logo(){
    location.href ='index.html'
}
function login(){
     location.href ='login.html'
}
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
        "#loader").style.display = "block";
        document.querySelector(
        "body").style.visibility = "hidden";
        document.querySelector(
        "#loader").style.visibility = "visible";
        document.body.style.overflow = 'hidden';
    } else {
        document.querySelector(
        "body").style.visibility = "visible";
        document.querySelector(
        "#loader").style.display = "none";
        document.body.style.overflow = 'visible';
        initCalendar();
    }
}

function setVisibleMonth(index){
    const monthLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const monthContents = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    monthLabels.forEach((id, i) => {
        const label = document.getElementById(id);
        const content = document.getElementById(monthContents[i]);
        if (label) label.style.display = i === index ? 'block' : 'none';
        if (content) content.style.display = i === index ? 'block' : 'none';
    });
}

function initCalendar(){
    const today = new Date();
    const monthIndex = today.getMonth();
    const yearElement = document.querySelector('#year p');
    if (yearElement) yearElement.textContent = today.getFullYear();
    setVisibleMonth(monthIndex);
}
function back(){
    var A = document.getElementById("Jan");
    var a = document.getElementById("january");
    var B = document.getElementById("Feb");
    var b = document.getElementById("february");
    var C = document.getElementById("Mar");
    var c = document.getElementById("march");
    var D = document.getElementById("Apr");
    var d = document.getElementById("april");
    var E = document.getElementById("May");
    var e = document.getElementById("may");
    var F = document.getElementById("Jun");
    var f = document.getElementById("june");
    var G = document.getElementById("Jul");
    var g = document.getElementById("july");
    var H = document.getElementById("Aug");
    var h = document.getElementById("august");
    var I = document.getElementById("Sep");
    var i = document.getElementById("september");
    var J = document.getElementById("Oct");
    var j = document.getElementById("october");
    var K = document.getElementById("Nov");
    var k = document.getElementById("november");
    var L = document.getElementById("Dec");
    var l = document.getElementById("december");

    if (getComputedStyle(A).display === "block"){
        A.style.display = "none";
        L.style.display = "block";
        a.style.display = "none";
        l.style.display = "block";
        return
    }
    if (getComputedStyle(B).display === "block"){
        B.style.display = "none";
        A.style.display = "block";
        b.style.display = "none";
        a.style.display = "block";
        return
    }

    if (getComputedStyle(C).display === "block"){
        C.style.display = "none";
        B.style.display = "block";
        c.style.display = "none";
        b.style.display = "block";
        return
    }

    if (getComputedStyle(D).display === "block"){
        D.style.display = "none";
        C.style.display = "block";
        d.style.display = "none";
        c.style.display = "block";
        return
    }

    if (getComputedStyle(E).display === "block"){
        E.style.display = "none";
        D.style.display = "block";
        e.style.display = "none";
        d.style.display = "block";
        return
    }

    if (getComputedStyle(F).display === "block"){
        F.style.display = "none";
        E.style.display = "block";
        f.style.display = "none";
        e.style.display = "block";
        return
    }

    if (getComputedStyle(G).display === "block"){
        G.style.display = "none";
        F.style.display = "block";
        g.style.display = "none";
        f.style.display = "block";
        return
    }

    if (getComputedStyle(H).display === "block"){
        H.style.display = "none";
        G.style.display = "block";
        h.style.display = "none";
        g.style.display = "block";
    }

    if (getComputedStyle(I).display === "block"){
        I.style.display = "none";
        H.style.display = "block";
        i.style.display = "none";
        h.style.display = "block";
        return
    }

    if (getComputedStyle(J).display === "block"){
        J.style.display = "none";
        I.style.display = "block";
        j.style.display = "none";
        i.style.display = "block";
        return
        }    

    if (getComputedStyle(K).display === "block"){
        K.style.display = "none";
        J.style.display = "block";
        k.style.display = "none";
        j.style.display = "block";
        return
    }

    if (getComputedStyle(L).display === "block"){
        L.style.display = "none";
        K.style.display = "block";
        l.style.display = "none";
        k.style.display = "block";
        return
    }

}
function next(){
    var A = document.getElementById("Jan");
    var a = document.getElementById("january");
    var B = document.getElementById("Feb");
    var b = document.getElementById("february");
    var C = document.getElementById("Mar");
    var c = document.getElementById("march");
    var D = document.getElementById("Apr");
    var d = document.getElementById("april");
    var E = document.getElementById("May");
    var e = document.getElementById("may");
    var F = document.getElementById("Jun");
    var f = document.getElementById("june");
    var G = document.getElementById("Jul");
    var g = document.getElementById("july");
    var H = document.getElementById("Aug");
    var h = document.getElementById("august");
    var I = document.getElementById("Sep");
    var i = document.getElementById("september");
    var J = document.getElementById("Oct");
    var j = document.getElementById("october");
    var K = document.getElementById("Nov");
    var k = document.getElementById("november");
    var L = document.getElementById("Dec");
    var l = document.getElementById("december");

    if (getComputedStyle(A).display === "block"){
        A.style.display = "none";
        B.style.display = "block";
        a.style.display = "none";
        b.style.display = "block";
        return
    }

    if (getComputedStyle(B).display === "block"){
        B.style.display = "none";
        C.style.display = "block";
        b.style.display = "none";
        c.style.display = "block";
        return
    }

    if (getComputedStyle(C).display === "block"){
        C.style.display = "none";
        D.style.display = "block";
        c.style.display = "none";
        d.style.display = "block";
        return
    }   

    if (getComputedStyle(D).display === "block"){
        D.style.display = "none";
        E.style.display = "block";
        d.style.display = "none";
        e.style.display = "block";
        return
    }

    if (getComputedStyle(E).display === "block"){
        E.style.display = "none";
        F.style.display = "block"
        e.style.display = "none";
        f.style.display = "block";
        return
    }

    if (getComputedStyle(F).display === "block"){
        F.style.display = "none";
        G.style.display = "block"
        f.style.display = "none";
        g.style.display = "block";
        return
    }
    
    if (getComputedStyle(G).display === "block"){
        G.style.display = "none";
        H.style.display = "block"
        g.style.display = "none";
        h.style.display = "block";
        return
    }

    if (getComputedStyle(H).display === "block"){
        H.style.display = "none";
        I.style.display = "block"
        h.style.display = "none";
        i.style.display = "block";
        return
    }

    if (getComputedStyle(I).display === "block"){
        I.style.display = "none";
        J.style.display = "block"
        i.style.display = "none";
        j.style.display = "block";
        return
    }

    if (getComputedStyle(J).display === "block"){
        J.style.display = "none";
        K.style.display = "block"
        j.style.display = "none";
        k.style.display = "block";
        return
    }

    if (getComputedStyle(K).display === "block"){
        K.style.display = "none";
        L.style.display = "block"
        k.style.display = "none";
        l.style.display = "block";
        return
    }
    if (getComputedStyle(L).display === "block"){
        L.style.display = "none";
        A.style.display = "block"
        l.style.display = "none";
        a.style.display = "block";
        return
    }

}
function zoom(){
    var x = document.getElementById("blank");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom2(){
    var x = document.getElementById("blank2");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom3(){
    var x = document.getElementById("blank3");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom4(){
    var x = document.getElementById("blank4");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom5(){
    var x = document.getElementById("blank5");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom6(){
    var x = document.getElementById("blank6");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom7(){
    var x = document.getElementById("blank7");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom8(){
    var x = document.getElementById("blank8");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom9(){
    var x = document.getElementById("blank9");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom10(){
    var x = document.getElementById("blank10");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom11(){
    var x = document.getElementById("blank11");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom12(){
    var x = document.getElementById("blank12");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map1(){
    var x = document.getElementById("map1");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map2(){
    var x = document.getElementById("map2");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map3(){
    var x = document.getElementById("map3");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map4(){
    var x = document.getElementById("map4");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map5(){
    var x = document.getElementById("map5");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map6(){
    var x = document.getElementById("map6");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map7(){
    var x = document.getElementById("map7");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map8(){
    var x = document.getElementById("map8");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map9(){
    var x = document.getElementById("map9");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map10(){
    var x = document.getElementById("map10");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map11(){
    var x = document.getElementById("map11");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map12(){
    var x = document.getElementById("map12");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map13(){
    var x = document.getElementById("map13");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function map14(){
    var x = document.getElementById("map14");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img1(){
    var x = document.getElementById("img1");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img6a(){
    var x = document.getElementById("img6a");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img6b(){
    var x = document.getElementById("img6b");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function stair(){
    var x = document.getElementById("stair");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img6c(){
    var x = document.getElementById("img6c");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function stair2(){
    var x = document.getElementById("stair2");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img7a(){
    var x = document.getElementById("img7a");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img7b(){
    var x = document.getElementById("img7b");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img7c(){
    var x = document.getElementById("img7c");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img7d(){
    var x = document.getElementById("img7d");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img7e(){
    var x = document.getElementById("img7e");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img7f(){
    var x = document.getElementById("img7f");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img7g(){
    var x = document.getElementById("img7g");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img7h(){
    var x = document.getElementById("img7h");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img7i(){
    var x = document.getElementById("img7i");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function stair3(){
    var x = document.getElementById("stair3");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img3a(){
    var x = document.getElementById("img3a");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img3b(){
    var x = document.getElementById("img3b");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img3c(){
    var x = document.getElementById("img3c");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img3d(){
    var x = document.getElementById("img3d");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img3e(){
    var x = document.getElementById("img3e");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img3f(){
    var x = document.getElementById("img3f");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img5a(){
    var x = document.getElementById("img5a");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img5b(){
    var x = document.getElementById("img5b");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function stair4(){
    var x = document.getElementById("stair4");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img5c(){
    var x = document.getElementById("img5c");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img5d(){
    var x = document.getElementById("img5d");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function img5e(){
    var x = document.getElementById("img5e");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}

function newsno1(){
    var x = document.getElementById("newsno1");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function newsno2(){
    var x = document.getElementById("newsno2");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function newsno3(){
    var x = document.getElementById("newsno3");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function newsno4(){
    var x = document.getElementById("newsno4");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function newsno5(){
    var x = document.getElementById("newsno5");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}






// Standard text formatting commands
function execCmd(command) {
    document.execCommand(command, false, null);
    document.getElementById('studentInput').focus();
}
// Insert simple plaintext math symbols at cursor position
function insertText(text) {
    document.getElementById('studentInput').focus();
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    
    const range = selection.getRangeAt(0);
    range.deleteContents();
    
    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    
    // Move cursor right after the newly inserted text
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);
}
// Insert structural HTML templates like fractions
function insertHTML(type) {
    document.getElementById('studentInput').focus();
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    let htmlString = '';
    if (type === 'fraction') {
    // Creates an editable top and bottom fraction layer
    htmlString = '<span class="fraction" contenteditable="false"><span class="num" contenteditable="true">x</span><span class="den" contenteditable="true">y</span></span>&nbsp;';
    }

    const div = document.createElement('div');
    div.innerHTML = htmlString;
    const fragment = document.createDocumentFragment();
    let child;
    while ((child = div.firstChild)) {
    fragment.appendChild(child);
    }
    
    range.insertNode(fragment);
}