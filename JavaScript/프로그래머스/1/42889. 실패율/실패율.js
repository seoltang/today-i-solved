function solution(N, stages) {
    const failedRates = [];
    
    for (let i = 1; i <= N; i++) {
        let [notClear, reached] = [0, 0];
        
        stages.forEach((stage) => {
            if (stage === i) notClear++;
            if (stage >= i) reached++;
        });
        
        failedRates.push({ stage: i, failedRate: notClear / reached });
    }
    
    return failedRates.sort((a, b) => b.failedRate - a.failedRate).map(({ stage }) => stage);
}