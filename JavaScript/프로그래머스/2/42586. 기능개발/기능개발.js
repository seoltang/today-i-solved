function solution(progresses, speeds) {
    const days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    
    return days.reduce((acc, cur, i, arr) => {
        if (cur > acc[acc.length - 1][acc[acc.length - 1].length - 1]) {
            acc.push([cur]);
        } else {
            acc[acc.length - 1].push(cur);
            acc[acc.length - 1] = acc[acc.length - 1].sort((a, b) => a - b);
        }
        return acc;
    }, [[]]).map((day => day.length));
}