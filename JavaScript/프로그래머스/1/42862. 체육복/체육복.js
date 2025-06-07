function solution(n, lost, reserve) {
    const sortedLost = lost.sort((a, b) => a - b);
    const sortedReserve = reserve.sort((a, b) => a - b);
    const clothes = [];
    let participant = 0;
    
    for (let i = 1; i <= n; i++) {
        const isLost = sortedLost.includes(i);
        const isReserved = sortedReserve.includes(i);
        
        const cloth = isReserved && isLost ? 1 : isReserved ? 2 : isLost? 0 : 1;
        
        if (isLost) sortedLost.shift();
        if (isReserved) sortedReserve.shift();
        
        clothes.push(cloth);
    }
    
    for (let i = 0; i < clothes.length; i++) {        
        if (clothes[i] > 0) {
            participant += 1;
            continue;
        }
        
        if (clothes[i - 1] === 2) {
            clothes[i - 1] = 1;
            participant += 1;
            continue;
        }
        
        if (clothes[i + 1] === 2) {
            clothes[i + 1] = 1;
            participant += 1;
            continue;
        }
    }
    
    return participant;
}