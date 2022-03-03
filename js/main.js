/* 名前チェック関数 */
function checkFullName(fname) {
    if(!fname) alert('お名前を入力してください！');
    else {
        fname.match(/^[^\x20-\x7e]*$/) ?
        console.log(`正しい形式のお名前です：${fname}`) :
        alert(`お名前の形式が無効です：${fname}`);
    }
}


/* メールアドレスチェック関数 */
function checkEmail(email) {
    if(!email) alert('メールアドレスを入力してください！');
    else {
        email.match(/^[a-z0-9_.+-]+@([a-z0-9][a-z0-9-]*[a-z0-9]+\.)+[a-z]{2,}$/) ?
        console.log(`正しい形式のメールアドレスです：${email}`) :
        alert(`メールアドレスの形式が無効です：${email}`);
    }
}

/* 郵便番号チェック関数 */
// function checkZipcode(zcode) {
//     if(!zcode) alert('お問い合わせ内容を入力してください！');
//     else {
//         zcode.match(/^[^\x20-\x7e]*$/) ?
//         console.log(`正しい形式のお問い合わせ内容です：${zcode}`) :
//         alert(`お問い合わせ内容の形式が無効です：${zcode}`);
//     }
// }



/* onclickで呼び出される関数 */
function validate() {
    // お名前を取得して代入
    const fullName = document.getElementById('fullName').value;
    // 名前チェック関数に渡す
    checkFullName(fullName);

    // メールアドレスを取得して代入
    const email = document.getElementById('email').value;
    // メールアドレスチェック関数に渡す
    checkEmail(email);

    // 郵便番号を取得して代入
    // const zipCode = document.getElementById('zipCode').value;
    // 郵便番号チェック関数に渡す
    // checkZipcode(zipCode);

}