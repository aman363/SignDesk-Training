let n1 = 0, n2 = 1, nextTerm=0;

function timedCount(){
    postMessage(nextTerm);
    nextTerm = n1+n2;
    n1=n2;
    n2=nextTerm;
    setTimeout("timedCount()",500);
}

timedCount();