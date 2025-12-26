import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.0.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that user can deposit",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const wallet_1 = accounts.get("wallet_1")!;
        const block = chain.mineBlock([
            Tx.contractCall("conserve", "deposit", [types.uint(100)], wallet_1.address)
        ]);
        assertEquals(block.receipts.length, 1);
        assertEquals(block.height, 2);
    },
});

Clarinet.test({
    name: "Ensure that owner can withdraw",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get("deployer")!;
        const block = chain.mineBlock([
            Tx.contractCall("conserve", "withdraw", [types.uint(100), types.principal(deployer.address)], deployer.address)
        ]);
        // Expect error if balance is 0
        block.receipts[0].result.expectErr(types.uint(101)); // ERR_INVALID_AMOUNT
    },
});
