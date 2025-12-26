import { uintCV, principalCV } from '@stacks/transactions';
import { CONTRACT_ADDRESS, CONTRACT_NAME } from './stacks';

export const createDepositCall = (amount: number) => ({
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: 'deposit',
    functionArgs: [uintCV(amount)],
});

export const createWithdrawCall = (amount: number, recipient: string) => ({
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: 'withdraw',
    functionArgs: [uintCV(amount), principalCV(recipient)],
});
