function solution(brown, yellow) {
    const answer = [];
    
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i !== 0) continue;
        
        const [width, height] = [yellow / i, i];
        const border = (width + height) * 2 + 4;
        
        if (brown === border) {
            answer.push(width + 2, height + 2);
            break;
        }
    }
    
    return answer;
}