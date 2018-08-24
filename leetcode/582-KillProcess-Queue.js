function killProcess(pid, ppid, kill) {
	var q = [];
	var res = [];
	q.unshift(kill);
	while(q.length > 0) {
		var item = q.pop();
		res.push(item);
		if(ppid.indexOf(item) >= 0) {
			for(var i=0;i<ppid.length;i++) {
				if(ppid[i] === item) {
					q.unshift(pid[i]);
				}
			}
		}
	}
	return res;
}

pid = [1,2,3,4,5]
ppid = [0,1,1,1,1]
kill = 1
console.log(killProcess(pid, ppid, kill));