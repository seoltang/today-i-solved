function solution(numbers) {
    const answer = [];
    
    numbers.forEach((aNum, aIdx) => {
        numbers.forEach((bNum, bIdx) => {
            if (aIdx !== bIdx) answer.push(aNum + bNum);
        });
    });
    
    return Array.from(new Set(answer)).sort((a, b) => a - b);
}