function solution(n) {
    let prev = 0, curr = 1;
    
    for(let i=2; i<=n; i++) {
        [prev, curr] = [curr, (prev + curr)%1234567] ;
    }
    
    return curr;
}