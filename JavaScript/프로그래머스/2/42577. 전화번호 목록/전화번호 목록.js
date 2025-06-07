function solution(phone_book) {
    const sortedList = phone_book.sort();
    
    for (let i = 0; i < sortedList.length; i++) {
        if (sortedList[i + 1]?.startsWith(sortedList[i])) return false;
    }
    
    return true;
}