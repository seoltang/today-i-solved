function solution(sizes) {
    console.log(sizes)
    let [maxW, maxH] = [0, 0];
    sizes.forEach((size) => {
        const [a, b] = size;
        const [width, height] = a >= b ? [a, b] : [b, a];
        if (width > maxW) maxW = width;
        if (height > maxH) maxH = height;
    });
    
    return maxW * maxH;
}