function solution(citations) {
    const sortedCitations = citations.sort((a, b) => a - b);
    const n = citations.length;
    
    for (let i = 0; i < n; i++) {
        const h = n - i;
        const citation = sortedCitations[i];
        if (citation >= h) return h;
    }
    
    return sortedCitations[0];
}