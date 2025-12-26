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
