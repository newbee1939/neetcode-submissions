class Solution {
    climbStairs(n: number): number {
        // nが1のときは1通り、2のときは2通り（ベースケース）
        if (n <= 2) {
            return n;
        }

        let prev = 1; // 1つ前の段（i-2）までの上り方。初期値は1段目までの上り方
        let curr = 2; // 現在の段（i-1）までの上り方。初期値は2段目までの上り方

        for (let i = 3; i <= n; i++) {
            // 現在の段（next）までの上り方 = 直前2つの段までの上り方の和
            // 「3段目までのすべての道に『最後の1歩』を繋げても、道の本数は変わらない。
            // 2段目までのすべての道に『最後の2歩ジャンプ』を繋げても、道の本数は変わらない。
            // だから、手前の道の本数をそのまま足せば、4段目までの道の本数になる。」
            const next = prev + curr;
            prev = curr;
            curr = next;
        }

        return curr;
    }
}