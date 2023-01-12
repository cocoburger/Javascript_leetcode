/**
 * 등차, 등비 수열인지 확인하려면 common의 길이는 최소 3이다.
 *  3번 value - 2번 value === 2번 value - 1번 value가 같으면 등차수열
 *  다르면 등비수열이다.
 * @param common
 */
function solution(common) {
    if ( common[2] - common[1] === common[1] - common[0] ) {
        //마지막 값에 등차 값을 더해준다. 등차값 구하는 것은 뒤에 값 - 앞에 값
        return common[common.length -1] + common[1] - common[0];
    } else {
        // 등비값은 뒤에 값 / 앞에 값
        return common[common.length -1] * (common[1] / common[0]);
    }

}