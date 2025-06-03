function solution(answers) {
    supoja = {
        1: [1, 2, 3, 4, 5],
        2: [2, 1, 2, 3, 2, 4, 2, 5],
        3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
        };
    score = [0, 0, 0];
    answer = [];

    answers.forEach((val, i) => {
        if (val === supoja[1][i % supoja[1].length]) score[0]++;
        if (val === supoja[2][i % supoja[2].length]) score[1]++;
        if (val === supoja[3][i % supoja[3].length]) score[2]++;
    });
    score.forEach((val, i) => {
        if (val === Math.max(...score)) answer.push(i + 1);
    });
    return answer;
}