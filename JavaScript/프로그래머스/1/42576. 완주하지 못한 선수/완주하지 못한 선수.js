function solution(participant, completion) {
    const sortedParticipant = participant.sort();
    const sortedCompletion = completion.sort();
    
    for (let i = 0; i < sortedParticipant.length; i++) {
        const participant = sortedParticipant[i];
        if (participant !== sortedCompletion[i]) return participant;
    }
}