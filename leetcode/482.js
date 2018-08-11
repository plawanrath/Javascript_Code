function licenseKeyFormatting(S, K) {
    S = S.toUpperCase();
    res = S.split('-').join("");
    rem = res.length%K;
    output = "";
    index = 0;
    while(index < rem) {
        output += res[index];
        index++;
    }
    if(index > 0 && index < res.length) {
        output = output + '-';
    }
    let count = 0;
    while(index < res.length) {
        if(count == K) {
            output = output + '-';
            count = 0;
        }
        output = output + res[index];
        index++;
        count++;
    }
    return output;
}

S = "5F3Z-2e-9-w", K = 4
console.log(licenseKeyFormatting(S, K));