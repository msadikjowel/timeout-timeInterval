setInterval(() => {
    // console.log('hello')
}, 1000);
// 1 second পর পর hello আউটপুট দেখাবে। যতক্ষণ বন্ধ করা হয়নাই ততক্ষণ চলবে।

let second = 0;

const timeId = setInterval(() => {
    // second++; // ১ ১ করে বাড়তে থাকবে।
    // console.log(second) // এভাবে আউটপুট দেখলে ১ থেকে ১৬ পর্যন্ত চলবে।
    // console.log(second++) // এভাবে আউটপুট দেখলে ০ থেকে ১৫ পর্যন্ত চলবে। তবে আগের second++ লিখতে হবেনা।
    console.log(++second) // এভাবে আউটপুট দেখলে ১ থেকে ১৬ পর্যন্ত চলবে। তবে আগের second++ লিখতে হবেনা।
    if (second > 15) {
        clearInterval(timeId) // 1 1 করে বাড়তে থাকবে এবং যখনি কন্ডিশন ফিলআপ হবে তখন স্টপ হয়ে যাবে।
    }
}, 1000);