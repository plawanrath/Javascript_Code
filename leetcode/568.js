function vacationDays(flights, days) {
    var N = flights.length;
    var K = days[0].length;
    var dp = new Array(N).fill(-1);
    dp[0] = 0;
    for(var i=0;i<K;i++) {
    	var temp = new Array(N).fill(-1);
        for(var j=0;j<N;j++) {
	        for(var k=0;k<N;k++) {
		        if(j == k || flights[k][j] == 1) {
			        temp[j] = Math.max(temp[j], dp[k] + days[j][i]);
		        }
	        }
        }
        dp = temp;
    }
    var max = 0;
    for(var i=0;i<dp.length;i++) {
        if(dp[i] > max) {
            max = dp[i];
        }
    }
    return max;
}
